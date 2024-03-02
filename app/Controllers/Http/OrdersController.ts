import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import OrdersService from "App/Services/OrdersService";
import { Order } from "App/Types";

export default class OrdersController {
  public async create({ request, response }: HttpContextContract) {
    const ordersService = new OrdersService();
    const res = await ordersService.createOrder(request.body() as Order);
    return response.ok(res);
  }
}
