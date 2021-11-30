var header = document.createElement('h1');
header.className = 'storage';
header.innerHTML = 'What is local storage?';
document.body.appendChild(header);


var title = document.createElement('p');
title.className = 'intro';
title.innerHTML = 'Local storage is a form of web storage that can store data for long periods of time'

var introExplanation = document.createElement('p')
introExplanation.className = 'explanation'
introExplanation.innerHTML = 'However, local storage can only store strings. if you want to store any data, you MUST stringify it. i.e. JSON.stringify(...). THere are also commands such as getItem(), removeItem(), removeItem()'
document.body.appendChild(introExplanation)

var whenToUse = document.createElement('p')
whenToUse.className = "when"
whenToUse.innerHTML = 'using local storage is easier/faster. Also, to note, after you are done with your data, it is good practice to clear your storage'
document.body.appendChild(whenToUse)

var limits = document.createElement('p')
limits.className = "limit"
limits.innerHTML = 'Although this sounds good, there are some major limitations:'
document.body.appendChild(limits)

var disadvantages = document.createElement('p')
disadvantages.className = 'disadvantage'
disadvantages.innerHTML = 'Insecure Data, Limited Storage, Synchronous Operations'
document.body.appendChild(disadvantages)


//There's a link to storage in his example and just do a write up

var insertKey = document.createElement('textarea')
insertKey.id = 'insertKey'
document.body.appendChild(insertKey)

var insertValue = document.createElement('textarea')
insertValue.id = 'insertValue'
document.body.appendChild(insertValue);

var insertButton = document.createElement('button')
insertButton.id =  'insertButton'
insertButton.textContent = 'Insert Values'
document.body.appendChild(insertButton)

var showStorageKey = document.createElement('textarea')
showStorageKey.id = 'showOutput'
document.body.appendChild(showStorageKey)

const inpKey = document.getElementById('insertKey')
const inpValue = document.getElementById('insertValue')

const showOutput = document.getElementById('showOutput')


const btnInsert = document.getElementById('insertButton')


btnInsert.onclick = function()
{
    const key = inpKey.value;
    const value = inpValue.value;

    console.log(key)
    console.log(value)

    if (key && value)
    {
        localStorage.setItem(key, value);
        //location.reload();
    };

    for (let i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        showOutput.innerHTML += `${key}: ${value}`;
    }

}