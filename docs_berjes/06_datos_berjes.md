# Tratamiento de Datos en el caso SolarWinds


## Consideración preliminar: datos personales v/s datos sensibles

1) Datos personales:  Según lo contenido en la Ley N° 19.628 "Sobre Protección de la Vida Privada", Art. N°2, letra f, la legislación chilena establece que *datos personales* son "los relativos a cualquier información concerniente a personas naturales, identificadas o identificables." (Congreso Nacional de Chile, 2023), vale decir, es el término genérico relativo a los datos pertenecientes a un sujeto de derecho.

2) Datos sensibles: Según lo contenido en la Ley N° 19.628 "Sobre Protección de la Vida Privada", Art. N°2, letra g, se entiende por *dato sensible* a "aquellos datos personales que se refieren a las características físicas o morales de las personas o a hechos o circunstancias de su vida privada o intimidad[...]" (Congreso Nacional de Chile, 2023), o sea, cuestiones alusivas a raza, religión, ideología política, etc.


# ----------------------------------------------------------------------------------------------------

## ¿Cuáles fueron los tipos de datos comprometidos en éste caso?

El ataque a SolarWinds involucró múltiples acciones por parte de los atacantes que, si los contrastamos con la normativa chilena vigente, constituyen delitos propiamente tal. Al respecto, podemos hablar de 3 tipos de datos comprometidos en el caso:

| Tipo de dato | Clasificación | Descripción en el caso SolarWinds |
|---|---|---|
| **Credenciales de autenticación** (nombres de usuario, contraseñas, tokens OAuth, certificados digitales, etc.) | **Dato personal** (Art. N°2, letra f, Ley N°19.628) | Según los antecedentes documentados, se sabe que el malware SUNBURST podía "acceder e impersonar usuarios y cuentas de organizaciones víctimas" (Oladimeji & Kerner, 2023). Siendo así, podemos decir que, al entender que las credenciales están directamente vinculadas a personas naturales identificables, esto las configura como datos personales en los términos de la Ley N.° 19.628 (Congreso Nacional de Chile, 2023). |
| **Correos electrónicos y comunicaciones internas** (asociados a funcionarios gubernamentales) | **Dato personal (con posible carácter sensible)** (Art. N°2, letra g, Ley N°19.628) | Las comunicaciones de funcionarios pueden contener opiniones políticas, posiciones en negociaciones, intereses particulares y datos de situación personal, categorías que la Ley 19.628 define como datos sensibles.
| **Registros de actividad y configuración de sistemas** (logs de actividad, registros de acceso, datos de rendimiento de la plataforma Orion, entre otros.) | **Dato personal** (Art. N°2, letra f, Ley N°19.628) | Los archivos de *logs* de Orion contienen nombres de usuario, direcciones IP asignadas a personas y marcas temporales de actividad individual, por lo que, al poder asociarse a personas naturales identificables, constituyen datos personales ordinarios. En conformidad a esto, la plataforma Orion tenía, según Oladimeji y Kerner (2023), "acceso privilegiado a los sistemas de TI para obtener registros y datos de rendimiento del sistema". |

# ----------------------------------------------------------------------------------------------------

## Datos ARCO comprometidos

| Derecho ARCO | Art. Ley N.° 19.628 | Afectación concreta en el caso SolarWinds |
|---|---|---|
| **Oposición** | Art. N°11: *El responsable de los registros o bases donde se almacenen datos personales con posterioridad a su recolección deberá cuidar de ellos con la debida diligencia, haciéndose responsable de los daños.* (Congreso Nacional de Chile, 2023)| Tratamiento masivo sin consentimiento ni base legal; los titulares no pudieron oponerse al tratamiento ilícito previo a la detección. Adicionalmente, la falta de reporte oportuno (contraria al Art. 9.° Ley 21.663) agravó la indefensión de los titulares. |
| **Acceso** | Art. N°12: *Toda persona tiene derecho a exigir a quien sea responsable de un banco, que se dedique en forma pública o privada al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente* | Titulares no pudieron confirmar si sus datos eran tratados por terceros no autorizados durante más de 14 meses, entendiendo que el responsable legítimo tampoco tenía conocimiento del tratamiento ilícito paralelo ejecutado por APT29. |
| **Supresión** | Art. N°23: Entendiendo que hubo tratamiento ilícito sin consentimiento de los datos, la siguiente definición aplicaría: " La persona natural o jurídica privada o el organismo público responsable del banco de datos personales deberá indemnizar el daño patrimonial y moral que causare por el tratamiento indebido de los datos, sin perjuicio de proceder a eliminar, modificar o bloquear los datos de acuerdo a lo requerido por el titular o, en su caso, lo ordenado por el tribunal"| Datos obtenidos sin base de licitud alguna; imposibilidad práctica de supresión una vez exfiltrados a actores estatales extranjeros. Formalmente, la ocultación activa del malware impidió el ejercicio oportuno de este derecho. |


# ----------------------------------------------------------------------------------------------------

# Referencias Bibliográficas

1) Congreso Nacional de Chile. (01 de marzo de 2025). Ley no. 21.663. Ley Marco de Ciberseguridad. 08 de abril de 2024. https://bcn.cl/3isi2

2) Congreso Nacional de Chile. (09 de mayo de 2023). Ley no. 19.628. Sobre Proteccion de la Vida Privada. 28 de agosto de 1999. https://bcn.cl/2eqfn

3) Oladimeji, S., & Kerner, S. M. (2023, noviembre 3). SolarWinds hack explained: Everything you need to know. WhatIs; TechTarget. https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know

4) Porzio, C. (2025, septiembre 28). Actualización Legal en Protección de Datos: Los derechos ARCO. Derecho y cotidianidad. https://cristianporzio.com/2025/09/28/actualizacion-legal-en-proteccion-de-datos-los-derechos-arco/

5) Congreso Nacional de Chile. (01 de diciembre de 2026). Ley no. 21.719. Regula la Protección y el Tratamiento de los Datos Personales y Crea la Agencia de Protección de Datos Personales. 13 de diciembre de 2024. https://bcn.cl/GapReB