import axios from 'axios'

const URL = "http://localhost:8080/"

const request = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})

export default request