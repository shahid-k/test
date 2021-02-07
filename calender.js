
function conv(data) {

var d = new Date(data)
year=d.getFullYear()
month=d.getMonth()+1;
date=d.getDate();
hr=d.getHours();
min=d.getMinutes();

month-=3 // month april as start 
hr-=8; // day start at 8am
if(hr<0){
    hr=24+hr
    date=date-1
}

if(date<=0){
    date=30+date
    month=month-1
}

if(month<=0){
    month=12+month
    year=year-1
}

if(hr<=8 && hr>=20){
    date=date+1;
        
}
return {"year":year,"month":month,"date":date,"hr":hr}
    
}

console.log(conv(1609738200000));
console.log(conv(1585708200000));
console.log(conv(1619836199000));