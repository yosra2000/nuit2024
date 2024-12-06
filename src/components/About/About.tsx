import AboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <img
          src={AboutImg}
          alt="about"
          className="about__container__img"
          data-aos="fade-right"
        />
        <h2 data-aos="fade-left">
          “Bonjour, je suis Marin. <br /> J’ai voyagé partout et ai nagé dans
          toutes les eaux du monde : <br />
          <br /> le gyre du Pacifique Nord, la mer Baltique ou encore le Danube.
          <br />
          <br />
          Malheureusement, je suis tombée gravement malade et ne peux plus
          parcourir les mers et océans comme avant… Aide moi à comprendre les
          causes de ma maladie !
        </h2>
      </div>
    </div>
  );
};

export default About;
