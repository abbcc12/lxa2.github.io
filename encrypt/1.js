var mode="de";
chMode("en");
generatePrivateKey();
function amode(a){
	if (mode=="de"&&a==1) {
		chMode("en");
	}
	if (mode=="en"&&a==2){
		chMode("de");
	}
}
function chMode(a){
	if (a=="en") {
		mode="en";
		console.log("en")
		document.getElementById("pcli1").style.backgroundColor="#ff0000";
		document.getElementById("pcli2").style.backgroundColor="#ff000000";
	}
	if (a=="de") {
		mode="de";
		console.log("de")
		document.getElementById("pcli1").style.backgroundColor="#ff000000";
		document.getElementById("pcli2").style.backgroundColor="#ff0000";
	}
}
function pcCopy1() {
  var copyText = document.getElementById("pcPubKeyCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
}
function toUnicode(theString) {
  var unicodeString = '';
  for (var i = 0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i).toString(16);
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    unicodeString += theUnicode;
  }
  return unicodeString;
}
function randomNum(min,max){ 
    // switch(arguments.length){ 
    //     case 1: 
    //         return parseInt(Math.random()*minNum+1,10); 
    //     	break; 
    //     case 2: 
    //         return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    //     	break; 
    //     default: 
    //     return 0; 
    //     	break; 
    // } 
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 
var p,q,n,n2,e,d;
function generatePrivateKey(){
	var i=randomNum(1000,9999);
	while ((i/2)%1===0||(i/3)===0||(i/5)===0||(i/7)===0){i=randomNum(1000,9999);}
	p=i;
	var i=randomNum(1000,9999);
	while ((i/2)%1===0||i==p||(i/3)===0||(i/5)===0||(i/7)===0){i=randomNum(1000,9999);}
	q=i;
	n=p*q;
	n2=(p-1)*(q-1);


	console.log(`p:"${p}",q:"${q}",n:${n},φn:${n2},e:${e},d:${d};`);
}



































































var a2=0;
function generatePrivateKey_nonono(){
	var ua=navigator.userAgent;
	var a1=toUnicode(ua);
	// if (a1.length>=188){
	// 	a1=a1.substring(60,188);
	// }
	// else{
	// 	while (a1.length<188) {
	// 		a1=a1+a1;
	// 	}
	// 	a1=a1.substring(60,188);
	// }
	a2=0;
	while (a2==0){
		a2=Math.floor((new Date().getTime()*new Date().getSeconds()+Math.sqrt(new Date().getSeconds()*new Date().getMinutes()))*100);
	}
	console.log(a2.length);
	for (var i = 0; i < a2.length; i++) {
		console.log(a2[i]);
	}
	
	
	
	
	
	
	
	
	console.log(a1);
	document.getElementById("pcPubKeyCopy").value=a1;
}

