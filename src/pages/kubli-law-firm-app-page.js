import { LitElement, html, css } from 'lit-element';
import 'sophos-card/sophos-card';
import locals from '../locals'

export class KubliLawFirmAppPage extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.contentTitle = locals.pageContentTitle;
    this.contentBodyText = locals.contentBodyText;
    this.bottomContentTitle = locals.bottomContentTitle;
    this.bottomContent = locals.bottomContent;
    this.navBarTitle = locals.navBarTitle;
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      contentTitle : { type: String},
      contentBodyText : {type: Array},
      bottomContentTitle : {type: String},
      bottomContent: {type : Array},
      navBarTitle : { type: String}
    };
  };

  static get styles() {
    return css`
    `;
  };

  createNavBar() {
    return html`
      <div id="nav-bar-icons">
      </div>
    `;
  };

  render() {
    return html`
      <div id="main-page-container">
        <div id="nav-bar">
          <h3> ${this.navBarTitle} </h3>
          ${this.createNavBar()}
        </div>

        <div id="header">
          
        </div>

        <div id="content">
          <div id="top-content">
            
          </div>
          <div id="middle-content">
            
          </div>
          <div id="bottom-content">
            <h3>${this.bottomContentTitle}</h3>
            ${this.bottomContent.map( card => html`
              <sophos-card
              .title ="${card.title}"
              .description="${card.description}"></sophos-card>
            `)}
          </div>
          <h2>${this.title}</h2>
          ${this.contentBodyText.map(paragraph => html`
            <p>${paragraph}</p>
          `)}
        </div>

        <div id="footer">
          <div id="footer-icons-container">
            
          </div>
          <div id="footer-message-container">
            
          </div>
          <div id="footer-copyrigh-container">
            
          </div>
        </div>
      </div>
    `;
  };
};
customElements.define('kubli-law-firm-app-page', KubliLawFirmAppPage);