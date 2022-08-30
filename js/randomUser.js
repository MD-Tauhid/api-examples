const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h2>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <img src="${user.picture.large}">
            <h4>User Info</h4>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
            <p>Gender: ${user.gender}</p>
            <p>Email: ${user.email}</p>
        `;
        userContainer.appendChild(userDiv);
    }
}

loadUsers();