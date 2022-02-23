import React, { useState, useEffect } from "react";
import "./Usage.css";
import usageVideo from "../HomePage/Images/U SAFE Tech.mp4";
import heights from "../HomePage/Images/DropFromHeights.png";
import aquaculture from "../HomePage/Images/bouyAquaulture.jpeg";
import bouyplatform from "../HomePage/Images/bouyPlatform.jpeg";
import mission from "../HomePage/Images/Mission.jpeg";
import patent from "../HomePage/Images/PatentProtection.png";
import dame from "../HomePage/Images/DameAwards.png";

function Usage() {
  useEffect(() => {
    document.title = "USAFE NORGE - SPECS";
  }, []);
  return (
    <div className="usageContainer">
      <header className="usageVideo">
        <video src={usageVideo} autoPlay muted loop controls type="video/mp4" />
      </header>
      <div className="awardsContainer">
        <span>
          <h1>Gjennomslående teknologi</h1>
        </span>
        <div className="awards">
          <span className="dame">
            <img src={dame} alt="Dame awards" />
            <p>
              "U SAFE is a perfect example of how accepted norms in the products
              we use can be examined and improved by great design."
            </p>
          </span>
          <span className="patent">
            <img src={patent} alt="Patent protection" />
            <p>
              Our dual turbine propulsion, patented in 72 countries, means U
              SAFE always knows the way towards its rescue target.
            </p>
          </span>
        </div>
      </div>
      <div className="usageSpecs">
        <div className="usageSpecsParts">
          <span className="usageSpecsImage ">
            <img src={heights} alt="Drop from heights" />
          </span>
          <span className="usageSpecsText">
            <h2>Droppes fra høyder</h2>
            <p>
              U SAFE er godkjent for drop inntil 30 meter over havoverflaten, og
              kan enkelt kastes ned til personen i nød både fra helikopter, skip
              eller oljeplattform. Dette gir en unik responstid i de første,
              avgjørende sekundene.
            </p>
          </span>
        </div>
        <div className="usageSpecsParts">
          <span className="usageSpecsText even">
            <h2>Maksimal ytelse selv i utsatte og ulendte områder</h2>
            <p>
              U SAFE sine innovative egenskaper gir en unik fremkommelighet selv
              i utsatte og ulendte områder, og når enkelt frem til personer i
              nød der båter og redningspersonell kommer til kort. U SAFE
              aktiveres automatisk når den kastes på sjøen, og kan nå personen i
              vannet i løpet av få sekunder!
            </p>
          </span>
          <span className="usageSpecsImage even">
            <img src={aquaculture} alt="Drop from heights" />
          </span>
        </div>
        <div className="usageSpecsParts">
          <span className="usageSpecsImage">
            <img src={bouyplatform} alt="Drop from heights" />
          </span>
          <span className="usageSpecsText">
            <h2>Når frem under alle værforhold</h2>
            <p>
              U SAFE er bygget for å tåle alle værforhold. Takket være det
              symmetriske designet vil U SAFE fortsette å kjøre, uavhengig av
              hvilken side som er ned. Vippes den rundt av en bølge, fortsetter
              den å kjøre på andre siden. De kraftige turbinmotorene sørger for
              hurtig fremkommelighet selv i grov sjø.
            </p>
          </span>
        </div>
        <div className="usageSpecsParts">
          <span className="usageSpecsText even">
            <h2>Øker sikkerheten også for redningspersonell</h2>
            <p>
              Å sende en redningsmann i vannet er alltid forbundet med risiko. U
              SAFE vil redusere risikoen, i tillegg til at redningspersonalet
              vil kunne fraktes raskere ut enn på egenhånd, og kreftene kan
              spares til pasienten. De kraftige turbinmotorene frakter enkelt to
              personer tilbake til sikkerhet.
            </p>
          </span>
          <span className="usageSpecsImage even">
            <img src={mission} alt="Drop from heights" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Usage;
