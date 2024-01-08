function incrementTracker()
{
    let counter = document.getElementById('count');
    let count = counter.innerHTML
    counter.innerHTML = Number(count) + 1
}

function listAppending()
{
    let input = document.getElementById('input');
    let list = document.getElementById("list");
    let inputValue = input.value
    if (inputValue === "") //checking null input
    {
        return
    } 
    else 
    {
        var templi = document.createElement('li'); 
        templi.textContent = inputValue;
        templi.classList.add('text');
        list.appendChild(templi);
    }
}