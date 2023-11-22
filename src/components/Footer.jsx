import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h3>
          Victor Merseguel © <span id="footerYear"></span>
        </h3>
      </div>
      <div>
        <p>Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
