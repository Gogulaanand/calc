var disp1 = document.getElementById("numbers_row2");
var disp2 = document.getElementById("numbers_row1");

function add_to_display(num){
	var new_num = document.createTextNode(num);
	disp1.appendChild(new_num);
}

function clear_scr(){
	disp1.textContent = '';
}

function operator(optr){
	disp2.appendChild(disp1.innerHTML);
	disp1.textContent = '';
}