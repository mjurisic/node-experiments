'use strict';
var filename = 'import2.csv';

var _ = require('lodash');
var fs = require('fs');

var request = require('request');

var postoptions = {
    url: "http://localhost:8080/masterdata/api/evaimports/v1/",
    method: 'POST',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJuYW1lIjoiIiwianRpIjoiMzljNTQzY2UtODdjYS00MWM0LTkyYzktZmY1ODEzZDBlZjAyIiwiZXhwIjoxNDIxMzEyMTgyLCJuYmYiOjAsImlhdCI6MTQyMTMwODU4MiwiaXNzIjoic2FuZGJveCIsImF1ZCI6InNhbmRib3hjbGllbnQiLCJzdWIiOiI1NWE1OTQxMS1iZGIzLTQ2YzItOTkwNi05YWE0YzljMjYzOGYiLCJhenAiOiJzYW5kYm94Y2xpZW50IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2FuZGJveHVzZXIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInNlc3Npb25fc3RhdGUiOiJjYWIyODI5MC0zY2E3LTQ5YTctOThhZS01MzM0MDM3YWRhNzQiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZXNvdXJjZV9hY2Nlc3MiOnt9fQ.b23hC7YO5wkK7CUvxAHS-_mxKQCFFU7XGw51Yha7nJE5xrPueYE2fC0dj8hAvldq3883NSmfmBUBmV8zwPBqniksMTsbtdhxiyCn_2zQS3PqdtesPMcb-e7Akf9Cb6MIkSc1JPhSAIRDjpG-Apb7uuoQ_HtnsYIdZnmkxCAlvtU',
        'On-Behalf-Of': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJuYW1lIjoiIiwianRpIjoiMzljNTQzY2UtODdjYS00MWM0LTkyYzktZmY1ODEzZDBlZjAyIiwiZXhwIjoxNDIxMzEyMTgyLCJuYmYiOjAsImlhdCI6MTQyMTMwODU4MiwiaXNzIjoic2FuZGJveCIsImF1ZCI6InNhbmRib3hjbGllbnQiLCJzdWIiOiI1NWE1OTQxMS1iZGIzLTQ2YzItOTkwNi05YWE0YzljMjYzOGYiLCJhenAiOiJzYW5kYm94Y2xpZW50IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2FuZGJveHVzZXIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInNlc3Npb25fc3RhdGUiOiJjYWIyODI5MC0zY2E3LTQ5YTctOThhZS01MzM0MDM3YWRhNzQiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZXNvdXJjZV9hY2Nlc3MiOnt9fQ.b23hC7YO5wkK7CUvxAHS-_mxKQCFFU7XGw51Yha7nJE5xrPueYE2fC0dj8hAvldq3883NSmfmBUBmV8zwPBqniksMTsbtdhxiyCn_2zQS3PqdtesPMcb-e7Akf9Cb6MIkSc1JPhSAIRDjpG-Apb7uuoQ_HtnsYIdZnmkxCAlvtU',
        'Accept': '*/*'
    },
    formData: {
        uploadedFile: {
            value: fs.createReadStream('../data/' + filename),
            options: {
                filename: filename,
                contentType: 'text/csv'
            }
        }
    }
}
request(postoptions, function (err, res, body) {
    console.log('done');
});

