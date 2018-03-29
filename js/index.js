const a = parseFloat(prompt('enter a'));
const b = parseFloat(prompt('enter b'));
const c = parseFloat(prompt('enter c'));

document.write(a+'x<sup>2</sup>+'+b+'x+'+c+'=0'+'<br>');

let d=b**2-4*a*c;
document.write('дискримінант='+d+'<br>');

const result = calcResult(a, b, c, d);

function calcResult(a, b, c, d) {
    if (d==0) {
        let x1=(-b+Math.sqrt(b))/(2*a);
        document.write('x1='+ x1);
    }
    if (d>0) {
        let x1=(-b+Math.sqrt(b))/(2*a);
        let x2=(-b-Math.sqrt(b))/(2*a);
        document.write('x1=' + x1 +'<br>' + 'x2='+ x2);
    }
    else {
        document.write('нема розвязку');
    }
}