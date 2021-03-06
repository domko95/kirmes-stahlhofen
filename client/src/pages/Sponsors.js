import React from "react";
import styled from "styled-components/macro";
import Rewe from "../assets/rewe.png";
import Eventservice from "../assets/eventservice.png";
import Ferdibox from "../assets/ferdibox.png";
import Feuerwerk from "../assets/feuerwerk.png";
import Glasfaser from "../assets/glasfaser.png";
import Vodafone from "../assets/vodafone.png";
import Massivhaus from "../assets/massivhaus.png";
import Gesandsverein from "../assets/gesangsverein.png";
import DRK from "../assets/drk.png";
import DJs from "../assets/djs.png";
import Werbung from "../assets/vodafone-werbung.jpeg";

const Sponsors = () => {
  return (
    <Body>
      <SponsorList>
        <Heading>Werbung</Heading>
        <div>
          <img src={Werbung} alt="Vodafone Werbung" width="400" height="400" />
          <h2>
            Glasfaser für Stahlhofen und gigaschnelles Internet sind wichtige
            Zukunftsperspektiven...
          </h2>
          <p>
            Die Vorvermarktung beginnt ab dem 01.06.2021. Und damit schnell alle
            an Infos kommen, wird das Vodafone Infomobil am Kirmes Samstag,
            05.06.2021 in Stahlhofen von 10:00 Uhr bis 17:00 Uhr am
            Kirchenvorplatz stehen.
          </p>
          <p>Also nutzt die Möglichkeit um euch dort beraten zu lassen.</p>
        </div>
        <div>
          <p>
            Übrigens gerne könnt ihr vormittags auch gerade einen Schnelltest
            beim DRK mit einem Beusch des Infobils verbinden.
          </p>
        </div>
        <Heading>Sponsoren</Heading>
        <SponsorRow>
          <a href="https://www.rewe.de/marktseite/wallmerod/1765300/rewe-markt-frankfurter-strasse-47">
            <img src={Rewe} alt="Rewe Wallmerod" />
          </a>
          <a href="https://www.eventservice-mb.de/startseite">
            <img src={Eventservice} alt="Eventservice Bachmeier" />
          </a>
        </SponsorRow>
        <SponsorRow>
          <a href="https://www.ferdibox.de">
            <img src={Ferdibox} alt="Ferdibox" />
          </a>
          <a href="https://www.feuerwerk-erleben.de">
            <img src={Feuerwerk} alt="Feuerwerk Erleben" />
          </a>
        </SponsorRow>
        <SponsorRow>
          <a href="https://www.glasfaser-montabaur.net">
            <img src={Glasfaser} alt="Glasfaser Montabaur" />
          </a>
          <a href="https://www.vodafone.de">
            <img src={Vodafone} alt="Vodafone Deutschland GmbH" />
          </a>
        </SponsorRow>
        <SponsorRow>
          <a href="https://www.massivhaus-rheinlahn.de">
            <img src={Massivhaus} alt="Massivhaus Rhein Lahn" />
          </a>
          <a href="https://www.gesangverein-stahlhofen.de">
            <img src={Gesandsverein} alt="Gesangverein Concordia Stahlhofen" />
          </a>
        </SponsorRow>
        <SponsorRow>
          <a href="https://www.drk.de">
            <img
              src={DRK}
              alt="Deutsches Rotes Kreuz - Ortsverband Daubach-Stahlhofen"
            />
          </a>
          <a href="/">
            <img src={DJs} alt="DJ Andy Luxx und DJ-Christian-Live" />
          </a>
        </SponsorRow>
      </SponsorList>
    </Body>
  );
};

export default Sponsors;

const Body = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
  div {
    text-align: center;
  }
`;

const SponsorList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom: 5%;
`;

const SponsorRow = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
`;
