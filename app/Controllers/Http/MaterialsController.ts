import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import MaterialsService from "App/Services/MaterialsService";
export default class MaterialsController {
  public async index({ response, request }: HttpContextContract) {
    const materialsService = new MaterialsService();
    const materials = await materialsService.getMaterials({
      code: request.qs().code,
    });
    return response.status(200).json({ materials });
  }

  public async show({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
