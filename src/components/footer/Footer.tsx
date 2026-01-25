import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear(); // automatically updates year
  return (
    <footer className="footer">
      <p>© {year} Nakashi Corp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
