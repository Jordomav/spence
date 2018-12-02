function letterCheck()
{
    let inputField = document.getElementById('letter-input').value;
    let letters = /^[A-Za-z]+$/;
    if(inputField[0].match(letters))
    {
        alert('Letter');
    } else {
        alert('Not a letter');
    }
}

document.getElementById("myBtn").addEventListener("click", letterCheck);