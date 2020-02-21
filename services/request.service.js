const axios = require('axios');

class RequestService {
    constructor() {
        this.APIURL = process.env.APIURL;
    }
    async getApiData() {
        const { data, headers } = await axios.get(this.APIURL);
        this.DATA = data;
        this.HEADERS = headers;
    }
    async getToken() {
        const regex = /"_token": '(.*?)'/gs;
        var match = regex.exec(this.DATA);
        return match[1];
    }
    async getHeader() {
        const cookieString = this.HEADERS["set-cookie"].map(cookie => cookie.split('expires')[0].split(' ').join('')).reduce((prev, next) => prev + ' ' + next);
        return { headers: { 'Cookie': cookieString } }
    }
}

module.exports = new RequestService();