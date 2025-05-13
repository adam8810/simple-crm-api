import { Router } from "express";
import ContactsController from "../controllers/contacts.controller";
import { z } from "zod";
import validate from "../middleware/validator";

const router = Router();
const contactsController = new ContactsController();

const createContactSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  company_id: z
    .number()
    .int()
    .positive("Company ID must be a positive integer"),
});

const updateContactSchema = z
  .object({
    first_name: z.string().min(1, "First name is required").optional(),
    last_name: z.string().min(1, "Last name is required").optional(),
  })
  .refine((data) => data.first_name || data.last_name, {
    message: "At least one of first_name or last_name must be provided",
    path: ["first_name", "last_name"],
  });

router.post("/", validate(createContactSchema), contactsController.create);
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getById);
router.put("/:id", validate(updateContactSchema), contactsController.update);
router.delete("/:id", contactsController.delete);

// Contact-Activity routes
router.get("/:id/activities", contactsController.getContactActivities);

export default router;
