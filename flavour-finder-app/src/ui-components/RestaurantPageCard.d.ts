/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantPageCardOverridesProps = {
    "99"?: PrimitiveOverrideProps<TextProps>;
    RestaurantPageCard?: PrimitiveOverrideProps<ViewProps>;
    "Group 12"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Pepperoni, capsicum, tomato..."?: PrimitiveOverrideProps<TextProps>;
    "Delicious Dish"?: PrimitiveOverrideProps<TextProps>;
    "Rating - 4.9/5"?: PrimitiveOverrideProps<TextProps>;
    "Currency/Rupee (INR)"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<ViewProps>;
    Rupee?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type RestaurantPageCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RestaurantPageCardOverridesProps | undefined | null;
}>;
export default function RestaurantPageCard(props: RestaurantPageCardProps): React.ReactElement;
