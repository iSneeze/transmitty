
var decodeRef = { 
    '░█':     'a',
    '█░░░':   'b',
    '█░█░':   'c',
    '█░░':    'd',
    '░':      'e',
    '░░█░':   'f',
    '██░':    'g',
    '░░░░':   'h',
    '░░':     'i',
    '░███':   'j',
    '█░█':    'k',
    '░█░░':   'l',
    '██':     'm',
    '█░':     'n',
    '███':    'o',
    '░██░':   'p',
    '██░█':   'q',
    '░█░':    'r',
    '░░░':    's',
    '█':      't',
    '░░█':    'u',
    '░░░█':   'v',
    '░██':    'w',
    '█░░█':   'x',
    '█░██':   'y',
    '██░░':   'z',
    '░████':  '1',
    '░░███':  '2',
    '░░░██':  '3',
    '░░░░█':  '4',
    '░░░░░':  '5',
    '█░░░░':  '6',
    '██░░░':  '7',
    '███░░':  '8',
    '████░':  '9',
    '█████':  '0',  
};

var encodeRef = { 
    'a' : '░█'   ,
    'b' : '█░░░' ,
    'c' : '█░█░' ,
    'd' : '█░░'  ,
    'e' : '░'    ,
    'f' : '░░█░' ,
    'g' : '██░'  ,
    'h' : '░░░░' ,
    'i' : '░░'   ,
    'j' : '░███' ,
    'k' : '█░█'  ,
    'l' : '░█░░' ,
    'm' : '██'   ,
    'n' : '█░'   ,
    'o' : '███'  ,
    'p' : '░██░' ,
    'q' : '██░█' ,
    'r' : '░█░'  ,
    's' : '░░░'  ,
    't' : '█'    ,
    'u' : '░░█'  ,
    'v' : '░░░█' ,
    'w' : '░██'  ,
    'x' : '█░░█' ,
    'y' : '█░██' ,
    'z' : '██░░' ,
    '1' : '░████',
    '2' : '░░███',
    '3' : '░░░██',
    '4' : '░░░░█',
    '5' : '░░░░░',
    '6' : '█░░░░',
    '7' : '██░░░',
    '8' : '███░░',
    '9' : '████░',
    '0' : '█████',  
};

function encode() {
    let humanField = document.getElementById("humanReadable");
    let mittyField = document.getElementById("mittyCypher");

    let cypher = humanField.value.toLowerCase()
        // seperate words
        .split(' ')
        .map( word =>
            // words -> letters
            word.split('').map( letter => 
                // tranlate each letter
                /^[a-z0-9]*$/gi.test(letter) ? 
                // put in the half blocks ▀
                encodeRef[letter].split('').join('▀') : letter
                // seperate them with spaces
            ).join(' ')
        ).join(' ');
    // write it to the mitty box
    mittyField.value = cypher;
}

function decode(){
    let humanField = document.getElementById("humanReadable");
    let mittyField = document.getElementById("mittyCypher");

    let clean = mittyField.value.replaceAll('▀', '');
    
    let decyphered = clean.split(' ')
        .map( letter => 
            !letter.includes('█') && !letter.includes('░') ? 
            letter : decodeRef[letter]
        ).join('');
    
    humanField.value = decyphered

}