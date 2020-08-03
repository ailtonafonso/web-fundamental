const { json } = require('express');
const fetch = require('node-fetch'); 
exports.Database = (connectionString) => {
    const Methods = {};

    Methods.getData = async () =>{
        const response = json('https://api.npoint.io/ddc99d2e9886c8d51328');
        return await response.json();
    }

    return Methods;
}
