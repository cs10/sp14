// Function used to highlight the current day.
function updateCalendar() {
    today  = new Date()
    tdate  = today.getDate()
    tmonth = today.getMonth() + 1;
    tday   = today.getDay()

    tableCellArr = new Array();
    tableCellArr = document.getElementsByClassName("cal");
    for(var i = 0; i < tableCellArr.length; i++) {
        row = tableCellArr[i]
        // Cells has 9 items
        // Week, Dates, Readings, Lect, Lab, Lect, Lab, Disc, HW
        cells = row.getElementsByTagName('td')
        tmp = cells[1].split(" to ")[0].split('-')
        mon = tmp[0]
        day = tmp[1]

        //golden rectangle for current date
        for (var j = 2; j < 9; j++) {
            celldate = getCellDate(j, day)
            if (celldate == tdate && mon == tmonth) {
                cells[j].style.border = "10px solid Gold"
            } else if (mon < tmonth || (mon == tmonth && celldate < tdate)) {
                cells[j].style.backgroundColor = "#BABABA"
            }
        }
    } //closing for loop
}

function getCellDate(cellNum, date) {
    if (cellnNum === 2) {
        return date - 1;
    } else {
        return date + cellNum - 3;
    }
}

function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}
