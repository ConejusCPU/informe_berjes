# Bitácora de prompts utilizados

## Nociones preliminares

Este documento registra los prompts utilizados durante la sesión de trabajo con Claude (Sonnet 4.6) para construir el análisis normativo del caso SolarWinds. Como tal, los prompts se presentan en el orden en que fueron formulados y desarrollados con indicación de la sección a la que corresponden, las correcciones realizadas y su justificación.

# ----------------------------------------------------------------------------------------------------

## Prompts 

### Sección 2.1.1 de la pauta

*"Hola Claude, necesito que busques lo siguiente respecto al ciberataque ocurrido entre 2019-2020 a la empresa SolarWinds: Quiero que lista 4 normas aplicables al caso (combinando normas chilenas e internacionales), además, necesito que justifiques la aplicabilidad de 3 de ellas con referencia textual a un hecho concreto del caso, finalmente, necesito que cites fuentes en formato APA 7, por favor."*

**Elementos específicos al caso presentes en el prompt:**
- Nombre del caso: SolarWinds
- Período: 2019–2020
- Instrucción de referenciar hechos concretos del caso (no análisis genérico)
- Combinación de normas nacionales e internacionales

**Resultado obtenido:** Claude identificó cuatro normas (Ley N.° 21.459, Ley N.° 21.663,ISO 27001:2022, ISO 27036-3:2023) con justificaciones y fuentes en APA 7.

**Prompt de seguimiento — incorporación de fuente externa:**
*"¿Podrías analizar lo expuesto en el link que te adjunto (respecto al mismo caso que venimos hablando) y extraer citas y fuentes para la justificación de aplicabilidad de las normativas? https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained- Everything-you-need-to-know"*

**Elementos específicos al caso:** URL del artículo de TechTarget directamente sobre SolarWinds/SUNBURST; solicitud de extraer evidencia factual del caso para anclar las justificaciones normativas.

**Resultado:** Claude extrajo citas textuales de Oladimeji y Kerner (2023) vinculadas a cada norma. Se generó la versión `solarwinds_v3_techtarget.docx`.

# ----------------------------------------------------------------------------------------------------

### Sección 2.1.2 de la pauta

**Prompt utilizado:**
*"Según la Ley N.° 21.459, ¿qué artículos fueron vulnerados y cuáles son las penas aplicadas a este caso?"*

**Elementos específicos al caso:** Referencia directa a la Ley N.° 21.459 y al caso SolarWinds como objeto de tipificación; solicitud de mapeo acción - artículo.

**Resultado:** Claude identificó cuatro artículos (1.°, 2.°, 4.° y 8.°) con sus penas mapeando cada conducta documentada del ataque SUNBURST al tipo penal correspondiente.

# ----------------------------------------------------------------------------------------------------

### Sección 2.1.3 de la pauta

**Prompt utilizado (vía rúbrica):**
*"Necesito que, tomando el caso de SolarWinds (SUNBURST) y la rúbrica de evaluación desarrolles una propuesta de respuesta (en formato .md) para el punto 2.1.3, cumpliendo el estándar 'Destacado'."*

**Elementos específicos al caso:** Nombre del caso (SolarWinds), nombre del malware (SUNBURST), referencia explícita al estándar de la rúbrica que exige aplicabilidad al caso en cada marco comparado.

**Resultado:** Tabla comparativa con tres marcos (NIST CSF 2.0, ISO 27001:2022, Ley N.° 21.663) y cuatro ejes, con columna explícita de aplicabilidad al caso.

# ----------------------------------------------------------------------------------------------------

### Sección 2.1.4 de la pauta

**Prompt utilizado (vía rúbrica):**
*"Necesito que, tomando el caso de SolarWinds (SUNBURST) y la rúbrica de evaluación desarrolles una propuesta de respuesta (en formato .md) para el punto 2.1.4, cumpliendo el estándar 'Destacado'."*

**Resultado:** Tabla de 10 filas con columnas: Actor / Tipo de responsabilidad /
Conducta vinculada al caso / Norma-Artículo / Pena o sanción aplicable.

# ----------------------------------------------------------------------------------------------------

### Sección 2.1.5 de la pauta

**Prompt utilizado:**
*"¿Podrías hacer, en formato markdown, el punto 2.1.5 consultando las siguientes fuentes? [lista de 5 fuentes incluyendo Ley 19.628, Ley 21.719, Ley 21.663, Oladimeji & Kerner 2023, y Porzio 2025]"*

**Elementos específicos al caso:** Fuentes predefinidas por el estudiante directamente vinculadas al caso SolarWinds; solicitud de análisis de los tres tipos de datos comprometidos en SUNBURST y los derechos ARCO afectados.

**Resultado:** Documento con tres tipos de datos clasificados (credenciales, correos de funcionarios, logs), distinción dato personal/sensible con cita textual de la Ley 19.628 Art. 2.°, y análisis de tres derechos ARCO (Acceso, Cancelación, Oposición) con artículos de ambas leyes.

**Prompt de consulta: derecho de Rectificación:**
*"¿Qué sucede con la 'rectificación' de los datos? (según nomenclatura ARCO), ¿en qué artículo de la Ley N.° 19.628 puedo encontrarlo?"*

**Contexto:** El estudiante identificó que el análisis cubría solo tres derechos ARCO (A, C, O) omitiendo la Rectificación (R). Pregunta orientada a completar el marco.

**Resultado:** Claude explicó que la Rectificación está en el Art. 12 de la Ley 19.628 (junto al acceso) y en el Art. 6.° de la Ley 21.719 (de forma autónoma), y señaló su menor aplicabilidad directa en el caso SolarWinds por tratarse de un ataque de exfiltración, no de alteración de registros.

**Prompt de consulta: derecho de Cancelación:**
*"¿Y qué sucede con la 'supresión/cancelación'?"*

**Contexto:** El estudiante pidió precisar la base normativa de la Cancelación en la
Ley 19.628.

**Resultado y corrección realizada:** Claude identificó que en la versión anterior del documento había citado el **Art. 16** como base de la cancelación, lo que era técnicamente impreciso: el Art. 16 regula el tratamiento de datos sensibles (exigiendo consentimiento expreso), no el derecho de cancelación en sí. La base correcta en la Ley 19.628 es el **Art. 12** (en combinación con el Art. 6.°). *(Ver corrección detallada abajo.)*

**Prompt de consulta: Art. 23:**
*"¿Y el artículo N.° 23, podría aplicar en este caso para la supresión?"*

**Contexto:** El estudiante propuso un artículo específico no considerado previamente.

**Resultado:** Claude confirmó la aplicabilidad del Art. 23, distinguiéndolo del Art. 12: el Art. 12 es el derecho subjetivo de cancelación ejercido extrajudicialmente; el Art. 23 es la acción judicial de responsabilidad civil por tratamiento indebido, que incluye como medida la orden de eliminar/bloquear datos. Se analizó también la limitación práctica por inmunidad soberana frente a los atacantes (APT29/SVR ruso).

# ----------------------------------------------------------------------------------------------------

## Correcciones realizadas

### Corrección N°1: Artículo de la Ley 19.628 para el derecho de Cancelación

**Sección afectada:** 2.1.5: Tratamiento de datos personales

**Error original:** En la primera versión del punto 2.1.5, Claude citó el **Art. 16** de la Ley N.° 19.628 como base normativa del derecho de Cancelación/Supresión.

**Corrección aplicada:** El Art. 16 regula exclusivamente el tratamiento de
**datos sensibles** (exigiendo consentimiento expreso), no el derecho de cancelación como tal. La base correcta para la cancelación en la Ley N.° 19.628 es el **Art. 12**, que faculta al titular a exigir la eliminación de datos cuando su almacenamiento carece de fundamento legal o están caducos, en combinación con el **Art. 6.°**, que limita el tratamiento a los fines para los que los datos fueron recopilados.

**Justificación:** La distinción es relevante porque el Art. 16 aplica a una categoría específica de datos (sensibles), mientras que el Art. 12 es el fundamento general del derecho de cancelación aplicable a todos los datos personales. Citar el Art. 16 como base del derecho de cancelación confunde la categoría del dato con el derecho del titular, lo que podría llevar a interpretar erróneamente que la cancelación solo procede respecto de datos sensibles.

### Corrección 2: Aclaración sobre identidad de la Ley N.° 21.459

**Sección afectada:** 2.1.2: Tipificación de delitos informáticos

**Situación:** El estudiante señaló *"me refería a la Ley N.° 21.459 de la normativa chilena"*, sugiriendo una posible confusión de marco legal en la respuesta anterior.

**Evaluación:** Tras revisar la respuesta original, Claude confirmó que la Ley N.°21.459 analizada *era* la norma chilena sobre delitos informáticos. No hubo error de contenido; la aclaración del estudiante respondía a una legítima verificación de que el análisis correspondía a la jurisdicción correcta.

**Acción tomada:** Se explicó la identidad de la norma sin modificar el contenido del análisis, que era correcto.

### Corrección 3: Alcance del Art. 23 Ley 19.628 (identificada por el estudiante)

**Sección afectada:** 2.1.5: Tratamiento de datos personales

**Situación:** El estudiante propuso incorporar el Art. 23 de la Ley 19.628 al análisis de la supresión/cancelación, artículo que no había sido considerado en la versión original del documento.

**Evaluación:** El Art. 23 es pertinente y su omisión constituía una laguna en el
análisis: mientras el Art. 12 regula el derecho subjetivo de cancelación, el Art. 23 establece la acción de responsabilidad civil por tratamiento indebido e incluye como medida la orden judicial de eliminación o bloqueo de datos. Ambos artículos son complementarios y relevantes para el caso SolarWinds.

**Acción tomada:** Se incorporó el análisis del Art. 23 con distinción entre su función (acción judicial vs. derecho extrajudicial) y su limitación práctica en el caso (inmunidad soberana frente al atacante estatal). El estudiante identificó esta laguna mediante su conocimiento previo de la ley, demostrando un uso crítico de la IA como herramienta de apoyo y no como fuente de verdad.




