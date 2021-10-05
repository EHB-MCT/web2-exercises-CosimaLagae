

window.onload = function() {
    console.log("loaded");

    //add event listener to submit button of the FORM (niet de input, over heel de form)
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('nameInput').value;
        let order = document.getElementById('nameInput').value;

        let message  = `the order of the customer ${name} is the following:
        ${order}. The customer may be notified by email: ${email}`;

        document.getElementById('messages').innerHTML = message;

        console.log(name);
        console.log(email);
        console.log(order);

        console.log('submit triggered!');
    });

};