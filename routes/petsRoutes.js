const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController");
const { upload } = require("../middlewares/handleImage");
const isAdmin = require("../middlewares/isAdmin");
const isPetAlreadyOwned = require("../middlewares/isPetAlreadyOwned");
const isPetAlreadySaved = require("../middlewares/isPetAlreadySaved");
const validate = require("../middlewares/validate");
const verifyToken = require("../middlewares/verifyToken");
const { idSchema, searchSchema } = require("../Schemas/validationSchemas");

// To search pets with params
router.get("/", validate("query", searchSchema), petsController.searchPets);

// To retrieve a pet by its ID
router.get("/:id", validate("params", idSchema), petsController.getPetById);

// Logged-in only
// To adopt or foster a pet (logged-in only)
router.post(
  "/:id/adopt",
  verifyToken,
  validate("params", idSchema),
  isPetAlreadyOwned,
  petsController.adoptOrFosterPet
);

// To return a pet (logged-in only)
router.post(
  "/:id/return",
  verifyToken,
  validate("params", idSchema),
  isPetAlreadyOwned,
  petsController.returnPet
);

// To save a pet (logged-in only)
router.post(
  "/:id/save",
  verifyToken,
  validate("params", idSchema),
  isPetAlreadySaved,
  petsController.savePet
);

// To delete a save pet (logged-in only)
router.delete(
  "/:id/save",
  verifyToken,
  validate("params", idSchema),
  isPetAlreadySaved,
  petsController.deleteSavedPet
);

// Admin only
// To add a pet (admin only)
router.post("/", verifyToken, () => {});

// To edit a pet (admin only)
router.put("/:id", verifyToken, isAdmin, upload.single("picture"), petsController.editPet);

// To get the pets owned or saved by a user
router.get(
  "/user/:id",
  verifyToken,
  validate("params", idSchema),
  petsController.getPetsOwnedByUser
);

module.exports = router;
