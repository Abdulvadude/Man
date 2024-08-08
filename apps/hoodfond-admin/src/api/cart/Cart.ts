import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Cart = {
  createdAt: Date;
  id: string;
  products: JsonValue;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
