// JavaScript source code
function loadFile()
{
    let request = new XMLHttpRequest();
    request.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    request.open("GET", "DataBase.xml", true); //Открывает соединение с сервером
    request.send();
}

