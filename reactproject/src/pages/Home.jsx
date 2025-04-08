import "../css/Home.css";
import hereforyouImg from "../assets/hereforyou.jpg";
import meowntainImg from "../assets/meowntain.jpg";
import wermImg from "../assets/werm.jpg";
import hookedImg from "../assets/hooked.jpg";
import lawlessImg from "../assets/lawless.jpg";
import storkedImg from "../assets/storked.jpg";

export default function Home() {
  return (
    <div className="profile-container">
      <div className="new">COMING SOON!
        <div className="new-cauds">
          <img src={hookedImg} alt="hooked" className="caud-img" />
          <img src={lawlessImg} alt="lawless" className="caud-img" />
          <img src={storkedImg} alt="storked" className="caud-img" />
        </div>
      </div>
      <div className="title">Cauds</div>
      <div className="cauds">
        <img src={hereforyouImg} alt="hereforyou" className="caud-img" />
        <img src={meowntainImg} alt="meowntain" className="caud-img" />
        <a
          href="https://www.etsy.com/listing/1836055238"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wermImg} alt="werm" className="caud-img" />
        </a>
      </div>
    </div>
  );
}
