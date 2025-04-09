import { useState } from "react";
import "../css/Home.css";

export default function Caud({ defaultImg, hoverImg, alt, link }) {
    const [hovered, setHovered] = useState(false);

    const image = (
        <img
            src={hovered ? hoverImg: defaultImg}
            alt={alt}
            className="caud-img"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
    )

    return (
        <div className="caud-container">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {image}
                </a>
            ) : (
                <div className="coming-soon">{image}</div>
            )}
        </div>
    );
}
