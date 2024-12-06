import { TypeAnimation } from "react-type-animation";
import HeaderImg from "../../assets/header-img.png";
import Bubbles from "../bubbles/Bubbles";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <Bubbles />

      <div className="header__content">
        <div className="header__content__info">
          <img
            src={HeaderImg}
            alt="Header Image"
            className="header__content__info__img"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          />

          <div
            className="header__content__info__text"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
          >
            <TypeAnimation
              sequence={[
                "Bonjour, Je m'appelle Example Name.",
                2000,
                "L'océan, source de vie pour notre planète, joue un rôle essentiel dans l'équilibre écologique mondial. Il abrite une biodiversité incroyable et régule le climat en absorbant une grande partie du dioxyde de carbone.",
                2000,
                "Cependant, les océans subissent de nombreuses menaces causées par l'activité humaine. La pollution plastique, le réchauffement climatique, et la surpêche mettent en péril cet écosystème fragile.",
                2000,
                " Ces problématiques provoquent des déséquilibres, comme la destruction des récifs coralliens ou encore l'apparition de zones mortes, des endroits où aucune vie marine ne peut survivre.",
                2000,
                "Il est urgent d'agir pour protéger nos océans, car leur santé est intimement liée à celle de notre planète et de l'humanité.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>

        <div
          className="header__content__btn__container"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="header__content__btn__container__btn header__content__btn__container__btn-primary"
          >
            Lire la suite...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
