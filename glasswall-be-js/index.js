const AWS = require('aws-sdk');

// AWS.config.update({
//     // region: "eu-central-1",
//     endpoint: "http://127.0.0.1:8000"
// });
const dynamo = new AWS.DynamoDB.DocumentClient();

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = async (event, context) => {
    console.log('v0.1.1 Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };
    let reqStr;
    let httpMethod = getHttpMethod(event);
    console.log('httpMethod: ' + httpMethod);

    try {
        // reqStr = JSON.parse(event.body);
        switch (httpMethod) {
            case 'DELETE':
                console.log('DELETE');
                body = await dynamo.delete(reqStr).promise();
                break;
            case 'GET':
                var params = getParams(event);
                body = await getData(params);
                break;
            case 'POST':
                console.log('POST');
                reqStr = JSON.parse(event.body);
                body = await procPost(reqStr);
                break;
            case 'PUT':
                console.log('PUT');
                body = await dynamo.update(reqStr).promise();
                break;
            default:
                throw new Error(`Unsupported method "${httpMethod}"`);
        }
    } catch (err) {
        console.log('error, catched exception:' + err.message);
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};

function getHttpMethod(event) {
    if (event.requestContext !== undefined) {
        if (event.requestContext.http !== undefined) {
            if (event.requestContext.http.method !== undefined) {
                console.log("http method [event.requestContext.http.method]");
                return event.requestContext.http.method;
            }
        }
    }
    if (event.httpMethod !== undefined) {
        console.log("http method [event.httpMethod]");
        return event.httpMethod;
    }
    console.log("error, can not get http method");
    return "";
}

function getParams(event) {
    if (event.queryStringParameters !== undefined) {
        console.log('GET params: ' + JSON.stringify(event.queryStringParameters));
        return event.queryStringParameters;
    }
    return '';
}

function params2KeyConditionExpression(obj) {
    var str = '';
    for (var i in obj) {
        var con = '#' + i + " = " + ':' + i;
        if (str !== '') {
            str = str + " and " + con;
        } else {
            str = str + con;
        }
    }
    return str;
}

function params2ExpressionAttributeNames(obj) {
    let map = new Map();
    for (var i in obj) {
        var k = '#' + i;
        var v = i;
        map[k] = v;
    }
    return map;
}

function params2ExpressionAttributeValues(obj) {
    let map = new Map();
    for (var i in obj) {
        var k = ':' + i;
        var v = obj[i];
        map[k] = v;
    }
    return map;
}

async function getData(params) {
    var KeyConditionExpression;
    KeyConditionExpression = params2KeyConditionExpression(params)
    console.log('' + 'KeyConditionExpression = ' + KeyConditionExpression);
    ExpressionAttributeNames = params2ExpressionAttributeNames(params);
    console.log('' + 'ExpressionAttributeNames = ' + JSON.stringify(ExpressionAttributeNames));
    ExpressionAttributeValues = params2ExpressionAttributeValues(params);
    console.log('' + 'ExpressionAttributeValues = ' + JSON.stringify(ExpressionAttributeValues));

    let ProjectionExpression = "#Test_Site, #Test_Stage, Units_Count";
    // let ProjectionExpression = "#Test_Site, #Test_Stage";

    var obj = {
        TableName: "sumTable",
        KeyConditionExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues,
        ProjectionExpression,
    };
    console.log('query: ' + JSON.stringify(obj));
    var body;
    try {
        body = await dynamo.query(obj).promise();
    } catch (err) {
        console.log('error, catched exception:' + err.message);
        body = '';
    } finally {
        body = JSON.stringify(body);
    }
    console.log('body = ' + body);
    obj = JSON.parse(body);

    if (obj == undefined) {
        console.log('error, parse db result error')
    }
    if (obj.Count == 0) {
        console.log('error, count is 0');
    }
    //only fetch Test_Site, Test_Stage, Units_Count,
    var newBody = { Test_Site: '', Test_Stage: '', Units_Count: -1 };
    newBody = obj.Items[0];
    console.log('newBody = ' + JSON.stringify(newBody));
    return newBody;
}


