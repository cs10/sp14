/*****************************************************************************/
/*
CS10 -- staff.js
This file builds the staff images section from JSON data and makes working with
these images much easier.
Here is a sample object (with all properities):
danG = {
    name: 'Sr. Lecturer SOE Dan Garcia',
    img: 'http://www.cs.berkeley.edu/~ddgarcia/gifs/DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    web: 'http://www.cs.berkeley.edu/%7Eddgarcia/',
    bio: 'DanBio.txt',
    email: 'ddgarcia@cs.berkeley.edu',
    office: '777 Soda, (510) 517-4041'
}

You can create any objects like this. These properities are optional:
OFFICE, EMAIL, WEB
'imgSrc' should be a small image in the directory ~/public_html/images/small/*

There are a few lists of objects:
instructors, tas, readers, las -- more can be created if necessary:
To add a new section:
1. Add a div with an ID to staff.html
2. Add the same ID name to the 'all' object.
3. Add a call to buildGroup(), with the ID name (string) and the number of
images per row (int)
*/
/*****************************************************************************/

// JSON mappings for staff images / info.
// Instructors
danG = {
    name: 'Sr. Lecturer SOE Dan Garcia',
    img: 'http://www.cs.berkeley.edu/~ddgarcia/gifs/DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    web: 'http://www.cs.berkeley.edu/%7Eddgarcia/',
    bio: 'DanBio.txt',
    email: 'ddgarcia@cs.berkeley.edu',
    office: '777 Soda, (510) 517-4041'
}

// TAs
michaelB = {
    name: 'TA Michael Ball',
    img: 'Fa12/MichaelBall.jpg',
    imgSrc: 'MichaelBall.jpg',
    web: 'http://michaelballphoto.com',
    bio: 'MichaelBall.txt',
    email: 'cs10-ta@imail.eecs.berkeley.edu'
}
maxD = {
    name: 'TA Max Dougherty',
    img: 'Fa12/MaxDougherty.jpg',
    imgSrc: 'MaxDougherty.jpg',
    web: '',
    bio: 'MaxBio.txt',
    email: 'mdougherty@berkeley.edu'
}
ianB = {
    name: 'TA Ian Birnam',
    img: 'Fa12/IanBirnam.jpg',
    imgSrc: 'IanBirnam.jpg',
    web: 'ianbirnam.com',
    bio: 'IanBio.txt',
    email: 'ibirnam@berkeley.edu'
}
jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/JeffreySnowiss.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    web: '',
    bio: 'JeffreyBio.txt',
    email: 'jasnowiss@berkeley.edu'
}
peterS = {
    name: 'TA Peter Sujan',
    img: 'Fa12/PeterSujan.jpg',
    imgSrc: 'PeterSujan.jpg',
    web: '',
    bio: 'PeterBio.txt',
    email: 'peterasujan@berkeley.edu'
}
victoriaS = {
    name: 'TA Victoria Shi',
    img: 'Fa13/VictoriaShi.jpg',
    imgSrc: 'VictoriaShi.jpg',
    web: '',
    bio: 'VictoriaShi.txt',
    email: 'victoria.shi@berkeley.edu'
}
rachelH = {
    name: 'TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    web: '',
    bio: 'RachelHuang.txt',
    email: 'rachelhuang072@berkeley.edu'
}
jannaG = {
    name: 'TA Janna Golden',
    img: 'Su13/JannaGolden.jpg',
    imgSrc: 'JannaGolden.jpg',
    web: '',
    bio: 'JannaBio.txt',
    email: 'jannagolden@berkeley.edu'
}
sumerM = {
    name: 'TA Sumer Mohammed',
    img: 'Fa12/SumerMohammed.jpg',
    imgSrc: 'SumerMohammed.jpg',
    web: '',
    bio: 'SumerBio.txt',
    email: 'sumermohammed@berkeley.edu'
}

// Readers
audreyC = {
    name: 'Reader Audrey Chou',
    img: 'Fa13/AudreyChou.jpg',
    imgSrc: 'AudreyChou.jpg',
    web: '',
    bio: 'AudreyChou.txt',
    email: 'EMAIL@berkeley.edu'
}
josephC = {
    name: 'Reader Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg',
    web: '',
    bio: 'JosephCawthorne.txt',
    email: 'EMAIL@berkeley.edu'
}
songS   = {
    name: 'Reader Song Sok',
    img: 'Fa13/SongSok.jpg',
    imgSrc: 'SongSok.jpg',
    web: '',
    bio: 'SongSok.txt',
    email: 'EMAIL@berkeley.edu'
}
claireW = {
    name: 'Reader Claire Watanabe',
    img: 'Fa13/ClaireWatanabe.jpg',
    imgSrc: 'ClaireWatanabe.jpg',
    web: '',
    bio: 'ClaireWatanabe.txt',
    email: 'EMAIL@berkeley.edu'
}
jaclynB = {
    name: 'Reader Jaclyn Burge',
    img: 'Fa13/JaclynBurge.jpg',
    imgSrc: 'JaclynBurge.jpg',
    web: '',
    bio: 'JaclynBurge.txt',
    email: 'EMAIL@berkeley.edu'
}
andyS   = {
    name: 'Reader Andrew Schmitt',
    img: 'Sp13/AndrewSchmitt.jg',
    imgSrc: 'AndrewSchmitt.jpg',
    web: '',
    bio: 'AndrewSchmitt.txt',
    email: 'EMAIL@berkeley.edu'
}

// Staff
laurenM = {
    name: 'Project Manager Lauren Mock',
    img: 'Fa12/LaurenMock.jpg',
    imgSrc: 'LaurenMock.jpg',
    web: 'http://linkedin.com/laurenmock',
    bio: 'LaurenMock.txt',
    email: 'lmock@berkeley.edu'
}

// Lab Assistants


/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

instructors = [ danG ];

tas = [
    jannaG,
    laurenM,
    rachelH,
    sumerM,
    victoriaS,
    michaelB,
    ianB,
    jeffreyS,
    maxD,
    peterS
];

readers = [
    andyS,
    audreyC,
    claireW,
    jaclynB,
    josephC,
    songS
]

las = [
]

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
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.
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
        content += "<div style=\"clear: both;\"></div>";
    }
    //console.log()
    doc.innerHTML = content
}

/** EDIT THIS TO ADD NEW GROUPS */
window.onload = function() {
    // Parameters: a section (HTML 'id') and num of images per row.
    buildGroup("instructors", 1);
    buildGroup("tas", 5);
    buildGroup("readers", 3);
    buildGroup("las", 5);
    buildGroup("tait", 5);
}