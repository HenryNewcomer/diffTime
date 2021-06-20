/***************************************
 * Author: Henry Newcomer              *
 **************************************/

/* TODO Add namespace */

function main() {
    console.log("diffTime src/js/init.js loaded.");
}

function calcDiff() {
    getDiff();
}

function convertTimeToSeconds(hh_mm_ss = "00:00:00") {
    let total_seconds = 0;
    const split_time = hh_mm_ss.split(':');
    let hh = 0;
    let mm = 0;
    let ss = 0;

    hh = split_time[0];
    mm = split_time[1];
    /* TODO Check if seconds were passed or not (if not, set to 00 secs) */
    ss = split_time[2];

    console.log(" - hh:mm:ss " + hh + " " + mm + " " + ss);
    total_seconds = (60 * (mm + (hh * 60))) + ss;
    console.log(" -- total_seconds: " + total_seconds);

    return total_seconds;
}

function getDiff() {
    let start = document.getElementById('start_time').value;
    let stop = document.getElementById('stop_time').value;

    // convert strs to actual numbers/time
    convertTimeToSeconds(start);
    debugger;

    let diff = stop - start;

    // console.log("Diff: " + convertTimeToSeconds);
}

main();
