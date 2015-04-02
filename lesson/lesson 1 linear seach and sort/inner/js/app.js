window.onload = function() {
    var num = [];
    var yourNumber;
    numbers(num);
    youWrite(yourNumber, num);
}
//random Laci numbers

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//for creating an array, whit random numbers 1-15

function numbers(num) {
    num[0] = random(1, 15);
    for (var i = 1; i < 5; i++) {
        do {
            num[i] = random(1, 16);
            var equal = false;
            for (var j = 0; j < i; j++) {
                if (num[i] == num[j]) {
                    equal = true;
                }
            }

        }
        while (equal == true);
    }
    num.sort(sortNumber);
    console.log(num);


}
//linear seaching function with two params, the numbers and input number

function linearSearch(yourNumber, num) {
    var yes = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] == yourNumber) {
            document.getElementById(i).style.backgroundColor = "green";

            yes = true;
        }

    }
    if (yes == true) {
        document.getElementById("your").innerHTML = "<h3>a te számod: " + yourNumber + "<p> vagyis nyertél</p>";
        write(num);
    } else {
        document.getElementById("your").innerHTML = "<h3>a te számod: " + yourNumber + "<p> vagyis vesztettél</p>";
        write(num);
    }
}
//when you write, the seach is beginning

function youWrite(yourNumber, num) {
    yourNumber = prompt("aggyámegegyszámot 1-15 között ami lehet 1 is és 15 is");
    if (isFinite(yourNumber)) {
        if (yourNumber > 0 || yourNumber < 16) {
            linearSearch(yourNumber, num);
        } else {
            yourNumber = prompt("Mondombazdmeg 1 és 15 között");
        }
    } else {
        yourNumber = prompt("Mondombazdmeg szám");
    }

}
//write the array to the html

function write(num) {
    for (var i = 0; i < 5; i++) {
        document.getElementById(i).innerHTML = num[i];
    }
}
function sortNumber(a,b) {
    return a - b;
}