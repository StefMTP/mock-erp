import Material from "App/Models/Material";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Material, ({ faker }) => {
  return {
    description: faker.commerce.productName(),
    code: faker.random.alphaNumeric(5, { casing: "upper" }),
    price: +faker.commerce.price(15, 100, 2),
  };
}).build();
