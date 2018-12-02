function add() {
    var answer = document.getElementById("answer");
    var one = parseInt(document.getElementById("one").value);
    var two = parseInt(document.getElementById("two").value);
    var three = parseInt(document.getElementById("three").value);
    var four = parseInt(document.getElementById("four").value);
    var five = parseInt(document.getElementById("five").value);
    var added = one + two + three + four + five;
    answer.textContent = added;
}

document.getElementById("myBtn").addEventListener("click", add);