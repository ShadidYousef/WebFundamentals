var likeText = document.querySelector(".likeText");
var mathColor = document.querySelector(".mathColor");
var count = 3;
function addLike (likeButton)
{
    count++;
    likeText.innerText=count;
}
function changeColor(paragraph)
{
    paragraph.style.backgroundColor="tomato";
}
function changeColor2(paragraph)
{
    paragraph.style.color="whitesmoke";
}
function changeColor3(mathColor)
{
    mathColor.style.color="yellow";
}