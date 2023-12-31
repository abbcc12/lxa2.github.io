.title{

	margin: auto;
	text-align: center;
	width: 100%;
	font-size: 15em;
	z-index:99999;
	position:fixed;
	pointer-events:none;
	animation:a3 3s;
	animation-iteration-count:infinite;
}


@keyframes a{	from {font-size: 500em;}
	to {font-size: 20em;}
}
@keyframes a2{
	from {font-size: 500em;}
	to {font-size: 15em;}
}
@keyframes a3{
	0%{
		opacity:0%;
		color:black;
	}
	10%{
		color:red;
	}
	20%{
		color:green;
	}
	30%{
		color:blue;
	}
	40%{
		color:white;
	}
	50%{
		opacity:100%;
		color:white;
	}
	60%{
		color:red;
	}
	70%{
		color:green;
	}
	80%{
		color:blue;
	}
	90%{
		color:white;
	}
	100%{
		opacity:0%;
		color:black;
	}
}
.button{
	margin: auto;
	align-self: center;
	font-size: 8em;
}
