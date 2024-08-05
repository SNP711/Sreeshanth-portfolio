function sendMail(){
    var params = {
        Name : document.getElementById("Name").value ,
        Email : document.getElementById("Email").value ,
        Subject : document.getElementById("Subject").value ,
        Message : document.getElementById("Message").value ,
    };
    const serviceID = "service_xmh6zfh";
    const templateID = "template_v8osy2k";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Subject").value = "";
            document.getElementById("Message").value = "";
            console.log(res);
            alert("Your message sent succesfully");
        }
    )
    .catch((err) => console.log(err));
}

