let houres1=document.getElementById("houres")
let minutes1=document.getElementById("minutes")
let seconds1=document.getElementById("seconds")
let ampm=document.getElementById("ampm")


function updateclock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="am"

   if(h > 12){
    h = h - 12;
}


    houres1.innerText=h
    minutes1.innerText=m
    seconds1.innerText=s

    setInterval(() => {
        updateclock()
    }, 1000);

}
updateclock()