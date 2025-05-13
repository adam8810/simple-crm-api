import { buildErrorApiResponse } from "../types/apiResponse";

export default function notFoundHandler(req: any, res: any, next: any) {
  res.status(404).json(buildErrorApiResponse("Route Not Found"));
  next();
}
