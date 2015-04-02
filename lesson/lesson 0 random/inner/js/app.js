//spagetti kód / spaghetti code
window.onload= function () {
    numbers();
}

function random(min, max){
     return Math.floor(Math.random() * (max - min) + min);
}
//kiiratás divekbe és console-ba / write in the console and the divs
function write(nums){
    console.log(nums);
        for (var i=0; i<5; i++) {
        document.getElementById(i).innerHTML=nums[i];
    }
}
//a tööömb
function numbers(){
    var nums=[];
    nums[0]=random(1,6);
    for(var i=1; i<5; i++){
        do{
                nums[i]=random(1,6);
                var egyenlo=false;
                for(var j=0; j<i; j++){
                    if (nums[j]==nums[i]) {
                        console.log("igen");
                        egyenlo=true;
                    }                       
                }
          }
        while(egyenlo == true);
    }
    //write függvény meghívása a kiiratáshoz Calling to the write function
    write(nums);

}