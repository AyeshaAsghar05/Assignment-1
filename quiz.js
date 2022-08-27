Formula =  (X,y)=>{
    try{
alert(Math.pow(X,2)+5*y);
}
catch(error){
console.log("it is not working due to some error: "+error);
}
}
Formula(2,3);

