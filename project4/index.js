const form =document.querySelector('form');

form.addEventListener('submit',(e)=>{
     e.preventDefault();
    const Boy=document.getElementById("Boy").value;
    const Girl=document.getElementById("Girl").value;

    const l1=Boy.length;
    const l2=Girl.length;

    const love= Math.pow(l1+l2,3)%101;

    document.getElementById('result').textContent=`${Boy} and ${Girl} love ${love}%`;
    form.reset();
})