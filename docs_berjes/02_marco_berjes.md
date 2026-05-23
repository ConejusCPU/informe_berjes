# Marco Normativo
# ---------------

## Contextualización del Caso

El ciberataque a la empresa SolarWinds constituye uno de los incidentes informáticos con mayor significancia en la historia reciente de la informática y la seguridad de la información, esto pues, porque se trató de un ataque a la cadena de suministro de software dirigido contra la plataforma de monitoreo TI denominada "Orion" desarrollada por dicha compañía, afectando a más de 30.000 organizaciones tanto públicas como privadas (Oladimeji & Kerner, 2023), entre las cuales se encontraban organismos gubernamentales como el Departamento del Tesoro, Comercio, Seguridad Nacional, Justicia y Estado de EE.UU. (Oladimeji & Kerner, 2023).

En sí, el ataque consistió en modificar un plugin de la plataforma Orion, distribuido como actualización con firma digital de SolarWinds, la cual contenía una backdoor denominada SUNBURST. Bajo éste accionar, los atacantes (grupo denominado como Nobelium) tuvieron acceso sin ser detectados durante 14 meses.

# ----------------------------------------------------------------------------------------------------

## Normativas Contempladas en el Caso

### Normativa Chilena

#### Ley N°21.459 sobre Delitos Informáticos (Congreso Nacional, 2022)

La ley N°21.459 fue publicada en el Diario Oficial el día 20 de Junio del año 2022, derogó la Ley N°19.223 y adecuó la legislación chilena a las exigencias del Convenio de Budapest sobre el cibercrimen. Tipifica conductas como el acceso ilícito a sistemas informáticos, la interceptación ilícita de datos y el ataque a la integridad de sistemas y datos. Es pertienente en este caso puesto que es el estándar penal vigente en Chile en materia de cibercrimen.

#### Ley N°21.663, Ley Marco de Ciberseguridad (Congreso Nacional, 2024)

La ley N°21.663 fue publicada en el Diario Oficial el día 08 de Abril del año 2024. Busca establecer el marco regulatorio nacional en materia de ciberseguridad, creando la Agencia Nacional de Ciberseguridad (ANCI) y el CSIRT nacional (Equipo de Respuesta a Incidentes de Seguridad Informática), además de definir legalmente nomenclatura asociada al área (definición de ciberseguridad, ciberataque, etc.). Impone a operadores de importancia vital (OIV) la obligación de adoptar sistemas de gestión de seguridad de la información, reportar incidentes y garantizar la continuidad operacional. Aplica en este caso puesto que define estándares que pueden ser contrastados con la realidad operacional de SolarWinds en relación al ciberataque.

# ----------------------------------------------------------------------------------------------------

### Normativa Internacional

#### ISO/IEC 27001:2022, Sistema de Gestión de Seguridad de la Información (SGSI) (ISO, 2022)

Estándar internacional publicado por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC). Establece los requisitos para implementar, mantener y mejorar de forma continua un SGSI, cubriendo la confidencialidad, integridad y disponibilidad de la información. La cláusula 5.19 (A.1) (relaciones con proveedores) y los controles de gestión de vulnerabilidaddes son directamente aplicables a la falla de SolarWinds, donde su proceso de compilación fue comprometido. 

#### ISO/IEC 27036-3:2023, Seguridad en cadenas de suministro de software y hardware (ISO, 2023)

Como tal, ésta normativa es parte de la familia normativa ISO/IEC 27036 la cual regula las relaciones con proveedores, estableciendo directrices para la gestión de riesgos de ciberseguridad en cadenas de suministro de hardware, software y servicios. Formalmente, es la norma internacional más directamente aplicable a ataques del tipo supply chain attack (ataque a la cadena de suministro), ya que aborda la confianza en actualizaciones de terceros, los mecanismos de verificación de integridad del software y los controles de acceso a entornos de compilación.

# ----------------------------------------------------------------------------------------------------

### Aplicabilidad de las normativas dispuestas

#### Hechos concretos del caso

A) Oladimeji y Kerner (2023) documentan el mecanismo técnico central del ataque como un supply chain attack (ataque a la cadena de suministro) para "insertar código malicioso en el sistema Orion [...] creando una puerta trasera", siendo así, ésta backdoor permitió que los hackers pudieran acceder con credenciales e impersonar usuarios y cuentas de organizaciones víctimas. En función de lo establecido en la Ley N°21.459 (BCN, 2022) sanciona en su art. N°1 el acceso ilícito a sistemas informáticos sin autorización. Asimismo, el art. N°3 sanciona el ataque a la integridad de los datos informáticos, que también se configura al modificar el código fuente de Orion durante el proceso de compilación, alterando sin autorización los datos que componen el software distribuido comercialmente (BCN, 2022).

B) Formalmente, el ataque a SolarWinds tardó más de un año en detectarse (desde Septiembre de 2019 a Diciembre de 2020), por lo que los atacantes tuvieron 14 meses de acceso irrestricto al sistema (Oladimeji & Kerner, 2023), además de que la intrusión al sistema se dió mediante múltiples servidores ubicados en EE.UU., siendo mimetizado mediante tráfico de red legítimo (Oladimeji & Kerner, 2023). En conformidad a esto, el art. N°7 de la Ley N°21.663 (BCN, 2024) establece deberes generales de ciberseguridad, incluyendo la obligación de implementar medidas para prevenir, detectar y responder a incidentes. Adicionalmente, el art. N°9 de la misma ley, impone la obligación de reportar incidentes oportunamente a la autoridad competente (ANCI).

C) La inyección de código malicioso mediante lotes de software (actualizaciones) distribuido por SolarWinds (Oladimeji & Kerner, 2023) puede ser contrastado por la normativa ISO/IEC 27036-3:2023, especialmente, las directrices que buscan reglamentar la integridad y los procesos de verificación de los artefactos de software (ISO, 2023), ya que, si consideramos el hecho de que SolarWinds pudiera distribuir actualizaciones firmadas digitalmente (con malware) durante la compilación, sin que ningún mecanismo de control lo detectara, constituye una falla directa en los controles de integridad del sistema que ésta norma prescribe.

# ----------------------------------------------------------------------------------------------------

# Recursos Bibliográficos

1) Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know. WhatIs; TechTarget. https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know

2) Congreso Nacional de Chile. (01 de abril de 2025). Ley no. 21.459. Establece Normas sobre Delitos Informáticos, Deroga la Ley N° 19.223 y Modifica Otros Cuerpos Legales con el Objeto de Adecuarlos al Convenio de Budapest. 20 de junio de 2022. https://bcn.cl/32uaf

3) Congreso Nacional de Chile. (01 de marzo de 2025). Ley no. 21.663. Ley Marco de Ciberseguridad. 08 de abril de 2024. https://bcn.cl/3isi2

4) International Organization for Standardization. (2022). ISO/IEC 27001:2022 Information Security, Cybersecurity and Privacy Protection — Information security managment systems — Requirements. ISO. Recuperado de: https://www.exactls.com/wp-content/uploads/2025/02/ISO_IEC-270012022-ed.3.pdf

5) International Organization for Standardization. (2023). ISO/IEC 27036-3:2023 Cybersecurity -  Supplier Relationships — Part 3: Guidelines for hardware, software, and services supply chain security. ISO. Recuperado de: https://cdn.standards.iteh.ai/samples/82890/a08a697db8b84e5e96f14173d2ae8d9a/ISO-IEC-27036-3-2023.pdf