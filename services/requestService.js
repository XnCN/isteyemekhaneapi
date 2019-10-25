const cheerio = require('cheerio');
const axios = require('axios');
require('dotenv').config();

const APIURL = process.env.APIURL;

const getRequestData = async ()=>{
    const {data,headers} = await axios.get(APIURL);
    const $ = cheerio.load(data);
    const token = $('meta[name=csrf-token]').attr('content');
    const cookieString = headers["set-cookie"].map(cookie => cookie.split('expires')[0].split(' ').join('')).reduce((prev, next) => prev + ' ' + next);
    return {token,cookieString};
}

module.exports = getRequestData;