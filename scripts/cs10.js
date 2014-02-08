// Maps days since **saturday** to the appropriate cell numbers
// It's value is the cell numbers to deal with.
// The file dynamically calculates days for the semester and doesn't read
// dates from specific cells.
since = [
    [2],       // 0 days -- Sun: readings
    [3, 4],    // 1 day  -- Mon: lec lab 1
    [4],       // 2 days -- Tues: lab 1
    [5],       // 3 days -- Wed: lab 1, lec2, lab 2
    [6],       // 4 days -- thurs: lab 2
    [6, 7],    // 5 days -- fri: lab 2, disc, hw
    [2],       // 6 days -- Sat: readings
]

STYLE  = "10px solid Gold"
MS_DAY = 1000*60*60*24
// Function used to highlight the current day.
function updateCalendar() {
    // The SATURDAY before the first week of the calendar.
    start = new Date(2014, 0, 18)
    today = new Date()
    highlight = since[today.getDay()]

    if (today.getDay() === 3) { // HIGHLIGHT LAB ON WEDS BASED ON TIME OF DAY
        n = (today.getHours() < 12) ? 4 : 6
        highlight.push(n)
    }

    weeks = Math.floor(((today - start) / MS_DAY) / 7) // Weeks SINCE start
    rows = document.getElementsByClassName("cal")
    cells = rows[weeks + 1].cells // +1 is because row 0 is header

    // Hack for weeks like spring break
    c = (cells.length == 5) ? c = 3 : highlight[0]

    cells[c].style.border = STYLE
    if (c === 2 & weeks >= 2) { // HW, in the row before
        rows[weeks].cells[8].style.border = STYLE
    }
    if (highlight[1] && c !== 3) { // Days w/ 2 boxes, != for Spring break
        cells[highlight[1]].style.border = STYLE
    }

    // Grey out cells that have past
    for(i = 1; i < rows.length; i += 1) {
        cells = rows[i].cells
        for(j = 2; j < cells.length; j += 1) {
            if (cells[j].style.border.indexOf("10px") > -1) { return }
            cells[j].style.backgroundColor = "#BABABA"
        }
    }
}


function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src
}

function updateReadings() {
    readings = $(".reading")
    for(var i = 0; i < links.length; i++) {
        a = links[i]
        a.target = "_blank"
    }
}

function updateLabs() {
    urlEnd = "&novideo=true&noreading=true&nohomework=true&course=cs10_sp14.html"
    links = $(".lablink")
    for(var i = 0; i < links.length; i++) {
        a = links[i]
        a.href += urlEnd
        a.style.fontWeight = 700
        a.target = "_blank"
    }
}
