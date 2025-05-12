const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

const PRODUCT_URL = "/api/products";

const USER_URL = "/api/users";

const ORDER_URL = "/api/orders";

export { BASE_URL, PRODUCT_URL, USER_URL, ORDER_URL };
