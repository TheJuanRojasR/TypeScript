// 12.11.25

// Clase 13

// Clase 14
import { BaseModelInterface } from "../base.model.js"

export enum ROLES {
  Admin = "ADMIN",
  Seller = "SELLER",
  Customer = "CUSTOMER",
}

export interface UserInterface extends BaseModelInterface {
  username: string;
  role: ROLES;
}
