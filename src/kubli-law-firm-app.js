import { LitElement, html } from 'lit-element';
import styles from './kubli-law-firm-app-styles';
import './pages/kubli-law-firm-app-page';
import '@sherby/sherby-metadata'

export class KubliLawFirmApp extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.metadata = {
      description: 'Abogados especializados en materia civil, mercantil, familiar y amparo. Con más 25 años de experiencia',
      keywords: 'abogados, abogado, abogadas, abogada, derecho, civil, mercantil, familiar, amparo, demanda, pension, testamento, familia, menor, hijo, hija, hijos, hijas, intestado, testado, empresa, sociedad, sociedad mercantil, derechos, obligaciones, arrendamiento, contrato, contratos, convenio, acuerdo, experiencia, lealtad, responsabilidad, trato, personalizable',
      title: 'Kubli Abogados',
      viewport: 'width=device-width, initial-scale=1'
    };
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      metadata : {type: Object}
    };
  };

  static get styles() {
    return styles;
  };

  render() {
    return html`
    <sherby-metadata .data=${this.metadata}></sherby-metadata>
      <div id="app-main-container">
        <kubli-law-firm-app-page></kubli-law-firm-app-page>
      </div>
    `;
  }
}
customElements.define('kubli-law-firm-app', KubliLawFirmApp);