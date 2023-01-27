import Material from "App/Models/Material";

export default class MaterialsService {
  public async getMaterial(id: number) {
    return await Material.find(id);
  }
  public async getMaterials(filters: { code: string }) {
    return await Material.query().where(
      "code",
      "like",
      `%${filters.code || ""}%`
    );
  }
  public async createMaterial(data: Partial<Material>) {
    return await Material.create(data);
  }
}
