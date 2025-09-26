import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FooterBottom from "@/components/FooterBottom";
import ContactUs from "@/components/ContactUs";
import ContactCards from "@/components/ContactCards";

export default function Contact() {
 
  

  return (
    <>
      <Header theme="white" />
      <ContactUs />
      <ContactCards />
      <Footer theme="bordered"/>
      <FooterBottom />
      <ScrollToTop />
    </>
  );
}