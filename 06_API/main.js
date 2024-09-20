const card = document.querySelector('#cards-div');
const form = document.forms.users;
const searchedUser = form.elements.search;

async function loadUser() {
    const gitHubApi = `https://api.github.com/users/${searchedUser.value}`;
    try {

        const response = await fetch(gitHubApi);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        console.log("Status:", response.status); // 200 OK

        const data = await response.json();
        console.log(data);

        card.innerHTML = ``;
        card.innerHTML += `<div class="card mt-4" style="width: 81rem;">
            <img src="${data.avatar_url}" class="card-img-top">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name:${data.name}</li>
                <li class="list-group-item">Login:${data.login}</li>
                <li class="list-group-item">City:${data.location || 'N/A'}</li>
                <li class="list-group-item">Email:${data.email || 'N/A'}</li>
                <li class="list-group-item">Followers: ${data.followers}</li>
                <li class="list-group-item">Following: ${data.following}</li>
            </ul>
            <div class="card-body">
                <a href${data.html_url}" class="card-link">Url to github</a>
                <a href${data.blog}" class="card-link">Blog</a>
            </div>
        </div>`;
    } catch (error) {
        console.error("Error fetching user:", error);
    }

    
}

form.onsubmit = (e)=>{
    e.preventDefault();
    loadUser();
}
