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
export declare type SuggestedRestaurantsUpdateFormInputValues = {
    name?: string;
    location?: string;
    price?: string;
    features?: string;
};
export declare type SuggestedRestaurantsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    features?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuggestedRestaurantsUpdateFormOverridesProps = {
    SuggestedRestaurantsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    features?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SuggestedRestaurantsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SuggestedRestaurantsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    suggestedRestaurants?: any;
    onSubmit?: (fields: SuggestedRestaurantsUpdateFormInputValues) => SuggestedRestaurantsUpdateFormInputValues;
    onSuccess?: (fields: SuggestedRestaurantsUpdateFormInputValues) => void;
    onError?: (fields: SuggestedRestaurantsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuggestedRestaurantsUpdateFormInputValues) => SuggestedRestaurantsUpdateFormInputValues;
    onValidate?: SuggestedRestaurantsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SuggestedRestaurantsUpdateForm(props: SuggestedRestaurantsUpdateFormProps): React.ReactElement;
