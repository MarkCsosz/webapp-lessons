//spagetti k�d / spaghetti code
window.onload= function () {
    numbers();
}

function random(min, max){
     return Math.floor(Math.random() * (max - min) + min);
}
//kiirat�s divekbe �s console-ba / write in the console and the divs
function write(nums){
    console.log(nums);
        for (var i=0; i<5; i++) {
        document.getElementById(i).innerHTML=nums[i];
    }
}
//a t���mb
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
    //write f�ggv�ny megh�v�sa a kiirat�shoz Calling to the write function
    write(nums);

}