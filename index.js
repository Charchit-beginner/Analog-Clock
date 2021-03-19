function rotate(){
    hour = document.getElementById("hour")
    min = document.getElementById("min")
    sec = document.getElementById("sec")
    var x = new Date()
    document.getElementById("time").innerText = `${x.getHours()} : ${x.getMinutes()} : ${x.getSeconds()}`
    // console.log(x.getSeconds(),"second");
    sec.style.transform = `rotate(${x.getSeconds()*6}deg)` 
    // console.log(x.getMinutes(),"min");
    min.style.transform = `rotate(${x.getMinutes()*6}deg)` 
    // console.log(x.getHours(),"hour");
    hour.style.transform = `rotate(${(x.getHours()*1/120 )* x.getHours()}deg)` 
    hour.style.transform = `rotate(${x.getHours()*30 + x.getMinutes()/1/2}deg)`
    // console.log(`rotate(${x.getMinutes()*6}deg)`)
    console.log(hour.style.transform);
    console.log(min.style.transform);
    console.log(sec.style.transform);
    console.log(x.getHours()*30);
}
setInterval(rotate,1000)