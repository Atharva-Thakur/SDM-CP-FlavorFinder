/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchBar1OverridesProps = {
    SearchBar1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Search food"?: PrimitiveOverrideProps<TextProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector2765?: PrimitiveOverrideProps<IconProps>;
    Vector2766?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchBar1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchBar1OverridesProps | undefined | null;
}>;
export default function SearchBar1(props: SearchBar1Props): React.ReactElement;
