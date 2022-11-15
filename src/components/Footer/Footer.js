import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        {/*         <li className="footer__list__item">Quiénes somos</li>
        <li className="footer__list__item">Blog</li>
        <li className="footer__list__item">Información Copyright</li> */}

        <p>
          Powered with 🍨 by{" "}
          <a
            href="mailto:codingflavour@gmail.com"
            className="footer__list__item"
          >
            Coding Flavour
          </a>
        </p>
      </ul>
    </div>
  );
}

export default Footer;
