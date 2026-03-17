var count = 0;
function changeImage(){
	let displayImage = document.getElementById('ImageL')
	if(displayImage.src.match('./red_book.png')){
		displayImage.src = './open_red_book.png'
	} else {
		displayImage.src = './red_book.png'
	}

	count = count + 1;
	console.log(count)
	if(count == 1){
		alert("ไม่มีไรให้อ่านหรอก กดดูทำไม🤣")
	}else if(count == 2){
		alert("ก็รู็ว่า ไม่มีไรให้อ่าน จะกดอีกทำไม🤔")
	}else if(count == 3){
		alert("เเล้วจะกดอีกทำไม🤔")
	}else if(count == 4){
		alert("กดอีกละ🤨")
	}else if(count == 5){
		alert("คือต้องการไร😑")
	}else if(count == 6){
		alert("ไปกดปุ่ม PLAY นู้น🙄")
	}else if(count == 7){
		alert("คือไร😥")
	}else if(count == 8){
		alert("เล่นเกมกูเหอะ เเค่กดปุ่ม PLAY😥")
	}else if(count == 9){
		alert("เคร😔")
	}else if(count == 10){
		alert("เครเลย😔")
	}else if(count == 11){
		alert("เครเลยล่ะ😔")
	}else if(count == 12){
		alert("-")
	}else if(count == 13){
		alert("-")
	}else if(count == 14){
		alert("-")
	}else if(count == 15){
		alert("-")
	}else if(count == 16){
		alert("-")
	}else if(count == 17){
		alert("-")
	}else if(count == 18){
		alert("-")
	}else if(count == 19){
		alert("-")
	}else if(count == 20){
		alert("-")
	}else if(count == 21){
		alert("-")
	}else if(count == 22){
		alert("สนุกหรอ😩")
	}else if(count == 23){
		alert("สนุกมึงเเหละ😩")
	}else if(count == 24){
		alert("หยุดเถอะ😭")
	}else if(count == 25){
		alert("กูขอร้อง😭")
		displayImage.addEventListener('click', function(){
			this.style.display = 'none';
		})
	}else if(count == 26){
		alert("พอ จบ เลิก😡")
	}else{
		displayImage.addEventListener('click', function(){
			this.style.display = 'none';
		})
	}
}

function changeImageM(){
	let displayImage = document.getElementById('ImageM')
	if(displayImage.src.match('./red_book.png')){
		displayImage.src = './open_red_book.png'
	} else {
		displayImage.src = './red_book.png'
	}

	count = count + 1;
	console.log(count)
	if(count == 1){
		alert("ไม่มีไรให้อ่านหรอก กดดูทำไม🤣")
	}else if(count == 2){
		alert("ก็รู็ว่า ไม่มีไรให้อ่าน จะกดอีกทำไม🤔")
	}else if(count == 3){
		alert("เเล้วจะกดอีกทำไม🤔")
	}else if(count == 4){
		alert("กดอีกละ🤨")
	}else if(count == 5){
		alert("คือต้องการไร😑")
	}else if(count == 6){
		alert("ไปกดปุ่ม PLAY นู้น🙄")
	}else if(count == 7){
		alert("คือไร😥")
	}else if(count == 8){
		alert("เล่นเกมกูเหอะ เเค่กดปุ่ม PLAY😥")
	}else if(count == 9){
		alert("เคร😔")
	}else if(count == 10){
		alert("เครเลย😔")
	}else if(count == 11){
		alert("เครเลยล่ะ😔")
	}else if(count == 12){
		alert("-")
	}else if(count == 13){
		alert("-")
	}else if(count == 14){
		alert("-")
	}else if(count == 15){
		alert("-")
	}else if(count == 16){
		alert("-")
	}else if(count == 17){
		alert("-")
	}else if(count == 18){
		alert("-")
	}else if(count == 19){
		alert("-")
	}else if(count == 20){
		alert("-")
	}else if(count == 21){
		alert("-")
	}else if(count == 22){
		alert("สนุกหรอ😩")
	}else if(count == 23){
		alert("สนุกมึงเเหละ😩")
	}else if(count == 24){
		alert("หยุดเถอะ😭")
	}else if(count == 25){
		alert("กูขอร้อง😭")
		displayImage.addEventListener('click', function(){
			this.style.display = 'none';
		})
	}else if(count == 26){
		alert("พอ จบ เลิก😡")
	}else{
		displayImage.addEventListener('click', function(){
			this.style.display = 'none';
		})
	}
}

function changeCat(){
	let displayImage = document.getElementById("cat")
	if(displayImage.src.match('./play.gif')){
		displayImage.src = './nah.gif'
	} else {
		displayImage.src = './play.gif'
	}
}
