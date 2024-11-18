import Script from "next/script";
import React from "react";

const GoogleTag = () => {
  const GTM_ID = "GTM-MTQ5BG3D";
  const GTag_Manager = "G-CKVTRV8111";

  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          className="hidden invisible"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-management">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',"${GTM_ID}");

        `}</Script>

      {/* Google tag (gtag.js) */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTag_Manager}`}
      ></Script>
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GTag_Manager};`}
      </Script>
    </>
  );
};

export default GoogleTag;
