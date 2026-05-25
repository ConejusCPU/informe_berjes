function Datos() {
  return (
    <article className="datos resumen">
      <h1>Tratamiento de Datos</h1>

      <section>
        <h2>Consideración preliminar: datos personales v/s datos sensibles</h2>
        <p>
          1) Datos personales: Según lo contenido en la Ley N° 19.628 "Sobre Protección de la Vida Privada",
          Art. N°2, letra f, la legislación chilena establece que <em>datos personales</em> son "los relativos a
          cualquier información concerniente a personas naturales, identificadas o identificables." (Congreso
          Nacional de Chile, 2023), vale decir, es el término genérico relativo a los datos pertenecientes a un
          sujeto de derecho.
        </p>
        <p>
          2) Datos sensibles: Según lo contenido en la Ley N° 19.628 "Sobre Protección de la Vida Privada",
          Art. N°2, letra g, se entiende por <em>dato sensible</em> a "aquellos datos personales que se refieren a las
          características físicas o morales de las personas o a hechos o circunstancias de su vida privada o
          intimidad[...]" (Congreso Nacional de Chile, 2023), o sea, cuestiones alusivas a raza, religión,
          ideología política, etc.
        </p>
      </section>

      <hr />

      <section>
        <h2>¿Cuáles fueron los tipos de datos comprometidos en éste caso?</h2>
        <p>
          El ataque a SolarWinds involucró múltiples acciones por parte de los atacantes que, si los contrastamos
          con la normativa chilena vigente, constituyen delitos propiamente tal. Al respecto, podemos hablar de
          tres tipos de datos comprometidos en el caso:
        </p>

        <table>
          <thead>
            <tr>
              <th>Tipo de dato</th>
              <th>Clasificación</th>
              <th>Descripción en el caso SolarWinds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Credenciales de autenticación</strong> (nombres de usuario, contraseñas, tokens OAuth,
                certificados digitales, etc.)
              </td>
              <td>
                <strong>Dato personal</strong> (Art. N°2, letra f, Ley N°19.628)
              </td>
              <td>
                Según los antecedentes documentados, se sabe que el malware SUNBURST podía "acceder e impersonar
                usuarios y cuentas de organizaciones víctimas" (Oladimeji & Kerner, 2023). Siendo así, podemos decir
                que, al entender que las credenciales están directamente vinculadas a personas naturales identificables,
                esto las configura como datos personales en los términos de la Ley N.° 19.628 (Congreso Nacional de Chile,
                2023).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Correos electrónicos y comunicaciones internas</strong> (asociados a funcionarios gubernamentales)
              </td>
              <td>
                <strong>Dato personal (con posible carácter sensible)</strong> (Art. N°2, letra g, Ley N°19.628)
              </td>
              <td>
                Las comunicaciones de funcionarios pueden contener opiniones políticas, posiciones en negociaciones,
                intereses particulares y datos de situación personal, categorías que la Ley 19.628 define como datos sensibles.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Registros de actividad y configuración de sistemas</strong> (logs de actividad, registros de acceso,
                datos de rendimiento de la plataforma Orion, entre otros.)
              </td>
              <td>
                <strong>Dato personal</strong> (Art. N°2, letra f, Ley N°19.628)
              </td>
              <td>
                Los archivos de <em>logs</em> de Orion contienen nombres de usuario, direcciones IP asignadas a personas y marcas
                temporales de actividad individual, por lo que, al poder asociarse a personas naturales identificables, constituyen
                datos personales ordinarios. En conformidad a esto, la plataforma Orion tenía, según Oladimeji y Kerner (2023), "acceso
                privilegiado a los sistemas de TI para obtener registros y datos de rendimiento del sistema".
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Derechos ARCO comprometidos</h2>

        <table>
          <thead>
            <tr>
              <th>Derecho ARCO</th>
              <th>Art. Ley N.° 19.628</th>
              <th>Afectación concreta en el caso SolarWinds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Oposición</strong></td>
              <td>
                Art. N°11: <em>El responsable de los registros o bases donde se almacenen datos personales con posterioridad a su
                recolección deberá cuidar de ellos con la debida diligencia, haciéndose responsable de los daños.</em> (Congreso
                Nacional de Chile, 2023)
              </td>
              <td>
                Tratamiento masivo sin consentimiento ni base legal; los titulares no pudieron oponerse al tratamiento ilícito
                previo a la detección. Adicionalmente, la falta de reporte oportuno (contraria al Art. 9.° Ley 21.663) agravó
                la indefensión de los titulares.
              </td>
            </tr>
            <tr>
              <td><strong>Acceso</strong></td>
              <td>
                Art. N°12: <em>Toda persona tiene derecho a exigir a quien sea responsable de un banco, que se dedique en forma pública
                o privada al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y
                destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus
                datos son transmitidos regularmente.</em>
              </td>
              <td>
                Titulares no pudieron confirmar si sus datos eran tratados por terceros no autorizados durante más de 14 meses,
                entendiendo que el responsable legítimo tampoco tenía conocimiento del tratamiento ilícito paralelo ejecutado por APT29.
              </td>
            </tr>
            <tr>
              <td><strong>Supresión</strong></td>
              <td>
                Art. N°23: Entendiendo que hubo tratamiento ilícito sin consentimiento de los datos, la siguiente definición aplicaría:
                "La persona natural o jurídica privada o el organismo público responsable del banco de datos personales deberá indemnizar el
                daño patrimonial y moral que causare por el tratamiento indebido de los datos, sin perjuicio de proceder a eliminar, modificar o
                bloquear los datos de acuerdo a lo requerido por el titular o, en su caso, lo ordenado por el tribunal".
              </td>
              <td>
                Datos obtenidos sin base de licitud alguna; imposibilidad práctica de supresión una vez exfiltrados a actores estatales extranjeros.
                Formalmente, la ocultación activa del malware impidió el ejercicio oportuno de este derecho.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Referencias Bibliográficas</h2>
        <ol>
          <li>
            Congreso Nacional de Chile. (01 de marzo de 2025). Ley no. 21.663. Ley Marco de Ciberseguridad.
            08 de abril de 2024. https://bcn.cl/3isi2
          </li>
          <li>
            Congreso Nacional de Chile. (09 de mayo de 2023). Ley no. 19.628. Sobre Proteccion de la Vida Privada.
            28 de agosto de 1999. https://bcn.cl/2eqfn
          </li>
          <li>
            Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know.
            WhatIs; TechTarget. https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know
          </li>
          <li>
            Porzio, C. (2025, septiembre 28). Actualización Legal en Protección de Datos: Los derechos ARCO.
            Derecho y cotidianidad. https://cristianporzio.com/2025/09/28/actualizacion-legal-en-proteccion-de-datos-los-derechos-arco/
          </li>
          <li>
            Congreso Nacional de Chile. (01 de diciembre de 2026). Ley no. 21.719. Regula la Protección y el Tratamiento de los Datos Personales y Crea la Agencia de Protección y los Datos Personales.
            13 de diciembre de 2024. https://bcn.cl/GapReB
          </li>
        </ol>
      </section>
    </article>
  )
}

export default Datos;
