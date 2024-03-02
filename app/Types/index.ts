export interface Order {
  id: number;
  admin_graphql_api_id: string;
  app_id: number;
  browser_ip: string;
  buyer_accepts_marketing: boolean;
  cancel_reason?: null;
  cancelled_at?: null;
  cart_token?: null;
  checkout_id: number;
  checkout_token: string;
  client_details: ClientDetails;
  closed_at?: null;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_subtotal_price: string;
  current_subtotal_price_set: PriceSet;
  current_total_discounts: string;
  current_total_discounts_set: PriceSet;
  current_total_duties_set?: null;
  current_total_price: string;
  current_total_price_set: PriceSet;
  current_total_tax: string;
  current_total_tax_set: PriceSet;
  customer_locale: string;
  device_id?: null;
  discount_codes?: null[] | null;
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status?: null;
  gateway: string;
  landing_site?: null;
  landing_site_ref?: null;
  location_id?: null;
  merchant_of_record_app_id?: null;
  name: string;
  note?: null;
  note_attributes?: null[] | null;
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_duties_set?: null;
  payment_gateway_names?: string[] | null;
  phone?: null;
  presentment_currency: string;
  processed_at: string;
  processing_method: string;
  reference: string;
  referring_site?: null;
  source_identifier: string;
  source_name: string;
  source_url?: null;
  subtotal_price: string;
  subtotal_price_set: PriceSet;
  tags: string;
  tax_lines?: null[] | null;
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_discounts: string;
  total_discounts_set: PriceSet;
  total_line_items_price: string;
  total_line_items_price_set: PriceSet;
  total_outstanding: string;
  total_price: string;
  total_price_set: PriceSet;
  total_shipping_price_set: PriceSet;
  total_tax: string;
  total_tax_set: PriceSet;
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: number;
  billing_address: BillingAddress;
  customer: Customer;
  discount_applications?: null[] | null;
  fulfillments?: null[] | null;
  line_items: LineItem[];
  payment_terms: PaymentTerms;
  refunds?: null[] | null;
  shipping_address: ShippingAddress;
  shipping_lines?: null[] | null;
}
interface ClientDetails {
  accept_language?: null;
  browser_height?: null;
  browser_ip: string;
  browser_width?: null;
  session_hash?: null;
  user_agent: string;
}
interface PriceSet {
  shop_money: Money;
  presentment_money: Money;
}
interface Money {
  amount: string;
  currency_code: string;
}

export interface Customer {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  state: string;
  note?: null;
  verified_email: boolean;
  multipass_identifier?: null;
  tax_exempt: boolean;
  tags: string;
  currency: string;
  phone?: null;
  accepts_marketing_updated_at: string;
  marketing_opt_in_level?: null;
  tax_exemptions?: null[] | null;
  email_marketing_consent: EmailMarketingConsent;
  sms_marketing_consent?: null;
  admin_graphql_api_id: string;
  default_address: DefaultAddress;
}
interface EmailMarketingConsent {
  state: string;
  opt_in_level: string;
  consent_updated_at?: null;
}

interface LineItem {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: null;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: PriceSet;
  product_exists: boolean;
  product_id: number;
  properties?: null[] | null;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PriceSet;
  variant_id: number;
  variant_inventory_management?: null;
  variant_title: string;
  vendor: string;
  tax_lines?: null[] | null;
  duties?: null[] | null;
  discount_allocations?: null[] | null;
}
interface PaymentTerms {
  id: number;
  created_at: string;
  due_in_days?: null;
  payment_schedules?: PaymentSchedule[] | null;
  payment_terms_name: string;
  payment_terms_type: string;
  updated_at: string;
}
interface PaymentSchedule {
  id: number;
  amount: string;
  currency: string;
  issued_at?: null;
  due_at?: null;
  completed_at?: null;
  created_at: string;
  updated_at: string;
}
interface Address {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province?: null;
  country: string;
  last_name: string;
  address2?: null;
  company?: null;
  latitude: number;
  longitude: number;
  name: string;
  country_code: string;
  province_code?: null;
}
interface ShippingAddress extends Address {}
interface BillingAddress extends Address {}
interface DefaultAddress extends Address {
  id: number;
  customer_id: number;
  default: boolean;
}

export interface Fulfillment {
  id: number;
  order_id: number;
  status: string;
  created_at: string;
  service: string;
  updated_at: string;
  tracking_company?: string | null;
  shipment_status?: string | null;
  location_id: number;
  origin_address?: null;
  email: string;
  destination: Destination;
  line_items: LineItem[] | null;
  tracking_number?: string | null;
  tracking_numbers?: string[] | null;
  tracking_url?: string | null;
  tracking_urls?: string[] | null;
  receipt: Receipt;
  name: string;
  admin_graphql_api_id: string;
}
interface Destination {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province?: null;
  country: string;
  last_name: string;
  address2?: null;
  company?: null;
  latitude: number;
  longitude: number;
  name: string;
  country_code: string;
  province_code?: null;
}

export interface Receipt {}

export type OrderStatus = "open" | "closed" | "cancelled";
