function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}
var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 0);
}
Scroll();


function Transformingtext() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function MyFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function writeMessage() {
    document.forms[0].mySecondInput.value = document.forms[0].myInput.value;
}

function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
}
<script>
    function Hello() {
        document.getElementById("demo").innerHTML = "You selected some text"
}
</script>
