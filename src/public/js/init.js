/***************************************
 * Author: Henry Newcomer              *
 **************************************/

/* TODO Add namespace */
/* TODO Set default time: 12:00:00 */
/* TODO responsive UI */

function main() {
    console.log("diffTime src/js/init.js loaded.");
}

function calcDiff() {
    getDiff();
}

function convertTimeToSeconds(hh_mm_ss = "00:00:00") {
    let total_seconds = 0;
    const split_time = hh_mm_ss.split(':');
    const hh = parseInt(split_time[0]);
    const mm = parseInt(split_time[1]);
    let ss = 0;

    /* Check how many segments were sent */
    if (split_time.length == 3) {
        ss = parseInt(split_time[2]);
    }
    total_seconds = (60 * (mm + (hh * 60))) + ss;
    return total_seconds;
}

function formatTotalSecsIntoTimeWorked(seconds_worked) {
    // const plural_seconds = seconds_worked % 1
    // output = "<br>(" + seconds_worked + " seconds)";

    let leftover_time = seconds_worked;

    // Ugly, but whatever
    const hrs = Math.floor(leftover_time / 3600);
    leftover_time -= hrs * 3600;
    const mins = Math.floor(leftover_time / 60);
    leftover_time -= mins * 60;
    const secs = leftover_time;

    output = " hrs<br> \
        (Worked for: " + hrs + " hr" + isSingular(hrs) + ", " + mins + " min" + isSingular(mins) + ", and " + secs + " second" + isSingular(secs) + ")";
    return output;
}

function isSingular(numToCheck) {
    const add_s = (numToCheck == 1) ? "" : "s";
    return add_s;
}

function getDiff() {
    let start = document.getElementById('start_time').value;
    let stop = document.getElementById('stop_time').value;
    let diff_in_seconds = 0;

    if (start != "" && stop != "") {
        // convert strs to total seconds
        start = convertTimeToSeconds(start);
        stop = convertTimeToSeconds(stop);

        diff_in_seconds = stop - start;

        /* TODO Also show how many hrs, mins, and secs were spent working */
        updateDiffText(diff_in_seconds);
    } else {
        updateDiffText("<span class=\"error\">Error: blank time value found. Make sure both Start and Stop times are properly configured.</span>");
    }
}

function updateDiffText(total_seconds_for_project = 0) {
    let float_hours = getTimeAsFloatHours(total_seconds_for_project);
    let hrs_mins_secs_spent = formatTotalSecsIntoTimeWorked(total_seconds_for_project);
    document.getElementById("result").innerHTML = float_hours + hrs_mins_secs_spent;
}

function getTimeAsFloatHours(seconds = 0) {
    const secs_in_hrs = 3600;
    const float_hours = seconds / secs_in_hrs;
    return float_hours.toFixed(5);
}

main();
