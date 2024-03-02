import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "orders";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("status").after("total_price");
      table.bigInteger("shopify_order_id").after("customer_id");
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("status");
    });
  }
}
