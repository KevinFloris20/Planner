// src="luxon.js"
src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
src = "https://cdn.polyfill.io/v3/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc,Math.sign,Object.is"

//the vArs
var day = {
    time: "",
    event: ""
}
var now = 0;
var year = 0;
var month = 0;
var day = "0";
var hour = 0;
var minute = 0;
var second = 0;
var x = "";
var y = 0;
var dayplan = new Array(31);
var localstore = "";
var store = 0;
var htmlday = '';
var eventday = 0;



//tiny clock
function getDateTime() {
    now = new Date();
    year = now.getFullYear();
    month = now.getMonth() + 1;
    day = now.getDate();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}
setInterval(function () {
    currentTime = getDateTime();
    if (year != 2021) {
        document.getElementById("2day").innerHTML = "outdated calandar"
    }
    else {
        document.getElementById("2day").innerHTML = currentTime;
    }

}, 1000);

//find out other days 
setInterval(function () {

    if (month === '01') {
        $("#current-month").html('January<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {

                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '02') {
        $("#current-month").html('Febuary<br>2021');
        if (y < 28) {
            for (var i = 1; i < 29; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '03') {
        $("#current-month").html('March<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '04') {
        $("#current-month").html('April<br>2021');
        if (y < 30) {
            for (var i = 1; i < 31; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '05') {
        $("#current-month").html('May<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '06') {
        $("#current-month").html('June<br>2021');
        if (y < 30) {
            for (var i = 1; i < 31; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '07') {
        $("#current-month").html('July<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '08') {
        $("#current-month").html('August<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '09') {
        $("#current-month").html('September<br>2021');
        if (y < 30) {
            for (var i = 1; i < 31; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '10') {
        $("#current-month").html('October<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '11') {
        $("#current-month").html('November<br>2021');
        if (y < 30) {
            for (var i = 1; i < 31; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
    if (month === '12') {
        $("#current-month").html('December<br>2021');
        if (y < 31) {
            for (var i = 1; i < 32; i++) {
                if (i == day) {
                    x = x + "<li " + 'id="today" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "today";

                }
                else if (i < day) {
                    x = x + "<li " + 'id="yesterday">' + i + "</li>"
                }
                else {
                    x = x + "<li " + 'id="tomorrow" onclick="eventday='+ i +', plan()">' + i + "</li>"
                    dayplan[i] = "tomorrow" + i;
                    console.log(dayplan[i - 1]);
                }
                y++;
            }
            $(".days").html(x);
        }
    }
}, 1000);

//take input/show input
function plan(){
    //ifs
    function ifs(){
    var day2 = eventday.toString().charAt(day.length-1);
    if(day2 === 1){
        eventday = eventday + "st";
    }
    else if(day2 === 2){
        eventday = eventday + "nd";
    }
    else if(day2 === 3){
        eventday = eventday + "rd";
    }
    else{
        eventday = eventday + "th";
    }
    }
    ifs();
    
    //time blocks
    var html = '<p1>Enter new events for the '+ eventday +':<br><input id="text9" class="text" value="9:00am:"></input><br><input id="text10" class="text" value="10:00am:"></input><br><input id="text11" class="text" value="11:00am:"></input><br><input id="text12" class="text" value="12:00pm:"></input><br><input id="text1" class="text" value="1:00pm:"></input><br><input id="text2" class="text" value="2:00pm:"></input><br><input id="text3" class="text" value="3:00pm:"></input><br><input id="text4" class="text" value="4:00pm:"></input><br><input id="text5" class="text" value="5:00pm:"></input><br><input type="button" id="save" value ="save" style="color: blue" /></p1>';
    document.getElementById("planner").innerHTML = html;
    var buttonfunction = document.getElementById("save");
    buttonfunction.addEventListener("click", saveinput);
}

//central storage
function saveinput(){
    for(var i = 1; i < 6; i++){
        var id = "text" + i;
        var d;
        console.log(id);
        var d = document.getElementById(id).value;
        console.log(d);
        //make sure we dont save the time stamps
        switch(d) {
            case "1:00pm:":
                break;
            case "2:00pm:":
                break;
            case "3:00pm:": 
                break;
            case "4:00pm:": 
                break;
            case "5:00pm:": 
                break;
            case "9:00am:": 
                break;
            case "10:00am:": 
                break;
            case "11:00am:": 
                break;
            case "12:00pm:": 
                break;
            default:
                localstore = localstore + "<br>" + month + " " + eventday + " " + d;
                break;
        }
    }
    for(var i = 9; i < 13 ; i++){
        var id = "text" + i;
        var d;
        console.log(id);
        var d = document.getElementById(id).value;
        console.log(d);
        //make sure we dont save the time stamps... again
            switch(d) {
                case "1:00pm:":
                    break;
                case "2:00pm:":
                    break;
                case "3:00pm:": 
                    break;
                case "4:00pm:": 
                    break;
                case "5:00pm:": 
                    break;
                case "9:00am:": 
                    break;
                case "10:00am:": 
                    break;
                case "11:00am:": 
                    break;
                case "12:00pm:": 
                    break;
                default:
                    localstore = localstore + "<br>" + month + " " + eventday + " " + d;
                    break;
            }
    }
    //set and get local storage
    console.log(localstore);
    localStorage.setItem("input", localstore);
    document.getElementById("savee").innerHTML = localStorage.getItem("input");
    
}


// ignore this lmao
// function getweather(){
// $.ajax({
//     type: "GET", 
//     url: "http://api.openweathermap.org/data/2.5/weather?q=parsippany&appid=0013900bdb5821e8627c8eccc8185316",
//     dataType: "json",
//     success: function(data){
//         console.log(data.timezone);
//     }
// });
// }
// getweather();
//0013900bdb5821e8627c8eccc8185316