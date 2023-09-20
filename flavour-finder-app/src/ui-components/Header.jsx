/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
import SearchBar1 from "./SearchBar1";
export default function Header(props) {
  const { overrides, ...rest } = props;
  const suggestOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="1391px"
      height="580px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <View
        width="175px"
        height="53px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="53.79%"
        bottom="37.07%"
        left="6.83%"
        right="80.59%"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 360")}
      ></View>
      <Image
        width="36.81%"
        height="90.17%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9.83%"
        bottom="0%"
        left="63.19%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://img.freepik.com/premium-photo/woman-is-looking-phone-that-has-food-it_900101-15450.jpg?w=740"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Logo
        width="371px"
        height="81px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="86.03%"
        left="0%"
        right="73.33%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <SearchBar1
        width="602px"
        height="75px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34.83%"
        bottom="52.24%"
        left="6.83%"
        right="49.89%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SearchBar1")}
      ></SearchBar1>
      <Icon
        width="184px"
        height="47px"
        viewBox={{ minX: 0, minY: 0, width: 184, height: 47 }}
        paths={[]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3.1%"
        bottom="88.79%"
        left="66.79%"
        right="19.99%"
        {...getOverrideProps(overrides, "Rectangle 359")}
      ></Icon>
      <Text
        fontFamily="Ubuntu"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,1,1)"
        lineHeight="36px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="162px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="55%"
        bottom="38.1%"
        left="6.83%"
        right="81.52%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Suggest"
        onClick={() => {
          suggestOnClick();
        }}
        {...getOverrideProps(overrides, "Suggest")}
      ></Text>
    </View>
  );
}
