import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_.jpg"
        alt="Amazon banner"
        className="home-image"
      />
      <div className="home-row">
        <Product
          id="12345"
          title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)"
          price={24999.0}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="56789"
          title="INALSA Stand Mixer Professional Mix Master- Heavy Duty 1200 Watt Pure Copper Motor| 5.5L SS Bowl| Metal Gears for Extra Stability| Includes Whisking Cone, Mixing Beater & Dough Hook, (Red)"
          price={15950.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6113lMeZpWS._SX569_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="45678"
          title="ZEBRONICS Zeb-Smart Bot, Smart Speaker with IR Remote, Alexa Built-in, Works with iOS and Android Smartphones"
          price={30000.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/710q0Qi8VBL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="14972"
          title="Amazfit GTS2 Mini Smart Watch with 1.55 AMOLED Display, SpO2 Level Measurement, 14 Days' Battery Life, 70+ Sports Modes, Built-in Amazon Alexa & GPS, HR, Sleep&Stress Monitoring(Sage Green)"
          price={6500.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61qy7szj5xL._SX569_.jpg"
        />
        <Product
          id="12345"
          title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space Grey"
          price={85990.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._SL1500_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="12345"
          title="Mi 108 cm (43 Inches) 4K Ultra HD Android Smart LED TV 4X|L43M4-4AIN (Black)"
          price={29000.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/612oGaxp3DS._SL1188_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
