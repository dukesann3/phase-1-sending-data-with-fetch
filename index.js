// Add your code here

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('form#submital-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = document.querySelector('input#user-name').value;
        const userEmail = document.querySelector('input#user-email').value;
        submitData(userName,userEmail);
    })

})

function submitData(name, email) {

    if (!name || !email) {
        alert('You Need to Fill Out Both Username and User Email Before Submital');
        return;
    }

    let body = {
        name: name,
        email: email,
    }

    let configuration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({body})
    }

    fetch('http://localhost:3000/users', configuration)
    .then(response => response.json())
    .then((data) => {
        const {id} = data;
        const p = document.createElement('p');
        p.innerHTML = id;
        document.body.appendChild(p);
    })
    .catch((error) => {
        const p = document.createElement('p');
        p.innerHTML = error.message;
        document.body.appendChild(p);
        console.log(error.message);
    });
}

/*
function bigDivAndListsCreator(object, grandParentDOM) {
    for (let item in object) {
        //creates DOM for parent HTML emcompassing user info and what kind of user info.
        //(newParentDOM)
        let parentDOM = document.createElement('div');
        const { id } = object;

        //for what is explaining what kind of user info it is e.g.: email, username, etc.
        let newListItemIdentifier = document.createElement('h3');
        newListItemIdentifier.setAttribute('id', id);
        newListItemIdentifier.textContent = item;
        parentDOM.appendChild(newListItemIdentifier);
        //for what is the actual user info such as email: whataever@blah.com
        let newListItemDOM = document.createElement('p');
        newListItemDOM.setAttribute('id', id);
        newListItemDOM.textContent = object[item];
        parentDOM.appendChild(newListItemDOM);

        grandParentDOM.appendChild(parentDOM);
    }

    return;
}
*/

