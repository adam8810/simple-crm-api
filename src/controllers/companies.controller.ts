import { Request, Response } from "express";
import Company from "../models/company";
import logger from "../utils/logger";
import { buildErrorApiResponse } from "../types/apiResponse";

export default class CompaniesController {
  public async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const newCompany = await Company.create({ name });
      res.status(201).json(newCompany);
    } catch (error) {
      logger.error("Error creating company:", error);
      res.status(500).json(buildErrorApiResponse("Error creating company"));
    }
  }
  public async getAll(req: Request, res: Response) {
    try {
      const companies = await Company.findAll({ where: { active: true } });
      res.status(200).json(companies);
    } catch (error) {
      logger.error("Error retrieving companies:", error);
      res.status(500).json(buildErrorApiResponse("Error retrieving companies"));
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const company = await Company.findByPk(id);
      if (!company) {
        res.status(404).json(buildErrorApiResponse("Company not found"));
        return;
      }
      res.status(200).json(company);
    } catch (error) {
      logger.error("Error retrieving company:", error);
      res.status(500).json(buildErrorApiResponse("Error retrieving company"));
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const update = req.body;
      let company = await Company.findByPk(id);
      if (!company) {
        res.status(404).json(buildErrorApiResponse("Company not found"));
        return;
      }

      await company.update(update);

      res.status(200).json(company);
    } catch (error) {
      logger.error("Error updating company:", error);
      res.status(500).json(buildErrorApiResponse("Error updating company"));
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const company = await Company.findByPk(id);
      if (!company || !company.active) {
        res.status(404).json(buildErrorApiResponse("Company not found"));
        return;
      }

      // Soft delete the company
      await company.update({ active: false });

      res.status(204).send();
    } catch (error) {
      logger.error("Error deleting company:", error);
      res.status(500).json(buildErrorApiResponse("Error deleting company"));
    }
  }
}
