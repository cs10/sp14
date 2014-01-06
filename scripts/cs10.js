// Function used to highlight the current day.
function updateCalendar()
{
    var today = new Date();
    var tdate = today.getDate();
    var tmonth = today.getMonth() + 1;
    //var tday = today.getDay();
    
    //console.log("TODAY: \n" + today);
    var tableCellArr = new Array();
    tableCellArr = document.getElementsByTagName("td");
    for(var i = 0; i < tableCellArr.length; i++)
    {
        var tagObj = tableCellArr[i];
        var mo = tagObj.id;
        //console.log("id:\t" + mo)
        var dys = tagObj.title.split(",");
        //console.log("days:\t" + dys);
            //golden rectangle for current date
            for (var j = 0; j < dys.length; j++) {
                if (dys[j] == tdate && mo == tmonth) {
                    tagObj.style.border="10px solid Gold";
                }else if (mo > 0 && dys[j] > 0 && ((mo == tmonth && dys[j] < tdate) || mo < tmonth)){
		    tagObj.style.backgroundColor="#BABABA";
		}
            }
    } //closing for loop
}

function displaySpeech(img_name,img_src)
{
    document[img_name].src = img_src;
}
