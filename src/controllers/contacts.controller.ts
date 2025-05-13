import { Request, Response } from "express";
import Contact from "../models/contact";
import logger from "../utils/logger";
import { buildErrorApiResponse } from "../types/apiResponse";
import Activity from "../models/activity";

export default class ContactsController {
  public async create(req: Request, res: Response) {
    try {
      const newContact = req.body;
      const createdContact = await Contact.create(newContact);
      res.status(201).json(createdContact);
    } catch (error) {
      logger.error("Error creating contact:", error);
      res.status(500).json(buildErrorApiResponse("Error creating contact"));
    }
  }
  public async getAll(req: Request, res: Response) {
    try {
      const contacts = await Contact.findAll({ where: { active: true } });
      res.status(200).json(contacts);
    } catch (error) {
      logger.error("Error retrieving contacts:", error);
      res.status(500).json(buildErrorApiResponse("Error retrieving contacts"));
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contact = await Contact.findByPk(id);

      if (!contact) {
        res.status(404).json(buildErrorApiResponse("Contact not found"));
        return;
      }
      res.status(200).json(contact);
    } catch (error) {
      logger.error("Error retrieving contact:", error);
      res.status(500).json(buildErrorApiResponse("Error retrieving contact"));
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const update = req.body;
      let contact = await Contact.findByPk(id);
      if (!contact) {
        res.status(404).json(buildErrorApiResponse("Contact not found"));
        return;
      }

      await contact.update(update);

      res.status(200).json(contact);
    } catch (error) {
      logger.error("Error updating contact:", error);
      res.status(500).json(buildErrorApiResponse("Error updating contact"));
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contact = await Contact.findByPk(id);
      if (!contact) {
        res.status(404).json(buildErrorApiResponse("Contact not found"));
        return;
      }

      // Soft delete the contact
      await contact.update({ active: false });

      res.status(204).send();
    } catch (error) {
      logger.error("Error deleting contact:", error);
      res.status(500).json(buildErrorApiResponse("Error deleting contact"));
    }
  }

  public async getContactActivities(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contact = await Contact.findByPk(id);

      if (!contact) {
        res.status(404).json(buildErrorApiResponse("Contact not found"));
        return;
      }

      const activities = await Activity.findAll({
        where: { contact_id: id },
      });

      res.status(200).json(activities);
    } catch (error) {
      logger.error("Error retrieving contact activities:", error);
      res
        .status(500)
        .json(buildErrorApiResponse("Error retrieving contact activities"));
    }
  }
}
