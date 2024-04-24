const template = document.createElement("template");

template.innerHTML = `
<link href="components/sellItems/sellItems.css" type="text/css" rel="stylesheet"/>
<article>
<img />
<h2>items</h2>
</article>

`;

export class SellItems extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
      console.log("یجاد المنت");
      const imgitem = this.shadowRoot.querySelector("img");
      const h2Elm = this.shadowRoot.querySelector("h2");
      imgitem.src = this.getAttribute("imgSrc")
      h2Elm.innerHTML=this.getAttribute("titleElm")

  }
}
