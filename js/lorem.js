function klik(){
    var text = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form";
    var sentence = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.";
    var word = "Lorem";

    var radio = document.getElementById("paragraf");
    var radio1 = document.getElementById("setence");
    var radio2 = document.getElementById("word");


    if(radio.checked){
        document.getElementById("para1").innerHTML = text;
    }
    else if(radio1.checked) {
        document.getElementById("para1").innerHTML = sentence;
    }
    else if(radio2.checked){
        document.getElementById("para1").innerHTML = word;
    }
    else {
        alert("Nothing to choose ");
    }
}

