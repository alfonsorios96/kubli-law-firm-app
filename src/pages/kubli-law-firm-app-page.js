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

      .nav-bar-icons {
        --sophos-icon-icon-image-width: 20px;
        --sophos-icon-icon-image-height: 20px;
        --sophos-icon-icon-text-font-size: 15px;
      }

      #header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212221;
        padding: 20px;
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

      #bottom-content {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }
    `;
  };

  render() {
    return html`
      <div id="main-container">
        <div id="navigation-bar">
          <div>
            <sophos-card id="nav-bar-title" .title="${this.navigationBarTitle}"></sophos-card>
          </div>
          <div>  
            ${this.navigationBarIcons.map(icon => html`
              <sophos-icon
              class="nav-bar-icons"
              .iconText="${icon.iconText}"
              .imageSource="${icon.iconPath}"
              .imageAlt="${this.imageAlt}"
              iconDirection="left"></sophos-icon>
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
          <h2>${this.topContentTitle}</h2>
          ${this.topContentBodyText.map(paragraph => html`
            <p>${paragraph}</p>
          `)}
          </div>
          <div id="middle-content">
            
          </div>
          <h3>${this.bottomContentTitle}</h3>
          <div id="bottom-content">
            ${this.bottomContent.map( card => html`
              <sophos-card
              class="practice-area-card"
              .title ="${card.title}"
              .description="${card.description}"></sophos-card>
            `)}
          </div>
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