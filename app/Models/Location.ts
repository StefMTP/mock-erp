import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Material from "./Material";

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public address: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Material, {
    pivotTable: "availabilities",
    localKey: "id",
    pivotForeignKey: "location_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "material_id",
    pivotColumns: ["quantity"],
    pivotTimestamps: true,
  })
  public materials: ManyToMany<typeof Material>;
  public serializeExtras = true;
}
