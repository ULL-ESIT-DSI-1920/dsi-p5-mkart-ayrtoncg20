export class KartPlayer extends HTMLElement { //Hacemos uso de web component para definir la clase Kartplayer
  constructor(name, config) { //creamos un constructor con el nombre y la configuracion del kart
    super(); //La palabra clave super es usada para acceder y llamar funciones del padre de un objeto
    this.attachShadow({ mode: 'open' });
    this.name = name; //Este nombre es el nombre que se le pasa por parametro
    this.y = config.y; //Esta y es la y que se le pasa por parametro
    this.image = config.image; //Esta imagen es la imagen que se le pasa por parametro
    this.x = 0; //Declaramos una variable x ya que el kart tiene variable x e y para saber en que posicion esta exactamente

  }

  //Dentro de styles igualamos left a la variable x que habíamos creado para saber donde esta el kart
  //Tambien creamos las clases winner y lost para saber si un kart ha ganado o ha perdido

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

  //La funcion render mostrar los kart por pantalla haciendo uso de styles, le ponemos una imagen que sea la imagen pasada por parametro
  render() {

    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img src="${this.image}" alt="${this.name}">
        `;
  }

  //Tenemos una funcion para añadir a la carretera
  addToRoad(road) {
    road.appendChild(this); //nuevo nodo hijo
    this.render()


  }
  inc() { //funcion para incrementar la posicion x de los karts
    this.x += Math.random() * (5 - 0) + 0; //le añadimos un valor aleatorio entre 0 y 5 a la posicion x del kart
    this.render() //llamamos a la funcion render para pintar los kart con las nuevas posiciones
  }
  isWinner() { //La funcion is winner comprueba si un kart en la posicion x ha llegado a 930 y lo da por ganador
    if (this.x >= 930) {
      return true;
    }
    else {
      return false;
    }
  }
  win() { //Se llama a la funcion win por lo que esto le da unos estilos winner creados antes y volvemos a mostrar todo 
    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img class="winner" src="${this.image}">
        `;
  }
  lose() { //Se llama a la funcion lose por lo que esto le da unos estilos lose creados antes y volvemos a mostrar todo
    this.shadowRoot.innerHTML = `
          <style>${this.styles}</style>
          <item-kart></item-kart>
          <img class="lose" src="${this.image}">
        `;
  }
  restart() { //para restablecer la carrera solo ponemos la x de cada kart a 0 y llamamos a render
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