import React from "react";

import { Column, Input, Img, Text } from "components";

const Signuppage = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Input
            className="bg-white_A700 border border-gray_600 border-solid font-normal font-worksans not-italic p-[0] sm:pb-[11px] md:pb-[14px] pb-[15px] sm:pr-[26px] md:pr-[34px] pr-[35px] sm:pt-[10px] md:pt-[13px] pt-[14px] rounded-radius20 text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
            type="text"
            name="TypeForm"
            placeholder="Username"
            prefix={
              <Img
                src={props?.user}
                className="ml-[20px] mr-[12px] sm:mr-[9px] sm:ml-[15px] sm:my-[9px] md:mr-[11px] md:ml-[19px] md:my-[12px] my-[13px]"
                alt="user"
              />
            }
            shape="RoundedBorder20"
            size="PaddingTB15"
            variant="OutlineGray600"
            fontStyle="WorkSansRomanRegular16"
          ></Input>
          <Input
            className="bg-white_A700 border border-gray_600 border-solid font-normal font-worksans sm:mt-[11px] md:mt-[14px] mt-[15px] not-italic p-[0] sm:pb-[11px] md:pb-[14px] pb-[15px] sm:pr-[26px] md:pr-[34px] pr-[35px] md:pt-[11px] pt-[12px] sm:pt-[9px] rounded-radius20 text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
            type="email"
            name="TypeForm One"
            placeholder="Email Address"
            prefix={
              <Img
                src={props?.mail}
                className="ml-[20px] mr-[12px] sm:mr-[9px] sm:ml-[15px] sm:my-[9px] md:mr-[11px] md:ml-[19px] md:my-[12px] my-[13px]"
                alt="mail"
              />
            }
            shape="RoundedBorder20"
            size="PaddingTB15"
            variant="OutlineGray600"
            fontStyle="WorkSansRomanRegular16"
          ></Input>
          <Input
            className="bg-white_A700 border border-gray_600 border-solid font-normal font-worksans sm:mt-[11px] md:mt-[14px] mt-[15px] not-italic p-[0] sm:pb-[11px] md:pb-[14px] pb-[15px] md:pt-[11px] pt-[12px] sm:pt-[9px] rounded-radius20 text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
            type="password"
            name="TypeForm Two"
            placeholder="Password"
            prefix={
              <Img
                src={props?.confirmpassword}
                className="ml-[20px] mr-[12px] sm:mr-[9px] sm:ml-[15px] sm:my-[9px] md:mr-[11px] md:ml-[19px] md:my-[12px] my-[13px]"
                alt="lock"
              />
            }
            suffix={
              <Img
                src={props?.password}
                className="ml-[35px] mr-[20px] sm:mr-[15px] sm:ml-[26px] sm:my-[9px] md:mr-[19px] md:ml-[34px] md:my-[12px] my-[13px]"
                alt="alarm"
              />
            }
            shape="RoundedBorder20"
            size="PaddingTB15"
            variant="OutlineGray600"
            fontStyle="WorkSansRomanRegular16"
          ></Input>
          <Input
            className="bg-white_A700 border border-gray_600 border-solid font-normal font-worksans sm:mt-[11px] md:mt-[14px] mt-[15px] not-italic p-[0] sm:pb-[11px] md:pb-[14px] pb-[15px] sm:pr-[26px] md:pr-[34px] pr-[35px] md:pt-[11px] pt-[12px] sm:pt-[9px] rounded-radius20 text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
            type="password"
            name="TypeForm Three"
            placeholder="Confirm Password"
            prefix={
              <Img
                src={props?.buuton}
                className="ml-[20px] mr-[12px] sm:mr-[9px] sm:ml-[15px] sm:my-[9px] md:mr-[11px] md:ml-[19px] md:my-[12px] my-[13px]"
                alt="lock"
              />
            }
            shape="RoundedBorder20"
            size="PaddingTB15"
            variant="OutlineGray600"
            fontStyle="WorkSansRomanRegular16"
          ></Input>
        </Column>
        <Text className="bg-deep_purple_A202 font-semibold font-worksans sm:mb-[18px] md:mb-[23px] mb-[24px] sm:mt-[23px] md:mt-[29px] mt-[30px] pb-[3px] pt-[2px] sm:px-[15px] md:px-[34px] px-[35px] rounded-radius11 text-[16px] text-white_A700 w-[330px]">
          {props?.text}
        </Text>
      </Column>
    </>
  );
};

export default Signuppage;
