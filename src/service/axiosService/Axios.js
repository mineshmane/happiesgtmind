const axios = require('axios').default;
//https://localhoat:8080/api/user/adduser
//https://localhoat:8080/api/book/addbook
const baserUrl = 'http://localhost:4000/api/'


exports.PostService = (url, payload, token = false, httpheaders) => {
    console.log(payload);
const baserUrl = 'http://localhost:4000/api/'

    return axios.post(baserUrl + url, payload, token && httpheaders)
}

exports.getService = (url, token = false, httpheaders = null) => {
    return axios.get(this.baserUrl + url, token && httpheaders)

}

exports.deleteService = () => {

}

// PaymentRequestUpdateEvent({})