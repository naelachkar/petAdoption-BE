const Ajv = require("ajv");
const ajv = new Ajv();

function validate(schema, property) {
  return (req, res, next) => {
    const valid = ajv.validate(schema, req[property]);
    if (!valid) {
      return res.status(400).json({ error: ajv.errorsText() });
    }
    next();
  };
}

module.exports = validate;
