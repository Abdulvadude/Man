import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  products?: InputJsonValue;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
