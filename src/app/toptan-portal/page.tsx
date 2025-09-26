import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FooterBottom from "@/components/FooterBottom";
import Texts from "@/components/Texts";
import RegisterComponent from "@/components/RegisterComponent";

export default function ToptanPortal() {
  return (
    <>
      <Header theme="white" />
      <Texts />
      <RegisterComponent />
      <Footer theme="bordered" />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
