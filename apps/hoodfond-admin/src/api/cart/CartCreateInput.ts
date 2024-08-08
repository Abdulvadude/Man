import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  products?: InputJsonValue;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
