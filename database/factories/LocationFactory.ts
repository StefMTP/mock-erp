import Location from "App/Models/Location";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Location, ({ faker }) => {
  return {
    name: faker.company.name(),
    address: faker.address.streetAddress(true),
  };
}).build();
