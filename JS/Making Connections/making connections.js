var nameChange = document.querySelector(".nameChange");
var itemPoof = document.querySelector(".itemPoof");
var itemPoof2 = document.querySelector(".itemPoof2")
var upperNumber = document.getElementById("upperSidebarNumber")
var lowerNumber = document.getElementById("lowerSidebarNumber");
function nameBtn()
{
    nameChange.innerText="Muath Alefai";
}

function removeItem()
{
    var count = upperNumber.innerText;
    count--;
    upperNumber.innerText=count;
    itemPoof.remove();
}

function removeItem2()
{   
    var count = upperNumber.innerText;
    count--;
    upperNumber.innerText=count;
    itemPoof2.remove();
}
function lowerNum ()
{
    var count = lowerNumber.innerText;
    count++;
    lowerNumber.innerText=count;
}