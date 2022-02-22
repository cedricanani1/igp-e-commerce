import axios from 'axios'

// axios.defaults.baseURL = 'http://192.168.1.9:8003/api'
axios.defaults.baseURL = 'https://igp-backend-ecommerce.lce-ci.com/api'
if (localStorage.getItem('token') != null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
}