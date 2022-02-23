import React, { useState, useEffect } from "react";
import "./HomePage.css";
import remote from "./Images/Remote.png";
import battery from "./Images/Battery.png";
import buoys from "./Images/Buoys.png";
import redning from "./Images/Redningsselskapet.png";
import roughwaters from "./Images/U_Safe_UserGuide.mp4";
import UsafeLights from "./Images/U_Safe_Lights.jpeg";
import dualTurbines from "./Images/Dual_turbines.png";
import RemoteCarousel from "./Images/RemoteCarousel.jpg";
import SpeedIcon from "@mui/icons-material/Speed";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";
import { Carousel } from "react-bootstrap";

function HomePage() {
  const [pageOffset, setPageOffset] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onScroll = () => setPageOffset(window.pageYOffset);
    const onResize = () => setWidth(window.innerWidth);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    pageOffset < window.innerHeight
      ? setHeaderVisible(true)
      : setHeaderVisible(false);

    return () => window.removeEventListener("scroll", onScroll);
  }, [pageOffset]);

  return (
    <div className="wrapper">
      <header className="homeUsafe">
        <span className={`statsContainer${headerVisible ? " animate" : ""}`}>
          <span className="stats">
            <h2>
              <SpeedIcon fontSize="large" />
              Toppfart
            </h2>
            <h3>15 km/t</h3>
          </span>
          <span className="stats">
            <h2>
              <BatteryCharging90Icon fontSize="large" />
              Batteritid
            </h2>
            <h3>30 minutter</h3>
          </span>
          <span className="stats">
            <h2>Rekkevidde</h2>
            <h3>300 meter</h3>
          </span>
        </span>
      </header>
      <div className="specsContainer">
        <div className="specsInfo">
          <p>
            U SAFE er en selvgående, fjernstyrt livbøye som når ut til personen
            i nød raskt, trygt og under alle forhold. Gjennom innovativ
            teknologi tilbyr U Safe en ny måte å redde liv på- enkelt, raskt og
            sikkert.
          </p>
        </div>
        <div className="inlineInfoSpecs">
          <span>
            <img src={buoys} alt="U SAFE buoys" />
          </span>
          <span className="inlineInfoSpecsText">
            <h1>Designet for å redde liv</h1>
            <p>
              U SAFE er utviklet av en rekke maritime eksperter med ett enkelt
              formål; å redde liv. Turbinmotorene gir en toppfart på 15km/t, og
              takket være det symmetriske designet kan den kjøre på begge sider,
              uansett forhold. U SAFE aktiveres automatisk når den kastes på
              sjøen og er klar i løpet av sekunder. ENKELT, RASKT, SIKKERT.
            </p>
          </span>
        </div>
        {width < 699 ? (
          <div className="inlineInfoSpecs">
            <span>
              <img src={battery} alt="Battery" />
            </span>
            <span className="inlineInfoSpecsText">
              <h1>Høy ytelse, lite vedlikehold</h1>
              <p>
                U SAFE drives av et 600w/t lithiumbatteri av høy kvalitet som
                enkelt lades opp via medfølgende induksjonslader. Et fulladet
                batteri gir omtrent 30 minutter kjøretid. Batteriet er plassert
                godt beskyttet, samtidig som det er enkelt å bytte ut, hvis man
                ønsker flere batterier for økt driftstid.
              </p>
            </span>
          </div>
        ) : (
          <div className="inlineInfoSpecs">
            <span className="inlineInfoSpecsText">
              <h1>Høy ytelse, lite vedlikehold</h1>
              <p>
                U SAFE drives av et 600w/t lithiumbatteri av høy kvalitet som
                enkelt lades opp via medfølgende induksjonslader. Et fulladet
                batteri gir omtrent 30 minutter kjøretid. Batteriet er plassert
                godt beskyttet, samtidig som det er enkelt å bytte ut, hvis man
                ønsker flere batterier for økt driftstid.
              </p>
            </span>
            <span>
              <img src={battery} alt="Battery" />
            </span>
          </div>
        )}

        <div className="inlineInfoSpecs">
          <span>
            <img src={remote} alt="Remote" />
          </span>
          <span className="inlineInfoSpecsText">
            <h1>Maksimal Kontroll</h1>
            <p>
              U SAFE styres svært intuitivt med medfølgende joystick, som både
              flyter og tåler vann. Joysticken lades via induksjonsladeren
              sammen med livbøyen, slik at den alltid er beredt. Redningen er
              kun et klikk unna.
            </p>
          </span>
        </div>
        <div className="roughWatersVideo">
          <div className="roughWatersText">
            <h2 className="greyText">Røffe farvann</h2>
            <h1>U SAFE fungerer på begge sider, uansett forhold</h1>
          </div>
          <video
            className="roughwaters"
            controls
            src={roughwaters}
            autoPlay
            muted
            loop
            type="video/mp4"
          />
        </div>
        <div className="lifeSaving">
          <div className="lifeSavingText">
            <h2 className="greyText">Optimalisert for livredning</h2>
            <h1>Testest av maritime eksperter</h1>
            <h2>
              <a
                href="https://www.youtube.com/watch?v=JIVW8oDzDbY"
                target="_blank"
              >
                Klikk her
              </a>{" "}
              for å se hva Redningsselskapet mener om U SAFE
            </h2>
          </div>
          <div className="lifeSavingImage">
            <a
              href="https://www.youtube.com/watch?v=JIVW8oDzDbY"
              target="_blank"
            >
              <img src={redning} alt="Redningsselskapet" />
            </a>
          </div>
        </div>
        <div className="carouselContainer">
          <div className="carouselText">
            <h1>HovedElementer</h1>
          </div>
          <Carousel className="car" variant="light">
            <Carousel.Item className="carouselItem">
              <img
                className="width"
                src={UsafeLights}
                alt="Lighting of U SAFE buoys"
              />
              <Carousel.Caption className="caption">
                <span className="captionNumber">01</span>
                <span className="captionInfo">
                  <h1>Sikkerhetslys</h1>
                </span>
                <span className="captionPara">
                  <p>
                    U SAFE er utstyrt med blinkende LED-belysning på begge sider
                    av skroget, som gir god synlighet i mørket, både for fører
                    og personen i vannet.
                  </p>
                </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="width"
                src={dualTurbines}
                alt="Lighting of U SAFE buoys"
              />
              <Carousel.Caption className="caption">
                <span className="captionNumber">02</span>
                <span className="captionInfo">
                  <h1>Elektrisk trubinmotor</h1>
                </span>
                <span className="captionPara">
                  <p>
                    Den elektriske turbinmotoren, som er patentert i 72 land
                    verden over, sikrer at livbøyen fortsetter mot målet, selv
                    hvis den vippes rundt av bølger.
                  </p>
                </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="width"
                src={RemoteCarousel}
                alt="Lighting of U SAFE buoys"
              />
              <Carousel.Caption className="caption">
                <span className="captionNumber">03</span>
                <span className="captionInfo">
                  <h1>Intuitiv fjernkontroll</h1>
                </span>
                <span className="captionPara">
                  <p>
                    Den vanntette fjernkontrollen er svært presis og intuitiv,
                    og er spesifikt designet for å opereres med èn hånd, som i
                    alt sikrer en trygg og enkel håndtering av livbøyen.
                  </p>
                </span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
