// 12.11.25

// Clase 13

export enum ROLES {
  Admin = "ADMIN",
  Seller = "SELLER",
  Customer = "CUSTOMER",
}

export interface UserInterface {
  id: string | number;
  username: string;
  role: ROLES;
}
