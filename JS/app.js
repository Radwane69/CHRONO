let deadline = new Date("mar 11, 20222 15:09:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let t = deadline - now;
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("Heures").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("Secondes").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("Heures").innerHTML = '0';
        document.getElementById("minutes").innerHTML = '0';
        document.getElementById("Secondes").innerHTML = '0';
    }
}, 1000);