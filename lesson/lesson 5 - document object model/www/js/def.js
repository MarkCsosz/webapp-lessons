document.addEventListener("DOMContentLoaded", function(event) {
	var myElem = "magicButton";
	domReady(egy, ketto, harom, negy, byId(myElem));
	console.log(document.readyState);
});



function byId(mElem) {
	var match = document.getElementById(mElem);
	console.log(match);
	return match;
}

function domReady() {
	var x;
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] instanceof Function) {
			arguments[i]();
		}
	}

	(function() {
		 x = document.getElementById("magicButton");
		console.log(x);
	})();
	getPrototypeChain(x);
	x.innerText="FÁÁSZOOOO";
	x.style.background= "rgb(26,255,0)";
	x.style.color="red";
	x.style.fontFamily = "Impact";
	x.style.borderStyle= "groove ";
	x.style.padding=30+"px";
	x.className = x.className + " oszt1";
	x.className = x.className + " oszt2";
	x.className = x.className + " oszt3";
	x.style.visibility ="hidden";
	x.style.visibility ="visible";
	x.style.backgroundImage = "url('img/logo.PNG')";
	var cln = x.cloneNode(true);
	var cln1 = x.cloneNode(true);
	var cln2 = x.cloneNode(true);
    document.getElementById("content").appendChild(cln);
    document.getElementById("content").appendChild(cln1);
    document.getElementById("content").appendChild(cln2);
	cln1.style.color="yellow";
	cln2.style.color="blue";

	cln1.innerText="TRAKTOO231231231";
	var parag = document.body.querySelectorAll('p');
	[].forEach.call(parag, function(p) {
  // do whatever
  p.style.color = "red";
});
	parag[1].style.background= "rgb(26,255,0)";
}


function egy() {
	console.log("elso fggveny");
}

function ketto() {
	console.log("masodik fuggbefy");
}

function harom() {
	console.log("harmadik fuggveny");
}

function negy() {
	console.log("negyedig fgveny");
}
function getPrototypeChain(obj) {
    var objTemp = [];
    var temp = "";
    do {

        obj = Object.getPrototypeOf(obj);
        //  console.log(obj);
        if (obj != null) {
            temp = obj;
            objTemp.push(temp);
        } else {
            objTemp.push("null");
        }



    }
    while (obj != null);
    console.log(objTemp);

}