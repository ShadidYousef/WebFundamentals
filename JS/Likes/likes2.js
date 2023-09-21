var likeText = document.querySelector(".likeText");
var likeText2 = document.querySelector(".likeText2");
var likeText3 = document.querySelector(".likeText3");

var count = likeText.innerText;
var count2 = likeText2.innerText;
var count3 = likeText3.innerText;

function addLike()
{
    count++;
    likeText.innerText= count ;
    // console.log(count)
    // console.log("Inner is :" + likeText.innerText)
    // likeText.innerText=count;
}
function addLike2()
{
    count2++;
    likeText2.innerText=count2;
}
function addLike3()
{
    count3++;
    likeText3.innerText=count3;
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









// let value = Math.floor(Math.random() * 10) + 1;
// console.log(value)


// let data = {
//     "value" : mohaamd, 
//     "number" : value
// }
