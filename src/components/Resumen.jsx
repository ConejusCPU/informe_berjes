function Resumen() {
  return (
    <article className="resumen">
      <h1>Caso SUNBURST / SolarWinds (2019–2025)</h1>

      <section>
        <h2>¿Qué ocurrió?</h2>
        <p>
          Durante el año 2019, el grupo de hackers ruso APT29 / Cozy Bear / Nobelium
          utilizó los malwares SUNBURST/SUNSPOT en uno de los ataques de ciberseguridad
          más sofisticados y de mayor alcance registrados en la historia. Se trató de un
          <strong> ataque a la cadena de suministro de software </strong> dirigido contra
          <strong> SolarWinds Corporation</strong>, empresa norteamericana proveedora de herramientas
          de monitoreo de infraestructura TI utilizada por miles de organizaciones gubernamentales y privadas.
        </p>
        <p>
          El vector de ataque fue la plataforma <em>Orion</em>, software de monitoreo de redes con
          acceso privilegiado a los sistemas de TI de sus clientes. SolarWinds se convirtió en un objetivo
          relevante para el grupo por su amplia presencia en sistemas críticos.
        </p>
      </section>

      <section>
        <h2>Cronología de los hechos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Evento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Septiembre 2019</strong></td>
              <td>Los atacantes obtienen acceso no autorizado a la red interna de SolarWinds mediante backdoor.</td>
            </tr>
            <tr>
              <td><strong>Octubre 2019</strong></td>
              <td>Se realizan pruebas de inyección de código en la plataforma Orion para evaluar la viabilidad del ataque.</td>
            </tr>
            <tr>
              <td><strong>20 de febrero de 2020</strong></td>
              <td>El malware SUNBURST es inyectado en el proceso de compilación de Orion.</td>
            </tr>
            <tr>
              <td><strong>26 de marzo de 2020</strong></td>
              <td>SolarWinds comienza a distribuir actualizaciones de Orion contaminadas con SUNBURST a sus clientes.</td>
            </tr>
            <tr>
              <td><strong>Junio de 2020</strong></td>
              <td>Los atacantes eliminan el código malicioso de los entornos de SolarWinds, completando su objetivo.</td>
            </tr>
            <tr>
              <td><strong>13 de diciembre de 2020</strong></td>
              <td>FireEye publica el descubrimiento público del ataque. CISA emite la Directiva de Emergencia 21-01.</td>
            </tr>
            <tr>
              <td><strong>14 de diciembre de 2020</strong></td>
              <td>SolarWinds confirma el ataque mediante un Formulario 8-K ante la SEC y comienza la notificación a clientes.</td>
            </tr>
            <tr>
              <td><strong>17 de diciembre de 2020</strong></td>
              <td>Microsoft, FireEye y GoDaddy crean un kill switch para neutralizar SUNBURST.</td>
            </tr>
            <tr>
              <td><strong>Enero de 2021</strong></td>
              <td>SolarWinds contrata a KPMG y a expertos externos para análisis forense y gestión de crisis.</td>
            </tr>
            <tr>
              <td><strong>15 de abril de 2021</strong></td>
              <td>EE.UU. y el Reino Unido atribuyen oficialmente el ataque al Servicio de Inteligencia Exterior de Rusia.</td>
            </tr>
            <tr>
              <td><strong>Octubre de 2023</strong></td>
              <td>La SEC formula cargos civiles contra SolarWinds y su CISO por fraude y fallas de control interno.</td>
            </tr>
            <tr>
              <td><strong>Noviembre de 2025</strong></td>
              <td>Los cargos de la SEC contra SolarWinds y el CISO son desestimados con prejuicio.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Actores involucrados</h2>
        <table>
          <thead>
            <tr>
              <th>Actor</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>APT29 / Cozy Bear / Nobelium</strong></td>
              <td>Grupo de amenaza persistente avanzada atribuido al Servicio de Inteligencia Exterior de Rusia (SVR).</td>
            </tr>
            <tr>
              <td><strong>Gobierno federal EE.UU.</strong></td>
              <td>Agencias afectadas: Tesoro, Estado, Comercio, Justicia, Seguridad Nacional, Energía, Defensa y NIH.</td>
            </tr>
            <tr>
              <td><strong>Sector privado</strong></td>
              <td>Empresas afectadas o involucradas: Microsoft, FireEye, Intel, Cisco, Deloitte, Autodesk, Mimecast, Malwarebytes.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Impacto del ataque</h2>
        <p>
          El ataque comprometió departamentos clave del gobierno de EE.UU. y fue calificado como una de las mayores brechas de espionaje recientes.
          SolarWinds destinó entre USD 18–19 millones en los primeros tres meses de remediación, enfrentó una demanda colectiva y el incidente generó cambios regulatorios importantes.
        </p>
        <p>
          El caso detonó la Executive Order 14028, que impuso controles de cadena de suministro y listas de materiales de software (SBOM) a contratistas federales.
          Además, estableció precedentes como el primer cargo civil de la SEC contra un CISO y la redefinición del estándar de seguridad en cadenas de suministro.
        </p>
      </section>

      <section>
        <h2>Referencias bibliográficas</h2>
        <ol>
          <li>Heller, M. (2021). Sunburst hack costs SolarWinds at least $18M.</li>
          <li>Oladimeji, S., & Kerner, S. M. (2023). SolarWinds hack explained.</li>
          <li>SolarWinds Corporation. (2020). Form 8-K: Cybersecurity incident disclosure.</li>
          <li>SolarWinds. (2021). New findings from our investigation of SUNBURST.</li>
          <li>Ikeda, S. (2025). SEC Civil Actions Against SolarWinds and Its CISO Dismissed With Prejudice.</li>
          <li>Etienne. (2026). SolarWinds / SUNBURST: Supply-chain compromise.</li>
          <li>Dinu, C. (2021). SolarWinds attack cost impacted companies an average of $12 million.</li>
        </ol>
      </section>
    </article>
  )
}

export default Resumen;
