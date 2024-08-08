import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  products?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
