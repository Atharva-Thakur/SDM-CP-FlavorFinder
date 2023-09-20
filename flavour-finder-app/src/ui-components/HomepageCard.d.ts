/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomepageCardOverridesProps = {
    "99"?: PrimitiveOverrideProps<TextProps>;
    HomepageCard?: PrimitiveOverrideProps<ViewProps>;
    "Group 12"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Pepperoni, capsicum, tomato..."?: PrimitiveOverrideProps<TextProps>;
    "Farmhouse Pizza"?: PrimitiveOverrideProps<TextProps>;
    "Rating -"?: PrimitiveOverrideProps<TextProps>;
    "4.9"?: PrimitiveOverrideProps<TextProps>;
    "Currency/Rupee (INR)"?: PrimitiveOverrideProps<ViewProps>;
    Mask?: PrimitiveOverrideProps<ViewProps>;
    Rupee?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HomepageCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    dishes?: any;
} & {
    overrides?: HomepageCardOverridesProps | undefined | null;
}>;
export default function HomepageCard(props: HomepageCardProps): React.ReactElement;
