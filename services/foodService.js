const {prepareFoodInformations,prepareDate} = require('../helper');
const axios = require('axios');
require('dotenv').config();



const APIURL = process.env.APIURL;

const getFoods = async(date,requestData) =>{
    const {token,cookieString} = requestData;
    const {data} = await axios.post(`${APIURL}/menuGetir`,{tarih: date,_token: token},{headers: {'Cookie': cookieString}});
    return prepareFoodInformations(data);
}


module.exports = getFoods;