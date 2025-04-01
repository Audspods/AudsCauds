import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="contacts">
          <a href="https://instagram.com"
          target="_blank" rel="noopener noreferrer"
          className="footer-link">instagram</a>
          <a href="https://etsy.com/AudsCauds"
          target="_blank"
          rel="noopener noreferrer"
          className="etsy">etsy</a>
        </div>
      <p>© 2025 AudsCauds. All rights reserved.</p>
    </footer>
  );
}

export default Footer;