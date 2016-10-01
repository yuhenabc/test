// match
function matchDemo() {
    var src = "azcafAJAC";
    var reg1 = /[a-c]/;
    var result1 = src.match(reg1);
    var reg2 = /[a-c]/g;
    var result2 = src.match(reg2);
    var reg3 = /[a-c]/ig;
    var result3 = src.match(reg3);
    console.log(result1, result2, result3);
    console.log(result1 instanceof Array);
    console.log(result1.length);
}
console.log('match:');
matchDemo();

// exec
function execDemo() {
    var patt1 = /e+/;
    var re1 = patt1.exec("The best things in life are free");
    var patt2 = /e+/g;
    var re2 = patt2.exec("The best things in life are free");
    console.log(re1, re2);
    console.log(re1 == re2);
    console.log(re1 === re2);
    console.log(re1[0] === re2[0]);
}
console.log('exec:');
execDemo();

// test
function testDemo() {
    var p1 = /e+/;
    var r1 = p1.test("The best things in life are free");
    var p2 = /e+/g;
    var r2 = p2.test("The best things in life are free");
    console.log(r1, r2);
    console.log(r1 === r2);
}

console.log('test:');
testDemo();

// search
function searchDemo() {
    var str = "is but a Dream within a dream";
    var regex1 = /dream/;
    var pos1 = str.search(regex1);
    var regex2 = /dream/i;
    var pos2 = str.search(regex2);
    var regex3 = /dream/ig;
    var pos3 = str.search(regex3);
    console.log(pos1, pos2, pos3);
}
console.log('search:');
searchDemo();

//compile
function CompileDemo() {
    var rs;
    var s = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPp"
    var r = new RegExp("[A-Z]", "g");
    var a1 = s.match(r);
    r.compile("[a-z]", "g");
    var a2 = s.match(r);
    console.log(a1, a2);
}
console.log('compile:');
CompileDemo();

// indexOf
function indexOfDemo() {
    var str = 'A rat catch a tiger(toy, haha)!';
    var reg1 = /cat/;
    console.log(str.indexOf('cat'));
}
console.log('indexOf:');
indexOfDemo();
