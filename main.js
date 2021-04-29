function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <=6; i++) {
        inputs.push(document.getElementById("input_para"+i).value)
        
    }
    document.getElementById("paragraph1").innerHTML = inputs.join(". ")
}


function getParagraph2() {
    var inputs = [];
    for (var i = 1; i <=6; i++) {
        inputs.push(document.getElementById("input2_para"+i).value)
        
    }
    document.getElementById("paragraph2").innerHTML = inputs.join(". ")
}