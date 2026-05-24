function Responsabilidades() {
  return (
    <article className="responsabilidades">
      <h1>Responsabilidades Legales de los Actores</h1>

      <p>
        En conformidad a lo presentado en el caso descrito en los otros archivos, se identifican
        tres actores principales con responsabilidades penales, civiles y administrativas.
      </p>

      <section>
        <table>
          <thead>
            <tr>
              <th>Actor</th>
              <th>Tipo de responsabilidad</th>
              <th>Conducta vinculada</th>
              <th>Norma / Artículo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atacantes APT29 / Cozy Bear</td>
              <td>Penal</td>
              <td>
                Existió ataque a la integridad del sistema de SolarWinds, acceso ilícito con ánimo de
                apoderarse de información y ataque a la integridad de los datos.
              </td>
              <td>Ley N.° 21.459, Art. N°1, N°2, N°4 y N°8</td>
            </tr>
            <tr>
              <td>SolarWinds Corporation</td>
              <td>Penal, Administrativa y Civil</td>
              <td>
                La SEC alegó fraude a inversores por sobrestimar prácticas de ciberseguridad y la
                distribución de actualizaciones de Orion contaminadas con SUNBURST a miles de clientes.
              </td>
              <td>
                Securities Act 1933; Exchange Act 1934; Código Civil chileno; Ley N.° 21.663, Art. 7°
              </td>
            </tr>
            <tr>
              <td>Timothy G. Brown (CISO de SolarWinds)</td>
              <td>Administrativa y Penal</td>
              <td>
                Fraude personal ante la SEC y abuso de posición de confianza al certificar la adecuación
                de controles de ciberseguridad pese a deficiencias conocidas.
              </td>
              <td>
                Securities Act 1933; Exchange Act 1934, Art. 13(b)(2)(B); Ley N.° 21.459, Art. 2° inc. 4°
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Recursos Bibliográficos</h2>
        <ol>
          <li>
            Congreso Nacional de Chile. Ley N.° 21.459. Establece Normas sobre Delitos Informáticos.
          </li>
          <li>
            Kurth, H. A. (2023). SEC charges SolarWinds and SolarWinds’ CISO with fraud.
          </li>
          <li>
            Oladimeji, S., & Kerner, S. M. (2023). SolarWinds hack explained.
          </li>
          <li>
            Ikeda, S. (2025). SEC Civil Actions Against SolarWinds and Its CISO Dismissed With Prejudice.
          </li>
        </ol>
      </section>
    </article>
  )
}

export default Responsabilidades