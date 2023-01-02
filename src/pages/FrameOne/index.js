import React from "react";

import { Column, Input, Img, Button } from "components";

const FrameOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-worksans items-center justify-start mx-[auto] sm:p-[15px] md:p-[44px] p-[45px] w-[100%]">
        <Column className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start max-w-[370px] sm:mb-[38px] md:mb-[49px] mb-[50px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[19px] p-[20px] sm:pl-[15px] sm:pr-[15px] rounded-radius5 w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
            <Input
              className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="flex w-[100%]"
              type="text"
              name="TypeForm"
              placeholder="Username"
              prefix={
                <Img
                  src="images/img_user.svg"
                  className="ml-[6px] mr-[12px] sm:mr-[9px] sm:ml-[4px] md:mr-[11px] md:ml-[5px] my-[auto]"
                  alt="user"
                />
              }
              shape="RoundedBorder20"
              size="sm"
              variant="OutlineGray600"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="flex md:mt-[14px] mt-[15px] sm:mt-[11px] w-[100%]"
              type="email"
              name="TypeForm One"
              placeholder="Email Address"
              prefix={
                <Img
                  src="images/img_mail.svg"
                  className="ml-[6px] mr-[12px] sm:mr-[9px] sm:ml-[4px] md:mr-[11px] md:ml-[5px] my-[auto]"
                  alt="mail"
                />
              }
              shape="RoundedBorder20"
              size="sm"
              variant="OutlineGray600"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="flex md:mt-[14px] mt-[15px] sm:mt-[11px] w-[100%]"
              type="password"
              name="TypeForm Two"
              placeholder="Password"
              prefix={
                <Img
                  src="images/img_lock.svg"
                  className="ml-[6px] mr-[12px] sm:mr-[9px] sm:ml-[4px] md:mr-[11px] md:ml-[5px] my-[auto]"
                  alt="lock"
                />
              }
              suffix={
                <Img
                  src="images/img_alarm.svg"
                  className="ml-[35px] mr-[6px] sm:mr-[4px] sm:ml-[26px] md:mr-[5px] md:ml-[34px] my-[auto]"
                  alt="alarm"
                />
              }
              shape="RoundedBorder20"
              size="sm"
              variant="OutlineGray600"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="flex md:mt-[14px] mt-[15px] sm:mt-[11px] w-[100%]"
              type="password"
              name="TypeForm Three"
              placeholder="Confirm Password"
              prefix={
                <Img
                  src="images/img_lock.svg"
                  className="ml-[6px] mr-[12px] sm:mr-[9px] sm:ml-[4px] md:mr-[11px] md:ml-[5px] my-[auto]"
                  alt="lock"
                />
              }
              shape="RoundedBorder20"
              size="sm"
              variant="OutlineGray600"
            ></Input>
          </Column>
          <Button className="cursor-pointer font-semibold sm:mb-[18px] md:mb-[23px] mb-[24px] min-w-[100%] sm:mt-[23px] md:mt-[29px] mt-[30px] text-[16px] text-center text-white_A700 w-[max-content]">
            Create account
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default FrameOnePage;
