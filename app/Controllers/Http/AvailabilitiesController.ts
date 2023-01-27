import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AvailabilityService from "App/Services/AvailabilityService";

export default class AvailabilitiesController {
  public async index({ response }: HttpContextContract) {
    const availabilityService = new AvailabilityService();
    const availabilities = await availabilityService.getAvailabilities();
    return response.status(200).json({ availabilities });
  }
}
