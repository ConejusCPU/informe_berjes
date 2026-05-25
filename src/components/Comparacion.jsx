function Comparacion() {
  return (
    <article className="comparacion resumen">
      <h1>Comparación de Marcos por Industria</h1>

      <section>
        <p>
          Comparativa entre tres marcos regulatorios aplicables al caso SolarWinds,
          evaluados en alcance, sujeto regulado, obligación de notificación y aplicabilidad.
        </p>

        <table>
          <thead>
            <tr>
              <th>Eje de análisis</th>
              <th>NIST CSF 2.0</th>
              <th>ISO/IEC 27001:2022</th>
              <th>Ley N.° 21.663</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alcance</td>
              <td>Directrices voluntarias de gestión de riesgo cibernético.</td>
              <td>Estándar certificable de gestión de seguridad de la información.</td>
              <td>Marco obligatorio para operadores de importancia vital en Chile.</td>
            </tr>
            <tr>
              <td>Sujeto regulado</td>
              <td>Organizaciones privadas y agencias federales de EE.UU.</td>
              <td>Cualquier organización que se certifique o lo requiera su mercado.</td>
              <td>Personas jurídicas y organismos designados como OIV.</td>
            </tr>
            <tr>
              <td>Notificación de incidentes</td>
              <td>Recomendada en la función Responder, sin carácter obligatorio directo.</td>
              <td>No impone un deber directo de reporte a autoridades en sí misma.</td>
              <td>Establece el deber explícito de reporte al CSIRT Nacional.</td>
            </tr>
            <tr>
              <td>Jurisdicción</td>
              <td>Federal de EE.UU.; influencia global en contratistas federales.</td>
              <td>Internacional; su aplicación depende de legislación nacional.</td>
              <td>Chile; vincula a entidades con sede o infraestructura crítica en territorio chileno.</td>
            </tr>
            <tr>
              <td>Aplicabilidad al caso</td>
              <td>Alta. El NIST CSF 2.0 fue clave en las reformas tras SUNBURST y en la EO 14028.</td>
              <td>Alta. Sus controles de relación con proveedores son directamente relevantes.</td>
              <td>Alta. Define obligaciones de detección y reporte para OIV similares al caso.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Recursos Bibliográficos</h2>
        <ol>
          <li>Congreso Nacional de Chile. Ley N.° 21.459; Ley N.° 21.663.</li>
          <li>Molnar, I. (2026). NIST CSF 2.0 explicado.</li>
          <li>ISO/IEC 27001:2022.</li>
        </ol>
      </section>
    </article>
  )
}

export default Comparacion