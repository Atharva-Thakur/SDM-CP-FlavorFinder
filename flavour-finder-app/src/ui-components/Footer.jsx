/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { API } from "aws-amplify";
import { createContact } from "../graphql/mutations";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  const submitOnClick = async () => {
    await API.graphql({
      query: createContact,
      variables: { input: {} },
    });
  };
  return (
    <View
      width="1317px"
      height="615px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1076px"
        height="546px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="11.22%"
        left="9.11%"
        right="9.19%"
        {...getOverrideProps(overrides, "Footer UI")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1076px"
          height="531px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="2.75%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 1139")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="564px"
            height="531px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="47.58%"
            right="0%"
            {...getOverrideProps(overrides, "form")}
          >
            <View
              width="564px"
              height="531px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              border="0px SOLID rgba(250,148,131,1)"
              boxShadow="0px 80.5999984741211px 105.70134735107422px rgba(0.19919218122959137, 0.19919218122959137, 0.19919218122959137, 0.10000000149011612)"
              borderRadius="20px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 71")}
            ></View>
            <View
              width="484px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.79%"
              bottom="65.91%"
              left="7.09%"
              right="7.09%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Input/Normal2841")}
            >
              <View
                width="484px"
                height="60px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                border="1px SOLID rgba(10,20,47,1)"
                borderRadius="5px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(255,255,255,1)"
                opacity="0.30000001192092896"
                {...getOverrideProps(overrides, "Rectangle 232842")}
              ></View>
              <Text
                fontFamily="Ubuntu"
                fontSize="16px"
                fontWeight="700"
                color="rgba(10,20,47,1)"
                lineHeight="18.384000778198242px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="436.02px"
                height="23.16px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="31.49%"
                bottom="29.91%"
                left="5.17%"
                right="4.75%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                contentEditable=""
                children="Phone Number"
                {...getOverrideProps(overrides, "Phone Number")}
              ></Text>
            </View>
            <View
              width="484px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.72%"
              bottom="80.98%"
              left="7.09%"
              right="7.09%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Input/Normal2844")}
            >
              <View
                width="484px"
                height="60px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Input/Normal2845")}
              >
                <View
                  width="484px"
                  height="60px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  border="1.5px SOLID rgba(10,20,47,1)"
                  borderRadius="5px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,255,255,1)"
                  opacity="0.3799999952316284"
                  {...getOverrideProps(overrides, "Rectangle 232846")}
                ></View>
                <Text
                  fontFamily="Ubuntu"
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(108,114,130,1)"
                  lineHeight="18.384000778198242px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="436.02px"
                  height="23.16px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="31.49%"
                  bottom="29.91%"
                  left="5.17%"
                  right="4.75%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  contentEditable=""
                  children="Name"
                  {...getOverrideProps(overrides, "Name")}
                ></Text>
              </View>
            </View>
            <View
              width="484px"
              height="165px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="37.85%"
              bottom="31.07%"
              left="7.09%"
              right="7.09%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Input/Normal2848")}
            >
              <View
                width="484px"
                height="165px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                border="1px SOLID rgba(10,20,47,1)"
                borderRadius="5px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(255,255,255,1)"
                opacity="0.30000001192092896"
                {...getOverrideProps(overrides, "Rectangle 232849")}
              ></View>
              <Text
                fontFamily="Ubuntu"
                fontSize="16px"
                fontWeight="700"
                color="rgba(10,20,47,1)"
                lineHeight="18.384000778198242px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="436.02px"
                height="23.16px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="11.45%"
                bottom="74.51%"
                left="5.17%"
                right="4.75%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                contentEditable=""
                children="Message"
                {...getOverrideProps(overrides, "Message")}
              ></Text>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="155.83px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="74.58%"
              bottom="16.01%"
              left="7.09%"
              right="65.28%"
              {...getOverrideProps(overrides, "Send Message")}
            >
              <View
                width="155.83px"
                height="50px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                boxShadow="0px 24px 34px rgba(0.1256597340106964, 0.2734413146972656, 0.3916666805744171, 0.10000000149011612)"
                borderRadius="10px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(136,136,136,1)"
                {...getOverrideProps(overrides, "Rectangle 358")}
              ></View>
              <Text
                fontFamily="Ubuntu"
                fontSize="25px"
                fontWeight="500"
                color="rgba(255,255,255,1)"
                lineHeight="28.725000381469727px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="22%"
                bottom="20%"
                left="23.1%"
                right="24.28%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Submit"
                onClick={() => {
                  submitOnClick();
                }}
                {...getOverrideProps(overrides, "Submit")}
              ></Text>
            </View>
          </View>
          <Text
            fontFamily="Ubuntu"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="467px"
            height="124px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="49.34%"
            bottom="27.31%"
            left="0%"
            right="56.6%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Feel free to share your experiences.&#xA;Your feedback matters in making our messaging system even better. Thank you for being a valued part of our community!"
            {...getOverrideProps(
              overrides,
              "Feel free to share your experiences. Your feedback matters in making our messaging system even better. Thank you for being a valued part of our community!"
            )}
          ></Text>
          <Text
            fontFamily="Ubuntu"
            fontSize="44px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="60px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="467px"
            height="122px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38.04%"
            bottom="38.98%"
            left="0.09%"
            right="56.51%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact Us"
            {...getOverrideProps(overrides, "Contact Us")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="302px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="85.35%"
          bottom="0%"
          left="2.14%"
          right="69.8%"
          {...getOverrideProps(overrides, "Group 1138")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="79.47px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="73.68%"
            {...getOverrideProps(overrides, "Group 76")}
          >
            <Icon
              width="79.47px"
              height="80px"
              viewBox={{ minX: 0, minY: 0, width: 79.4736328125, height: 80 }}
              paths={[
                {
                  d: "M39.7368 83C63.3584 83 82.4737 63.7295 82.4737 40L76.4737 40C76.4737 60.4532 60.0074 77 39.7368 77L39.7368 83ZM82.4737 40C82.4737 16.2705 63.3584 -3 39.7368 -3L39.7368 3C60.0074 3 76.4737 19.5468 76.4737 40L82.4737 40ZM39.7368 -3C16.1153 -3 -3 16.2705 -3 40L3 40C3 19.5468 19.4663 3 39.7368 3L39.7368 -3ZM-3 40C-3 63.7295 16.1153 83 39.7368 83L39.7368 77C19.4663 77 3 60.4532 3 40L-3 40Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M39.7368 80C61.6829 80 79.4737 62.0914 79.4737 40C79.4737 17.9086 61.6829 0 39.7368 0C17.7908 0 0 17.9086 0 40C0 62.0914 17.7908 80 39.7368 80Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Oval Copy2858")}
            ></Icon>
            <Icon
              width="14.19px"
              height="23.03px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.191650390625,
                height: 23.02880859375,
              }}
              paths={[
                {
                  d: "M4.29006 23.0288L4.25752 12.9537L0 12.9537L0 8.63581L4.25752 8.63581L4.25752 5.75721C4.25752 1.87224 6.62968 0 10.0469 0C11.6837 0 13.0905 0.123593 13.5005 0.178833L13.5005 4.23884L11.1305 4.23994C9.27207 4.23994 8.91222 5.13557 8.91222 6.44985L8.91222 8.63581L14.1917 8.63581L12.7726 12.9537L8.91221 12.9537L8.91221 23.0288L4.29006 23.0288Z",
                  fill: "rgba(10,20,47,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="36%"
              bottom="35.21%"
              left="42%"
              right="40.14%"
              {...getOverrideProps(overrides, "Shape2859")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="79.47px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="73.68%"
            right="0%"
            {...getOverrideProps(overrides, "Group 12")}
          >
            <Icon
              width="79.47px"
              height="80px"
              viewBox={{ minX: 0, minY: 0, width: 79.4736328125, height: 80 }}
              paths={[
                {
                  d: "M39.7368 83C63.3584 83 82.4737 63.7295 82.4737 40L76.4737 40C76.4737 60.4532 60.0074 77 39.7368 77L39.7368 83ZM82.4737 40C82.4737 16.2705 63.3584 -3 39.7368 -3L39.7368 3C60.0074 3 76.4737 19.5468 76.4737 40L82.4737 40ZM39.7368 -3C16.1153 -3 -3 16.2705 -3 40L3 40C3 19.5468 19.4663 3 39.7368 3L39.7368 -3ZM-3 40C-3 63.7295 16.1153 83 39.7368 83L39.7368 77C19.4663 77 3 60.4532 3 40L-3 40Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M39.7368 80C61.6829 80 79.4737 62.0914 79.4737 40C79.4737 17.9086 61.6829 0 39.7368 0C17.7908 0 0 17.9086 0 40C0 62.0914 17.7908 80 39.7368 80Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Oval Copy2861")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="22.71px"
              height="18.71px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38%"
              bottom="38.61%"
              left="36%"
              right="35.43%"
              {...getOverrideProps(overrides, "logo-twitter")}
            >
              <Icon
                width="22.71px"
                height="18.71px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 22.706787109375,
                  height: 18.710906982421875,
                }}
                paths={[
                  {
                    d: "M22.7068 2.15895C21.8553 2.59074 21.0038 2.73467 20.0103 2.8786C21.0038 2.30288 21.7133 1.4393 21.9972 0.28786C21.1457 0.863581 20.1523 1.15144 19.0169 1.4393C18.1654 0.57572 16.8882 0 15.6109 0C13.1983 0 11.0695 2.15895 11.0695 4.74969C11.0695 5.18148 11.0695 5.46935 11.2115 5.75721C7.3797 5.61328 3.83177 3.74218 1.56109 0.863581C1.13534 1.58323 0.993421 2.30288 0.993421 3.31039C0.993421 4.89362 1.84492 6.33293 3.12218 7.19651C2.41259 7.19651 1.70301 6.90865 0.993421 6.62079L0.993421 6.62079C0.993421 8.92367 2.55451 10.7948 4.68327 11.2266C4.25752 11.3705 3.83177 11.3705 3.40601 11.3705C3.12218 11.3705 2.83835 11.3705 2.55451 11.2266C3.12218 13.0976 4.82519 14.5369 6.95395 14.5369C5.39286 15.8323 3.40601 16.552 1.13534 16.552C0.709587 16.552 0.425752 16.552 0 16.552C2.12876 17.8473 4.54135 18.7109 7.09586 18.7109C15.6109 18.7109 20.2942 11.5144 20.2942 5.32541C20.2942 5.18148 20.2942 4.89362 20.2942 4.74969C21.2876 4.03004 22.1391 3.16646 22.7068 2.15895Z",
                    fill: "rgba(10,20,47,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Shape2863")}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="79.47px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="36.84%"
            right="36.84%"
            {...getOverrideProps(overrides, "Group 11")}
          >
            <Icon
              width="79.47px"
              height="80px"
              viewBox={{ minX: 0, minY: 0, width: 79.4736328125, height: 80 }}
              paths={[
                {
                  d: "M39.7368 83C63.3584 83 82.4737 63.7295 82.4737 40L76.4737 40C76.4737 60.4532 60.0074 77 39.7368 77L39.7368 83ZM82.4737 40C82.4737 16.2705 63.3584 -3 39.7368 -3L39.7368 3C60.0074 3 76.4737 19.5468 76.4737 40L82.4737 40ZM39.7368 -3C16.1153 -3 -3 16.2705 -3 40L3 40C3 19.5468 19.4663 3 39.7368 3L39.7368 -3ZM-3 40C-3 63.7295 16.1153 83 39.7368 83L39.7368 77C19.4663 77 3 60.4532 3 40L-3 40Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M39.7368 80C61.6829 80 79.4737 62.0914 79.4737 40C79.4737 17.9086 61.6829 0 39.7368 0C17.7908 0 0 17.9086 0 40C0 62.0914 17.7908 80 39.7368 80Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Oval Copy2865")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="20.66px"
              height="20.8px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38%"
              bottom="36%"
              left="38%"
              right="36%"
              {...getOverrideProps(overrides, "16px-logo-instagram")}
            >
              <Icon
                width="2.48px"
                height="2.5px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.4794921875,
                  height: 2.496002197265625,
                }}
                paths={[
                  {
                    d: "M1.23979 2.496C1.92451 2.496 2.47958 1.93725 2.47958 1.248C2.47958 0.558749 1.92451 0 1.23979 0C0.555073 0 0 0.558749 0 1.248C0 1.93725 0.555073 2.496 1.23979 2.496Z",
                    fill: "rgba(10,20,47,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="18.32%"
                bottom="69.68%"
                left="69.91%"
                right="18.09%"
                {...getOverrideProps(overrides, "Oval")}
              ></Icon>
              <Icon
                width="10.33px"
                height="10.4px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 10.33154296875,
                  height: 10.399993896484375,
                }}
                paths={[
                  {
                    d: "M0 5.2C0 8.0678 2.31686 10.4 5.16579 10.4C8.01472 10.4 10.3316 8.0678 10.3316 5.2C10.3316 2.3322 8.01472 0 5.16579 0C2.31686 0 0 2.3322 0 5.2ZM2.58294 5.20002C2.58294 3.76612 3.74136 2.60002 5.16583 2.60002C6.5903 2.60002 7.74873 3.76612 7.74873 5.20002C7.74873 6.63392 6.5903 7.80002 5.16583 7.80002C3.74136 7.80002 2.58294 6.63392 2.58294 5.20002Z",
                    fill: "rgba(10,20,47,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="25%"
                bottom="25%"
                left="25%"
                right="25%"
                {...getOverrideProps(overrides, "Shape2868")}
              >
                <Icon
                  width="10.33px"
                  height="10.4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.33154296875,
                    height: 10.399993896484375,
                  }}
                  paths={[
                    {
                      d: "M5.16579 10.4C2.31686 10.4 0 8.0678 0 5.2C0 2.3322 2.31686 0 5.16579 0C8.01472 0 10.3316 2.3322 10.3316 5.2C10.3316 8.0678 8.01472 10.4 5.16579 10.4Z",
                      fill: "rgba(45,51,68,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="50%"
                  left="0%"
                  right="50%"
                  {...getOverrideProps(overrides, "Path2869")}
                ></Icon>
                <Icon
                  width="5.17px"
                  height="5.2px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.165771484375,
                    height: 5.20001220703125,
                  }}
                  paths={[
                    {
                      d: "M2.58289 0C1.15843 0 0 1.1661 0 2.6C0 4.0339 1.15843 5.2 2.58289 5.2C4.00736 5.2 5.16579 4.0339 5.16579 2.6C5.16579 1.1661 4.00736 0 2.58289 0Z",
                      fill: "rgba(45,51,68,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="12.5%"
                  bottom="62.5%"
                  left="12.5%"
                  right="62.5%"
                  {...getOverrideProps(overrides, "Path2870")}
                ></Icon>
              </Icon>
              <Icon
                width="20.66px"
                height="20.8px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20.6630859375,
                  height: 20.79998779296875,
                }}
                paths={[
                  {
                    d: "M5.16579 20.8L15.4974 20.8C18.1526 20.8 20.6632 18.2728 20.6632 15.6L20.6632 5.2C20.6632 2.5272 18.1526 0 15.4974 0L5.16579 0C2.51057 0 0 2.5272 0 5.2L0 15.6C0 18.2728 2.51057 20.8 5.16579 20.8ZM2.58292 5.19998C2.58292 3.98448 3.95831 2.59998 5.16581 2.59998L15.4974 2.59998C16.7049 2.59998 18.0803 3.98448 18.0803 5.19998L18.0803 15.6C18.0803 16.8155 16.7049 18.2 15.4974 18.2L5.16581 18.2C3.93506 18.2 2.58292 16.8389 2.58292 15.6L2.58292 5.19998Z",
                    fill: "rgba(10,20,47,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Shape2871")}
              >
                <Icon
                  width="20.66px"
                  height="20.8px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.6630859375,
                    height: 20.79998779296875,
                  }}
                  paths={[
                    {
                      d: "M15.4974 20.8L5.16579 20.8C2.51057 20.8 0 18.2728 0 15.6L0 5.2C0 2.5272 2.51057 0 5.16579 0L15.4974 0C18.1526 0 20.6632 2.5272 20.6632 5.2L20.6632 15.6C20.6632 18.2728 18.1526 20.8 15.4974 20.8Z",
                      fill: "rgba(51,31,31,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Path2872")}
                ></Icon>
                <Icon
                  width="15.5px"
                  height="15.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 15.497314453125,
                    height: 15.600006103515625,
                  }}
                  paths={[
                    {
                      d: "M2.58289 0C1.37539 0 0 1.3845 0 2.6L0 13C0 14.2389 1.35215 15.6 2.58289 15.6L12.9145 15.6C14.122 15.6 15.4974 14.2155 15.4974 13L15.4974 2.6C15.4974 1.3845 14.122 0 12.9145 0L2.58289 0Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="12.5%"
                  bottom="12.5%"
                  left="12.5%"
                  right="12.5%"
                  {...getOverrideProps(overrides, "Path2873")}
                ></Icon>
              </Icon>
            </View>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="57px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="26.74%"
          bottom="62.64%"
          left="1.02%"
          right="93.68%"
          {...getOverrideProps(overrides, "Group2874")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="57px"
            height="58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group2875")}
          >
            <Icon
              width="39.46px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 39.456298828125, height: 1 }}
              paths={[
                {
                  d: "M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM39.4563 2.5C40.8371 2.5 41.9563 1.38071 41.9563 0C41.9563 -1.38071 40.8371 -2.5 39.4563 -2.5L39.4563 2.5ZM0 2.5L39.4563 2.5L39.4563 -2.5L0 -2.5L0 2.5Z",
                  stroke: "rgba(136,136,136,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 5,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="100%"
              bottom="0%"
              left="15.39%"
              right="15.39%"
              {...getOverrideProps(overrides, "Vector2876")}
            ></Icon>
            <Icon
              width="57px"
              height="46.85px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 57,
                height: 46.845481872558594,
              }}
              paths={[
                {
                  d: "M38.7587 7.31239L36.4045 8.15376C36.6867 8.94336 37.3459 9.5389 38.1601 9.73967C38.9742 9.94044 39.8347 9.7197 40.4517 9.15185L38.7587 7.31239ZM18.2414 7.31239L16.5483 9.15185C17.1653 9.7197 18.0258 9.94044 18.8399 9.73967C19.6541 9.5389 20.3133 8.94336 20.5955 8.15376L18.2414 7.31239ZM0.310638 12.9345L2.74241 13.5146L2.74256 13.5139L0.310638 12.9345ZM8.77183 26.5435L11.2718 26.5435C11.2718 25.3616 10.4441 24.3411 9.28758 24.0973L8.77183 26.5435ZM8.77183 42.3835L6.27183 42.3835L8.77183 42.3835ZM48.2282 26.5435L47.7124 24.0973C46.5559 24.3411 45.7282 25.3616 45.7282 26.5435L48.2282 26.5435ZM56.6894 12.9345L54.2574 13.5139L54.2576 13.5146L56.6894 12.9345ZM59.1213 12.355C58.5767 10.0694 57.4568 7.96256 55.8669 6.24261L52.1953 9.63667C53.1981 10.7215 53.9103 12.057 54.2574 13.5139L59.1213 12.355ZM55.8669 6.24261C54.2767 4.52238 52.2704 3.24805 50.0424 2.54948L48.5465 7.32046C49.9346 7.75569 51.1928 8.55215 52.1953 9.63667L55.8669 6.24261ZM50.0424 2.54948C47.8143 1.85085 45.4447 1.7534 43.1674 2.26725L44.268 7.14462C45.6848 6.82491 47.1587 6.88532 48.5465 7.32046L50.0424 2.54948ZM43.1674 2.26725C40.8904 2.78106 38.7883 3.88738 37.0656 5.47294L40.4517 9.15185C41.5354 8.1544 42.851 7.46437 44.268 7.14462L43.1674 2.26725ZM41.1128 6.47102C40.1768 3.85196 38.4688 1.58192 36.2133 -0.0258639L33.3111 4.04566C34.726 5.05423 35.8087 6.48673 36.4045 8.15376L41.1128 6.47102ZM36.2133 -0.0258639C33.9571 -1.63409 31.2641 -2.5 28.5 -2.5L28.5 2.5C30.2171 2.5 31.8968 3.03752 33.3111 4.04566L36.2133 -0.0258639ZM28.5 -2.5C25.7359 -2.5 23.0429 -1.63409 20.7867 -0.0258639L23.6889 4.04566C25.1032 3.03752 26.7829 2.5 28.5 2.5L28.5 -2.5ZM20.7867 -0.0258639C18.5312 1.58192 16.8232 3.85196 15.8872 6.47102L20.5955 8.15376C21.1913 6.48673 22.274 5.05423 23.6889 4.04566L20.7867 -0.0258639ZM19.9344 5.47294C18.2117 3.88738 16.1096 2.78106 13.8326 2.26725L12.732 7.14462C14.149 7.46437 15.4646 8.1544 16.5483 9.15185L19.9344 5.47294ZM13.8326 2.26725C11.5553 1.7534 9.18575 1.85085 6.95755 2.54948L8.45347 7.32046C9.8413 6.88532 11.3152 6.82491 12.732 7.14462L13.8326 2.26725ZM6.95755 2.54948C4.72961 3.24805 2.72333 4.52238 1.13312 6.24261L4.80468 9.63667C5.80723 8.55215 7.06539 7.75569 8.45347 7.32046L6.95755 2.54948ZM1.13312 6.24261C-0.456825 7.96256 -1.5767 10.0694 -2.12128 12.355L2.74256 13.5139C3.08969 12.057 3.80187 10.7215 4.80468 9.63667L1.13312 6.24261ZM-2.12113 12.3544C-2.54602 14.1356 -2.61429 15.985 -2.32212 17.7931L2.61385 16.9955C2.42682 15.838 2.47061 14.654 2.74241 13.5146L-2.12113 12.3544ZM-2.32212 17.7931C-2.02995 19.6012 -1.38294 21.3331 -0.417801 22.8854L3.82841 20.2454C3.21456 19.2581 2.80088 18.1529 2.61385 16.9955L-2.32212 17.7931ZM-0.417801 22.8854C0.547404 24.4379 1.81161 25.7798 3.30157 26.8294L6.18109 22.7418C5.243 22.081 4.4422 21.2326 3.82841 20.2454L-0.417801 22.8854ZM3.30157 26.8294C4.79164 27.8791 6.47646 28.6145 8.25608 28.9897L9.28758 24.0973C8.17567 23.8628 7.11907 23.4026 6.18109 22.7418L3.30157 26.8294ZM6.27183 26.5435L6.27183 42.3835L11.2718 42.3835L11.2718 26.5435L6.27183 26.5435ZM6.27183 42.3835C6.27183 44.2159 6.9866 45.9818 8.27261 47.2907L11.8392 43.7865C11.4808 43.4218 11.2718 42.9179 11.2718 42.3835L6.27183 42.3835ZM8.27261 47.2907C9.56009 48.6011 11.3157 49.3455 13.1559 49.3455L13.1559 44.3455C12.6705 44.3455 12.196 44.1497 11.8392 43.7865L8.27261 47.2907ZM13.1559 49.3455L43.8441 49.3455L43.8441 44.3455L13.1559 44.3455L13.1559 49.3455ZM43.8441 49.3455C45.6843 49.3455 47.4399 48.6011 48.7274 47.2907L45.1608 43.7865C44.804 44.1497 44.3295 44.3455 43.8441 44.3455L43.8441 49.3455ZM48.7274 47.2907C50.0134 45.9819 50.7282 44.2159 50.7282 42.3835L45.7282 42.3835C45.7282 42.9179 45.5192 43.4218 45.1608 43.7865L48.7274 47.2907ZM50.7282 42.3835L50.7282 26.5435L45.7282 26.5435L45.7282 42.3835L50.7282 42.3835ZM48.7439 28.9897C50.5235 28.6145 52.2084 27.8791 53.6984 26.8294L50.8189 22.7418C49.8809 23.4026 48.8243 23.8628 47.7124 24.0973L48.7439 28.9897ZM53.6984 26.8294C55.1884 25.7798 56.4526 24.4379 57.4178 22.8854L53.1716 20.2454C52.5578 21.2326 51.757 22.081 50.8189 22.7418L53.6984 26.8294ZM57.4178 22.8854C58.3829 21.3331 59.0299 19.6012 59.3221 17.7931L54.3862 16.9955C54.1991 18.1529 53.7854 19.2581 53.1716 20.2454L57.4178 22.8854ZM59.3221 17.7931C59.6143 15.985 59.546 14.1356 59.1211 12.3544L54.2576 13.5146C54.5294 14.654 54.5732 15.838 54.3862 16.9955L59.3221 17.7931Z",
                  stroke: "rgba(136,136,136,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 5,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="19.23%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2877")}
            ></Icon>
          </View>
          <Icon
            width="39.46px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 39.456298828125, height: 1 }}
            paths={[
              {
                d: "M0 -2.5C-1.38071 -2.5 -2.5 -1.38071 -2.5 0C-2.5 1.38071 -1.38071 2.5 0 2.5L0 -2.5ZM39.4563 2.5C40.8371 2.5 41.9563 1.38071 41.9563 0C41.9563 -1.38071 40.8371 -2.5 39.4563 -2.5L39.4563 2.5ZM0 2.5L39.4563 2.5L39.4563 -2.5L0 -2.5L0 2.5Z",
                stroke: "rgba(136,136,136,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 5,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="61.54%"
            bottom="38.46%"
            left="15.39%"
            right="15.39%"
            {...getOverrideProps(overrides, "Vector2878")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
