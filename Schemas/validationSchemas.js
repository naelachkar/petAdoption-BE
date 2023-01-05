const loginSchema = {
  type: "object",
  properties: {
    email: { type: "string", minLength: 3, pattern: "@" },
    password: { type: "string" },
  },
  additionalProperties: false,
  required: ["email", "password"],
};

const signupSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    phoneNumber: { type: "string" },
    password: { type: "string" },
    confirmPassword: { type: "string" },
  },
  additionalProperties: false,
  required: [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "password",
    "confirmPassword",
  ],
};

const editUserSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", minLength: 3, pattern: "@" },
    phoneNumber: { type: "string" },
    password: { type: "string" },
    confirmPassword: { type: "string" },
    bio: { type: "string" },
  },
  additionalProperties: false,
};

module.exports = { loginSchema, signupSchema, editUserSchema };
