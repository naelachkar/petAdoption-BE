const Ajv = require("ajv");
const ajv = new Ajv();

function validateBody(schema) {
  return (req, res, next) => {
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      return res.status(400).json({ error: ajv.errorsText() });
    }
    next();
  };
}

module.exports = validateBody;
