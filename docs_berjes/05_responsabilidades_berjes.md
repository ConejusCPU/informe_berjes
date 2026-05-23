# Responsabilidades Legales de los Actores

En conformidad a lo presentado en el caso descrito en los otros archivos, podemos plantear a 3 actores principales, con sus respectivas responsabilidades:

Se identifican tres actores principales con dos tipos de responsabilidad cada uno
(penal y civil/administrativa), norma citada y hecho concreto del caso.

| Actor | Tipo de responsabilidad | Conducta vinculada al caso | Norma / Artículo |
|---|---|---|---|
| **Atacantes** *APT29 / Cozy Bear* | **Penal**: Existió ataque a la integridad del sistema de SolarWinds, acceso ilícito con ánimo de apoderarse de información y ataque a la integridad de los datos. | Formalmente, el grupo hacker generó una introducción de malware (SUNSPOT) en el entorno de compilación de Orion, obstaculizando el funcionamiento normal de miles de sistemas cliente. Adicionalmente, hicieron un ingreso no autorizado a la red SolarWinds con intención de exflitrar datos (Oladimeji & Kerner, 2023). Finalmente, hubo desarrollo y despliegue de herramientas de infiltración y mantención de acceso (SUNSPOT y SUNBURST), junto con la alteración no autorizada código fuente de Orion. | Ley N.° 21.459, Art. N°1, N°2 (inciso N°2), N°4 y N°8 (BCN, 2022) |
| **SolarWinds Corporation** *(empresa responsable del software)* | **Penal, Administrativa y Civil**: La SEC alegó que SolarWinds "defraudó a los inversores al sobrestimar sus prácticas de ciberseguridad y al subestimar o no divulgar los riesgos conocidos" desde su IPO (2018) hasta dic. 2020 (Kurth, 2023), además, se generó la distribución de actualizaciones de Orion contaminadas con SUNBURST a más de 18.000 clientes que las instalaron sin conocer el compromiso (Oladimeji & Kerner, 2023), todo esto junto a la falta de modelo de prevención de delitos, dejando una ausencia de controles en el *build system* y de mecanismos de detección permitió la comisión del delito informático en beneficio o provecho de la organización durante más de un año.| La SEC alegó que SolarWinds "defraudó a los inversores al sobrestimar sus prácticas de ciberseguridad y al subestimar o no divulgar los riesgos conocidos" desde su IPO (2018) hasta dic. 2020 (Kurt, 2023) pero los cargos fueron desestimados con prejudicio en noviembre de 2025 (Ikeda, 2025).| *Securities Act* 1933 y *Securities Exchange Act* 1934, disposiciones antifraude y de control interno, Art. 2314 y ss. Código Civil chileno; Ley N.° 21.663, Art. 7.° |
| **Timothy G. Brown** *(CISO de SolarWinds)* | **Administrativa y Penal**: Fraude personal ante la SEC y abuso de posición de confianza.| Brown, en calidad de CEO, firmó subcertificaciones que atestiguaban la adecuación de los controles de ciberseguridad, documentos en que los ejecutivos se basaron para reportes regulatorios. La SEC alegó que actuó con *scienter*: "conocimiento específico de las deficiencias de seguridad mientras redactaba o aprobaba declaraciones públicas engañosas" (LegalClarity, 2025, párr. 2). Primer caso en EE.UU. de cargos de fraude personales contra un CISO. Desestimados nov. 2025, asimismo, como máximo responsable de ciberseguridad, Brown conocía las vulnerabilidades del sistema y no adoptó medidas correctivas ni informó verazmente a la dirección ni a inversores, configurando el presupuesto de abuso de posición de confianza en la administración del sistema informático | *Securities Act* 1933, disposiciones antifraude; *Exchange Act* 1934, Art. 13(b)(2)(B), Ley N.° 21.459, Art. 2.° inc. 4.°

----------------------------------------------------------------------------------------------------

# Recursos Bibliográficos

1) CHILE. Congreso Nacional. Ley 21.459. Establece Normas sobre Delitos Informáticos, Deroga la Ley N° 19.223 y Modifica Otros Cuerpos Legales con el Objeto de Adecuarlos al Convenio de Budapest. 20 de junio de 2022. [Consultado el 23 de mayo de 2026] Disponible en: https://bcn.cl/32uaf

2) Kurth, H. A. (2023, noviembre 7). SEC charges SolarWinds and SolarWinds’ CISO with fraud and internal control failures. National Law Review. https://natlawreview.com/article/sec-charges-solarwinds-and-solarwinds-ciso-fraud-and-internal-control-failures

3) Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know. WhatIs; TechTarget. https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know

4) Ikeda, S. (2025, noviembre 26). SEC Civil Actions Against SolarWinds and Its CISO Dismissed With Prejudice. National Law Review. https://natlawreview.com/article/sec-charges-solarwinds-and-solarwinds-ciso-fraud-and-internal-control-failures

