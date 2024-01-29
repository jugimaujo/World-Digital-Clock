//// Code to create the cities and their times:
function City(name, time_zone)
{
    this.name = name;
    this.time_zone = time_zone;
}

cities = [
        brasilia = new City(eval(this), -3),
        london = new City(eval(this), 0),
        washington_DC = new City(eval(this), -5),
        ottawa = new City(eval(this), -5),
        vancouver = new City(eval(this), -8),
        tokyo = new City(eval(this), +9),
        paris = new City(eval(this), +1),
        moscow = new City(eval(this), +3),
        sydney = new City(eval(this), +11),
        seoul = new City(eval(this), +9)
];
////


//// Code to update the name of the selected city:
var cities_list = document.getElementById('cities');
cities_list_selected = cities_list.options[cities_list.selectedIndex].value;

cities_list.onchange = function()
{
    var value = cities_list.value;
    cities_list_selected = value;
}
////


//// Code to update time:
// Function to correct time zone according to the selected city
function correct_time_zone(city_object)
{
    date = new Date();

    correct_hours = date.getUTCHours() + city_object.time_zone;
    if (correct_hours < 0)
    {
        correct_hours += 24;
    }
    if (correct_hours > 23)
    {
        correct_hours -= 24;
    }

    return correct_hours;
}

function getHours()
{
    const clock = document.getElementById('clock');

    var hours = correct_time_zone(eval(cities_list_selected));
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours < 10 ? `0${hours}` : hours;
    var minute = minutes < 10 ? `0${minutes}` : minutes;
    var second = seconds < 10 ? `0${seconds}` : seconds;

    clock.innerHTML = `${hour}:${minute}:${second}`;
}

getHours();
setInterval(function(){
    getHours()
}, 1000);
////
