/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function HeroLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="827px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroLayout")}
      {...rest}
    >
      <View
        width="1440px"
        height="827px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Rectangle 359")}
      ></View>
      <View
        width="1307px"
        height="650px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9.19%"
        bottom="12.21%"
        left="4.58%"
        right="4.65%"
        borderRadius="150px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(35,47,62,1)"
        {...getOverrideProps(overrides, "Rectangle 360")}
      ></View>
      <Image
        width="35.56%"
        height="63.24%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.38%"
        bottom="18.38%"
        left="57.36%"
        right="7.08%"
        borderRadius="256px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Image
        width="45.45%"
        height="27.51%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30.47%"
        bottom="42.02%"
        left="9.86%"
        right="44.69%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 4")}
      ></Image>
    </View>
  );
}
