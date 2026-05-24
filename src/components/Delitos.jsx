function Delitos() {
  return (
    <article className="delitos">
      <h1>Delitos según Ley N°21.459</h1>

      <section>
        <h2>Artículo N°1: Ataque a la integridad de un sistema informático</h2>
        <p>
          Según lo establecido por este artículo, comete este delito quien "obstaculice o impida
          el normal funcionamiento, total o parcial, de un sistema informático, a través de la
          introducción, transmisión, daño, deterioro, alteración o supresión de los datos
          informáticos".
        </p>
        <p>
          En el caso de SolarWinds, los atacantes introdujeron el malware SUNSPOT en el proceso
          de compilación de Orion, alterando el funcionamiento normal del sistema de build de
          SolarWinds y de las instalaciones cliente que recibieron la actualización contaminada.
        </p>
      </section>

      <section>
        <h2>Artículo N°2: Acceso ilícito</h2>
        <p>
          Comete este delito quien ``sin autorización o excediendo la autorización que posea y
          superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema
          informático``.
        </p>
        <p>
          En este caso, los atacantes ingresaron sin autorización a la red interna de SolarWinds
          en septiembre de 2019, y posteriormente a los sistemas de miles de clientes usando la
          puerta trasera SUNBURST.
        </p>
        <p>
          El castigo correspondería a presidio menor en su grado mínimo o una multa de once a
          veinte UTM, y las penas podrían ser mayores si hubo intención de apoderarse o usar
          información contenida en el sistema.
        </p>
      </section>

      <section>
        <h2>Artículo N°4: Ataque a la integridad de los datos informáticos</h2>
        <p>
          Se considera delito quien "indebidamente altere, dañe o suprima datos informáticos [...],
          siempre que con ello se cause un daño grave al titular de estos mismos".
        </p>
        <p>
          En el caso SolarWinds, el malware SUNSPOT alteró el código fuente del software Orion
          durante la compilación, modificando sin autorización los datos que componen el producto
          distribuido.
        </p>
        <p>
          La pena estimada sería presidio menor en su grado medio si la acción causó un daño grave al
          titular de los datos.
        </p>
      </section>

      <section>
        <h2>Recursos Bibliográficos</h2>
        <ol>
          <li>
            Congreso Nacional de Chile. Ley N°21.459. Establece Normas sobre Delitos Informáticos.
          </li>
        </ol>
      </section>
    </article>
  )
}

export default Delitos