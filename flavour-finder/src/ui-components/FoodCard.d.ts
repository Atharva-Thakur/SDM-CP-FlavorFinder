/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Food } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodCardOverridesProps = {
    FoodCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<ViewProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Order?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FoodCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    food?: Food;
} & {
    overrides?: FoodCardOverridesProps | undefined | null;
}>;
export default function FoodCard(props: FoodCardProps): React.ReactElement;
