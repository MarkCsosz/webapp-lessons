window.onload = function() {
    var lotteryNum = [];
    var yourNumbers = [];
    var equalNum = [];
    var hit=0;
    numbers(lotteryNum);
    promtNumber(yourNumbers);
    write(lotteryNum, yourNumbers);
    comporate(lotteryNum, yourNumbers, equalNum, hit);
    console.log(hit);
}
//prompt numbers from the user

function promtNumber(ynum) {
    for (var i = 0; i < 5; i++) {
        do {
            ynum[i] = prompt(i + 1 + " szám amit tippelsz");
            var equal = false;
                        for (var j = 0; j < i; j++) {
                if (ynum[i] == ynum[j]) {
                    equal = true;
                }
            }
        }
        while (ynum[i] < 1 || ynum[i] > 90 || isFinite(ynum[i]) == false||equal ==true)
    }
    ynum.sort(sortNumber);
    console.log(ynum);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//function for lottery numbers

function numbers(num) {
    num[0] = random(1, 91);
    for (var i = 1; i < 5; i++) {
        do {
            num[i] = random(1, 91);
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
//write function
function write(num, ynum) {
    for (var i = 0; i < 5; i++) {
        document.getElementById(i).innerHTML = ynum[i];
    }
    for (var i = 0; i < 5; i++) {
        document.getElementById("1" + i).innerHTML = num[i];
    }
}
//comporating two array
function comporate(num, ynum, enums, hit){
    var k=0;
    for(var i=0; i<5; i++)
    {
        for(var j=0; j<5; j++)
        {
            if (num[i]==ynum[j]) {
                enums[k]=num[i];
                k++;
                document.getElementById("1"+i).style.backgroundColor = "green";
                
            }
        }
    }
    hit=k;
    console.log(enums);
    console.log("faszom  " + hit);
    reward(hit);
    
}
//reward
function reward (hit){
    switch (hit) {
        case 0:
            document.getElementById("won").innerHTML="<h2>gratulálok, 0-a találat, ön nyert egy faszt a szájába! ha siet, kettőt kap!</h2>";
            break;
        case 1:
            document.getElementById("won").innerHTML="<h2>gratulálok, 1-a találat, nyereménye egy lukas zokni!</h2>";
            break;
        case 2:
            document.getElementById("won").innerHTML="<h2>gratulálok, 2-a találat, kap egy kekszet!</h2>";
            break;
        case 3:
            document.getElementById("won").innerHTML="<h2>gratulálok, 3-a találat, na ez már valami!</h2>";
            break;
        case 4:
            document.getElementById("won").innerHTML="<h2>gratulálok, 4-a találat, INHUMÁN!</h2>";
            break;
        case 5:
            document.getElementById("won").innerHTML="<h1>gratulálok, 5-a találat, ISTEN VAGY</h1>";
            break;
    }
    
}

function sortNumber(a, b) {
    return a - b;
}