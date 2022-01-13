import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.3:8002/api'
// axios.defaults.baseURL = 'https://promotion-artisan-backend.lce-ci.com/api'
if (localStorage.getItem('token') != null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}