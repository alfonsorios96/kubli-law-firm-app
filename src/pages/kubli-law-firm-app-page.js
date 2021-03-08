import { LitElement, html, css } from 'lit-element';
import 'sophos-card/sophos-card';
import 'sophos-icon/sophos-icon'
import locals from '../locals';

export class KubliLawFirmAppPage extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.navigationBarTitle = locals.navigationBarTitle;
    this.navigationBarIcons = locals.navigationBarIcons;
    this.headerImage = locals.headerImage;
    this.topContentTitle = locals.pageContentTitle;
    this.topContentBodyText = locals.contentBodyText;
    this.bottomContentTitle = locals.bottomContentTitle;
    this.bottomContent = locals.bottomContent;
    this.navBarTitle = locals.navBarTitle;
    this.imageAlt = locals.imageAlt;
    this.footerIcons = locals.footerIcons;
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      topContentTitle : { type: String},
      topContentBodyText : {type: Array},
      bottomContentTitle : {type: String},
      bottomContent: {type : Array},
      navBarTitle : { type: String}
    };
  };

  static get styles() {
    return css`
      #main-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 1100px;
        background-color: #FFFFFF;
        padding: 0 20px;
      }
      #navigation-bar {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        flex-wrap: wrap;
      }
      #nav-bar-title {
        --sophos-card-main-container-width: auto;
      }

      .practice-area-card, #nav-bar-title {
        --sophos-card-picture-container-width: 0;
        --sophos-card-picture-container-height: 0;
        --sophos-card-main-container-border-style: none;
      }

      #icons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      .nav-bar-icons {
        --sophos-icon-icon-image-width: 20px;
        --sophos-icon-icon-image-height: 20px;
        --sophos-icon-icon-text-font-size: 15px;
        margin: 5px;
      }

      .nav-bar-icons:hover {
        background-color: #949494;
        border-radius: 10px;
      }

      .nav-bar-icons:active {
        background-color: #212221;
        border-radius: 10px;
      }

      #header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212221;
        min-width: 200px;
      }

      #header-card {
        --sophos-card-main-container-border-style: none;
        --sophos-card-picture-max-width: 900px;
        --sophos-card-picture-width: 100%;
        --sophos-card-picture-min-width: 200px;
        --sophos-card-picture-max-height: auto;
        --sophos-card-picture-height: auto;
        --sophos-card-picture-min-height: auto;
        --sophos-card-picture-border-radius: none;
        --sophos-card-picture-container-overflow: none;
        --sophos-card-picture-container-width: auto;
        --sophos-card-picture-container-height: auto;
        --sophos-card-main-container-width: auto;
        --sophos-card-main-container-height: auto;
        --sophos-card-title-margin-block-start: 20px;
        margin: 40px;
      }

      .practice-area-card {
        --sophos-card-title-text-align: center;
      }

      #content {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      #middle-content {
        width: 100%;
      }

      #middle-content-title {
        text-align: center;
      }

      #bottom-title-container {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      #bottom-content {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }

      #middle-content-map {
        display: flex;
        justify-content: space-around;
        max-height: 300px;
      }

      #middle-map {
        width: 100%;
        max-width: 700px;
        height: 100%;
      }

      #footer {
        background-color: #212529;
        text-align: center;
        color: #97BBa6;
        padding: 20px;
      }

      #footer-icons-container {
        display: flex;
        justify-content: center;
      }
    `;
  };

  navigateToSection(e) {
    const iconTextWords = e.target.iconText.split(' ');
    const sectionName = iconTextWords.join('-');
    const elementToFocus = this.shadowRoot.querySelector(`[section-name="${sectionName}"]`);
    console.log(elementToFocus);
    elementToFocus.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });;
  };

  render() {
    return html`
      <div id="main-container">
        <div id="navigation-bar">
          <div>
            <sophos-card id="nav-bar-title" .title="${this.navigationBarTitle}"></sophos-card>
          </div>
          <div id="icons-container">  
            ${this.navigationBarIcons.map(icon => html`
              <sophos-icon
              class="nav-bar-icons"
              .iconText="${icon.iconText}"
              .imageSource="${icon.iconPath}"
              .imageAlt="${this.imageAlt}"
              iconDirection="left"
              @click="${this.navigateToSection}"></sophos-icon>
            `)}
          </div>
        </div>

        <div id="header">
          <sophos-card
          id="header-card"
          .pictureSRC="${this.headerImage}"
          .pictureAlt="${this.imageAlt}"></sophos-card>
        </div>

        <div id="content">
          <div id="top-content">
          <h2 section-name="Nuestro-despacho" >${this.topContentTitle}</h2>
          ${this.topContentBodyText.map(paragraph => html`
            <p>${paragraph}</p>
          `)}
          </div>
          <div id="middle-content">
            <div id="middle-content-title">
              <h3 section-name="Ubicación" >Ubicación</h3>
            </div>
            <div id="middle-content-map">
              <iframe
              id="middle-map"
                allowfullscreen=""
                aria-hidden="false"
                height="450"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.451856763393!2d-99.18813538509461!3d19.349577886931538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fff76afd5b21%3A0xe67d530ad504a17b!2sComunal%2017%2C%20Agr%C3%ADcola%2C%20Chimalistac%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001050%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1612325229763!5m2!1ses-419!2smx"
                style="border: 0"
                tabindex="0"
                width="600"
              ></iframe>
            </div>
          </div>
          <div id="bottom-title-container" section-name="Áreas-de-prácticas">
            <h3>${this.bottomContentTitle}</h3>
          </div>
          <div id="bottom-content">
            ${this.bottomContent.map( card => html`
              <sophos-card
              class="practice-area-card"
              .title ="${card.title}"
              .description="${card.description}"></sophos-card>
            `)}
          </div>
        </div>

        <div id="footer" section-name="Contacto">
          <h4 id="footer-icons-title">FORMAS DE CONTACTO.</h4>
          <div id="footer-icons-container">
            ${this.footerIcons.map( icon => html`
              <sophos-icon
              class="footer-icons"
              .iconText="${icon.iconText}"
              .imageSource="${icon.iconPath}"
              .imageAlt="${this.imageAlt}"
              iconDirection="top"></sophos-icon>
            `)}
          </div>
          <div id="footer-message-container">
            <h2>CONT&Aacute;CTANOS.</h2>
            <address>
              <strong>Kubli &amp; Asociados.</strong><br />
              <strong>Abogados.</strong><br />
              Calle Comunal n&uacute;mero 17, colonia Chimalistac, alcaldía
              &Aacute;lvaro Obreg&oacute;n,<br />
              c&oacute;digo postal 01070, Ciudad de M&eacute;xico.<br />
              56 26 51 66 60<br />
              contacto@kubliabogados.com.mx
            </address>
          </div>
          <div id="footer-copyrigh-container">
            <p>Episteme 2021. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    `;
  };
};
customElements.define('kubli-law-firm-app-page', KubliLawFirmAppPage);