/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CartUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  products?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { CartUpdateInput as CartUpdateInput };
