const url = "http://localhost:5500/api"

function getUsers () {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser (newUser) {
    axios.post(url,newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
} 

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar 

    })
    .catch(error => console.error(error))
}

function updateUser (id,userUpdate) {
    axios.put(`${url}/${id}`,userUpdate)
    .then(response =>console.log(response))
    .catch(error =>console.error())
}
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error())
}

const userUpdate = {
    name:"Gustavo Oliveira",
    avatar:"https://piscum.photos/200/300",
    city:"Campinas"

}

const newUser = {
    name:"Givaildo de Andrad",
    avatar:"http://github.com/givaild.png",
    city:"Hortolândia"
}
// updateUser(3,userUpdate)
getUsers()
getUser(2)
// addNewUser()
// deleteUser()