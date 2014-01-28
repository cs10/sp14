// Function used to highlight the current day.
function updateCalendar() {
    today  = new Date();
    tdate  = today.getDate();
    tmonth = today.getMonth() + 1;
    tday   = today.getDay();

    // tableCellArr = new Array();
    tableCellArr = document.getElementsByClassName("cal")
    tableCellArr = tableCellArr.slice(1) // Remove Header row
    for(var i = 0; i < tableCellArr.length; i++) {
        row = tableCellArr[i];
        // Cells has 9 items
        // Week, Dates, Readings, Lect, Lab, Lect, Lab, Disc, HW
        cells = row.getElementsByTagName('td');
        tmp = cells[1].innerHTML.trim().split(" to ");
        if (!tmp) {
            return;
        }
        tmp = tmp[0].split('-');
        if (!tmp) {
            return;
        }
        mon = tmp[0];
        day = tmp[1];

        //golden rectangle for current date
        for (var j = 2; j < cells.length - 1; j++) {
            celldate = getCellDate(j, day);
            if (celldate == tdate && mon == tmonth) {
                cells[j].style.border = "10px solid Gold";
            } else if (mon < tmonth || (mon == tmonth && celldate < tdate)) {
                cells[j].style.backgroundColor = "#BABABA";
            }
        }
    } //closing for loop

    urlEnd = "&amp;novideo=true&amp;noreading=true&amp;nohomework=true&amp;course=cs10_sp14.html";
    links = $(".lablink");
    for(var i = 0; i < links.length; i++) {
        a = links[i]
        a.href += urlEnd
        a.style.fontWeight = 700
        a.target = "_blank"
    }
}

/* TODO
* Handle Month Edges
* Handle multiple colspan
* Handle multiple dates per cell
    -- cells 4, 6 have 3 dates possible
* Something else?
*/

function getCellDate(cellNum, date) {
    if (cellNum === 2) {
        return date - 1;
    } else {
        return date + cellNum - 3;
    }
}

function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}

window.onload = function() {

    updateCalendar();

    readings = $(".reading");
    for(var i = 0; i < links.length; i++) {
        a = links[i];
        a.target = "_blank";
    }
};