import Customer from "App/Models/Customer";
import AvailabilityService from "./AvailabilityService";

export default class OrdersService {
  public async createOrder(data) {
    const processedLineItems = data.line_items.map((line_item) => ({
      sku: line_item.sku,
      quantity: line_item.quantity,
    }));
    const address = data.shipping_address || data.billing_address;
    const availabilityService = new AvailabilityService();
    const materials = await availabilityService.getAvailabilities(
      processedLineItems.map((item) => item.sku)
    );
    // If the order has no SKUs related to the ERP, do nothing!
    if (materials.length) {
      // If the customer already exists (based on email), fetch them, otherwise create a new customer
      const customer = await Customer.firstOrCreate(
        { email: data.customer?.email || data.email },
        {
          address: address.address1,
          zipCode: address.zip,
          city: address.city,
          fullName: `${data.customer?.first_name || address.first_name} ${
            data.customer?.last_name || address.last_name
          }`,
          phone: data.phone || data.customer?.phone || address.phone,
        }
      );
      // create an order for the customer
      const order = await customer.related("orders").create({
        totalPrice: +data.current_total_price,
      });
      // attach order items to the order of that customer
      await order.related("materials").attach(
        materials.reduce((obj, curr) => {
          obj[curr.id] = {
            quantity: processedLineItems.find((item) => item.sku == curr.code)
              ?.quantity,
          };
          return obj;
        }, {})
      );
      // reduce availabilities for the ordered materials, in this scenario we simply find the location that has the most quantity and we reduce the ordered quantities from there
      for (const material of materials) {
        const location = material.locations.reduce(
          (max, location) =>
            location.$extras.pivot_quantity > max.$extras.pivot_quantity
              ? location
              : max,
          material.locations[0]
        );
        await location.related("materials").sync(
          {
            [material.id]: {
              quantity:
                location.$extras.pivot_quantity -
                processedLineItems.find((item) => item.sku == material.code)
                  ?.quantity,
            },
          },
          false
        );
      }
      return { customer, order };
    }
    return { message: "No ERP codes found in the order" };
  }
}
