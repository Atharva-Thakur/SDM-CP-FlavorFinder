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
export declare type RestarurantCreateFormInputValues = {
    name?: string;
};
export declare type RestarurantCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestarurantCreateFormOverridesProps = {
    RestarurantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestarurantCreateFormProps = React.PropsWithChildren<{
    overrides?: RestarurantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RestarurantCreateFormInputValues) => RestarurantCreateFormInputValues;
    onSuccess?: (fields: RestarurantCreateFormInputValues) => void;
    onError?: (fields: RestarurantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RestarurantCreateFormInputValues) => RestarurantCreateFormInputValues;
    onValidate?: RestarurantCreateFormValidationValues;
} & React.CSSProperties>;
export default function RestarurantCreateForm(props: RestarurantCreateFormProps): React.ReactElement;
