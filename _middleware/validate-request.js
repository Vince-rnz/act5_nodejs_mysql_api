module.exports = validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abrotEarly: false,
        allowUknown: true,
        stripUknown: true
    };
    const {error, value} = schema.validate(req.body, options);
    if (error) {
        next(`Validate error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}
