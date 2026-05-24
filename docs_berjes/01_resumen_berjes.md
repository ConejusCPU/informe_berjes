# Resumen del Caso SUNBURST / SolarWinds (2019–2025)

## ¿Qué ocurrió?

Durante el año 2019, el grupo de hackers ruso APT29 / Cozy Bear / Nobelium utilizó los malwares SUNBURST/SUNSPOT en uno de los ataques de ciberseguridad más sofisticados y de mayor alcance registrados en la historia. Se trató de un **ataque a la cadena de suministro de software** (*supply chain attack*) dirigido contra **SolarWinds Corporation**, empresa norteamericana proveedora de herramientas de monitoreo de infraestructura TI utilizada por miles de organizaciones gubernamentales y privadas a nivel global.

Como tal, el vector de ataque fue la plataforma *Orion*, software de monitoreo de redes con acceso privilegiado a los sistemas de TI de sus clientes. Formalmente, SolarWinds, al ser una empresa con amplio despliegue en diversos sistemas, se convirtió en un objetivo relevante para el grupo (Oladimeji & Kerner, 2023).

# ----------------------------------------------------------------------------------------------------

## Cronología de los hechos

| Fecha | Evento |
|---|---|
| **Septiembre 2019** | Los atacantes obtienen acceso no autorizado a la red interna de SolarWinds mediante backdoor (Oladimeji & Kerner, 2023). |
| **Octubre 2019** | Se realizan pruebas de inyección de código en la plataforma Orion para evaluar la viabilidad del ataque (Oladimeji & Kerner, 2023). |
| **20 de febrero de 2020** | El malware SUNBURST es inyectado en el proceso de compilación de Orion (Oladimeji & Kerner, 2023). 
| **26 de marzo de 2020** | SolarWinds comienza a distribuir actualizaciones de Orion contaminadas con SUNBURST a sus clientes, sin conocimiento del compromiso (Oladimeji & Kerner, 2023). |
| **Junio de 2020** | Los atacantes eliminan el código malicioso de los entornos de SolarWinds, habiendo completado su objetivo. SolarWinds no detecta el incidente (SolarWinds, 2021). |
| **13 de diciembre de 2020** | FireEye publica el descubrimiento público del ataque. CISA emite la Directiva de Emergencia 21-01 (Etienne, 2026). |
| **14 de diciembre de 2020** | SolarWinds confirma el ataque mediante un Formulario 8-K ante la SEC y comienza la notificación a clientes (SolarWinds Corporation, 2020). |
| **17 de diciembre de 2020** | Microsoft, FireEye y GoDaddy crean un *kill switch* para neutralizar SUNBURST (Oladimeji & Kerner, 2023). |
| **Enero de 2021** | SolarWinds contrata a KPMG para análisis forense y a la firma de Chris Krebs y Alex Stamos para la gestión de la crisis (Etienne, 2026). |
| **15 de abril de 2021** | EE.UU. y el Reino Unido atribuyen oficialmente el ataque al Servicio de Inteligencia Exterior de Rusia (SVR / APT29) (Etienne, 2026). |
| **Octubre de 2023** | La SEC formula cargos civiles contra SolarWinds Corporation y su CISO, Timothy G. Brown, por fraude y fallas de control interno. |
| **Noviembre de 2025** | Los cargos de la SEC contra SolarWinds y Brown son desestimados con prejudicio (Ikeda, 2025). |

# ----------------------------------------------------------------------------------------------------

## Actores Involucrados

| Actor | Descripción |
|---|---|
| **APT29 / Cozy Bear / Nobelium** | Grupo de amenaza persistente avanzada (APT) atribuido al **Servicio de Inteligencia Exterior de Rusia (SVR)**. Identificado por Microsoft como *Nobelium* y por FireEye como *UNC2452*. El gobierno ruso negó toda participación (Oladimeji & Kerner, 2023). |
| **Gobierno federal EE.UU.** | Se vieron afectadas diversas agencias gubernamentales, tales como el Departamentos del Tesoro, Estado, Comercio, Justicia, Seguridad Nacional, Energía, Defensa y los Institutos Nacionales de Salud (NIH) |
| **Sector privado** | También se vieron involucradas empresas privadas como  Microsoft, FireEye (ahora Mandiant), Intel, Cisco, Deloitte, Autodesk, Mimecast, Malwarebytes |

# ----------------------------------------------------------------------------------------------------

## Impacto del Ataque

Como tal, el ataque comprometió departamentos clave del gobierno de EE.UU, siendo calificado por el Senado del mismo país como una de las mayores brechas de espionaje de la historia reciente. Por un lado, en lo económico, SolarWinds destinó entre USD $18–19 millones solo en los primeros tres meses de remediación, enfrentó una demanda colectiva de accionistas por USD $26 millones, y el ataque costó a las empresas afectadas un promedio del 11% de sus ingresos anuales (Etienne, 2026), por otro lado, a nivel normativo, fue el detonante directo de la Executive Order 14028 (Dinu, 2021), que impuso controles de cadena de suministro y listas de materiales de software (SBOM) a contratistas federales. Finalmente, el caso estableció dos precedentes en la industria de la informática; el primer cargo civil de la SEC contra un CISO (Timothy Brown) y la redefinición global del estándar de seguridad en cadenas de suministro de software.

# ----------------------------------------------------------------------------------------------------

# Referencias Bibliográficas

1) Heller, M. (2021, abril 14). Sunburst hack costs SolarWinds at least $18M. Cfo.com. https://www.cfo.com/news/sunburst-hack-costs-solarwinds-at-least-18m/655692/

2) Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know. WhatIs; TechTarget. https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know

3) SolarWinds Corporation. (2020, diciembre 14). *Form 8-K: Cybersecurity incident disclosure*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/0001739942/000162828020017451/swi-20201214.htm

4) SolarWinds. (2021, enero 11). *New findings from our investigation of SUNBURST*. SolarWinds Blog. https://www.solarwinds.com/blog/new-findings-from-our-investigation-of-sunburst

5) Ikeda, S. (2025, noviembre 26). SEC Civil Actions Against SolarWinds and Its CISO Dismissed With Prejudice. National Law Review. https://natlawreview.com/article/sec-charges-solarwinds-and-solarwinds-ciso-fraud-and-internal-control-failures

6) Etienne. (2026, enero 13). SolarWinds / SUNBURST: Supply-chain compromise. ThreatLink. https://threatlink.galink.com/p/solarwinds-sunburst-supply-chain

7) SolarWinds Corporation. (2020, diciembre 14). *Form 8-K: Cybersecurity incident disclosure*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/0001739942/000162828020017451/swi-20201214.htm

8) Dinu, C. (2021, junio 29). SolarWinds attack cost impacted companies an average of $12 million. Heimdal Security Blog; Heimdal Security. https://heimdalsecurity.com/blog/solarwinds-attack-cost-impacted-companies-an-average-of-12-million/




