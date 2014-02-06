/*****************************************************************************/
/*
CS10 -- staff.js
This file builds the staff images section from JSON data and makes working with
these images much easier.
Here is a sample object (with all properities):
DanGarcia = {
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
DanGarcia = {
    name: 'Sr. Lecturer SOE Dan Garcia',
    img: 'DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    web: 'http://www.cs.berkeley.edu/%7Eddgarcia/',
    bio: 'DanBio.txt',
    email: 'ddgarcia@cs.berkeley.edu',
    office: '777 Soda, (510) 517-4041'
}

// TAs
MichaelBall = {
    name: 'Head TA Michael Ball',
    img: 'Sp14/MichaelBallTake3.jpg',
    imgSrc: 'MichaelBall.jpg',
    web: 'http://michaelballphoto.com',
    bio: 'MichaelBall.txt',
    email: 'cs10-ta@imail.eecs.berkeley.edu'
}
maxD = {
    name: 'TA Max Dougherty',
    img: 'Fa12/MaxDougherty.jpg',
    imgSrc: 'MaxDougherty.jpg',
    email: 'mdougherty@berkeley.edu'
}
IanBirnam = {
    name: 'TA Ian Birnam',
    img: 'Sp14/IanBirnam.jpg',
    imgSrc: 'IanBirnam.jpg',
    web: 'http://ianbirnam.com',
    bio: 'IanBio.txt',
    email: 'ibirnam@berkeley.edu'
}
jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/JeffreySnowiss.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    email: 'jasnowiss10@gmail.com'
}
PeterSujan = {
    name: 'TA Peter Sujan',
    img: 'Fa12/PeterSujan.jpg',
    imgSrc: 'PeterSujan.jpg',
    bio: 'PeterBio.txt',
    email: 'peterasujan@berkeley.edu'
}
victoriaS = {
    name: 'TA Victoria Shi',
    img: 'Fa13/VictoriaShi.jpg',
    imgSrc: 'VictoriaShi.jpg',
    email: 'victoria.shi@berkeley.edu'
}
rachelH = {
    name: 'TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    email: 'rachelhuang072@berkeley.edu'
}
jannaG = {
    name: 'TA Janna Golden',
    img: 'Sp14/JannaGolden.jpg',
    imgSrc: 'JannaGolden.jpg',
    email: 'jannagolden@berkeley.edu'
}
sumerM = {
    name: 'TA Sumer Mohammed',
    img: 'Fa12/SumerMohammed.jpg',
    imgSrc: 'SumerMohammed.jpg',
    email: 'sumermohammed@berkeley.edu' }

// Readers
josephC = {
    name: 'Reader Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg' }
songS   = {
    name: 'Reader Song Sok',
    img: 'Fa13/SongSok.jpg',
    imgSrc: 'SongSok.jpg' }
claireW = {
    name: 'Reader Claire Watanabe',
    img: 'Fa13/ClaireWatanabe.jpg',
    imgSrc: 'ClaireWatanabe.jpg' }
jaclynB = {
    name: 'Reader Jaclyn Burge',
    img: 'Fa13/JaclynBurge.jpg',
    imgSrc: 'JaclynBurge.jpg' }
andyS   = {
    name: 'Reader Andrew Schmitt',
    img: 'Sp14/AndrewSchmitt.jpg',
    imgSrc: 'AndrewSchmitt.jpg' }

// Staff
LaurenMock = {
    name: 'Project Manager Lauren Mock',
    img: 'Sp14/LaurenMock.jpg',
    imgSrc: 'LaurenMock.jpg',
    web: 'http://linkedin.com/in/laurenmock',
    bio: 'LaurenMock.txt',
    email: 'lmock@berkeley.edu'
}

// Lab Assistants
// TAiT
benC = { name: 'Ben Carvalho',
    img: 'Fa13/BenCarvalho.jpg',
    imgSrc: 'BenCarvalho.jpg',
    bio: 'BenjaminCarvalhoBio.txt' }
sulaimanS = { name: 'Sulaiman Haruna',
    img: 'Sp14/SulaimanHaruna.jpg',
    imgSrc: 'SulaimanHaruna.jpg' }
rafayelM = { name: 'Rafayel Mkrtchyan',
    img: 'Sp14/RafayelMkrtchyan.jpg',
    imgSrc: 'RafayelMkrtchyan.jpg' }
kalleyT = { name: 'Kalley Thompson',
    img: 'Sp14/KalleyThompson.jpg',
    imgSrc: 'KalleyThompson.jpg' }
oliverO = { name: 'Oliver O\'Donnell',
    img: 'Sp14/OliverODonnell.jpg',
    imgSrc: 'OliverODonnell.jpg',
    bio: 'Oliver ODonnell.txt' }
kylaS = { name: 'Kyla Sorin',
    img: 'Sp14/KylaSorin.jpg',
    imgSrc: 'KylaSorin.jpg' }
carenT = { name: 'Caren Thomas',
    img: 'Sp14/CarenThomas.jpg',
    imgSrc: 'CarenThomas.jpg',
    bio: 'CarenThomasBio.txt' }
jobelV = { name: 'Jobel Kyle Vecino',
    img: 'Sp14/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg' }
BrandonChen = { name: 'Brandon Chen',
    img: 'Sp14/BrandonChen.jpg',
    imgSrc: 'BrandonChen.jpg' }
saagarB = { name: 'Saagar Bakshi',
    img: 'Sp14/SaagarBakshi.jpg',
    imgSrc: 'SaagarBakshi.jpg' }
lukeD = { name: 'Luke Dodds',
    img: 'Sp14/LukeDodds.jpg',
    imgSrc: 'LukeDodds.jpg' }
hunterB = { name: 'Hunter Brown',
    img: 'Sp14/HunterBrown.jpg',
    imgSrc: 'HunterBrown.jpg' }
adamK = { name: 'Adam Kuphaldt',
    img: 'Sp14/AdamKuphaldt.jpg',
    imgSrc: 'AdamKuphaldt.jpg' }
StevenTraversi = { name: 'Steven Traversi',
    img: 'Sp14/StevenTraversi.jpg',
    imgSrc: 'StevenTraversi.jpg' }
CarlosFlores = { name: 'Carlos Flores',
    img: 'Sp14/CarlosFlores.jpg',
    imgSrc: 'CarlosFlores.jpg' }
AranyUthayakumar = { name: 'Arany Uthayakumar',
    img: 'Sp14/AranyUthayakumar.jpg',
    imgSrc: 'AranyUthayakumar.jpg' }
DerekChiu = { name: 'Derek Chiu',
    img: 'Sp14/DerekChiu.jpg',
    imgSrc: 'DerekChiu.jpg' }
JoshuaPerline = { name: 'Josh Perline',
    img: 'Sp14/JoshPerline.jpg',
    imgSrc: 'JoshPerline.jpg' }
MichelleTsai = { name: 'Michelle Tsai',
    img: 'Sp14/MichelleTsai.jpg',
    imgSrc: 'MichelleTsai.jpg' }
AlexMcKinney = { name: 'Alex McKinney',
    img: 'Sp14/AlexMcKinney.jpg',
    imgSrc: 'AlexMcKinney.jpg' }
ChristopherKilian = { name: 'Christopher Kilian',
    img: 'Sp14/ChristopherKilian.jpg',
    imgSrc: 'ChristopherKilian.jpg' }
VeersuvratRajpal = { name: 'Veersuvrat Rajpal',
    img: 'Sp14/VeersuvratRajpal.jpg',
    imgSrc: 'VeersuvratRajpal.jpg' }
KwanCheung = { name: 'Kwan Cheung',
    img: 'Sp14/KwanCheung.jpg',
    imgSrc: 'KwanCheung.jpg' }
EdwanHernandez = { name: 'Edwan Hernandez',
    img: 'Sp14/EdwanHernandez.jpg',
    imgSrc: 'EdwanHernandez.jpg' }


/* NON-TAIT */
NickRose = { name: 'Nick Rose',
    img: 'Sp14/NickRose.jpg',
    imgSrc: 'NickRose.jpg' }
ZhenzhengHu = { name: 'Helen Hu',
    img: 'Sp14/HelenHu.jpg',
    imgSrc: 'HelenHu.jpg' }
SerenaChan = { name: 'Serena Chan',
    img: 'Sp14/SerenaChan.jpg',
    imgSrc: 'SerenaChan.jpg' }
MonaLee = { name: 'Mona Lee',
    img: 'Sp14/MonaLee.jpg',
    imgSrc: 'MonaLee.jpg' }
AmrutaYelamanchili = { name: 'Amruta Yelamanchili',
    img: 'Sp14/AmrutaYelamanchili.jpg',
    imgSrc: 'AmrutaYelamanchili.jpg' }
LiuxiaoZhang = { name: 'Liuxiao Zhang',
    img: 'Sp14/LiuxiaoZhang.jpg',
    imgSrc: 'LiuxiaoZhang.jpg' }
ChristineLiu = { name: 'Christine Liu',
    img: 'Sp14/ChristineLiu.jpg',
    imgSrc: 'ChristineLiu.jpg' }
JiJunChen = { name: 'Ji Jun (Jenny) Chen',
    img: 'Sp14/JiJunChen.jpg',
    imgSrc: 'JiJunChen.jpg' }
YinxueBian = { name: 'Yinxue Bian',
    img: 'Sp14/YinxueBian.jpg',
    imgSrc: 'YinxueBian.jpg' }
TammyChen = { name: 'Tammy Chen',
    img: 'Sp14/TammyChen.jpg',
    imgSrc: 'TammyChen.jpg' }
LuiseRygaard = { name: 'Luise Rygaard',
    img: 'Sp14/LuiseRygaard.jpg',
    imgSrc: 'LuiseRygaard.jpg' }
AlexFreeman = { name: 'Alex Freeman',
    img: 'Sp14/AlexFreeman.jpg',
    imgSrc: 'AlexFreeman.jpg' }
MariaCan = { name: 'Maria Can',
    img: 'Sp14/MariaCan.jpg',
    imgSrc: 'MariaCan.jpg' }
CarolineChan = { name: 'Caroline Chan',
    img: 'Sp14/CarolineChan.jpg',
    imgSrc: 'CarolineChan.jpg' }
RyanRiddle = { name: 'Ryan Riddle',
    img: 'Sp14/RyanRiddle.jpg',
    imgSrc: 'RyanRiddle.jpg' }
CharlesThorson = { name: 'Charles Thorson',
    img: 'Sp14/CharlesThorson.jpg',
    imgSrc: 'CharlesThorson.jpg' }
FangzhouChen = { name: 'Fangzhou Chen',
    img: 'Sp14/FangzhouChen.jpg',
    imgSrc: 'FangzhouChen.jpg' }
NicholasDill = { name: 'Nicholas Dill',
    img: 'Sp14/NicholasDill.jpg',
    imgSrc: 'NicholasDill.jpg' }
GurubalaKotta = { name: 'Gurubala Kotta',
    img: 'Sp14/GurubalaKotta.jpg',
    imgSrc: 'GurubalaKotta.jpg' }
AdamBrown = { name: 'Adam Brown',
    img: 'Sp14/AdamBrown.jpg',
    imgSrc: 'AdamBrown.jpg' }
KalonCheung = { name: 'Kalon Cheung',
    img: 'Sp14/KalonCheung.jpg',
    imgSrc: 'KalonCheung.jpg' }
NolanTakeshita = { name: 'Nolan Takeshita',
    img: 'Sp14/NolanTakeshita.jpg',
    imgSrc: 'NolanTakeshita.jpg' }
AmyShu = { name: 'Amy Shu',
    img: 'Sp14/AmyShu.jpg',
    imgSrc: 'AmyShu.jpg' }
MichelleHan = { name: 'Michelle Han',
    img: 'Sp14/MichelleHan.jpg',
    imgSrc: 'MichelleHan.jpg' }
TierneyHenderson = { name: 'Tierney Henderson',
    img: 'Sp14/TierneyHenderson.jpg',
    imgSrc: 'TierneyHenderson.jpg' }
HarrisQuraishi = { name: 'Harris Quraishi',
    img: 'Sp14/HarrisQuraishi.jpg',
    imgSrc: 'HarrisQuraishi.jpg' }
PriscillaBermudez = { name: 'Priscilla Bermudez',
    img: 'Sp14/PriscillaBermudez.jpg',
    imgSrc: 'PriscillaBermudez.jpg' }
AlisonTang = { name: 'Alison Tang',
    img: 'Sp14/AlisonTang.jpg',
    imgSrc: 'AlisonTang.jpg' }
FranklinLee = { name: 'Franklin Lee',
    img: 'Sp14/FranklinLee.jpg',
    imgSrc: 'FranklinLee.jpg' }
MateoMarindelReal = { name: 'Mateo Marin del Real',
    img: 'Sp14/MateoOMarin.jpg',
    imgSrc: 'MateoOMarin.jpg' }
VictorSolis = { name: 'Victor Solis',
    img: 'Sp14/VictorSolis.jpg',
    imgSrc: 'VictorSolis.jpg' }
ItzelMartinez = { name: 'Itzel Martinez',
    img: 'Sp14/ItzelMartinez.jpg',
    imgSrc: 'ItzelMartinez.jpg' }
BryceSmith = { name: 'Bryce Smith',
    img: 'Sp14/BryceSmith.jpg',
    imgSrc: 'BryceSmith.jpg' }
BrookeTencer = { name: 'Brooke Tencer',
    img: 'Sp14/BrookeTencer.jpg',
    imgSrc: 'BrookeTencer.jpg' }
NavsharanSingh = { name: 'Navsharan Singh',
    img: 'Sp14/NavsharanSingh.jpg',
    imgSrc: 'NavsharanSingh.jpg' }
StevenHolman = { name: 'Steven Holman',
    img: 'Sp14/StevenHolman.jpg',
    imgSrc: 'StevenHolman.jpg' }
JiaweiWillJiang = { name: 'Jiawei Will Jiang',
    img: 'Sp14/JiaweiWillJiang.jpg',
    imgSrc: 'JiaweiWillJiang.jpg' }
MohanGanesan = { name: 'Mohan Ganesan',
    img: 'Sp14/MohanGanesan.jpg',
    imgSrc: 'MohanGanesan.jpg' }
VictoriaBian = { name: 'Victoria Bian',
    img: 'Sp14/VictoriaBian.jpg',
    imgSrc: 'VictoriaBian.jpg' }
YibingChen = { name: 'Yibing Chen',
    img: 'Sp14/YibingChen.jpg',
    imgSrc: 'YibingChen.jpg' }
// Lab Dev
paulI = { name: 'Paul Irwin',
    img: 'Fa13/PaulIrwin.jpg',
    imgSrc: 'PaulIrwin.jpg' }

jessicaA = { name: 'Jessica Andrich',
    img: 'Fa13/JessicaAndrich.jpg',
    imgSrc: 'JessicaAndrich.jpg' }

// edX
KunalMarwaha = { name: 'edX Team Lead Kunal Marwaha',
    img: 'Sp14/KunalMarwaha.jpg',
    imgSrc: 'KunalMarwaha.jpg' }
seanS = { name: 'Sean Scofield',
    img: 'SeanScofield.jpg',
    imgSrc: 'SeanScofield.jpg' }
JocelynTakahashi = { name: 'Jocelyn Takahashi',
    img: 'Sp13/JocelynTakahashi.jpg',
    imgSrc: '../Sp13/t/JocelynTakahashi.jpg' }
        
// snap
KyleZenter = { name: 'Snap! Team Lead Kyle Zenter',
    img: 'Sp14/KyleZenter.jpg',
    imgSrc: 'KyleZenter.jpg' }

/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

instructors = [ DanGarcia ];

tas = [ LaurenMock, jannaG, rachelH, sumerM, victoriaS, MichaelBall, IanBirnam, jeffreyS,
maxD, PeterSujan ]

readers = [ andyS, claireW, jaclynB, josephC, songS ]

las = [ "Adam Brown",
        "Alex Freeman",
        "Alison Tang",
        "Amruta Yelamanchili",
        "Amy Shu",
        "Brooke Tencer",
        "Bryce Smith",
        "Caroline Chan",
        "Charles Thorson",
        "Fangzhou Chen",
        "Franklin Lee",
        "Gurubala Kotta",
        "Harris Quraishi",
        "Itzel Martinez",
        "JiaweiWill Jiang",
        "Ji Jun Chen",
        "Kalon Cheung",
        kylaS,
        "Liuxiao Zhang",
        "Luise Rygaard",
        "Maria Can",
        "Mateo O Marin",
        "Michelle Han",
        "Mohan Ganesan",
        "Mona Lee",
        "Navsharan Singh",
        "Nicholas Dill",
        "Nick Rose",
        "Priscilla Bermudez",
        "Ryan Riddle",
        "Steven Holman",
        "Tammy Chen",
        "Tierney Henderson",
        "Victoria Bian",
        "Victor Solis",
        "Yibing Chen",
        "Yinxue Bian",
        "Helen Hu" ]

tait = [benC, songS, josephC, andyS, seanS, 
        adamK,
        "Alex McKinney",
        "Arany Uthayakumar",
        "Brandon Chen",
        carenT,
        "Carlos Flores",
        "Christopher Kilian",
        "Derek Chiu",
        "Edwan Hernandez",
        hunterB,
        jobelV,
        "Josh Perline",
        kalleyT,
        "Kwan Cheung",
        lukeD,
        "Michelle Tsai",
        "Nolan Takeshita",
        oliverO,
        rafayelM,
        saagarB,
        "Serena Chan",
        "Steven Traversi",
        sulaimanS,
        "Veersuvrat Rajpal" ]

labdev = [ PeterSujan, LaurenMock, jessicaA, paulI, andyS, MichaelBall ]

edx = [ KunalMarwaha, josephC, seanS, songS, LaurenMock, MichaelBall,
    JocelynTakahashi, "Josh Perline" ]

snap = [ KunalMarwaha,  KyleZenter, MichaelBall, "Brandon Chen",  ]

bjc = [ LaurenMock, MichaelBall, PeterSujan, KunalMarwaha,  KyleZenter ]


// If you need to add a new SECTION add it to this object.
// Follow the same format.
all = {
    instructors: instructors,
    las: las,
    readers: readers,
    tas: tas,
    tait: tait,
    edx: edx,
    snap: snap,
    labdev: labdev,
    bjc: bjc
};

//LOL - Ian
LIST_OF_SHAME = [
"AlisonTang.jpg",
"AmyShu.jpg",
"BryceSmith.jpg",
"CharlesThorson.jpg",
"DerekChiu.jpg",
"HunterBrown.jpg",
"JiJunChen.jpg",
"KunalMarwaha.jpg",
"KyleZenter.jpg",
"LuiseRygaard.jpg",
"MichelleHan.jpg",
"NavsharanSingh.jpg",
"NicholasDill.jpg",
"PriscillaBermudez.jpg",
"SerenaChan.jpg",
"StevenHolman.jpg",
"VictorSolis.jpg",
"YinxueBian.jpg",
]

// Prepend TAiT to names, except for Readers.
for(var i = 0; i < tait.length; i++) {
    if (tait[i].constructor === String) {
        tait[i] = baseObj(tait[i])
    }
    
    if (tait[i].name.indexOf('Reader') === -1) {
        tait[i].name = "TAiT " + tait[i].name
    }
}
/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

function baseObj(name) {
    src = name.replace(/ /g , '')
    return { name: name,
             img: 'Sp14/' + src + '.jpg',
             imgSrc: src + '.jpg' }
}
function buildPerson(data, width) {
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.

    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data)
    }

    // If there's no image, use 3D Alanzo
    if (!data.imgSrc || LIST_OF_SHAME.indexOf(data.imgSrc) !== -1) {
        data.imgSrc = "../NPY3D.jpg"
        data.img    = ''
    }
    // Create a table element with this person's data, setting a class for width
    elm = "<div style=\"width:" + 100/width + "%;\">";
    if (!!data.img) {
        elm += "<a href=\"images/" + data.img + "\">"
    }
    elm += "<img class=\"staff\" width=\"200\" height=\"300\" align=\"center\" "
    elm += "alt=\"" + data.name + "\" title=\"" + data.name + "\" src=\"images/small/"
    elm += data.imgSrc + "\" />"
    if (!!data.img) {
        elm += "</a>"
    }
    elm += "<br /><strong>"
    if (!!data.web) {
        elm += "<a href=\"" + data.web + "\">" + data.name + "</a>"
    } else {
        elm += data.name
    }
    elm += "</strong> "
    if (!!data.bio) {
        elm += "(<a href=\"bios/" + data.bio + "\">bio</a>)"
    }
    if (!!data.email) {
        elm += "<br /><a href=\"mailto:" + data.email +
        "?subject=[CS10] SUBJECT\"><code>" + data.email + "</code></a>";
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
    doc.innerHTML += content
}


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  /* more code to run on page load */
  // Parameters: a section (HTML 'id') and num of images per row.
  buildGroup("instructors", 1);
  buildGroup("tas", 5);
  buildGroup("readers", 5);
  buildGroup("tait", 5);
  buildGroup("las", 5);
  buildGroup("edx", 5);
  buildGroup("snap", 5);
  buildGroup("labdev", 5);
  buildGroup("bjc", 5);
});
