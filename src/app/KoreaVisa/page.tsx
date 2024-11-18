
import KVLandingSection1 from "@/app/koreavisa/components/KVLandingSection1";
import KVLandingSection2 from "@/app/koreavisa/components/KVLandingSection2";
import KVLandingSection3 from "@/app/koreavisa/components/KVLandingSection3";
import KVLandingSection4 from "@/app/koreavisa/components/KVLandingSection4";
import KVLandingSection5 from "@/app/koreavisa/components/KVLandingSection5";
import KVLandingSection6 from "@/app/koreavisa/components/KVLandingSection6";
import KVLandingSection7 from "@/app/koreavisa/components/KVLandingSection7";
import KVLandingSection8 from "@/app/koreavisa/components/KVLandingSection8";
// import Section3 from "../investment/components/Section3";
// import Section1 from "../investment/components/Section1";
// import Section2 from "../investment/components/Section2";
import Footer from "../ui/Footer";
import Header from "../ui/Header";


const LandingPage = () => {
  return (
    <>
      <Header />
      <KVLandingSection1 />
      <KVLandingSection2 />
      <KVLandingSection3 />
      <KVLandingSection4 />
      <KVLandingSection5 />
      <KVLandingSection6 />
      <KVLandingSection7 />
      <KVLandingSection8 />
      {/* <Section1 />
      <Section2 />
      <Section3 /> */}
      <Footer />
    </>
  );
};
export default LandingPage;
