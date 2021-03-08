import { css } from 'lit-element';

export default css`
  
  
  @font-face {
    font-family: "Orkney Light";
    src: url("./assets/orkney.light.otf");
  }
  
  :host {
    font-family: "Orkney Light", serif;
  }

  #app-main-container {
    display: flex;
    justify-content: center;
    background-color: #949494;
  }
`;