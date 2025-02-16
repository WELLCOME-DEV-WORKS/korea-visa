import React from "react";

interface FooterProps {
  footerColor: string;
}

const Footer = ({ footerColor }: FooterProps) => {
  return (
    <footer
      className={`${footerColor} bottom-0 flex gap-5 justify-between w-full  max-md:max-w-full p-5 text-white  text-xs md:text-base`}
    >
      <span>
        Company Name : Well-come Visa Co., Ltd. <br />
        Representative : Inhyuk Lee <br />
        Address : 11th Floor, room 1113 and 1115, 78 Mapo-daero, Mapo-gu, Seoul{" "}
        <br />
        Business Registration Number : 359-86-02092 <br />
        Email : info@well-come.biz <br />
        Mail Order Business Registration Number : 2023-Seoul Mapo-3768 <br />
        Customer Service : +82-70-8655-2888
      </span>
    </footer>
  );
};

export default Footer;
