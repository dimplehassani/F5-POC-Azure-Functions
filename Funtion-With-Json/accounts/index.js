module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    jsonData = '{"accountid" : "6144312","buckets":[{"type": "eval","name": "Evaluation","description": "Used for evaluations","status": "Active","cat": "83737322020200220","attributes": [{ "attname": "servicelevel", "measure": "none"},{"attname": "capacity","measure": "100","UOM": "workloads"}]}]}'
    context.res = {
        status:200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.parse(jsonData)
    };
    context.done();
};