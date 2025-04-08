import '../css/About.css';
import AudreyImg from "../assets/audreypfp.jpg";
import AdelineImg from "../assets/adpfp.jpg";
import WermyImg from "../assets/wermypfp.jpg";

function About() {
    return (
        <div className="profiles">
        <div className="caud-container">
                <img src={AudreyImg} alt="Audrey" className="Audreypfp"></img>
                <div className="Audrey-biotext">
                    <h2>Audrey</h2>
                    <p>I've always been fascinated with puns and wanted to express my ideas while spreading love.
                    I create cards for every occasion, often featuring cats, raccoons, and worms :) </p>
                    <a href="https://www.linkedin.com/in/audrey-shen-051820259/" className="linkedin">PLEASE HIRE ME</a>
                </div>
            </div>

        <div className="caud-container">
            <img src={AdelineImg} alt="Adeline" className="Adpfp"></img>
            <div className="Ads-biotext">
                <h2>Adeline</h2>
                <p>I'm her sister lol</p>
            </div>
        </div>

        <div className="caud-container">
            <a
                href = "https://www.etsy.com/listing/1836055238/worm-and-fuzzy-humorous-seasonal?ref=shop_home_active_4&frs=1&logging_key=727a00b531e3c2a8dea086cc8e1f49dfbbe56124%3A1836055238"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={WermyImg} alt="Wermy" className="Wermypfp"></img>
            </a>
            <div className="Wermy-biotext">
                <h2>Wermy</h2>
                <p>Wermy is one of our original frens, featured in our debut "werm and fuzzy"
                    holiday greeting caud. His favorite thing to do is sunbathe in the puddles
                    after a rainstorm.
                </p>
            </div>
        </div>
    </div>
    );
}

export default About;