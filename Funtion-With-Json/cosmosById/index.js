module.exports = function (context, req) {
    context.log('begin ');
    var documents = context.bindings.inputDocument;
    context.res = {
            body: documents
        };
    context.done();
};