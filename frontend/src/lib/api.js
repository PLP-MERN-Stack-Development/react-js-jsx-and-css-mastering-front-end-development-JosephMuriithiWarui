import axios from 'axios'

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

// Fetch
export async function fetchData () {
    const res = await API.get('/users')
    return res.data
}

// Create
export async function addData (user) {
    const res = await API.post('/users', user)
    return res.data
}

// Update
export async function updateData (id, user) {
    const res = await API.put(`/users/${id}`, user)
    return res.data
}

// Delete
export async function deleteData (id) {
    const res = await API.delete(`/users/${id}`)
    return res.status === 200
}