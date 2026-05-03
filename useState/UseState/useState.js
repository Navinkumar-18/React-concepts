function useState(){
 let num;

 function update(val){
    num=val;
 }

 return [num, update];
}
 console.log(useState());