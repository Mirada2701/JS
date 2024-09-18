//1
function countSpaces(text) {
    let words = text.split(" ");
    return words.length - 1;
}

const text = "Hello world! This is a test.";
console.log(countSpaces(text));
//2
function UpFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(UpFirstLetter("hello world!")); 
//3
function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.length;
}

console.log(countWords("Hello world! This is a test. gfdd    fdsfsd  fdsfds   fdsfds"));
//4
function Abbr(text)
{
    let abbr = text.trim().split(" ");
    let final = abbr.reduce((r,c) => r + c[0],"");
    return final.toUpperCase();
}
let colors = "Cascading style sheet";
console.log(Abbr(colors));
//5
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const reversedStr = cleanedStr.split('').reverse().join('');    

    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
//6
function parseUrl(url) {

    if (!url) {
        console.error('Incorrecr URL');
        return null;
    }
    
    const protocolEndIndex = url.indexOf(':');
    if (protocolEndIndex === -1) {
        console.error('Incorrecr URL format: no protocol');
        return null;
    }
    const protocol = url.substring(0, protocolEndIndex);

    const restOfUrl = url.substring(protocolEndIndex + 3);

    const pathStartIndex = restOfUrl.indexOf('/');
    let domain = restOfUrl;
    let path = '';

    if (pathStartIndex !== -1) {
        domain = restOfUrl.substring(0, pathStartIndex);
        path = restOfUrl.substring(pathStartIndex);
    }

    const info = `Protocol: ${protocol}, Domain: ${domain}, Path: ${path}`;
    console.log(info);

    return info;
}


parseUrl("https://itstep.org/ua/about"); 
parseUrl("http://example.com"); 
parseUrl("ftp://files.example.com/path/to/file");