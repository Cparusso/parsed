const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.getElementsByClassName('btn-primary')[0]

function extractInfo(json){
  let personObj = json.results[0]
  document.getElementById('street').innerText = `${personObj.location.street}`
  document.getElementById('city').innerText = `${personObj.location.city}`
  document.getElementById('state').innerText = `${personObj.location.state}`
  document.getElementById('postcode').innerText = `${personObj.location.postcode}`
  document.getElementById('fullname').innerText = `${personObj.name.title} ${personObj.name.first} ${personObj.name.last}`
  document.getElementById('phone').innerText = `${personObj.phone}`
  document.getElementById('cell').innerText = `${personObj.cell}`
  document.getElementById('email').innerText = `${personObj.email}`
  document.getElementById('date_of_birth').innerText = `${personObj.dob.date}`
}

const getUserInfo = () => {
  const userInfo = fetch('https://randomuser.me/api/')
    .then (res => res.json())
    .then (res => extractInfo(res))
}

button.addEventListener('click', getUserInfo)
