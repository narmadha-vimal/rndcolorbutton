    function Generatecolor()
    {
    const chars='0123456789ABCDEF';
    let rndclr="#";
    for(let index=1; index<=8; index++){
    const rndpos = Math.floor(Math.random() * chars.length);
    rndclr += chars.charAt(rndpos); 
    } 
    console.log(rndclr);
}

const Generatebtn = document.querySelector("button");
Generatebtn.addEventListener("click",Generatecolor);


   