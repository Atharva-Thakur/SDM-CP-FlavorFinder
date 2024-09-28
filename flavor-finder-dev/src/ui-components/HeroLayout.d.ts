/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayoutOverridesProps = {
    HeroLayout?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 359"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 360"?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "image 4"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroLayoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroLayoutOverridesProps | undefined | null;
}>;
export default function HeroLayout(props: HeroLayoutProps): React.ReactElement;
