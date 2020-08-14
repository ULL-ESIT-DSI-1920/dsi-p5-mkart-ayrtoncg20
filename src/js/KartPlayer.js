export class KartPlayer extends HTMLElement {
  constructor(name, config) {
    super();
    this.attachShadow({ mode: 'open' });
    this.name = name;
    this.y = config.y;
    this.image = config.image;
    this.x = 0;

  }

  get styles() {
    return `
       :host {
         position: absolute;
         display: inline-block;
         left: ${this.x}px;
         top: ${this.y}px;
         transform: translateX(var(--x)) translateY(var(--y));
         transition: transform 10s;
         will-change: transform;
       }
       .winner{
         filter: drop-shadow(0 0 10px yellow);
         z-index: 5;
       }
       .lose{
         opacity: 0.25;
       }
       .item{
         left: ${this.x_item}px;
         top: ${this.y_item}px;
       }
     `;
  }

  render() {

    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img src="${this.image}" alt="${this.name}">
        `;
  }
  addToRoad(road) {
    road.appendChild(this);
    this.render()


  }
  inc() {
    console.log(this.imagen_item)
    this.x += Math.random() * (5 - 0) + 0;;
    this.render()
  }
  isWinner() {
    if (this.x >= 930) {
      return true;
    }
    else {
      return false;
    }
  }
  win() {
    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img class="winner" src="${this.image}">
        `;
  }
  lose() {
    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img class="lose" src="${this.image}">
        `;
  }
  restart() {
    this.x = 0;
    this.render()
  }
}
customElements.define('kart-player', KartPlayer); //Asocia la etiqueta HTML a la clase

//funciones que tengo que realizar
//inc() metodo incrementar, el metodo tendra una logica para hacer avanzar a ese kart una serie de pasos
//isWinner() comprobar si alguno de los kart si es el ganador, tenemos que mirar la coordenada x para ver si ha llegado al final
//win() aspectos visuales
  //--x: 947px; --y: -1px;
  //:host-context(.winner){
    //filter: drop-shadow(0 0 6px yellow);
    //z-index: 5;
    //lost() aspectos visuales