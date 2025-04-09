import "../css/Home.css";
import CaudCard from "../components/Caud.jsx";
import { useState } from "react";
import hereforyouImg from "../assets/hereforyou.jpg";
import hereblurImg from "../assets/hereblur.jpg";
import meowntainImg from "../assets/meowntain.jpg";
import meowntainblurImg from "../assets/meowntainblur.jpg"
import wermImg from "../assets/werm.jpg";
import wermblurImg from "../assets/wermblur.jpg";
import hookedImg from "../assets/hooked.jpg";
import hookedblurImg from "../assets/hookedblur.jpg";
import lawlessImg from "../assets/lawless.jpg";
import lawlessblurImg from "../assets/lawlessblur.jpg";
import storkedImg from "../assets/storked.jpg";
import storkblurImg from "../assets/storkblur.jpg";

const cauds = [
  {
    defaultImg: meowntainImg,
    hoverImg: meowntainblurImg,
    alt: "Meowntain",
    link: "https://www.etsy.com/listing/1841557611"
  },
  {
    defaultImg: wermImg,
    hoverImg: wermblurImg,
    alt: "Wermy",
    link: "https://www.etsy.com/listing/1836055238"
  },
  {
    defaultImg: hereforyouImg,
    hoverImg: hereblurImg,
    alt: "hereforyou",
    link: "https://www.etsy.com/listing/1836547600"
  },
  {
    defaultImg: hookedImg,
    hoverImg: hookedblurImg,
    alt: "hooked"
  },
  {
    defaultImg: lawlessImg,
    hoverImg: lawlessblurImg,
    alt: "lawless"
  },
  {
    defaultImg: storkedImg,
    hoverImg: storkblurImg,
    alt: "hooked"
  }
];

export default function Home() {

  return (
    <div className="home">
      <div className="title">
        <p>CAUDS</p>

      </div>


      <div className="cauds">
        {cauds.map((caud, index) => (
          <CaudCard
            key={index}
            defaultImg={caud.defaultImg}
            hoverImg={caud.hoverImg}
            alt={caud.alt}
            link={caud.link}
          />
        ))}
      </div>
    </div>
  );
}
