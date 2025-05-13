import { Router } from "express";
import ActivitiesController from "../controllers/activities.controller";
import { z } from "zod";
import validate from "../middleware/validator";

const router = Router();
const activitiesController = new ActivitiesController();

const activitySchema = z.object({
  contact_id: z
    .number()
    .int()
    .positive("Contact ID must be a positive integer"),
  type: z.number().int().positive("Type must be a positive integer"),
  notes: z.string().optional(),
});

router.post("/", validate(activitySchema), activitiesController.create);
router.get("/", activitiesController.getAll);

export default router;
