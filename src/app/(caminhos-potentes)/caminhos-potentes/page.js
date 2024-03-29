"use client";
import "./globals_cp.css";

import { Fragment, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import HeadCP from "./components/HeadCP";
import Section1CP from "./components/Section1CP";
import ModulesCP from "./components/ModulesCP";
import PhraseCP from "./components/PhraseCP";
import TestimonyCP from "./components/TestimonyCP";
import BeforeAndAfterCP from "./components/BeforeAndAfterCP";
import OnboardCP from "./components/OnboardCP";
import ParentsContentCP from "./components/ParentsContentCP";
import WebSerieCP from "./components/WebSerieCP";
import BonusCP from "./components/BonusCP";
import GuaranteeCP from "./components/GuaranteeCP";
import GuaranteeCPClosed from "./components/GuaranteeCPClosed";
import AboutLucianaCP from "./components/AboutLucianaCP";
import FAQCP from "./components/FAQCP";
import FooterCP from "./components/FooterCP";
import WhatsApp from "./components/WhatsApp";

const CaminhosPotentes = () => {
  const [openClass, setOpenClass] = useState(false);
  const [lazy, setLazy] = useState(false);
  const moduleRef = useRef();
  const testimonyRef = useRef();

  useEffect(() => {
    setLazy(true);
  }, []);

  return (
    <Fragment>
      <HeadCP />
      <Section1CP />
      {lazy && (
        <>
          <ModulesCP />
          <PhraseCP />
          <TestimonyCP />
          <BeforeAndAfterCP />
          <OnboardCP />
          <ParentsContentCP />
          <WebSerieCP />
          <BonusCP />
          {openClass ? <GuaranteeCP /> : <GuaranteeCPClosed />}
          <AboutLucianaCP />
          <FAQCP />
          <FooterCP />
          <WhatsApp />
        </>
      )}
    </Fragment>
  );
};

export default CaminhosPotentes;
