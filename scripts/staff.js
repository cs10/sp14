// If you need to add a new SECTION add it to this object.
// Follow the same format.
all = {
    instructors: instructors,
    las: las,
    readers: readers,
    tas: tas
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/
function buildPerson(data, width) {
    if (!data.imgSrc) {
        data.imgSrc = "../NPY3D.jpg"
    }
    // Create a table element with this person's data, setting a class for width
    elm = "<div style=\"width:" + 100/width + "%;\"> <a href=\"" + data.img + "\">";
    elm += "<img class=\"staff\" width=\"200\" height=\"300\" align=\"center\" ";
    elm += "alt=\"" + data.name + "\" title=\"" + data.name + "\" src=\"images/small/";
    elm += data.imgSrc + "\" />";
    elm += "</a><br /><strong>";
    if (!!data.web) {
        elm += "<a href=\"" + data.web + "\">" + data.name + "</a>"
    } else {
        elm += data.name
    }
    elm += "</strong> (<a href=\"../bios/" + data.bioURL + "\">bio</a>)"
    if (!!data.email) {
        elm += "<br /><a href=\"mailto:" + data.email + "?subject=[CS10]\"><code>" + data.email + "</code></a>";
    }
    if (!!data.office) {
        elm +=  "<br />" + data.office
    }
    elm += "</div>";
    return elm;
}

function buildGroup(group, w) {
    // Build a set of table rows, with W items per row
    // based on the people in the GROUP
    // Add them to the appropriate HTML table element
    ppl = all[group]
    doc = document.getElementById(group)
    content = ''
    for (var i = 0; i < ppl.length; i += w) {
        content += "<div class=\"staffimg\">"
        for(var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i
             }
            content += buildPerson(ppl[j], w)
        }
        content += "</div>"
        content += "<div style=\"clear: both;\"></div></";
    }
    console.log()
    doc.innerHTML = content
}

/** EDIT THIS TO ADD NEW GROUPS */
window.onload = function() {
    buildGroup("instructors", 1);
    buildGroup("tas", 5);
    buildGroup("readers", 4);
    buildGroup("las", 5);
}