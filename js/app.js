






{

    //add the table here
    const table = document.createElement('table');
    articleElem.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);

    
}

//Constructed objects can still use standalone functions when needed.
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
