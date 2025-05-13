import { Router } from "express";
import CompaniesRoute from "./companies.route";
import ContactsRoute from "./contacts.route";
import ActivitiesRoute from "./activities.route";

const router = Router();

router.use("/companies", CompaniesRoute);
router.use("/contacts", ContactsRoute);
router.use("/activities", ActivitiesRoute);

export default router;
