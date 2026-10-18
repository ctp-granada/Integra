# Revisión de exactitud bioquímica — Integra (antes MetaboliX)

Cambios de contenido (no de diseño) aplicados sobre el código original. Ficheros afectados: `src/data/metabolicData.ts`, `src/data/pathwayDetailsData.ts`, `src/data/biochemistryGlossaryData.ts` y los componentes `CentralHumanBodyAtlas`, `SubstrateComparisonCharts`, `TimelineCurveView`, `SplitOrganComparisonView`, `MacronutrientPathwayMap`, `PathwaySimulator` y `StateSelector`.

## 1. Errores corregidos
- Glucogenina: forma un **oligosacárido** iniciador, no un oligonucleótido.
- Glucoquinasa: **EC 2.7.1.2**.
- Fructosa-2,6-bisfosfato: destinos de síntesis y degradación estaban intercambiados.
- Cetogénesis: se consumen **3 acetil-CoA** para formar HMG-CoA (balance neto 2).
- Vía de las pentosas: la G6PDH genera un NADPH; el segundo (y el CO2) lo genera la 6-fosfogluconato deshidrogenasa.
- LDH hepática: **LDH-5 (M4)**, no LDH-B (ruta del ciclo de Cori y caso 5).
- Glucólisis anaerobia desde glucógeno: **3 ATP** por residuo (2 si procede de glucosa sanguínea).
- AMPK en el esprint: la activan AMP y ADP; el IMP no la activa.
- Caso 5: eliminado "más de 50 veces la fosforilación oxidativa" (un 400 m es ~35-45 % aeróbico); matiz sobre el destino del lactato. Se mantiene que el músculo no hace gluconeogénesis.
- Caso 4: proteína necesaria sin ceto-adaptación ~150-200 g/día; pérdida de peso y de grasa coherentes con 21 días.
- Ácidos grasos y BHE: sí la cruzan; el cerebro apenas los oxida.
- Cociente respiratorio del simulador: ahora se calcula como cociente alimentario real (CO2/O2 de cada macronutriente); antes daba 0,62 con solo grasa.
- Curva del ayuno: etiquetas de glucagón, lipólisis y cetonas corregidas (ya no aparece "glucagón suprimido" a las 12 h ni "trazas" con 1-3 mM).
- Ejercicio moderado: la PDH se **activa** con la contracción (Ca2+, piruvato); el efecto Randle se reserva al reposo.

## 2. Cifras unificadas
- Glucógeno muscular ~400 g (~1.600 kcal); hepático ~100 g, prácticamente agotado a las 24-36 h.
- Cetonas en el cerebro: ~25 % a las 72 h; ~60-70 % en inanición.
- Fases de Cahill en la curva: IV = 2-24 días, V = > 24 días. Cetonas, glucagón y nitrógeno de la curva ajustados.
- Ayuno tardío: proteólisis máxima (se quitó "ahorro proteico").
- Músculo en inanición: casi exclusivamente AGL, con menor uso de cetonas.
- Insulina portal 2-3 veces la periférica.
- Ejercicio moderado: grasas ~50-60 %, intensidad 50-65 % del VO2 máx.
- Fosfatasas: PP1 para la glucógeno sintasa; PP2A para la ACC, la PFK-2 y la PK-L.
- Ayuno temprano: AGL y glicerol dentro del rango de referencia del ayuno nocturno.
- Cociente insulina/glucagón: expresado como **cociente molar** y coherente con las concentraciones mostradas (~50 posprandial, ~2 ayuno nocturno, < 0,5 ayuno prolongado, 0 en CAD).
- Nitrógeno de la curva expresado en g de N/24 h.

## 3. Conceptos actualizados
- Tras una noche de ayuno, glucogenólisis ~50-60 % y gluconeogénesis ~40-50 %.
- Glucagón en inanición prolongada: desciende tras el pico del día 3.
- Cetonemia a las 24-72 h: ~0,3 → 2-3 mM.
- Glicerol en inanición: sustrato relevante, comparable a los aminoácidos (no "el principal").
- Ciclo de Cori y EPOC: la mayor parte del lactato se oxida; el EPOC tiene varias causas.
- Sistemas energéticos: el ATP no se agota y los sistemas se solapan; la vía oxidativa contribuye desde el inicio.
- Fosfocreatina como inhibidor de la AMPK: se indica que no se confirmó.
- Resistencia a la insulina: glucemia basal alterada 100-125 mg/dL, insulinemia en ayunas 15-40 μU/mL, aporte visceral de AGL al hígado ~5-20 %, lipogénesis de novo ~25 % de la grasa hepática.
- Captación posprandial: el 80 % muscular corresponde al clamp; tras una comida, hígado y músculo captan ~1/3 cada uno.
- Detalles: fibras IIx en humanos, glutaminasa + glutamato deshidrogenasa, GLUT1 en células β humanas, células X/A de la grelina, PYY sobre receptores Y2, pKa de los cuerpos cetónicos, Km de GLUT1/GLUT3, acetona parcialmente metabolizada, mHMGCS también en colon, fórmula de la G6P, PFK-2 cardíaca Ser-466.

## 4. Lenguaje
- euglycemia → euglucemia; saltear → sortear; Up/Downregulation, clivada, falla → fallo; LPSH → HSL; glicólisis → glucólisis; hexocinasa/cinasa → quinasa; glicosilación → glicación; NAFLD → MASLD/MASH.

## 5. Simulador de rutas
- Los interruptores ahora se acoplan: elegir "glucagón" baja la F-2,6-BP y libera la CPT-1; elegir "insulina" la restablece; activar la AMPK elimina el malonil-CoA.

## 6. Ampliación con la documentación del curso (Informe técnico, Manual de referencia y resúmenes)
- Nuevas herramientas en el menú superior: «Regulación hormonal» (escalas alostérica/covalente/genómica, insulina, glucagón, catecolaminas, cortisol y matriz de modulación enzimática) y «Perfil de órganos» (matriz de especialización de 9 tejidos).
- Sensor AMPK: añadidos GPAT, glucógeno sintasa, HNF-4α/PEPCK/G6Pasa, síntesis proteica (mTORC1, eEF2) y PGC-1α.
- Fichas del atlas: hígado (ácidos biliares y 7-α-hidroxilasa, glucuronidación, ácido úrico, fructoquinasa, proteínas plasmáticas) y cerebro (sin glucógeno, neurotransmisores, DHA neonatal).
- Resistencia a la insulina: IKKβ, PKC-θ (músculo) y PKC-ε (hígado); AS160/TBC1D4.
- Casos clínicos nuevos: cetosis de ayuno frente a CAD; etanol, NADH/NAD+, hipoglucemia y esteatosis.
- Glosario: niveles de regulación, amoniogénesis renal, metabolismo del etanol, cetosis frente a CAD e índice glucémico frente a densidad calórica.

## 7. Simplificación
- «Simulador de macronutrientes» y «Rutas & interruptores» fusionados en una sola pestaña, «Rutas e interruptores»: se elige la situación (postprandial, ayuno nocturno, ayuno prolongado, ejercicio), los interruptores (insulina/glucagón, F-2,6-BP, malonil-CoA, AMPK) cambian de forma coherente y cada ruta muestra su estado, sus pasos regulados con la enzima activa resaltada y las fichas de enzimas y sustratos.
- Eliminados los deslizadores de macronutrientes, el cociente respiratorio estimado y los interruptores independientes.

## 8. Revisión de duplicidades y optimización
- Atlas: eliminados el aviso «Órgano seleccionado» y los dos recuadros de ayuda laterales (repetían lo que ya muestran el cuerpo y la ficha del órgano).
- Comparador: quitadas las 8 tarjetas de selección (duplicaban barras y tabla); las situaciones se agrupan y ordenan igual que en el atlas (fisiológicas: postprandial, ayuno, ejercicio moderado e intenso; patológicas: ayuno tardío, inanición, resistencia a la insulina, CAD); añadido el lactato como cuarto sustrato con el umbral de ~2 mM; la ficha de cada situación toma de los datos comunes el resumen, el interruptor clave y los rasgos distintivos.
- Eliminado el botón flotante del glosario (ya está en el menú superior).
- Código sin uso eliminado: InterOrganMap, OrganInspector, StateSelector, ComparisonView, BiochemistryGlossaryFloatingButton, y los datos de reservas de 70 kg y del eje del apetito.
- Casos clínicos: las opciones ya no se sombrean (ni al elegir ni al verificar); solo se marca con borde la elegida (verde si es correcta, rojo si no) y la correcta con «Correcta» y un icono. El orden de las opciones se baraja de forma fija por caso, para que la correcta no sea casi siempre la A.
- Atlas: la ficha detallada del órgano ya no aparece fija bajo el cuerpo; se abre en una ventana al pulsar un órgano (en el dibujo o en su tarjeta) y se cierra con «Cerrar», la tecla Esc o pulsando fuera.
- La aplicación pasa a llamarse **Integra**.
- Las imágenes de los órganos y del cuerpo van incrustadas en `src/assets/organImages.ts` (WebP en base64) en lugar de ficheros PNG, para que se conserven al importar el ZIP en plataformas que no admiten ficheros binarios.

## 9. Recorrido por situaciones
- La app empieza con la elección de la situación (fisiológicas y patológicas, con un resumen de cada una). Al entrar se ven el título, el resumen, los botones «Insulina vs. glucagón», «Bioenergética muscular» y «Sensor AMPK» de esa situación, y el cuerpo con la adaptación de cada órgano. «Cambiar de situación» (o volver a pulsar la pestaña «Situaciones metabólicas») regresa a la elección.
- En el menú superior quedan solo las consultas generales: «Regulación hormonal», «Perfil de órganos» y «Glosario».
- Balance hormonal: insulina, glucagón y balance I/G (con el cociente molar) uno debajo de otro, en ese orden.
- «Rutas e interruptores» deja de ser una pestaña aparte y pasa a estar dentro de cada situación («Adaptación de los órganos» / «Rutas e interruptores»). Se han redactado los interruptores (insulina/glucagón, F-2,6-BP, malonil-CoA, AMPK) y el estado de las 5 rutas para las 8 situaciones: se añaden ejercicio intenso (glucólisis anaerobia, β-oxidación limitada), inanición (gluconeogénesis menor, cetogénesis máxima, ahorro proteico), resistencia a la insulina (gluconeogénesis no suprimida por FOXO1, lipogénesis de novo aumentada por resistencia selectiva) y CAD (gluconeogénesis, lipólisis y cetogénesis sin freno).
- El Comparador también pasa a cada situación como tercera vista, «Sustratos en sangre»: primero los valores de la situación (glucosa, AGL, cetonas y lactato con sus rangos), después la gráfica de las 8 situaciones con la actual resaltada y la tabla completa. Pulsar otra barra o fila lleva a esa situación. El menú superior queda con «Situaciones metabólicas», «Curvas temporales» y «Casos clínicos».
- Dentro de una situación fisiológica ya no aparecen datos de patología: la nota de «Relevancia clínica» de cada ruta solo se muestra en las situaciones patológicas, y «Sustratos en sangre» compara por defecto con las situaciones del mismo grupo (una casilla permite añadir las del otro grupo).
