let num=2;
let exit=0;
for (let x=0;x < num; x++){
    if (x===0){
        exit='*';
    }else{
        exit=exit+'*';    
    }           
}
for(let y=0; y<num; y++){
    console.log(exit); 
}
