import Database from "@ioc:Adonis/Lucid/Database";
import Material from "App/Models/Material";

export default class AvailabilityService {
  private query = Database.from("materials")
    .innerJoin("availabilities", "materials.id", "availabilities.material_id")
    .innerJoin("locations", "locations.id", "availabilities.location_id")
    .select(
      "availabilities.id",
      "materials.id as material_id",
      "locations.name as location_name",
      "materials.code as code",
      "availabilities.quantity"
    );

  public async getAllAvailabilities() {
    return await this.query.orderBy("id", "asc");
  }

  public async getAvailabilities(codes: string[]) {
    return await Material.query().preload("locations").whereIn("code", codes);
  }
}
