import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Material from "App/Models/Material";
import LocationFactory from "Database/factories/LocationFactory";
import { Chance } from "chance";
import MaterialFactory from "Database/factories/MaterialFactory";

export default class extends BaseSeeder {
  public async run() {
    const locations = await LocationFactory.createMany(3);
    const materials = await MaterialFactory.makeMany(60);
    const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
    const chance = new Chance();
    for (const material of materials) {
      for (const size of sizes) {
        const variant = await Material.create({
          ...material.$attributes,
          description: `${material.description} - ${size}`,
          code: `${material.code}-${size}`,
        });
        await variant.related("locations").attach(
          chance
            .pickset(
              locations.map((location) => location.id),
              chance.integer({ min: 0, max: locations.length })
            )
            .reduce((obj, location) => {
              return {
                ...obj,
                [location]: { quantity: chance.integer({ min: 0, max: 100 }) },
              };
            }, {})
        );
      }
    }
  }
}
