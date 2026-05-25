function Conclusiones() {
  return (
    <article className="conclusiones">
      <h1>Conclusiones sobre el caso SolarWinds</h1>

      <p>
        Tal como se desarrolló en este trabajo, podemos decir que el caso SolarWinds/SUNBURST deja múltiples
        lecciones estructurales que van más allá de las fallas técnicas. Principalmente, debemos considerar que la
        seguridad de una organización es tan robusta como la del eslabón más débil de su cadena de suministro.
      </p>

      <p>
        En este sentido, las principales recomendaciones apuntan a tres ejes fundamentales: primero, implementar
        controles de integridad sobre los entornos de compilación (build systems), incluyendo verificación criptográfica
        de artefactos y separación estricta de entornos de desarrollo y producción. Esto es especialmente importante
        considerando la lógica utilizada para infiltrarse en los sistemas de las organizaciones y exfiltrar sus datos.
      </p>

      <p>
        Segundo, adoptar una arquitectura de confianza cero (zero trust) que no asuma legitimidad por defecto de ningún
        software, actualización o credencial, incluso cuando provienen de proveedores habituales. Es menester no estimar
        como legítimo por defecto las firmas digitales; por ello, este aspecto resulta crítico.
      </p>

      <p>
        Tercero, establecer planes de detección y respuesta con umbrales de alerta tempranos y obligaciones claras de
        reporte a las autoridades competentes, en línea con lo que la Ley N.° 21.663 exige a los Operadores de Importancia
        Vital en Chile. Esto, claro está, considerando a la legislación chilena como el principal marco regulatorio estimado
        en este caso.
      </p>

      <p>
        Como reflexión final, el caso evidencia que los marcos normativos existían para prevenir exactamente este tipo
        de incidente, pero su valor es nulo cuando no se implementan de forma efectiva. SolarWinds contaba con procesos,
        certificados y actualizaciones firmadas, pero careció de los controles internos que habrían detectado que su propio
        pipeline de software había sido comprometido durante más de un año.
      </p>

      <p>
        Esto configura a la ciberseguridad no como un estado reactivo alcanzable, sino como una praxis continua que exige
        vigilancia, responsabilidad ejecutiva y cultura organizacional orientada al riesgo, siempre considerando al humano
        y al trabajador como el eje estructural del funcionamiento de las organizaciones.
      </p>
    </article>
  )
}

export default Conclusiones;
