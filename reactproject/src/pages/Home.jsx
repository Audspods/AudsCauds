import "../css/Home.css";
import hereforyouImg from "../assets/hereforyou.jpg";
import meowntainImg from "../assets/meowntain.jpg";

export default function Home() {
    return (
        <div className="home">
            <div className="title">Cauds</div>
            <div className="cauds">
                <img src={hereforyouImg} alt="hereforyou caud" className="hereforyou" />
                <img src={meowntainImg} alt="meowntain caud" className="meowntain" />
            </div>
        </div>
    );
}