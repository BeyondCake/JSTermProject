var textArea = document.createElement("textarea");
textArea.className = "textbox"
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
        timer = window.setInterval(walk, 100) //moved setInterval from walk function to here 
        console.log('text is step')
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
        stop()
    }
    if (text == 'run')
    {
        run()
    }
    if (text == 'clear')
    {
        clear()
    }
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
    document.body.appendChild(alienImage)
    a.style.position = 'absolute'
    a.style.left = 0
    //This just renders the alien onto the page. 
}

timer = null
stepNumber = 0

function step()
{
    let walkNumber = stepNumber % 30
    a.src = "images/alien/alienrwalk" + walkNumber + ".gif"
    stepNumber += 1
}

//the alien is now walking but very choppily

function walk()
{
    step()
    a.style.left = parseInt(a.style.left) + 1 + 'px'
}

function run()
{
    step()
    a.style.left = parseInt(a.style.left) + 5 + 'px'
}

function stop()
{
    if(timer != null)
    {
        clearInterval(timer)
        timer = null
    }
}

function clear()
{
    location.reload();
}