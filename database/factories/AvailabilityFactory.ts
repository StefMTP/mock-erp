import Availability from "App/Models/Availability";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Availability, ({ faker }) => {
  return {
    quantity: +faker.random.numeric(),
  };
}).build();
