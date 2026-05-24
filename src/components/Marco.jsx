function Marco() {
  return (
    <article className="marco">
      <h1>Marco Normativo</h1>

      <section>
        <h2>Contextualización del Caso</h2>
        <p>
          El ciberataque a la empresa SolarWinds constituye uno de los incidentes informáticos
          con mayor significancia en la historia reciente. Se trató de un ataque a la cadena de
          suministro de software dirigido contra la plataforma de monitoreo TI <em>Orion</em>,
          que afectó a más de 30.000 organizaciones públicas y privadas, incluyendo el Departamento
          del Tesoro, Comercio, Seguridad Nacional, Justicia y Estado de EE.UU.
        </p>
        <p>
          El ataque consistió en modificar un plugin de Orion distribuido como actualización firmada
          digitalmente, que contenía una backdoor denominada SUNBURST. Con este vector, los atacantes
          obtuvieron acceso sin ser detectados durante 14 meses.
        </p>
      </section>

      <section>
        <h2>Normativas Contempladas en el Caso</h2>

        <h3>Normativa Chilena</h3>
        <h4>Ley N°21.459 sobre Delitos Informáticos</h4>
        <p>
          Publicada en junio de 2022, derogó la Ley N°19.223 y adecuó la legislación chilena al
          Convenio de Budapest. Tipifica el acceso ilícito a sistemas informáticos, la interceptación
          ilícita de datos y el ataque a la integridad de sistemas y datos, lo que es pertinente frente
          a la alteración del código fuente de Orion durante su compilación.
        </p>

        <h4>Ley N°21.663, Ley Marco de Ciberseguridad</h4>
        <p>
          Publicada en abril de 2024, crea la Agencia Nacional de Ciberseguridad (ANCI) y el CSIRT nacional.
          Establece obligaciones a los operadores de importancia vital (OIV) para adoptar sistemas de gestión
          de seguridad, reportar incidentes y garantizar la continuidad operacional.
        </p>
      </section>

      <section>
        <h3>Normativa Internacional</h3>
        <h4>ISO/IEC 27001:2022</h4>
        <p>
          Estándar internacional para sistemas de gestión de seguridad de la información (SGSI).
          Sus requisitos de confidencialidad, integridad y disponibilidad, junto a los controles sobre
          proveedores, son aplicables al caso por la falla en los procesos de compilación y gestión de riesgos.
        </p>

        <h4>ISO/IEC 27036-3:2023</h4>
        <p>
          Norma específica sobre seguridad en cadenas de suministro de software y hardware.
          Aborda la verificación de integridad de actualizaciones, controles de acceso a entornos de
          compilación y gestión de confianza en proveedores, áreas directamente afectadas por el ataque.
        </p>
      </section>

      <section>
        <h2>Aplicabilidad de las Normativas Dispuestas</h2>
        <p>
          El caso SolarWinds se puede contrastar con estas normativas en varios puntos clave:
        </p>
        <ul>
          <li>
            <strong>Artículo N°1 de la Ley 21.459:</strong> sanciona el acceso ilícito a sistemas informáticos
            sin autorización, como el ingreso al entorno de SolarWinds.
          </li>
          <li>
            <strong>Artículo N°7 y N°9 de la Ley 21.663:</strong> imponen deberes de prevención, detección,
            respuesta y reporte de incidentes ante el CSIRT, que no se cumplieron durante los 14 meses
            en que la intrusión permaneció oculta.
          </li>
          <li>
            <strong>ISO/IEC 27036-3:2023:</strong> se aplica a la falta de controles de integridad y verificación
            de artefactos de software, ya que las actualizaciones firmadas digitalmente se distribuyeron
            con malware sin ser detectadas.
          </li>
        </ul>
      </section>

      <section>
        <h2>Recursos Bibliográficos</h2>
        <ol>
          <li>
            Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know.
          </li>
          <li>
            Congreso Nacional de Chile. Ley N°21.459. Establece Normas sobre Delitos Informáticos.
          </li>
          <li>
            Congreso Nacional de Chile. Ley N°21.663. Ley Marco de Ciberseguridad.
          </li>
          <li>
            ISO/IEC 27001:2022. Information security management systems — Requirements.
          </li>
          <li>
            ISO/IEC 27036-3:2023. Cybersecurity — Supplier relationships — Guidelines for software supply chain security.
          </li>
        </ol>
      </section>
    </article>
  )
}

export default Marco