# React + Vite

## programacion web
### Santiago Ramirez Erick Omar


## Actividad 4: Mini proyectos con React + Vite

Proyecto de práctica creado con React y Vite que reúne cuatro mini proyectos para aprender los conceptos básicos de React: componentes, props, estado (useState) y listas con .map().


## Tecnologías utilizadas
React: librería para construir interfaces
Vite: herramienta de desarrollo y empaquetado
JavaScript (JSX)
CSS
gh-pages: publicación en GitHub Pages


## Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

Node.js (versión LTS reciente, 20.19 o superior). Descárgalo en https://nodejs.org
Git. Descárgalo en https://git-scm.com
Un editor de código, por ejemplo Visual Studio Code

Para comprobar que están instalados, abre una terminal y ejecuta:
```
bash
node -v
npm -v
git --version
```
Cada comando debe mostrar un número de versión.


Cómo ejecutar el proyecto
1. Clonar el repositorio
bash
```https://github.com/ErickOmar4/t3_act4_react.git```
2. Entrar a la carpeta del proyecto
bash
cd t3_act4_react
3. Instalar las dependencias
bash
```npm install```

Esto descarga todas las librerías necesarias y crea la carpeta node_modules. Solo es necesario hacerlo la primera vez.

4. Iniciar el servidor de desarrollo
bash
```npm run dev```

La terminal mostrará una dirección parecida a:

http://localhost:5173/t3_act4_react/

(a) ¿Qué diferencia hay entre props y state en React?


los props son datos que le llegan a un componente desde afuera, son como los parámetros de una función. En mi app, el componente que las recibe no las puede cambiar, son de solo lectura.

El state (estado), en cambio, es la memoria interna del componente, son datos que él mismo componente guarda y que pueden cambiar con el tiempo. Por ejemplo, el número de un contador y cuando el estado cambia, React vuelve a dibujar el componente y la pantalla se actualiza sola.


(b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Cuando uso .map() para mostrar una lista, como la de materias en ListaMaterias, React necesita una forma de identificar los elementos y para eso uso la key. Si la lista cambia :por ejemplo, si agrego, borro o reordeno materias, React se fija en la key para saber qué elemento cambió y cuáles siguen igual. Así no tiene que volver a construir toda la lista, solo actualiza lo necesario.


(c) ¿Qué hace useState y dónde la usé en mi mini aplicación?
useState es una función de React que le da memoria a un componente. Una variable normal se reinicia cada vez que el componente se vuelve a ejecutar, y además si la cambio React no se entera y la pantalla no se actualiza. Con useState React sí guarda el valor y además vuelve a dibujar el componente cada vez que lo cambio.

useState devuelve dos cosas: el valor actual y una función para cambiarlo. Entre paréntesis se le pone el valor inicial. 

Lo usé en dos componentes de mi mini aplicación:

En Contador: guardo el número en el estado cuenta. Cuando le doy clic a “Sumar”, el botón llama a setCuenta(cuenta + 1), el valor sube y el número cambia en pantalla.
```
const [cuenta, setCuenta] = useState(0)

<button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
```
En MostrarOcultar: guardo un valor true o false en el estado visible. Cada vez que le doy clic al botón, cambia entre uno y otro, y con eso el texto secreto aparece o desaparece.

const [visible, setVisible] = useState(false)

```
<button onClick={() => setVisible(!visible)}>Mostrar texto</button>
{visible && <p>¡Este es el texto secreto!</p>}
```


repo: https://github.com/ErickOmar4/t3_act4_react
gitpages https://erickomar4.github.io/t3_act4_react/
