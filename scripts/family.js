// JSON mappings for staff images.
// Create a new object to add a new staff member
// and add it to the appropriate lists (below all objects)
// Anonymous objects work just fine in lists
// However, if someone belongs in multiple groups, this makes it very easy.

sample = {
    name: 'Title First Last',
    img: 'path/to/FirstNameLastName.jpg',
    imgSrc: 'FirstNameLastName.jpg', // is ~cs10/images/small/*
    web: '',
    bio: 'FirstNameLastName.txt', // is ~cs10/bios/*
}

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
    img: '/Fa12/MichaelBall.jpg',
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
    img: 'images/Fa12/IanBirnam.jpg',
    imgSrc: 'IanBirnam.jpg',
    web: '',
    bio: 'IanBio.txt',
    email: 'ibirnam@berkeley.edu'
}
jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/MaxDougherty.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    web: '',
    bio: 'JeffreyBio.txt',
    email: 'jasnowiss@berkeley.edu'
}
peterS = {
    name: 'TA Peter Sujan',
    img: 'PeterSujan.jpg',
    imgSrc: 'PeterSujan.jpg',
    web: '',
    bio: 'PeterBio.txt',
    email: 'peterasujan@berkeley.edu'
}
victoriaS = {
    name: 'TA Victoria Shi',
    img: 'Fa12/MaxDougherty.jpg',
    imgSrc: 'VictoriaShi.jpg',
    web: '',
    bio: 'VictoriaBio.txt',
    email: 'mdougherty@berkeley.edu'
}
rachelH = {
    name: 'TA Rachel Huang',
    img: 'path',
    imgSrc: 'RachelHuang',
    web: '',
    bio: 'RachelHuang.txt',
    email: ''
}
jannaG = {
    name: 'TA Janna Golden',
    img: '',
    imgSrc: 'JannaGolden.jpg',
    web: '',
    bio: 'JannaBio.txt',
    email: ''
}
sumerM = {
    name: 'TA Sumer Mohammad',
    img: '',
    imgSrc: 'SumerMohammed.jpg',
    web: '',
    bio: 'SumerBio.txt',
    email: ''
}

// Readers
audreyC = {
    name: 'Reader Audrey Chou',
    img: 'Fa13/AudreyChou.jpg',
    imgSrc: 'AudreyChou.jpg',
    web: '',
    bio: 'AudreyChou.txt',
}
josephC = {
    name: 'Reader Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg',
    web: '',
    bio: 'JosephCawthorne.txt',
}
songS   = {
    name: 'Reader Song Sok',
    img: 'Fa13/SongSok.jpg',
    imgSrc: 'SongSok.jpg',
    web: '',
    bio: 'SongSok.txt',
}
claireW = {
    name: 'Reader Claire Wantanabe',
    img: 'Fa13/ClaireWantanabe.jpg',
    imgSrc: 'ClaireWantanabe.jpg',
    web: '',
    bio: 'ClaireWantanabe.txt',
}
jaclynB = {
    name: 'Reader Jaclyn Burge',
    img: 'Fa13/JaclynBurge.jpg',
    imgSrc: 'JaclynBurge.jpg',
    web: '',
    bio: 'JaclynBurge.txt',
}
andyS   = {
    name: 'Reader Andy Schmidt',
    img: 'Fa13/AndySchmidt.jpg',
    imgSrc: 'AndySchmidt.jpg',
    web: '',
    bio: 'AndySchmidt.txt',
}

// Staff
laurenM = {
    name: 'Project Manager Lauren Mock',
    img: '',
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
    audreyC,
    andyS,
    songS,
    claireW,
    josephC,
    jaclynB
];

las = [
];