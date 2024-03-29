import React from "react";
import Header from "./header";
import "../../../scss/home.scss";
import { CCol, CRow } from "@coreui/react";
import { Container } from "@mui/system";

function Welcome() {
  return (
    <div
      className="welcome"
      style={{ backgroundImage: `url(${require("../../../assets/bg3.jpg")})` }}
    >
      <div className="cover">
        <Header />
        <Container>
          <div className="mt-5">
            <CRow>
              <CCol md={6}>
                <h3 className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
                <div className="buttons-container mt-5">
                  <button>Get Started</button>
                  <button>Learn More</button>
                </div>
              </CCol>
              <CCol md={6}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/SYFQ2ZWx0Vc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </CCol>
            </CRow>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
