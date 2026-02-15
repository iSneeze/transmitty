
var decodeRefBob = {
'𝓐' : 'A',
'𝓑' : 'B',
'𝓒' : 'C',
'𝓓' : 'D',
'𝓔' : 'E',
'𝓕' : 'F',
'𝓖' : 'G',
'𝓗' : 'H',
'𝓘' : 'I',
'𝓙' : 'J',
'𝓚' : 'K',
'𝓛' : 'L',
'𝓜' : 'M',
'𝓝' : 'N',
'𝓞' : 'O',
'𝓟' : 'P',
'𝓠' : 'Q',
'𝓡' : 'R',
'𝓢' : 'S',
'𝓣' : 'T',
'𝓤' : 'U',
'𝓥' : 'V',
'𝓦' : 'W',
'𝓧' : 'X',
'𝓨' : 'Y',
'𝓩' : 'Z',
};

var encodeRefBob = {
'A' : '𝓐',
'B' : '𝓑',
'C' : '𝓒',
'D' : '𝓓',
'E' : '𝓔',
'F' : '𝓕',
'G' : '𝓖',
'H' : '𝓗',
'I' : '𝓘',
'J' : '𝓙',
'K' : '𝓚',
'L' : '𝓛',
'M' : '𝓜',
'N' : '𝓝',
'O' : '𝓞',
'P' : '𝓟',
'Q' : '𝓠',
'R' : '𝓡',
'S' : '𝓢',
'T' : '𝓣',
'U' : '𝓤',
'V' : '𝓥',
'W' : '𝓦',
'X' : '𝓧',
'Y' : '𝓨',
'Z' : '𝓩',
};


function translate(text, dictionary) {
  return [...text].map(char => dictionary[char] || char).join('');
}

function encodeBoberta() {
    let humanField = document.getElementById("humanReadableBoberta");
    let mittyField = document.getElementById("bobertaCypher");

    let cypher = translate(humanField.value.toUpperCase(), encodeRefBob)
    mittyField.value = cypher;
}

function decodeBoberta() {
    let humanField = document.getElementById("humanReadableBoberta");
    let mittyField = document.getElementById("bobertaCypher");

    let decyphered = translate(mittyField.value, decodeRefBob);
    humanField.value = decyphered

    document.getElementById("hidden").removeAttribute("class")
}

encodeBoberta();

