import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement("ac-button")
export class AcButton extends LitElement {
  render() {
    return html`<button>Button</button>`;
  }
}
