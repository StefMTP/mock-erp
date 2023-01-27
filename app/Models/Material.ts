import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Location from "./Location";
import Order from "./Order";

export default class Material extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public code: string;

  @column()
  public description: string;

  @column()
  public price: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Location, {
    pivotTable: "availabilities",
    localKey: "id",
    pivotForeignKey: "material_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "location_id",
    pivotColumns: ["quantity"],
    pivotTimestamps: true,
  })
  public locations: ManyToMany<typeof Location>;

  @manyToMany(() => Order, {
    pivotTable: "order_items",
    localKey: "id",
    pivotForeignKey: "material_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "order_id",
    pivotTimestamps: true,
  })
  public orders: ManyToMany<typeof Order>;
}
