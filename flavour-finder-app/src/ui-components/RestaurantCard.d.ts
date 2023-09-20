/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurantCardOverridesProps = {
    RestaurantCard?: PrimitiveOverrideProps<ViewProps>;
    "Group 12"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Address- VIT College, Bibwewadi, Pune"?: PrimitiveOverrideProps<TextProps>;
    "Nice Restaurant"?: PrimitiveOverrideProps<TextProps>;
    "Rating - 4.9/5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RestaurantCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RestaurantCardOverridesProps | undefined | null;
}>;
export default function RestaurantCard(props: RestaurantCardProps): React.ReactElement;
