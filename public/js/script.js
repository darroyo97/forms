// let myButton = document.getElementById('myButton');

// myButton.addEventListener('click', (e) => {
//     alert('we clicked a button')
// })

// fetch('url', {
//     method: "POST",
//     body: "json data"
// })
//     .then()
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
    let email = document.getElementById('email')
    let fname = document.getElementById('fname')
    let number = document.getElementById('number')
    let lname = document.getElementById('lname')
    let zip = document.getElementById('zip')

    fetch('/', {
        method: "POST",
        header: { 'Content-type': 'application/json' },
        body: {
            'email': email.value,
            'lname': lname.value,
            'fname': fname.value,
            'zip': zip.value,
            'number': number.value
        }
    })
        .then((response) => {
            let msg = document.getElementById('msg');
            msg.textContent = "Your form was submitted"
        })
        .catch(() => {
            let msg = document.getElementById('msg');
            msg.textContent = "error"
        })
})