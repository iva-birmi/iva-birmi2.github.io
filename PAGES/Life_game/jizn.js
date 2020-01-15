let canva = document.getElementById('canva');
let ctx = canva.getContext('2d');
let mas = [];
let row = 60;
let col = 60;
let count = 0;
let timer;

canva.onclick = function(event)
{
	let x = event.offsetX;
	let y = event.offsetY;
	x = Math.floor(x/10);
	y = Math.floor(y/10);
	mas[x][y] = 1;
	drawField();
}
function goLife() {
	for (let i = 0; i < row; i++) {
		mas[i] = [];
		for (let j = 0; j < col; j++) {
			mas[i][j] = 0;
		}
	}
}
function drawField() {
	ctx.clearRect(0, 0, 600, 600);
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if(mas[j][i] == 1)
			{
				ctx.fillRect(j*10, i*10, 10, 10);
			}
		}
	}
}
goLife();
function startLife()
{

	let masL=[];
	for(let i=0;i<row;i++)
	{
		//alert(i);
		masL[i]=[];
		for(let j=0;j<col;j++)
		{
			//посчитать количество соседей+краевые условия
			let neighbors =0;
			//верхняя граница
			//alert(masL[59][0])
			if(mas[fpm(i)-1][j]==1) neighbors++;
			//правая граница
			if(mas[i][fpp(j)+1]==1) neighbors++;
			//нижня граница
			if(mas[fpp(i)+1][j]==1) neighbors++;
			//слева
			if(mas[i][fpm(j)-1]==1) neighbors++;
			//условия по диагонали
			//право вверх
			if(mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
			//вправо вниз
			if(mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
			//влево вниз
			if(mas[fpp(i)+1][fpm(j)-11]==1) neighbors++;
			//влево вверх
			if(mas[fpm(i)-1][fpm(j)-1]==1) neighbors++;
			//если соседий 2 или 3
			(neighbors==2 || neighbors==3)? masL[i][j]=1:masL[i][j]=0;
		}
	}
	//перерисовка игрового поля
	mas=masL;
	drawField();
	count++;
	document.getElementById('count').innerHTML=count;
	timer = setTimeout(startLife,300);
}
//функция выхода за пределы поля
//за верхнюю границу
function fpm(i)
{

	if(i==0) return 60;
	else return i;
}
//за правую границу
function fpp(i)
{
	if(i==59) return -1;
	else return i;
}
document.getElementById('start').onclick = startLife;