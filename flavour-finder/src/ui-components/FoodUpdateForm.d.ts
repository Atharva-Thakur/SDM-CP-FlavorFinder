/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Food } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodUpdateFormInputValues = {
    Name?: string;
    Location?: string;
    Price?: number;
    Image?: string;
};
export declare type FoodUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
    Image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodUpdateFormOverridesProps = {
    FoodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    food?: Food;
    onSubmit?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onSuccess?: (fields: FoodUpdateFormInputValues) => void;
    onError?: (fields: FoodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onValidate?: FoodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodUpdateForm(props: FoodUpdateFormProps): React.ReactElement;
