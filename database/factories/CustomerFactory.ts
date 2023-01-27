import Customer from "App/Models/Customer";
import Factory from "@ioc:Adonis/Lucid/Factory";
import OrderFactory from "./OrderFactory";

export default Factory.define(Customer, ({ faker }) => {
  return {
    fullName: faker.name.fullName(),
    address: faker.address.streetAddress(),
    zipCode: faker.address.zipCode("#####"),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  };
})
  .relation("orders", () => OrderFactory)
  .build();
