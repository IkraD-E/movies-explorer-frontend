import "./Footer.css";

const thisYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer className="footer">
          <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className="footer__container">
            <p className="footer__copyright">© {thisYear}</p>
            <ul className="footer__links">
              <li className="nav-tab__element">
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://practicum.yandex.ru/" 
                  className="footer__link">
                    Яндекс.Практикум
                </a>
              </li>
              <li className="nav-tab__element">
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://github.com/IkraD-E" 
                  className="footer__link">
                    Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
    )
}