import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Logger from "@ioc:Adonis/Core/Logger";
import Material from "App/Models/Material";
import LocationFactory from "Database/factories/LocationFactory";
import { Chance } from "chance";
import MaterialFactory from "Database/factories/MaterialFactory";
import Location from "App/Models/Location";

export default class extends BaseSeeder {
  public async run() {
    let locations = await Location.all();
    if (!locations.length) {
      Logger.info("Creating new locations...");
      locations = await LocationFactory.createMany(3);
    }
    Logger.info("Making new materials...");
    const materials = await MaterialFactory.makeMany(5);
    const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
    const chance = new Chance();
    for (const material of materials) {
      for (const size of sizes) {
        Logger.info(`Creating material ${material.code}-${size}...`);
        const variant = await Material.create({
          ...material.$attributes,
          description: `${material.description} - ${size}`,
          code: `${material.code}-${size}`,
        });
        Logger.info(`Attaching availabilities to ${material.code}-${size}...`);
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
