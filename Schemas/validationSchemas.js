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

const idSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
};

const searchSchema = {
  type: "object",
  properties: {
    query: {
      type: "object",
      properties: {
        type: { type: "string" },
        name: {
          type: "object",
          properties: {
            $regex: {
              type: "string",
            },
            $options: {
              type: "string",
            },
          },
          additionalProperties: false,
        },
        adoptedStatus: { type: "string" },
        height: { type: "string" },
        weight: { type: "string" },
      },
    },
  },
  additionalProperties: false,
};

const addPetSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    type: { type: "string" },
    breed: { type: "string" },
    color: { type: "string" },
    height: { type: "string" },
    weight: { type: "string" },
    bio: { type: "string" },
    picture: { type: "string" },
  },
  required: ["name", "type", "breed", "color", "height", "weight"],
};

const editPetSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    type: { type: "string" },
    breed: { type: "string" },
    color: { type: "string" },
    height: { type: "string" },
    weight: { type: "string" },
    bio: { type: "string" },
    picture: { type: "string" },
  },
};

module.exports = {
  loginSchema,
  signupSchema,
  editUserSchema,
  idSchema,
  searchSchema,
  addPetSchema,
  editPetSchema,
};
