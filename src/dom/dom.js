export const createDiv = () => { 
    const div = document.createElement('div');
    div.textContent = 'hello'
    div.id = 'new-div'
    return div;
}

export const appendDiv = () => { 
    document.body.appendChild(createDiv());
}