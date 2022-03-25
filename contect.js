var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'Name :' + name + '<br/> Email :' + email + '<br/> Subject :' + subject + '<br/> Message :' + message;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "toofitcontect@gmail.com",
        Password: "hvrbvmbmwqhbkksv",
        To: 'toofitcontect@gmail.com',
        From: email,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
})