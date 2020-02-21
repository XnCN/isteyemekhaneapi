const axios = require('axios');
const RequestService = require('../services/request.service');
const FoodHelper = require('../helpers/food.helper');
class FoodController {
    constructor() {
        this.APIURL = process.env.APIURL;
    }
    async getFoods(date) {
        await RequestService.getApiData();
        const token = await RequestService.getToken();
        const headers = await RequestService.getHeader();
        const { data } = await axios.post(`${this.APIURL}/menuGetir`, { tarih: date, _token: token }, headers);
        return data != '' ? FoodHelper.get(data) : { err: 1, message: `${date} tarihinde yemekhanede yemek bulunmamaktadır.` };
    }
}

module.exports = new FoodController();