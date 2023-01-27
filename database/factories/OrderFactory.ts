import Order from "App/Models/Order";
import Factory from "@ioc:Adonis/Lucid/Factory";
import CustomerFactory from "./CustomerFactory";
import MaterialFactory from "./MaterialFactory";

export default Factory.define(Order, () => {
  return {};
})
  .relation("customer", () => CustomerFactory)
  .relation("materials", () => MaterialFactory)
  .build();
