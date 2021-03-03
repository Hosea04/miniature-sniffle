function sebmitFunction(event) {
    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var femaleNames = ['Awusi', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];

const date = document.getElementById("date").value
const cc = parseInt(document.getElementById("centure").value)
console.log(
    date
)
const dayOfTheWeek = Math.round(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7);
console.log(dayOfTheWeek);
let akanName = gender;

if (gender == "male"){
    akanName = male [dayOfTheWeek]
}
else if (gender == "female"){
    akanName = femaleNames [dayOfTheWeek]
}
else {
    akanName = "Invalid gender";
}
document.getElementById("test").innerHTML = "your Akan name is" + akanName
event.preventDefault()
};