import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AvailabilitiesService from "App/Services/AvailabilitiesService";

export default class AvailabilitiesController {
  public async index({ response }: HttpContextContract) {
    const availabilitiesService = new AvailabilitiesService();
    const availabilities = await availabilitiesService.getAllAvailabilities();
    return response.status(200).json({ availabilities });
  }
}
