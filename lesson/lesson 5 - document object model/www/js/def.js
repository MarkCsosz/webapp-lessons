document.addEventListener("DOMContentLoaded", function(event) {
	var myElem = "magicButton";
	domReady(egy, ketto, harom, negy, byId(myElem));
	console.log(document.readyState);
});
domReady(
	"I will not be called because I am not a function", ["neither", "this", "will", "be", "executed"], function() {
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
	x.innerText = "FÁÁSZOOOO";
	x.style.background = "rgb(26,255,0)";
	x.style.color = "red";
	x.style.fontFamily = "Impact";
	x.style.borderStyle = "groove ";
	x.style.padding = 30 + "px";
	x.className = x.className + " oszt1";
	x.className = x.className + " oszt2";
	x.className = x.className + " oszt3";
	x.style.visibility = "hidden";
	x.style.visibility = "visible";
	x.style.backgroundImage = "url('img/logo.PNG')";
	var cln = x.cloneNode(true);
	var cln1 = x.cloneNode(true);
	var cln2 = x.cloneNode(true);
	document.getElementById("content").appendChild(cln);
	document.getElementById("content").appendChild(cln1);
	document.getElementById("content").appendChild(cln2);
	cln1.style.color = "yellow";
	cln2.style.color = "blue";


	cln1.innerText = "TRAKTOO231231231";
	var parag = document.body.querySelectorAll('p');
	[].forEach.call(parag, function(p) {
		// do whatever
		p.style.color = "red";
	});
	var p = document.createElement("p");
	p.innerText = "fffffffffffffffffffffaaaaaaaaaaaaaaasz";
	p.style.color = "green";

	parag[1].style.background = "rgb(26,255,0)";
	parag[parag.length + 1] = p;
	parag.add(p);
	coloring(parag, p);
	console.log(parag);
	setDisplay(parag);
});


function byId(mElem) {
	var match = document.getElementById(mElem);
	console.log(match);
	return match;
}

function domReady() {
	// Save arguments.
	var callbackQueue = arguments;

	// Watch document ready state.
	document.addEventListener("readystatechange", function(e) {
		// In "interactive" state, the DOM can be safely manipulated.
		// "complete" state equals to the DOMContentLoaded event.
		if (e.target.readyState == "interactive") {
			// Check each argument
			for (var i = 0; i < callbackQueue.length; ++i) {
				// If the argument is callable, execute it!
				if (callbackQueue[i] instanceof Function) {
					callbackQueue[i]();
				}
			}
		}
	});
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

function hide(nodeList, bol) {
	for (var i = 0; i < nodeList.length; i++) {
		nodeList[i].style.visibility = "hidden";
		bol = false;
	}
}

function show(nodeList, bol) {
	for (var i = 0; i < nodeList.length; i++) {
		nodeList[i].style.visibility = "visible";
	}
}

function toggle(nodeList) {
	var bol = true;
	if (bol == true) {
		console.log("nem");
		hide(nodeList, bol);
	} else {
		show(nodeList, bol);
	}

}

function coloring(nodeList, node) {
	var color = node.style.color;
	for (var i = 0; i < nodeList.length; i++) {
		nodeList[i].style.color = color;
	}
}
NodeList.prototype.add = function(node) {
	console.log("--------------!!!!!!!!!!!!-----------------------");
	document.getElementById("content").appendChild(node);
}
NodeList.prototype.hide = function() {
	for (var i = 0; i < this.length; i++) {
		this[i].style.display = "none";
	}
}

function setDisplay(nodeList) {
	for (var i = 0; i < nodeList.length; i++) {
		nodeList[i].style.display = "block";
	}
}
NodeList.prototype.show = function() {
	for (var i = 0; i < this.length; i++) {
		this[i].style.display = "block";
	}
}
NodeList.prototype.toggle = function() {
	if (this[0].style.display == "block") {
		this.hide();
	} else {
		this.show();
	}
}