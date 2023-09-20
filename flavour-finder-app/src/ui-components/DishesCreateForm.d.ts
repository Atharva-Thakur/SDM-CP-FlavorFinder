/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DishesCreateFormInputValues = {
    name?: string;
    description?: string;
    rating?: number;
    price?: number;
    ImgUrl?: string;
};
export declare type DishesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    ImgUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DishesCreateFormOverridesProps = {
    DishesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    ImgUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DishesCreateFormProps = React.PropsWithChildren<{
    overrides?: DishesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DishesCreateFormInputValues) => DishesCreateFormInputValues;
    onSuccess?: (fields: DishesCreateFormInputValues) => void;
    onError?: (fields: DishesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DishesCreateFormInputValues) => DishesCreateFormInputValues;
    onValidate?: DishesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DishesCreateForm(props: DishesCreateFormProps): React.ReactElement;
