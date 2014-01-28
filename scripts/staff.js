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
    name: 'Head TA Michael Ball',
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
    web: 'http://ianbirnam.com',
    bio: 'IanBio.txt',
    email: 'ibirnam@berkeley.edu'
}
jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/JeffreySnowiss.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    web: '',
    bio: 'JeffreyBio.txt',
    email: 'jasnowiss10@gmail.com'
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
    imgSrc: '', // AudreyChou.jpg
    web: '',
    bio: '', // AudreyChou.txt
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
    img: 'Sp13/AndrewSchmitt.jpg',
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
    web: 'http://linkedin.com/in/laurenmock',
    bio: 'LaurenMock.txt',
    email: 'lmock@berkeley.edu'
}

// Lab Assistants
benC = { name: 'TAiT Ben Carvalho',
    img: 'Fa13/BenCarvalho.jpg',
    imgSrc: 'BenCarvalho.jpg',
    bio: '' }
sulaimanS = { name: 'TAiT Sulaiman Saed Haruna',
    img: 'Sp14/Sulaiman Saed Haruna.jpg',
    imgSrc: 'Sulaiman Saed Haruna.jpg',
    bio: '' }
rafayelM = { name: 'TAiT Rafayel Mkrtchyan',
    img: 'Sp14/Rafayel Mkrtchyan.jpg',
    imgSrc: 'Rafayel Mkrtchyan.jpg',
    bio: '' }
kalleyT = { name: 'TAiT Kalley Thompson',
    img: 'Sp14/Kalley Thompson.jpg',
    imgSrc: 'Kalley Thompson.jpg',
    bio: '' }
oliverO = { name: 'TAiT Oliver O\'Donnell',
    img: 'Sp14/Oliver ODonnell.jpg',
    imgSrc: 'Oliver ODonnell.jpg',
    bio: 'Oliver ODonnell Bio.txt' }
kylaS = { name: 'TAiT Kyla Sorin',
    img: 'Sp14/Kyla Sorin.jpg',
    imgSrc: 'Kyla Sorin.jpg',
    bio: '' }
carenT = { name: 'TAiT Caren Thomas',
    img: 'Sp14/Caren Thomas.jpg',
    imgSrc: 'Caren Thomas.jpg',
    bio: '' }
jobelV = { name: 'TAiT Jobel Kyle Vecino',
    img: 'Sp14/Jobel Kyle Vecino.jpg',
    imgSrc: 'Jobel Kyle Vecino.jpg',
    bio: '' }
brandonC = { name: 'TAiT Brandon Chen',
    img: 'Sp14/Brandon Chen.jpg',
    imgSrc: 'Brandon Chen.jpg',
    bio: '' }
saagarB = { name: 'TAiT Saagar Bakshi',
    img: 'Sp14/Saagar Bakshi.jpg',
    imgSrc: 'Saagar Bakshi.jpg',
    bio: '' }
lukeD = { name: 'TAiT Luke Dodds',
    img: 'Sp14/Luke Dodds.jpg',
    imgSrc: 'Luke Dodds.jpg',
    bio: '' }
hunterB = { name: 'TAiT Hunter Brown',
    img: 'Sp14/Hunter Brown.jpg',
    imgSrc: 'Hunter Brown.jpg',
    bio: '' }
adamK = { name: 'TAiT Adam Kuphaldt',
    img: 'Sp14/Adam Kuphaldt.jpg',
    imgSrc: 'Adam Kuphaldt.jpg',
    bio: '' }

/* NON-TAIT */
NickRose = { name: 'Nick Rose',
    img: 'Sp14/Nick Rose.jpg',
    imgSrc: 'Nick Rose.jpg',
    bio: '' }

ZhenzhengHu = { name: 'Zhenzheng (Helen) Hu',
    img: 'Sp14/Zhenzheng (Helen) Hu.jpg',
    imgSrc: 'Zhenzheng (Helen) Hu.jpg',
    bio: '' }

SerenaChan = { name: 'Serena Chan',
    img: 'Sp14/Serena Chan.jpg',
    imgSrc: 'Serena Chan.jpg',
    bio: '' }

JiaweiJiang = { name: 'Jiawei Jiang',
    img: 'Sp14/Jiawei Jiang.jpg',
    imgSrc: 'Jiawei Jiang.jpg',
    bio: '' }

DerekChiu = { name: 'Derek Chiu',
    img: 'Sp14/Derek Chiu.jpg',
    imgSrc: 'Derek Chiu.jpg',
    bio: '' }

MonaLee = { name: 'Mona (Hee-Jae) Lee',
    img: 'Sp14/Mona (Hee-Jae) Lee.jpg',
    imgSrc: 'Mona (Hee-Jae) Lee.jpg',
    bio: '' }

AmrutaYelamanchili = { name: 'Amruta Yelamanchili',
    img: 'Sp14/Amruta Yelamanchili.jpg',
    imgSrc: 'Amruta Yelamanchili.jpg',
    bio: '' }

LiuxiaoZhang = { name: 'Liuxiao Zhang',
    img: 'Sp14/Liuxiao Zhang.jpg',
    imgSrc: 'Liuxiao Zhang.jpg',
    bio: '' }

ChristineLiu = { name: 'Christine Liu',
    img: 'Sp14/Christine Liu.jpg',
    imgSrc: 'Christine Liu.jpg',
    bio: '' }

CarlosFlores = { name: 'Carlos Flores',
    img: 'Sp14/Carlos Flores.jpg',
    imgSrc: 'Carlos Flores.jpg',
    bio: '' }

JiJunChen = { name: 'Ji Jun (Jenny) Chen',
    img: 'Sp14/Ji Jun (Jenny) Chen.jpg',
    imgSrc: 'Ji Jun (Jenny) Chen.jpg',
    bio: '' }

JoshuaPerline = { name: 'Joshua Perline',
    img: 'Sp14/Joshua Perline.jpg',
    imgSrc: 'Joshua Perline.jpg',
    bio: '' }

YinxueBian = { name: 'Yinxue Bian',
    img: 'Sp14/Yinxue Bian.jpg',
    imgSrc: 'Yinxue Bian.jpg',
    bio: '' }

TammyChen = { name: 'Tammy Chen',
    img: 'Sp14/Tammy Chen.jpg',
    imgSrc: 'Tammy Chen.jpg',
    bio: '' }

LuiseRygaard = { name: 'Luise Rygaard',
    img: 'Sp14/Luise Rygaard.jpg',
    imgSrc: 'Luise Rygaard.jpg',
    bio: '' }

AlexFreeman = { name: 'Alex Freeman',
    img: 'Sp14/Alex Freeman.jpg',
    imgSrc: 'Alex Freeman.jpg',
    bio: '' }

MichelleTsai = { name: 'Michelle Tsai',
    img: 'Sp14/Michelle Tsai.jpg',
    imgSrc: 'Michelle Tsai.jpg',
    bio: '' }

MariaCan = { name: 'Maria Can',
    img: 'Sp14/Maria Can.jpg',
    imgSrc: 'Maria Can.jpg',
    bio: '' }

CarolineChan = { name: 'Caroline Chan',
    img: 'Sp14/Caroline Chan.jpg',
    imgSrc: 'Caroline Chan.jpg',
    bio: '' }

RyanRiddle = { name: 'Ryan Riddle',
    img: 'Sp14/Ryan Riddle.jpg',
    imgSrc: 'Ryan Riddle.jpg',
    bio: '' }

CharlesThorson = { name: 'Charles Thorson',
    img: 'Sp14/Charles Thorson.jpg',
    imgSrc: 'Charles Thorson.jpg',
    bio: '' }

FangzhouChen = { name: 'Fangzhou Chen',
    img: 'Sp14/Fangzhou Chen.jpg',
    imgSrc: 'Fangzhou Chen.jpg',
    bio: '' }

NicholasDill = { name: 'Nicholas Dill',
    img: 'Sp14/Nicholas Dill.jpg',
    imgSrc: 'Nicholas Dill.jpg',
    bio: '' }

GurubalaKotta = { name: 'Gurubala Kotta',
    img: 'Sp14/Gurubala Kotta.jpg',
    imgSrc: 'Gurubala Kotta.jpg',
    bio: '' }

AdamBrown = { name: 'Adam Brown',
    img: 'Sp14/Adam Brown.jpg',
    imgSrc: 'Adam Brown.jpg',
    bio: '' }

KalonCheung = { name: 'Kalon Cheung',
    img: 'Sp14/Kalon Cheung.jpg',
    imgSrc: 'Kalon Cheung.jpg',
    bio: '' }

NolanTakeshita = { name: 'Nolan Takeshita',
    img: 'Sp14/Nolan Takeshita.jpg',
    imgSrc: 'Nolan Takeshita.jpg',
    bio: '' }

ChristopherKilian = { name: 'Christopher Kilian',
    img: 'Sp14/Christopher Kilian.jpg',
    imgSrc: 'Christopher Kilian.jpg',
    bio: '' }

AmyShu = { name: 'Amy Shu',
    img: 'Sp14/Amy Shu.jpg',
    imgSrc: 'Amy Shu.jpg',
    bio: '' }

MichelleHan = { name: 'Michelle Han',
    img: 'Sp14/Michelle Han.jpg',
    imgSrc: 'Michelle Han.jpg',
    bio: '' }

TierneyHenderson = { name: 'Tierney Henderson',
    img: 'Sp14/Tierney Henderson.jpg',
    imgSrc: 'Tierney Henderson.jpg',
    bio: '' }

HarrisQuraishi = { name: 'Harris Quraishi',
    img: 'Sp14/Harris Quraishi.jpg',
    imgSrc: 'Harris Quraishi.jpg',
    bio: '' }

PriscillaBermudez = { name: 'Priscilla Bermudez',
    img: 'Sp14/Priscilla Bermudez.jpg',
    imgSrc: 'Priscilla Bermudez.jpg',
    bio: '' }

AlisonTang = { name: 'Alison Tang',
    img: 'Sp14/Alison Tang.jpg',
    imgSrc: 'Alison Tang.jpg',
    bio: '' }

VeersuvratRajpal = { name: 'Veersuvrat Rajpal',
    img: 'Sp14/Veersuvrat Rajpal.jpg',
    imgSrc: 'Veersuvrat Rajpal.jpg',
    bio: '' }

FranklinLee = { name: 'Franklin Lee',
    img: 'Sp14/Franklin Lee.jpg',
    imgSrc: 'Franklin Lee.jpg',
    bio: '' }

MateoMarindelReal = { name: 'Mateo Marin del Real',
    img: 'Sp14/Mateo Marin del Real.jpg',
    imgSrc: 'Mateo Marin del Real.jpg',
    bio: '' }

VictorSolis = { name: 'Victor Solis',
    img: 'Sp14/Victor Solis.jpg',
    imgSrc: 'Victor Solis.jpg',
    bio: '' }

BryceSmith = { name: 'Bryce Smith',
    img: 'Sp14/Bryce Smith.jpg',
    imgSrc: 'Bryce Smith.jpg',
    bio: '' }

BrookeTencer = { name: 'Brooke Tencer',
    img: 'Sp14/Brooke Tencer.jpg',
    imgSrc: 'Brooke Tencer.jpg',
    bio: '' }

NavsharanSingh = { name: 'Navsharan Singh',
    img: 'Sp14/Navsharan Singh.jpg',
    imgSrc: 'Navsharan Singh.jpg',
    bio: '' }

KwanKitCheung = { name: 'Kwan Kit Cheung',
    img: 'Sp14/Kwan Kit Cheung.jpg',
    imgSrc: 'Kwan Kit Cheung.jpg',
    bio: '' }

EdwanHernandez = { name: 'Edwan Hernandez',
    img: 'Sp14/Edwan Hernandez.jpg',
    imgSrc: 'Edwan Hernandez.jpg',
    bio: '' }

StevenHolman = { name: 'Steven Holman',
    img: 'Sp14/Steven Holman.jpg',
    imgSrc: 'Steven Holman.jpg',
    bio: '' }

NickRose = { name: 'Nick Rose',
    img: 'Sp14/Nick Rose.jpg',
    imgSrc: 'Nick Rose.jpg',
    bio: '' }

ZhenzhengHu = { name: 'Zhenzheng (Helen) Hu',
    img: 'Sp14/Zhenzheng (Helen) Hu.jpg',
    imgSrc: 'Zhenzheng (Helen) Hu.jpg',
    bio: '' }

SerenaChan = { name: 'Serena Chan',
    img: 'Sp14/Serena Chan.jpg',
    imgSrc: 'Serena Chan.jpg',
    bio: '' }

JiaweiJiang = { name: 'Jiawei Jiang',
    img: 'Sp14/Jiawei Jiang.jpg',
    imgSrc: 'Jiawei Jiang.jpg',
    bio: '' }

DerekChiu = { name: 'Derek Chiu',
    img: 'Sp14/Derek Chiu.jpg',
    imgSrc: 'Derek Chiu.jpg',
    bio: '' }

MonaLee = { name: 'Mona (Hee-Jae) Lee',
    img: 'Sp14/Mona (Hee-Jae) Lee.jpg',
    imgSrc: 'Mona (Hee-Jae) Lee.jpg',
    bio: '' }

// Lab Dev
paulI = { name: 'Paul Irwin',
    img: 'Fa13/PaulIrwin.jpg',
    imgSrc: 'PaulIrwin.jpg',
    bio: '' }

jessicaA = { name: 'Jessica Andrich',
    img: 'Fa13/JessicaAndrich.jpg',
    imgSrc: 'JessicaAndrich.jpg',
    bio: '' }

// edX
seanS = { name: 'Sean Scofield',
    img: 'SeanScofield.jpg',
    imgSrc: 'SeanScofield.jpg',
    bio: '' }

// snap


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
]

readers = [
    andyS,
    audreyC,
    claireW,
    jaclynB,
    josephC,
    songS
]

las = [ NickRose,
        ZhenzhengHu,
        SerenaChan,
        JiaweiJiang,
        DerekChiu,
        MonaLee,
        AmrutaYelamanchili,
        LiuxiaoZhang,
        ChristineLiu,
        JiJunChen,
        JoshuaPerline,
        YinxueBian,
        TammyChen,
        LuiseRygaard,
        AlexFreeman,
        MichelleTsai,
        MariaCan,
        CarolineChan,
        RyanRiddle,
        CharlesThorson,
        FangzhouChen,
        NicholasDill,
        GurubalaKotta,
        AdamBrown,
        KalonCheung,
        NolanTakeshita,
        ChristopherKilian,
        AmyShu,
        MichelleHan,
        TierneyHenderson,
        HarrisQuraishi,
        PriscillaBermudez,
        AlisonTang,
        VeersuvratRajpal,
        FranklinLee,
        MateoMarindelReal,
        VictorSolis,
        BryceSmith,
        BrookeTencer,
        NavsharanSingh,
        KwanKitCheung,
        EdwanHernandez,
        StevenHolman ]

labdev = [
    peterS, laurenM, jessicaA, paulI, andyS, michaelB
]

tait = [
    benC, songS, josephC, seanS, benC, sulaimanS, rafayelM, kalleyT, oliverO,
    kylaS, carenT, jobelV, brandonC, saagarB, lukeD, hunterB, adamK, CarlosFlores,
]

edx = [
 josephC, seanS, songS,
]

snap = [
]


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
    labdev: labdev
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/
function buildPerson(data, width) {
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.
    if (!data.imgSrc) {
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

/** TODO -- write a function to replace bad links w/ NYP3D.png? */
//
// $.ajax({
//     type: 'HEAD',
//     url: 'http://yoursite.com/page.html',
// success: function() {
//         // page exists
// },
// error: function() {
//         // page does not exist
// }
// });

/** EDIT THIS TO ADD NEW GROUPS */
window.onload = function() {
    // Parameters: a section (HTML 'id') and num of images per row.
    buildGroup("instructors", 1);
    buildGroup("tas", 5);
    buildGroup("readers", 3);
    buildGroup("las", 5);
    buildGroup("tait", 5);
    buildGroup("edx", 5);
    buildGroup("snap", 5);
    buildGroup("labdev", 3);
}