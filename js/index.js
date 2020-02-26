// load the document
document.addEventListener("DOMContentLoaded", () => {
    
    // github-form search element
    const searchForm = document.getElementById("github-form")
    // user-list
    const userList = document.getElementById("user-list")

    // form eventlistener for submitting
    searchForm.addEventListener("submit", event => {
        event.preventDefault()
        // matches what is searched
        const search = event.target.search.value
        
        // fetch the api
        fetch(`https://api.github.com/search/users?q=${search}`)
        // take event and fetch json
        .then(response => response.json())
        // turn the json into legible data
        .then(result => {
            //iterate over each user with username
            result.items.forEach(user => {
                // renderUser function 
                renderUser(user)
            })
        })

        // reset the target with blank
        event.target.reset()
    })

    // displays user data
    function renderUser(user) {
        // creating a new li element so we can append later
        const newLi = document.createElement("li")
        // html format for displaying user data
        newLi.innerHTML = `
            <h3>${user.login}</h3>
            <img src="${user.avatar_url}"/><br>
            <a href="${user.html_url}">${user.login}'s repo link</a>
        `
        // appending result to our list
        userList.append(newLi)
    }
})

