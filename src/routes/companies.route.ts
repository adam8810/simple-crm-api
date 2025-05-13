import { Router } from "express";
import CompaniesController from "../controllers/companies.controller";
import { z } from "zod";
import validate from "../middleware/validator";

const router = Router();
const companiesController = new CompaniesController();

const companySchema = z.object({
  name: z.string().min(1, "Name is required"),
});

router.post("/", validate(companySchema), companiesController.create);
router.get("/", companiesController.getAll);
router.get("/:id", companiesController.getById);
router.put("/:id", validate(companySchema), companiesController.update);
router.delete("/:id", companiesController.delete);

export default router;
