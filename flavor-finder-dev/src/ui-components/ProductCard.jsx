/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProductCard(props) {
  const { restaurant, overrides, ...rest } = props;
  return (
    <View
      width="572px"
      height="299px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(35,47,62,1)"
      {...getOverrideProps(overrides, "ProductCard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="206px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="71px"
        left="42px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={restaurant?.name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Image
        width="194px"
        height="199px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="338px"
        borderRadius="256px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={restaurant?.image}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="285px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="129px"
        left="42px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={restaurant?.location}
        {...getOverrideProps(overrides, "Location")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="222px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="176px"
        left="42px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={restaurant?.price}
        {...getOverrideProps(overrides, "Price")}
      ></Text>
      <Divider
        width="525px"
        height="2px"
        position="absolute"
        top="237px"
        left="23px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="258px"
        left="41px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Features")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Feature")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="17.59px"
              height="13.41px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.590087890625,
                height: 13.40997314453125,
              }}
              paths={[
                {
                  d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                  fill: "rgba(67,168,84,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="23.29%"
              bottom="20.83%"
              left="14.21%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={restaurant?.featues}
            {...getOverrideProps(overrides, "Fast")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
