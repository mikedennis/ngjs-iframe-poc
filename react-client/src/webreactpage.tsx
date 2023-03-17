import ReactPage from "./reactpage"
import * as ReactDom from "react-dom"

class WebReactPage extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name: string = this.getAttribute('name') || "";
      const text: string = this.getAttribute('text') || "";
      ReactDom.render(<ReactPage name={name} text={text}></ReactPage>, mountPoint);
    }
  }

  export default WebReactPage;
  window.customElements.get("web-react-page") ||
  window.customElements.define("web-react-page", WebReactPage);