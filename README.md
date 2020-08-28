### Práctica 5: Mario Kart


En esta práctica vamos a crear una pequeña carrera de Mario Kart. Para ello, utilizaremos WebComponents para encapsular conceptos clave de la práctica, como los kart de cada personaje. De esta forma, podríamos crear un WebComponent llamado KartPlayer. Este componente es similar al concepto de clases en programación (de hecho, extiende de HTMLElement), y se recomienda que se vea como una extensión para crear una etiqueta HTML propia y personalizada a la que le daremos funcionalidad y apariencia.

La idea es que nuestra etiqueta HTML <kart-player> (o componente KartPlayer), incluya, maneje y controle datos del kart para encapsular su funcionamiento y hacernos más fácil y cómodo trabajar con él, sin que repercuta con el resto de la página. Cosas que podría controlar el componente podrían ser las siguientes:

- Incluir un nombre identificatorio del kart
- Incluir una imagen (asset) para representar visualmente el vehículo en la página. Usa el nombre kart-personaje.png, donde personaje es el nombre del mismo.
- Incluir los números de coordenadas del eje x y el eje y del kart en cuestión, para saber donde dibujarlo.
- Gestionar su código HTML y CSS asociado, en el interior del componente

Ten en cuenta que la idea es dibujar el kart en las coordenadas (x, y). A medida que avance la carrera, iremos aumentando el valor x y la carrera termina cuando llegue a 950 (o el número definido como línea de meta). Para esto, en la parte visual, nos podemos ayudar de la propiedad transform: translate() de CSS y utilizar custom properties (variables CSS) con var(--nombre-variable).

1. La carrera debería tener un botón Start que comenzará la carrera hasta que uno de los Karts llegue a la meta (condición para terminar la carrera). Dicha condición podría ser cuando x sea 950, por ejemplo.

2. Sería recomendable utilizar ShadowDOM para encapsular el HTML y CSS del componente y no afecte a otros karts. Una buena forma de organizarlo puede ser la siguiente (fragmento del componente KartPlayer):

```
export class KartPlayer extends HTMLElement {
   ...

   get styles() {
   return `
      :host {
        position: absolute;
        display: inline-block;
        left: 0;
        top: ${this.y}px;
        transform: translateX(var(--x)) translateY(var(--y));
        transition: transform 0.25s;
        will-change: transform;
      }
      ...
    `;
   }

   render() {
      this.shadowRoot.innerHTML = `
         <style>${this.styles}</style>
         <item-kart></item-kart>
         <img src="${this.image}" alt="${this.name}">
       `;
   }
   ...
}
```



3. Sería interesante crear métodos de ayuda para el componente, que afecten al propio kart. Por ejemplo, una propuesta:

- Un método .inc() que incrementa la cantidad que avanza el kart
- Un método .setSpeed() que determina la velocidad que tomará el kart a partir de ese momento
- Un método .win() y otro .lose() que establece el kart en cuestión como vencedor o perdedor (añadiendo alguna clase al HTML y activando algún efecto visual para destacarlo)
- Un método .isWinner() que comprueba si un kart es un ganador.

4. En el archivo index.js principal se puede desarrollar la actividad general del juego. Se aconseja seguir un enfoque funcional, creando pequeñas funciones (arrow functions) que hagan tareas concretas. Por ejemplo:

- startRace()
- endRace()
- restartRace()
- startIteration()
- etc...

5. La idea principal del juego es ejecutar una función (startIteration()) cada 1000 / 60 segundos (aproximadamente, 60fps), hasta que se cumpla un criterio específico que determine que ha finalizado el juego. Pista: Usar timers.

Para abordar esta práctica, pueden utilizar la imagen que ha diseñado un usuario en DeviantArt, basándose en los del juego original de SNES. Lo ideal sería dividirlos en varias imágenes (deben haber 6 jugadores) de 128x128 de resolución, donde la imagen esté centrada y pegada a la parte inferior:

- Source: Sprites Mario Kart

Criterios importantes

- Aspecto visual y uso de imágenes (6 jugadores)
- Encapsulación con WebComponents
- Uso de ShadowDOM
- Uso de custom properties CSS (variables CSS)
- La carrera empieza y termina correctamente (detectando al ganador)

Retos

1. Como reto opcional, se puede añadir la posiblidad aleatoria (Math.random()) de que en cada iteración, un kart obtenga un item. Si obtiene un plátano, la velocidad desciende a cero temporalmente, manteniendo el kart en el mismo sitio al resbalar con el plátano. Si obtiene un champiñón, la velocidad asciende temporalmente, haciendo que vaya más rápido durante un tiempo.

2. ¿Se te ocurre alguna funcionalidad extra para el juego? Impleméntala y documéntala en el README.

### Explicación

Lo primero que hicimos fue ver todos los videos para entender perfectamente que era Webcomponent y poder avanzar con la práctica. Instalamos parcel como siempre hemos hecho en las anteriores prácticas y creamos los directorios correspondientes:

```
src
   assets
   js
      index.js
      kartplayer.js
   css
      index.css
   index.html
```

En las siguientes imágenes podemos observar el código desarrollado para llevar a cabo la práctica, solo hemos tenido que tocar un fichero el llamado KartPlayer.js ya que el profesor nos ha dado el código restante. Vamos a comentar un poco el código desarrollado en las imágenes aunque también está comentado. 

![imagen1](imagenes/index.html.png)

![imagen2](imagenes/index.js.png)

Comenzamos explicando un poco el código de KartPlayer.js:

Declaramos una clase extendida de HTML element, así estamos haciendo uso de webcomponent. Tenemos que crear un constuctor para tener el nombre la imagen y la posicion y de cada kart. Dentro del constructor tenemos que declarar super() y this.attachShadow({ mode: 'open' });. También tenemos que declarar las variables nombre imagen, posicion y e posicion x. La funcion get styles() también nos la daba el profesor, hay algunas cosas diferentes que comentaremos a continuación:

Dentro de left: pusimos la variable x creada anteriormente para saber en que posicion x se encuentra el kart en todo momento. También creamos una clase winner y una clase lose para darle estilos a los kart cuando uno ha ganado y los demás han perdido. 

La funcion render tambien nos la daba el profesor, es la que va a llamar a host para pintar todos los kart en la pantalla con los estilos pertinentes. 

Tenemos una funcion añadir a la carretera para añadir un nuevo nodo hijo. 
Volvemos a llamar a la funcion render para mostrar los kart en la carretera.

Comenzamos con las funciones que teníamos que crear, en este caso vamos a explicar inc(): dentro de esta funcion lo unico que se hace es cambiar el valor de x de cada kart, cada vez que llamemos a esta funcion se incrementar el valor de la x entre 0 y 5 hasta llegar a 930. 
La funcion isWinner(): si una x de un kart ha llegado o superado 930 entonces es el ganador por lo que devolvemos un true o un false segun. 
Ahora tenemos la funcion win y la funcion lose, las cuales se llaman cuando un kart ya ha ganado y le damos los estilos a la imagen que habiamos declarado anteriormente dentro de styles. 
Luego tenemos la clase restart que lo unico que hace es poner los kart a la posicion 0 de nuevo para empezar otra carrera. 

![imagen3](imagenes/kart1.js.png)
![imagen4](imagenes/kart2.js.png)
![imagen5](imagenes/index.css1.png)
![imagen6](imagenes/index.css2.png)

Con lo visto en todo el código anterior se puede hacer una carrera de mario kart utilizando webcomponent. 

He intentado hacer el reto de los items pero no me sale. 

URL github pages: https://ull-esit-dsi-1920.github.io/dsi-p5-mkart-ayrtoncg20/

