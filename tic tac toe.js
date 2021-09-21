var turn;
var clickedaa = false;
var clickedab = false;
var clickedac = false;

var clickedba = false;
var clickedbb = false;
var clickedbc = false;

var clickedca = false;
var clickedcb = false;
var clickedcc = false;

function whosturn() {
	var options;
	document.querySelector('.modal').style.display = 'none';
	options = document.querySelector('.firstGo').value;
	if (options == 'cross') {
		turn = 'cross';
	} else if (options == 'circle') {
		turn = 'circle';
	}
}

document.querySelector('.done').addEventListener('click', whosturn);

document.querySelector('.aa').addEventListener('click', function() {
	if (turn == 'circle' && clickedaa == false) {
		document.querySelector('.circle').classList.remove('notsel');
		document.querySelector('.circle').classList.add('sel');
		turn = 'cross';
		clickedaa = true;
	} else if (turn == 'cross' && clickedaa == false) {
		document.querySelector('.cross').classList.remove('notsel');
		document.querySelector('.cross').classList.add('sel');
		turn = 'circle';
		clickedaa = true;
	}
});
document.querySelector('.ab').addEventListener('click', function() {
	if (turn == 'circle' && clickedab == false) {
		document.querySelector('.ab .circle').classList.remove('notsel');
		document.querySelector('.ab .circle').classList.add('sel');
		turn = 'cross';
		clickedab = true;
	} else if (turn == 'cross' && clickedab == false) {
		document.querySelector('.ab .cross').classList.remove('notsel');
		document.querySelector('.ab .cross').classList.add('sel');
		turn = 'circle';
		clickedab = true;
	}
});
document.querySelector('.ac').addEventListener('click', function() {
	if (turn == 'circle' && clickedac == false) {
		document.querySelector('.ac .circle').classList.remove('notsel');
		document.querySelector('.ac .circle').classList.add('sel');
		turn = 'cross';
		clickedac= true;
	} else if (turn == 'cross' && clickedac == false) {
		document.querySelector('.ac .cross').classList.remove('notsel');
		document.querySelector('.ac .cross').classList.add('sel');
		turn = 'circle';
		clickedac = true;
	}
});
document.querySelector('.ba').addEventListener('click', function() {
	if (turn == 'circle' && clickedba == false) {
		document.querySelector('.ba .circle').classList.remove('notsel');
		document.querySelector('.ba .circle').classList.add('sel');
		turn = 'cross';
		clickedba = true;
	} else if (turn == 'cross' && clickedba == false) {
		document.querySelector('.ba .cross').classList.remove('notsel');
		document.querySelector('.ba .cross').classList.add('sel');
		turn = 'circle';
		clickedba = true;
	}
});
document.querySelector('.bb').addEventListener('click', function() {
	if (turn == 'circle' && clickedbb == false) {
		document.querySelector('.bb .circle').classList.remove('notsel');
		document.querySelector('.bb .circle').classList.add('sel');
		turn = 'cross';
		clickedbb = true;
	} else if (turn == 'cross' && clickedbb == false) {
		document.querySelector('.bb .cross').classList.remove('notsel');
		document.querySelector('.bb .cross').classList.add('sel');
		turn = 'circle';
		clickedbb = true;
	}
});
document.querySelector('.bc').addEventListener('click', function() {
	if (turn == 'circle' && clickedbc == false) {
		document.querySelector('.bc .circle').classList.remove('notsel');
		document.querySelector('.bc .circle').classList.add('sel');
		turn = 'cross';
		clickedbc = true;
	} else if (turn == 'cross' && clickedbc == false) {
		document.querySelector('.bc .cross').classList.remove('notsel');
		document.querySelector('.bc .cross').classList.add('sel');
		turn = 'circle';
		clickedbc = true;
	}
});
document.querySelector('.ca').addEventListener('click', function() {
	if (turn == 'circle' && clickedca == false) {
		document.querySelector('.ca .circle').classList.remove('notsel');
		document.querySelector('.ca .circle').classList.add('sel');
		turn = 'cross';
		clickedca = true;
	} else if (turn == 'cross' && clickedca == false) {
		document.querySelector('.ca .cross').classList.remove('notsel');
		document.querySelector('.ca .cross').classList.add('sel');;
		turn = 'circle';
		clickedca = true
	}
});
document.querySelector('.cb').addEventListener('click', function() {
	if (turn == 'circle' && clickedcb == false) {
		document.querySelector('.cb .circle').classList.remove('notsel');
		document.querySelector('.cb .circle').classList.add('sel');
		turn = 'cross';
		clickedcb = true;
	} else if (turn == 'cross' && clickedcb == false) {
		document.querySelector('.cb .cross').classList.remove('notsel');
		document.querySelector('.cb .cross').classList.add('sel');
		turn = 'circle';
		clickedcb = true;
	}
});
document.querySelector('.cc').addEventListener('click', function() {
	if (turn == 'circle' && clickedcc == false) {
		document.querySelector('.cc .circle').classList.remove('notsel');
		document.querySelector('.cc .circle').classList.add('sel');
		turn = 'cross';
		clickedcc = true;
	} else if (turn == 'cross' && clickedcc == false) {
		document.querySelector('.cc .cross').classList.remove('notsel');
		document.querySelector('.cc .cross').classList.add('sel');
		turn = 'circle';
		clickedcc = true;
	}
});

var wallpaper = 'space';

document.querySelector('.cbackbtn').addEventListener('click', function() {
	if (wallpaper == 'me-made background 2') {
		document.querySelector('.boddy').style.backgroundImage = 'url(mclaren.jpg)';
		document.querySelector('.boddy').style.backgroundSize = '1550px';
		wallpaper = 'mclaren';
	} else if (wallpaper == 'mclaren') {
		document.querySelector('.boddy').style.backgroundImage = 'url(space.jfif)';
		document.querySelector('.boddy').style.backgroundSize = '1600px';
		wallpaper = 'space';
	} else if (wallpaper == 'space') {
		document.querySelector('.boddy').style.backgroundImage = 'url(blackandwhiteimage.jpg)';
		document.querySelector('.boddy').style.backgroundSize = '1200px';
		wallpaper = 'black and white image';
	} else if (wallpaper == 'black and white image') {
		document.querySelector('.boddy').style.backgroundImage = 'url(whitegreylines.jpg)';
		document.querySelector('.boddy').style.backgroundSize = '1500px';
		wallpaper = 'white and grey lines';
	} else if (wallpaper == 'white and grey lines') {
		document.querySelector('.boddy').style.backgroundImage = 'url(blurryview.webp)';
		document.querySelector('.boddy').style.backgroundSize = '1600px';
		wallpaper = 'blurry view';
	} else if (wallpaper == 'blurry view') {
		document.querySelector('.boddy').style.backgroundImage = 'url(blackwhitesquareimage.png)';
		document.querySelector('.boddy').style.backgroundSize = '170px';
		wallpaper = 'me-made background';
	} else if (wallpaper == 'me-made background') {
		document.querySelector('.boddy').style.backgroundImage = 'url(blackwhitelines.png)';
		document.querySelector('.boddy').style.backgroundSize = '1700px';
		wallpaper = 'me-made background 2';
	}
});

document.querySelector('.newGamebtn').addEventListener('click', function() {
	document.querySelector('.modal').style.display = 'block';
	//
	document.querySelector('.aa .cross').classList.remove('sel');
	document.querySelector('.aa .cross').classList.add('notsel');
	document.querySelector('.aa .circle').classList.remove('sel');
	document.querySelector('.aa .circle').classList.add('notsel');
	//
	document.querySelector('.ab .cross').classList.remove('sel');
	document.querySelector('.ab .cross').classList.add('notsel');
	document.querySelector('.ab .circle').classList.remove('sel');
	document.querySelector('.ab .circle').classList.add('notsel');
	//
	document.querySelector('.ac .cross').classList.remove('sel');
	document.querySelector('.ac .cross').classList.add('notsel');
	document.querySelector('.ac .circle').classList.remove('sel');
	document.querySelector('.ac .circle').classList.add('notsel');
	//
	document.querySelector('.ba .cross').classList.remove('sel');
	document.querySelector('.ba .cross').classList.add('notsel');
	document.querySelector('.ba .circle').classList.remove('sel');
	document.querySelector('.ba .circle').classList.add('notsel');
	//
	document.querySelector('.bb .cross').classList.remove('sel');
	document.querySelector('.bb .cross').classList.add('notsel');
	document.querySelector('.bb .circle').classList.remove('sel');
	document.querySelector('.bb .circle').classList.add('notsel');
	//
	document.querySelector('.bc .cross').classList.remove('sel');
	document.querySelector('.bc .cross').classList.add('notsel');
	document.querySelector('.bc .circle').classList.remove('sel');
	document.querySelector('.bc .circle').classList.add('notsel');
	//
	document.querySelector('.ca .cross').classList.remove('sel');
	document.querySelector('.ca .cross').classList.add('notsel');
	document.querySelector('.ca .circle').classList.remove('sel');
	document.querySelector('.ca .circle').classList.add('notsel');
	//
	document.querySelector('.cb .cross').classList.remove('sel');
	document.querySelector('.cb .cross').classList.add('notsel');
	document.querySelector('.cb .circle').classList.remove('sel');
	document.querySelector('.cb .circle').classList.add('notsel');
	//
	document.querySelector('.cc .cross').classList.remove('sel');
	document.querySelector('.cc .cross').classList.add('notsel');
	document.querySelector('.cc .circle').classList.remove('sel');
	document.querySelector('.cc .circle').classList.add('notsel');
	//
	clickedaa = false;
	clickedab = false;
	clickedac = false;
	//
	clickedba = false;
	clickedbb = false;
	clickedbc = false;
	//
	clickedca = false;
	clickedcb = false;
	clickedcc = false;
});

document.querySelector('.blue').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'blue';
	document.querySelector('.aa').style.borderTop = '2px solid blue';
	document.querySelector('.aa').style.borderLeft = '2px solid blue';
	document.querySelector('.ab').style.borderTop = '2px solid blue';
	document.querySelector('.ac').style.borderTop = '2px solid blue';
	document.querySelector('.ac').style.borderRight = '2px solid blue';

	document.querySelector('.ba').style.borderLeft = '2px solid blue';
	document.querySelector('.bc').style.borderRight = '2px solid blue';

	document.querySelector('.ca').style.borderBottom = '2px solid blue';
	document.querySelector('.ca').style.borderLeft = '2px solid blue';
	document.querySelector('.cb').style.borderBottom = '2px solid blue';
	document.querySelector('.cc').style.borderBottom = '2px solid blue';
	document.querySelector('.cc').style.borderRight = '2px solid blue';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem blue';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem blue';
	document.querySelector('.newGamebtn').style.borderColor = 'blue';
	document.querySelector('.cbackbtn').style.borderColor = 'blue';

	document.querySelector('.ptxt').style.color = 'blue';

	document.querySelector('.modal').style.borderColor = 'blue';
});
document.querySelector('.red').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'red';
	document.querySelector('.aa').style.borderTop = '2px solid red';
	document.querySelector('.aa').style.borderLeft = '2px solid red';
	document.querySelector('.ab').style.borderTop = '2px solid red';
	document.querySelector('.ac').style.borderTop = '2px solid red';
	document.querySelector('.ac').style.borderRight = '2px solid red';

	document.querySelector('.ba').style.borderLeft = '2px solid red';
	document.querySelector('.bc').style.borderRight = '2px solid red';

	document.querySelector('.ca').style.borderBottom = '2px solid red';
	document.querySelector('.ca').style.borderLeft = '2px solid red';
	document.querySelector('.cb').style.borderBottom = '2px solid red';
	document.querySelector('.cc').style.borderBottom = '2px solid red';
	document.querySelector('.cc').style.borderRight = '2px solid red';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem red';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem red';
	document.querySelector('.newGamebtn').style.borderColor = 'red';
	document.querySelector('.cbackbtn').style.borderColor = 'red';

	document.querySelector('.ptxt').style.color = 'red';

	document.querySelector('.modal').style.borderColor = 'red';
});
document.querySelector('.orange').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'orange';
	document.querySelector('.aa').style.borderTop = '2px solid orange';
	document.querySelector('.aa').style.borderLeft = '2px solid orange';
	document.querySelector('.ab').style.borderTop = '2px solid orange';
	document.querySelector('.ac').style.borderTop = '2px solid orange';
	document.querySelector('.ac').style.borderRight = '2px solid orange';

	document.querySelector('.ba').style.borderLeft = '2px solid orange';
	document.querySelector('.bc').style.borderRight = '2px solid orange';

	document.querySelector('.ca').style.borderBottom = '2px solid orange';
	document.querySelector('.ca').style.borderLeft = '2px solid orange';
	document.querySelector('.cb').style.borderBottom = '2px solid orange';
	document.querySelector('.cc').style.borderBottom = '2px solid orange';
	document.querySelector('.cc').style.borderRight = '2px solid orange';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem orange';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem orange';
	document.querySelector('.newGamebtn').style.borderColor = 'orange';
	document.querySelector('.cbackbtn').style.borderColor = 'orange';

	document.querySelector('.ptxt').style.color = 'orange';

	document.querySelector('.modal').style.borderColor = 'orange';
});
document.querySelector('.yellow').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'yellow';
	document.querySelector('.aa').style.borderTop = '2px solid yellow';
	document.querySelector('.aa').style.borderLeft = '2px solid yellow';
	document.querySelector('.ab').style.borderTop = '2px solid yellow';
	document.querySelector('.ac').style.borderTop = '2px solid yellow';
	document.querySelector('.ac').style.borderRight = '2px solid yellow';

	document.querySelector('.ba').style.borderLeft = '2px solid yellow';
	document.querySelector('.bc').style.borderRight = '2px solid yellow';

	document.querySelector('.ca').style.borderBottom = '2px solid yellow';
	document.querySelector('.ca').style.borderLeft = '2px solid yellow';
	document.querySelector('.cb').style.borderBottom = '2px solid yellow';
	document.querySelector('.cc').style.borderBottom = '2px solid yellow';
	document.querySelector('.cc').style.borderRight = '2px solid yellow';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem yellow';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem yellow';
	document.querySelector('.newGamebtn').style.borderColor = 'yellow';
	document.querySelector('.cbackbtn').style.borderColor = 'yellow';

	document.querySelector('.ptxt').style.color = 'yellow';

	document.querySelector('.modal').style.borderColor = 'yellow';
});
document.querySelector('.purple').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'purple';
	document.querySelector('.aa').style.borderTop = '2px solid purple';
	document.querySelector('.aa').style.borderLeft = '2px solid purple';
	document.querySelector('.ab').style.borderTop = '2px solid purple';
	document.querySelector('.ac').style.borderTop = '2px solid purple';
	document.querySelector('.ac').style.borderRight = '2px solid purple';

	document.querySelector('.ba').style.borderLeft = '2px solid purple';
	document.querySelector('.bc').style.borderRight = '2px solid purple';

	document.querySelector('.ca').style.borderBottom = '2px solid purple';
	document.querySelector('.ca').style.borderLeft = '2px solid purple';
	document.querySelector('.cb').style.borderBottom = '2px solid purple';
	document.querySelector('.cc').style.borderBottom = '2px solid purple';
	document.querySelector('.cc').style.borderRight = '2px solid purple';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem purple';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem purple';
	document.querySelector('.newGamebtn').style.borderColor = 'purple';
	document.querySelector('.cbackbtn').style.borderColor = 'purple';

	document.querySelector('.ptxt').style.color = 'purple';

	document.querySelector('.modal').style.borderColor = 'purple';
});
document.querySelector('.primary .cyan').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'cyan';
	document.querySelector('.aa').style.borderTop = '2px solid cyan';
	document.querySelector('.aa').style.borderLeft = '2px solid cyan';
	document.querySelector('.ab').style.borderTop = '2px solid cyan';
	document.querySelector('.ac').style.borderTop = '2px solid cyan';
	document.querySelector('.ac').style.borderRight = '2px solid cyan';

	document.querySelector('.ba').style.borderLeft = '2px solid cyan';
	document.querySelector('.bc').style.borderRight = '2px solid cyan';

	document.querySelector('.ca').style.borderBottom = '2px solid cyan';
	document.querySelector('.ca').style.borderLeft = '2px solid cyan';
	document.querySelector('.cb').style.borderBottom = '2px solid cyan';
	document.querySelector('.cc').style.borderBottom = '2px solid cyan';
	document.querySelector('.cc').style.borderRight = '2px solid cyan';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem cyan';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem cyan';
	document.querySelector('.newGamebtn').style.borderColor = 'cyan';
	document.querySelector('.cbackbtn').style.borderColor = 'cyan';

	document.querySelector('.ptxt').style.color = 'cyan';

	document.querySelector('.modal').style.borderColor = 'cyan';
});
document.querySelector('.green').addEventListener('click', function() {
	document.querySelector('.wholebox').style.backgroundColor = 'green';
	document.querySelector('.aa').style.borderTop = '2px solid green';
	document.querySelector('.aa').style.borderLeft = '2px solid green';
	document.querySelector('.ab').style.borderTop = '2px solid green';
	document.querySelector('.ac').style.borderTop = '2px solid green';
	document.querySelector('.ac').style.borderRight = '2px solid green';

	document.querySelector('.ba').style.borderLeft = '2px solid green';
	document.querySelector('.bc').style.borderRight = '2px solid green';

	document.querySelector('.ca').style.borderBottom = '2px solid green';
	document.querySelector('.ca').style.borderLeft = '2px solid green';
	document.querySelector('.cb').style.borderBottom = '2px solid green';
	document.querySelector('.cc').style.borderBottom = '2px solid green';
	document.querySelector('.cc').style.borderRight = '2px solid green';

	document.querySelector('.newGamebtn').style.boxShadow = '0 0 2rem green';
	document.querySelector('.cbackbtn').style.boxShadow = '0 0 2rem green';
	document.querySelector('.newGamebtn').style.borderColor = 'green';
	document.querySelector('.cbackbtn').style.borderColor = 'green';

	document.querySelector('.ptxt').style.color = 'green';

	document.querySelector('.modal').style.borderColor = 'green';
});

document.querySelector('.secondary .black').addEventListener('click', function() {
	document.querySelector('.newGamebtn').style.backgroundColor = 'black';
	document.querySelector('.newGamebtn').style.color = 'white';
	document.querySelector('.cbackbtn').style.backgroundColor = 'black';
	document.querySelector('.cbackbtn').style.color = 'white';
	document.querySelector('.modal').style.backgroundColor = 'black';
	document.querySelector('.firstGo').style.backgroundColor = 'black';
	document.querySelector('.done').style.backgroundColor = 'black';
	document.querySelector('.firstGo').style.color = 'white';
	document.querySelector('.done').style.color = 'white';
	document.querySelector('.firstGo').style.borderColor = 'white';
	document.querySelector('.done').style.borderColor = 'white';
	document.querySelector('.modal').style.color = 'white';

	document.querySelector('.stxt').style.color = 'black';

	document.querySelector('.wholebox').style.borderColor = 'black';

	document.querySelector('.wholebox').style.boxShadow = '0 0 6rem black';
});
document.querySelector('.secondary .white').addEventListener('click', function() {
	document.querySelector('.newGamebtn').style.backgroundColor = 'white';
	document.querySelector('.newGamebtn').style.color = 'black';
	document.querySelector('.cbackbtn').style.backgroundColor = 'white';
	document.querySelector('.cbackbtn').style.color = 'black';
	document.querySelector('.modal').style.backgroundColor = 'white';
	document.querySelector('.firstGo').style.backgroundColor = 'white';
	document.querySelector('.done').style.backgroundColor = 'white';
	document.querySelector('.firstGo').style.color = 'black';
	document.querySelector('.done').style.color = 'black';
	document.querySelector('.firstGo').style.borderColor = 'black';
	document.querySelector('.done').style.borderColor = 'black';
	document.querySelector('.modal').style.color = 'black';

	document.querySelector('.stxt').style.color = 'white';

	document.querySelector('.wholebox').style.borderColor = 'white';

	document.querySelector('.wholebox').style.boxShadow = '0 0 6rem white';
});
document.querySelector('.secondary .cyan').addEventListener('click', function() {
	document.querySelector('.newGamebtn').style.backgroundColor = 'cyan';
	document.querySelector('.newGamebtn').style.color = 'black';
	document.querySelector('.cbackbtn').style.backgroundColor = 'cyan';
	document.querySelector('.cbackbtn').style.color = 'black';
	document.querySelector('.modal').style.backgroundColor = 'cyan';
	document.querySelector('.firstGo').style.backgroundColor = 'cyan';
	document.querySelector('.done').style.backgroundColor = 'cyan';
	document.querySelector('.firstGo').style.color = 'black';
	document.querySelector('.done').style.color = 'black';
	document.querySelector('.firstGo').style.borderColor = 'black';
	document.querySelector('.done').style.borderColor = 'black';
	document.querySelector('.modal').style.color = 'black';

	document.querySelector('.stxt').style.color = 'cyan';

	document.querySelector('.wholebox').style.borderColor = 'cyan';

	document.querySelector('.wholebox').style.boxShadow = '0 0 6rem cyan';
});
document.querySelector('.secondary .darkred').addEventListener('click', function() {
	document.querySelector('.newGamebtn').style.backgroundColor = 'darkred';
	document.querySelector('.newGamebtn').style.color = 'white';
	document.querySelector('.cbackbtn').style.backgroundColor = 'darkred';
	document.querySelector('.cbackbtn').style.color = 'white';
	document.querySelector('.modal').style.backgroundColor = 'darkred';
	document.querySelector('.firstGo').style.backgroundColor = 'darkred';
	document.querySelector('.done').style.backgroundColor = 'darkred';
	document.querySelector('.firstGo').style.color = 'white';
	document.querySelector('.done').style.color = 'white';
	document.querySelector('.firstGo').style.borderColor = 'white';
	document.querySelector('.done').style.borderColor = 'white';
	document.querySelector('.modal').style.color = 'white';

	document.querySelector('.stxt').style.color = 'darkred';

	document.querySelector('.wholebox').style.borderColor = 'darkred';

	document.querySelector('.wholebox').style.boxShadow = '0 0 6rem darkred';
});