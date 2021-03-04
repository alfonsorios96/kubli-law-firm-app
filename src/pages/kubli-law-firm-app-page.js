import { LitElement, html, css } from 'lit-element';

export class KubliLawFirmAppPage extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.contentTitle = 'NUESTRO DESPACHO.'
    this.contentBodyText = [
      `
        Kubli y Asociados es un despacho jurídico integrado por abogados postulantes y catedráticos a nivel licenciatura y maestría, cuyo principal objetivo es brindar seguridad legal a personas físicas y morales en la prevención y solución de problemas jurídicos, así como asesorar y colaborar con organismos públicos, privados y dependencias gubernamentales dentro del ámbito de sus actividades.
      `,
      `
        La firma cuenta con la estructura suficiente para brindar un servicio profesional y especializado, contando con personal debidamente preparado y con sistemas que permiten proporcionar de manera oportuna y eficaz información acerca del avance y continuidad de los asuntos, prevaleciendo ante todo un contacto directo con nuestros clientes. Los valores que nos distinguen son el profesionalismo, la ética y eficiencia.
      `, `
      A la fecha contamos con la colaboración directa y asociación de diversos despachos que coadyuvan en la tramitación de asuntos en áreas específicas, con lo cual garantizamos un amplio ámbito de aplicación y solución a sus problemas con mayor especialidad y profesionalización, ofreciendo también servicios en las materias penal, laboral y administrativa a través de sus asociados.
      `];
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
    `
  };

  render() {
    return html`
      <div id="main-page-container">
        <div id="nav-bar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="javascript:location.reload(true)" >Kubli Abogados </a>
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler"
              data-target="#navbarSupportedContent"
              data-toggle="collapse"
              type="button"
            ></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#tema1"
                    ><i class="fas fa-balance-scale"></i> Nuestro despacho<span
                      class="sr-only"
                      >(current)</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tema2"
                    ><i class="fas fa-book"></i> &Aacute;reas de pr&aacute;ctica</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://foro.kubliabogados.com.mx"
                    ><i class="fas fa-glasses"></i> Temas de inter&eacute;s
                    <span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    aria-expanded="false"
                    aria-haspopup="true"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    ><i class="fas fa-bars"></i> Contacto
                  </a>
                  <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                    <a class="dropdown-item" href="#tema3"
                      ><i class="fas fa-map-pin"></i> Ubicaci&oacute;n</a
                    >
                    <a class="dropdown-item" href="#tema4"
                      ><i class="far fa-address-book"></i> Formas de contacto</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div id="header">
          
        </div>

        <div id="content">
          <h2>${this.title}</h2>
          ${this.contentBodyText.map(paragraph => html`
            <p>${paragraph}</p>
          `)}
        </div>

        <div id="footer">
          
        </div>
      </div>
    `;
  };
};
customElements.define('kubli-law-firm-app-page', KubliLawFirmAppPage);