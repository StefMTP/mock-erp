import Database from "@ioc:Adonis/Lucid/Database";

export default class AvailabilityService {
  public async getAvailabilities() {
    return await Database.from("materials")
      .innerJoin("availabilities", "materials.id", "availabilities.material_id")
      .innerJoin("locations", "locations.id", "availabilities.location_id")
      .select(
        "availabilities.id",
        "materials.id as material_id",
        "locations.name as location_name",
        "materials.code as code",
        "availabilities.quantity"
      )
      .orderBy("materials.id", "asc");
  }
}
