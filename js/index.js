document.addEventListener("DOMContentLoaded", () => {

    const searchForm = document.querySelector("#github-form")
    const userList = document.querySelector("#user-list")

    searchForm.addEventListener("submit", event => {
        event.preventDefault()
        const search = event.target.search.value

        fetch(`https://api.github.com/search/users?q=${search}`)
            .then(response => response.json())
            .then(result => {
                result.items.forEach(user => {
                    renderUser(user)
                })
            })
        event.target.reset()
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
