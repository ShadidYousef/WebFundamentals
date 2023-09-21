//login-logout button
var btn=document.querySelector(".btn2")
function login(element)
{
    element.classList = "btn2";
    element.innerText = "Logout";
}
//add definition button remove
function definition(element)
{
    element.remove();
}
//like buttons
function like(element)
{
    console.log("Ninja was liked");
    alert("Ninja was liked");
}