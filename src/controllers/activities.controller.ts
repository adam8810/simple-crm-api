import { Request, Response } from "express";
import Activity from "../models/activity";
import logger from "../utils/logger";
import { buildErrorApiResponse } from "../types/apiResponse";

export default class ActivitiesController {
  public async create(req: Request, res: Response) {
    try {
      const { contact_id, type, notes } = req.body;
      const newActivity = await Activity.create({
        contact_id,
        type,
        notes,
      });
      res.status(201).json(newActivity);
    } catch (error) {
      logger.error("Error creating activity:", error);
      res.status(500).json(buildErrorApiResponse("Error creating activity"));
    }
  }
  public async getAll(req: Request, res: Response) {
    try {
      const activities = await Activity.findAll({ where: { active: true } });
      res.status(200).json(activities);
    } catch (error) {
      logger.error("Error retrieving activities:", error);
      res
        .status(500)
        .json(buildErrorApiResponse("Error retrieving activities"));
    }
  }
}
