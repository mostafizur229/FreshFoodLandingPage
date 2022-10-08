

document.addEventListener("DOMContentloaded",()=>{
function counter (id, start, end, duration){
    let obj= document.getElementById (id),
    current=start,
    range =end-start,
    increment= end > start? 1: -1,
    step=math.abs(math.floor(duration/range)),
    timer=setInterval(() => {current += increment;
        Object.textContent=current;
        if(current== end){
            clearInterval(timer);
        }
        
    }, stop);
    counter("count1",0,128,3000);
    counter("count2",100,500,2500);
    counter("count3",0,484,4541);
    counter("count4",0,580,3000);
}
});

