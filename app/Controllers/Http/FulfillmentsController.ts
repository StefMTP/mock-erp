import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FulfillmentsController {
  public async create({ response }: HttpContextContract) {
    return response.ok("");
  }
}
