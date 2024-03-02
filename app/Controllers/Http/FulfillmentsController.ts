import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import FulfillmentsService from "App/Services/FulfillmentsService";

export default class FulfillmentsController {
  public async create({ request, response }: HttpContextContract) {
    const ordersService = new FulfillmentsService();
    return response.ok("");
  }
}
