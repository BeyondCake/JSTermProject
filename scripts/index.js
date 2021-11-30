//index, alphabet, storage done by Eugene
//ajax, plugin was done by Mykel

var textArea = document.createElement("textarea");
textArea.className = "textbox";
document.body.appendChild(textArea);
//testing

var submitButton = document.createElement("button");
submitButton.id = "submit"
submitButton.textContent = "Submit"
document.body.appendChild(submitButton);

var button = document.getElementById("submit")

button.onclick = function checkText()
{
    var text = textArea.value.toLowerCase();
    if (text == 'alien')
    {
        showAlien()
        console.log('text is alien')
    }
    if (text == 'walk')
    {
        timer = window.setInterval(walk, 100) 
    }
    if (text == 'storage')
    {
        storageLink()
    }
    if (text == 'plugin')
    {
        pluginLink()
    }
    if (text == 'bye')
    {
        a.style.display = 'none';
    }
    if (text == 'stop')
    {
        stop();
    }
    if (text == 'run')
    {
        timer = window.setInterval(run, 10)
    }
    if (text == 'clear')
    {
        clear();
    }
    if (text == 'ajax')
    {
        getAdvice();
    }
    if (text == 'alphabet')
    {
        showAlphpabet();
    }
    if (text == 'left')
    {
        comeBack()
    }
}

function showAlphpabet()
{
    var link = document.createElement('p')
    link.textContent = "alphabet link"
    link.id = "link"
    document.body.appendChild(link)

    document.querySelector('#link').addEventListener("click", () => 
    {
        window.location.href = "alphabet.html";
    })
}

function storageLink()
{
    var storage = document.createElement("p")
    storage.textContent = "Storage Link"
    storage.id = "storage"
    document.body.appendChild(storage)
    document.querySelector('#storage').addEventListener("click", () => 
    {
        window.location.href = "storage.html";
    })
    //create a line of text called "Storage Link" which
    //needs to be href'd to storage.html
}

function pluginLink()
{
    var plugin = document.createElement("p")
    plugin.textContent = "Plugin Link"
    plugin.id = "plugin"
    document.body.appendChild(plugin)
    document.querySelector('#plugin').addEventListener("click", () => 
    {
        window.location.href = "plugin.html";
    })
    //copied storageLink for plugin
}

function showAlien()
{
    var alienImage = document.createElement("img")
    alienImage.id="a"
    alienImage.src = "images/alien/alienrwalk0.gif"
    alienImage.style.position = "absolute";
    alienImage.style.left = "0";
    document.body.appendChild(alienImage)
    //This just renders the alien onto the page. 
}

timer = null
stepNumber = 0
direction = "right"

function step()
{
    let walkNumber = stepNumber % 30
    if(direction == "right"){
        a.src = "images/alien/alienrwalk" + walkNumber + ".gif"
    }
    else{
        a.src = "images/alien/alienlwalk" + walkNumber + ".gif"
    }
    stepNumber += 1
}

//the alien is now walking but very choppily

function walk()
{
    step()
    if(direction == "right"){
        a.style.left = parseInt(a.style.left) + 2 + 'px'
    } else if (direction == "left"){
        a.style.left = parseInt(a.style.left) - 2 + 'px'
    }
    if((parseInt(a.style.left) + a.width) > window.outerWidth - 20){
        direction = "left"
    }
}

function run()
{
    step()
    if(direction == "right"){
        a.style.left = parseInt(a.style.left) + 2 + 'px'
    } else if (direction == "left"){
        a.style.left = parseInt(a.style.left) - 2 + 'px'
    }
    if((parseInt(a.style.left) + a.width) > window.outerWidth - 20){
        direction = "left"
    }
}

function stop()
{
    if(timer != null)
    {
        clearInterval(timer)
        timer = null
    }
}

//<<<<<<< HEAD
function clear()
{
    location.reload();
}

//======================
function getAdvice()
{
    var request = new XMLHttpRequest();
    request.open("GET", "../advice.txt", true);
    var h1 = document.createElement('h1');
    h1.id = "advice";
    document.body.appendChild(h1);

    request.onload = function() {
    var newtext = document.createTextNode(request.responseText),
    advice1 = document.getElementById("advice");
    advice1.appendChild(newtext);
    advice1.innerHTML = request.responseText;
    
    }
    request.send();
}