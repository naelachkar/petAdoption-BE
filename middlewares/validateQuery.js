const Ajv = require("ajv");
const ajv = new Ajv();

function validateQuery(schema) {
  return (req, res, next) => {
    const { query } = req;
    const valid = ajv.validate(schema, params);
    if (!valid) {
      return res.status(400).json({ error: ajv.errorsText() });
    }
    next();
  };
}

module.exports = validateQuery;
