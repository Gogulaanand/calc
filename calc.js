var disp = document.getElementById("numbers_row"),
		arg1 = 0,
		arg2 = 0,
		inverse = false,
		actor;

function add_to_display(num){
	var new_num = document.createTextNode(num);
	disp.appendChild(new_num);
}

function clear_scr(){
	disp.textContent = '';
	disp.offsetHeight;
}

function operator(optr){
	actor = optr;
	arg1 = Number(disp.textContent);
	disp.textContent = '';
}

function negate(){
	console.log(disp.childNodes);
	if(!inverse){
		disp.prepend('-');
		inverse = true;
	}
	else{
		var new_text = (disp.textContent).replace('-','');
		disp.textContent = new_text;
		inverse = false;
	}
}

function eval(){
	var result;
	arg2 = Number(disp.textContent);
	console.log(typeof(arg1));
	console.log(typeof(arg2));
	if(actor == '*'){
		result = arg1*arg2;
	}
	else if(actor == '/'){
		result = arg1/arg2;
	}
	else if(actor == '+'){
		result = arg1+arg2;
	}
	else if(actor == '-'){
		result = arg1-arg2;
	}
	else if(actor == '%'){
		result = arg1%arg2;
	}
	disp.textContent = '';
	disp.appendChild(document.createTextNode(result));
}