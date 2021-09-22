let x=0,y=0;
function judge(value_c, value_h){
	scores=[]
	let count_c=0;
	let count_h=0;
	if(value_c==="Scissor" && value_h==="Paper"){
		count_c++;
	}
	if(value_c==="Stone" && value_h==="Scissor"){
		count_c++;
	}
	if(value_c==="Paper" && value_h==="Stone"){
		count_c++;
	}
	if(value_c==="Scissor" && value_h==="Stone"){
		count_h++;
	}
	if(value_c==="Stone" && value_h==="Paper"){
		count_h++;
	}
	if(value_c==="Paper" && value_h==="Scissor"){
		count_h++;
	}
	scores.push(count_c,count_h);
	return scores;
}


function result(){
	let f=document.form1;
	let p_c=document.getElementById("computer");
	let p_h=document.getElementById("human");
	let n= Math.random();
	let value_h=f.select.value;
	let value_c="";
	let s_c="Computer : ";
	let s_h="You : "+ value_h ;
	if(n>=0 && n<0.33){
		value_c="Stone";
	}
	if(n>=0.33 && n<0.66){
		value_c="Paper";
	}
	if(n>=0.66 && n<0.99){
		value_c="Scissor";
	}
	s_c+=value_c;
	p_c.innerHTML=s_c;
	p_h.innerHTML=s_h;
	let scores=[];
	scores=judge(value_c,value_h);
	return scores;
}

function game(){
	let score_c=document.getElementById("score_c");
	let score_h=document.getElementById("score_h");
	let button=document.getElementById("reset");
	let scores=[];
	let comment=document.getElementById("comment");
	button.style.visibility="hidden";
	scores=result();
	x+=scores[0];
	y+=scores[1];
	score_c.innerHTML=x;
	score_h.innerHTML=y;
	let flag=0;
	if(x===5 && y<5){
		comment.innerHTML="Sorry! you loose";
		flag=1;
	}
	else if(x<5 && y===5){
		comment.innerHTML="Congrats! you won";
		flag=1;
	}
	else if(x===5 && y===5){
		comment.innerHTML="It's a tie!";
		flag=1;
	}
	if(flag===1){
		button.style.visibility="visible";
	}
}

function func() {
	if(x>=5 || y>=5){
		return false;
	}
	else return game();
}
