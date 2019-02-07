// Your code here!
function myFunction(a, b) {
    
    return a + b;  //function return sum of a and b
}
function array() {
    var pens;
    pens = ["red", "blue", "green", "pink", "black"];
    markers = pens;
    console.log(markers);
    var i;
    for (i = 0; i < markers.length; i++) {
        alert(pens[i]);

    }
    alert("length of array is :" + markers.length);

}