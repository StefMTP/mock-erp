import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "availabilities";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table
        .bigInteger("location_id")
        .references("id")
        .inTable("locations")
        .notNullable()
        .unsigned();
      table
        .bigInteger("material_id")
        .references("id")
        .inTable("materials")
        .notNullable()
        .unsigned();
      table.unique(["location_id", "material_id"]);
      table.integer("quantity");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
