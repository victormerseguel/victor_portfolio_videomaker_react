import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={style.about} id="about">
        <h2>Sobre</h2>
        <p>
          Sou um videomaker que ama o fazer artístico. Com mais de
          <span id="aboutText"></span> anos de experiência, sou especializado em
          contar histórias. Venho das artes, sou formado em artes cênicas, e não
          sei dizer quando transpus o limite do palco para as telas. Entre
          dirigir um espetáculo e um filme, iluminar um palco e um set de
          filmagem, ou ainda, escrever uma peça ou um roteiro; a distância para
          mim parece mínima. <br />
          De qualquer forma, para além do lado artístico, sou um defensor das
          técnicas. Sou certificado pela Blackmagic Design em edição,
          colorização e tratamento de som; com vasta experiência em diversos
          softwares e técnicas. <br />
          Em suma, sou um comunicador que encontrou no vídeo uma maneira de
          levar mensagens, seja de quem for, para o mundo.
        </p>
      </div>
    </div>
  );
};

export default About;
