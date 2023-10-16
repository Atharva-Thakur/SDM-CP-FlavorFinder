/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCardOverridesProps = {
    ReviewCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<TextProps>;
    "Review Content"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    reviews?: any;
    restaurant?: any;
    restaurantid?: String;
} & {
    overrides?: ReviewCardOverridesProps | undefined | null;
}>;
export default function ReviewCard(props: ReviewCardProps): React.ReactElement;
