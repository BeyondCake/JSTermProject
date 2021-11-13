var header = document.createElement('h1');
header.className = 'storage';
header.innerHTML = 'What is local storage?';
document.body.appendChild(header);


var title = document.createElement('p');
title.className = 'intro';
title.innerHTML = 'Local storage is a form of web storage that can store data for long periods of time. '
document.body.appendChild(title)

var introExplanation = document.createElement('p')
introExplanation.className = 'explanation'
introExplanation.innerHTML = 'However, local storage can only store strings. Since you can only store strings, if you want to store any data, you MUST stringify it. i.e. JSON.stringify(...)'
document.body.appendChild(introExplanation)

var whenToUse = document.createElement('p')
whenToUse.className = "when"
whenToUse.innerHTML = 'If the information/data is not in need of being stored somewhere with high security, using local storage is easier/faster. Also, to note, after you are done with your data, which would most likely be sent to a server, it is good practice to clear your storage'
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
