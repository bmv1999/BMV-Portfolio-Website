let form = document.getElementById("contact_Form");

form.addEventListener("submit",validateForm);

function validateForm(e)
{
    e.preventDefault();
    let name = document.getElementById("name").value;
    console.log("User name: ", name);
    if(!name)
    {
        alert("Please enter your name. ");
        return;
    }
    let email = document.getElementById("email").value;
    console.log("email of user: ",email);
    if(!email)
    {
        alert("Please enter your email");
        return;
    }

    let comment = document.getElementById("comment").value;
    if(!reasons)
    {
        alert("Please enter a comment for the reason of contact.");
        return
    }

}

