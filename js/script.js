//challenge 1: age in days

function ageInDays(){
    var birthYear = prompt("What Year were you born?");
    var ageDays = (2020 - birthYear) * 365;
//  create text node and add it to html
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    h1.setAttribute('id','ageInDays'); //h1 has ageDays id
    h1.appendChild(textAnswer); //add h1 id to textanswer
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
