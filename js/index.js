document.addEventListener("DOMContentLoaded", () => {

    const searchForm = document.getElementById("github-form")
    const userList = document.getElementById("user-list") 

    searchForm.addEventListener("submit", e => {
        e.preventDefault()
        const search = e.target.search.value

        fetch(`https://api.github.com/search/users?q=${search}`)
            .then(response => response.json())
            .then(result => {
                result.items.forEach(user => {
                    renderUser(user)
                })
            })
        e.target.reset
    })

    function renderUser(user) {
        const newLi = document.createElement("li")
        newLi.innerHTML = `
            <h3>${user.login}</h3>
            <img src="${user.avatar_url}"/><br>
            <a href="${user.html_url}">${user.login}'s repo link</a>
        `
        userList.append(newLi)
    }
})  