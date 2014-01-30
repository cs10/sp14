// Maps days since saturday to the appropriate cells
// Item # is the days since
// It's value is the cell numbers to deal with.
since = [
    [2],     // 0 days -- readings
    [2],     // 1 day  -- readings
    [3,4],   // 2 days -- monday: lec lab 1
    [4],     // 3 days -- Tues: lab 1
    [5], // 4 days -- Wed: lab 1, lec2, lab 2
    [6],     // 5 days -- thurs: lab 2
    [6,7,8]  // 6 days -- fri: lab 2, disc, hw
]
MS_DAY = 1000*60*60*24
// Function used to highlight the current day.
function updateCalendar() {
    // The SATURDAY before the first week of the calendar.
    start = new Date(2014, 0, 18)
    today = new Date()
    days  = Math.floor((today - start) / MS_DAY)
    wkday = days % 7
    console.log(wkday)
    lst = since[wkday]
    if (wkday === 4) {
            if (today.getHours() < 12) {
                lst.push(4)
        } else {
                lst.push(6)
        }
    }
    
    cellcount = 0
    tableRows = document.getElementsByClassName("cal")
    for(var i = 1; i < tableRows.length; i += 1) {
            row = tableRows[i];
            cells = row.getElementsByTagName('td');
        for (var j = 2; j < cells.length - 1; j++) {
            cellcount += 1
            if (cellcount < days) {
                cells[j].style.backgroundColor = "#BABABA"
            } else if (cellcount > days) {
                return
            }
            if (cellcount === days) {
                console.log("Found it!")
                console.log(cellcount)
                for(c in lst) {
                    cells[lst[c]].style.border = "10px solid Gold"
                }
            }
        }
    } //closing for loop
}


function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}

window.onload = function() {
    
    urlEnd = "&amp;novideo=true&amp;noreading=true&amp;nohomework=true&amp;course=cs10_sp14.html";
    links = $(".lablink");
    for(var i = 0; i < links.length; i++) {
        a = links[i]
        a.href += urlEnd
        a.style.fontWeight = 700
        a.target = "_blank"
    }
    
    updateCalendar();


    readings = $(".reading");
    for(var i = 0; i < links.length; i++) {
        a = links[i];
        a.target = "_blank";
    }
};