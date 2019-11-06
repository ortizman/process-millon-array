const awscli = require('aws-sdk');
const AWS = require('aws-sdk');
const awslambda = new AWS.Lambda();

async function lambda(array) {
    // return array.filter(elem =>
    //     (elem.valor > 10 && elem.lat && elem.lon)
    // )


    let promise = new Promise((resolve, reject) => {
        var params = {
            FunctionName: "processArray",
            Payload: JSON.stringify(array)
        };
        awslambda.invoke(params, (err, data) => {
            if (err) reject(err);
            else {
                let response = JSON.parse(data.Payload);
                resolve(response.body);
            }
        });
    });

    return await promise;
}

module.exports = lambda;