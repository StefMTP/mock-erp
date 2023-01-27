import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class OrderItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public materialId: number;

  @column()
  public orderId: number;

  @column()
  public quantity: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
