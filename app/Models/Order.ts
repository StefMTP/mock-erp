import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Material from "./Material";
import Customer from "./Customer";
import { OrderStatus } from "App/Types";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public customerId: number;

  @column()
  public shopifyOrderId: number;

  @column()
  public totalPrice: number;

  @column()
  public status: OrderStatus;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Material, {
    pivotTable: "order_items",
    localKey: "id",
    pivotForeignKey: "order_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "material_id",
    pivotTimestamps: true,
  })
  public materials: ManyToMany<typeof Material>;

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>;
}
