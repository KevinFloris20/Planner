// src="luxon.js"
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
src="https://cdn.polyfill.io/v3/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc,Math.sign,Object.is"
window.onload=function(){
//the vArs
var day = {
    time: "",
    event: ""
}
var now = 0;
var year = 0;
var month = 0;
var day = 0;
var hour = 0;
var minute = 0;
var second = 0;
var x = "";
var y = 0;
var dayplan = new Array(31);

//tiny clock
function getDateTime() {
    now = new Date(); 
    year = now.getFullYear();
    month = now.getMonth()+1; 
    day = now.getDate();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+ month;
    }
    if(day.toString().length == 1) {
         day = '0'+ day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+ hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+ minute;
    }
    if(second.toString().length == 1) {
         second = '0'+ second;
    }   
    var dateTime = month+'/'+day+'/'+year+' '+hour+':'+minute+':'+second;   
     return dateTime;
}
setInterval(function(){
    currentTime = getDateTime();
    if(year != 2021){
        document.getElementById("2day").innerHTML = "outdated calandar"
    }
    else{
        document.getElementById("2day").innerHTML = currentTime;
    }
    
}, 1000);

//find out other days 
setInterval(function(){
    
if(month === '01'){
    $("#current-month").html('January<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            
            if(i==day){
                x = x + "<li "+ 'id="today" onclick="plan()">' + i +"</li>"
                dayplan[i] = "today";
                
            }
            else if(i < day){
                x = x + "<li "+ 'id="yesterday">' + i +"</li>"
            }
            else{
                x = x + "<li "+ 'id="tomorrow" onclick="plan()"'+ i +'>' + i +"</li>"
                dayplan[i] = "tomorrow"+ i;
                console.log(dayplan[i - 1]);
            }
            y++;
        }
        $(".days").html(x);
    }  
}
if(month === '02'){
    $("#current-month").html('Febuary<br>2021');
    if(y < 28){
        for(var i = 1;i < 29; i++){
            x = x + "<li>" + i +"</li>";  
            y++ 
        }
        $(".days").html(x);
    }  
}
if(month === '03'){
    $("#current-month").html('March<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>";
            y++   
        }
        $(".days").html(x);
    }  
}
if(month === '04'){
    $("#current-month").html('April<br>2021');
    if(y < 30){
        for(var i = 1;i < 31; i++){
            x = x + "<li>" + i +"</li>"; 
            y++;  
        }
        $(".days").html(x);
    }  
}
if(month === '05'){
    $("#current-month").html('May<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>";   
            y++;
        }
        $(".days").html(x);
    }  
}
if(month === '06'){
    $("#current-month").html('June<br>2021');
    if(y < 30){
        for(var i = 1;i < 31; i++){
            x = x + "<li>" + i +"</li>"; 
            y++;  
        }
        $(".days").html(x);
    }  
}
if(month === '07'){
    $("#current-month").html('July<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>"; 
            y++;  
        }
        $(".days").html(x);
    }  
}
if(month === '08'){
    $("#current-month").html('August<br>2021');    
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>";   
            y++;
        }
        $(".days").html(x);
    }  
}
if(month === '09'){
    $("#current-month").html('September<br>2021');
    if(y < 30){
        for(var i = 1;i < 31; i++){
            x = x + "<li>" + i +"</li>"; 
            y++;  
        }
        $(".days").html(x);
    }
}
if(month === '10'){
    $("#current-month").html('October<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>";
            y++;   
        }
        $(".days").html(x);
    }  
}
if(month === '11'){
    $("#current-month").html('November<br>2021');
    if(y < 30){
        for(var i = 1;i < 31; i++){
            x = x + "<li>" + i +"</li>";
            y++;   
        }
        $(".days").html(x);
    }
}
if(month === '12'){
    $("#current-month").html('December<br>2021');
    if(y < 31){
        for(var i = 1;i < 32; i++){
            x = x + "<li>" + i +"</li>";   
            y++;
        }
        $(".days").html(x);
    }  
}
}, 1000);

//take input/show input
function tuqa(){
    localStorage.setItem("text")
    document.getElementById("#savee").innerHTML = localStorage.getitem("text");
}
 
//---------------------------------------NOT FINISHED YET
//---------------------------------------NOT FINISHED YET
//sorry
window.onload =
    function plan(){
        var html = '<p1>Enter new events here:<br><textarea id="text"></textarea><br><input type="button" id="save" value ="save" style="color: blue" onclick = "tuqa">';
        document.getElementById("planer").innerHTML = html;
        console.log(tuqa);
    
    }
    plan();


//central storage

}