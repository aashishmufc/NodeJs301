const { query } = require('express');
const Restuarant = require('../models/Restuarant.model');
var url = require('url');
exports.findAll = (req, res) => {
    return new Promise((resolve, reject) => {
        Restuarant.find()
            .then(notes => {
                resolve(notes);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};
exports.searchByName = (req, res) => {
    return new Promise((resolve, reject) => {
        const urlParts = url.parse(req.url, true);
        const { query } = urlParts;
        const mQueryArr = Object.values(query).filter(i => i.indexOf('&') > -1);
        if (mQueryArr.length) {
            Object.keys(query).forEach((key) => {
                if (query[key].indexOf('&') > -1) {
                    const queries = query[key].split('&');
                    query[key] = { $in: queries };
                }
            });
        }
        Restuarant.find(query)
            .then(notes => {
                resolve(notes);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};