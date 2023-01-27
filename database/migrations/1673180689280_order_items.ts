import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "order_items";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id");
      table
        .bigInteger("material_id")
        .references("id")
        .inTable("materials")
        .notNullable()
        .unsigned();
      table
        .bigInteger("order_id")
        .references("id")
        .inTable("orders")
        .notNullable()
        .unsigned();
      table.integer("quantity").unsigned();
      table.unique(["order_id", "material_id"]);
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
