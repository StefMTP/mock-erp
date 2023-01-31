import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import OrdersService from "App/Services/OrdersService";

export default class OrdersController {
  public async create({ request, response }: HttpContextContract) {
    const ordersService = new OrdersService();
    const res = await ordersService.createOrder(request.body());
    return response.ok(res);
  }
}
