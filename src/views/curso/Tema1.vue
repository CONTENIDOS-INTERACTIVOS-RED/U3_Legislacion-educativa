<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ley 115 de 1994: Ley General de Educación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-azul.mb-4.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Bienvenido a este espacio de aprendizaje. La Ley 115 de 1994, conocida como la Ley General de Educación, constituye la base legal que organiza y estructura el sistema educativo en Colombia. A través de este estudio, podrás identificar los principios, fines, derechos y responsabilidades que orientan el quehacer de los actores educativos.

        span Se le invita a reflexionar sobre la importancia de esta normativa en la promoción de una educación inclusiva, participativa y de calidad, así como su impacto en la formación de ciudadanos comprometidos con el desarrollo del país.  
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  


    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1  
        h2 Estructura del sistema educativo

    p.mb-4 La Ley 115 de 1994, conocida como la Ley General de Educación, constituye el marco legal que organiza y regula el sistema educativo colombiano. Esta normativa establece los fundamentos para la estructura educativa del país, definiendo sus niveles, modalidades y los roles de los actores que participan en la prestación de este servicio público. En este contexto, la educación se reconoce como un derecho fundamental de las personas y una obligación inherente al Estado, consolidando su carácter esencial para el desarrollo social y personal (Congreso de la República, 1994).

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Por otro lado, las reflexiones de José María Blanco White, sobre la educación, recopiladas en “Sobre educación” y editadas junto a las ilustraciones de Antonio Viñao (2014), complementan este enfoque desde una perspectiva crítica e innovadora.
        .bg-amarillo.p-4(data-aos="fade-up")
          span Blanco White analiza las prácticas educativas de su época, cuestionando sus limitaciones y proponiendo reformas destinadas a promover la formación integral del individuo. Dentro de sus planteamientos, destaca una inquietud particular por el impacto de la religión en la educación, defendiendo la necesidad de una enseñanza que fomente la libertad de pensamiento y la autonomía moral.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

      .col-12.col-xl-8
        p.mb-4 Asimismo, su obra subraya que la educación debe trascender la simple transmisión de conocimientos académicos. Para él, resulta imprescindible inculcar valores éticos y cívicos en los estudiantes, preparando a los individuos para una participación activa y consciente en la sociedad. Estas ideas, que se adelantaron a su tiempo, reflejan una visión humanista que aboga por la educación como un proceso transformador, enfocado en el desarrollo integral de las capacidades humanas y en la construcción de ciudadanos responsables.
        .bg-azul.p-4.mb-4(data-aos="fade-up")
          span De esta manera, tanto el marco legal establecido por la Ley 115 de 1994 como las reflexiones de Blanco White, destacan el papel central de la educación en la formación de personas libres y comprometidas con el bienestar colectivo. La organización del sistema educativo colombiano, tal como lo establece el <b>Artículo 10 de la Ley 115</b>, comprende tres niveles principales: la <b>educación formal</b>, la <b>educación no formal</b> y la <b>educación informal</b>. Cada uno de estos niveles responde a necesidades específicas de formación, adaptándose a las realidades sociales, económicas y culturales del país.
        span.text-bold(data-aos="fade-up") Ampliemos la información sobre cada uno de estos niveles:

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Educación formal")
            p.mb-3 Este nivel corresponde a la educación organizada y reglada que se imparte en instituciones educativas autorizadas por el Estado. Se organiza en ciclos secuenciales y constituye un proceso continuo de formación. Dentro de la educación formal se identifican tres etapas fundamentales (Ley 115, 1994, Art. 11):
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <b>Educación preescolar.</b> Primera etapa del ciclo formal, dirigida a los niños y niñas menores de seis años. Su propósito es el de desarrollar habilidades básicas y fortalecer valores, la socialización y la creatividad desde la primera infancia.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <b>Educación básica.</b> Comprende nueve grados y se divide en dos ciclos: básica primaria (grados 1º a 5º) y básica secundaria (grados 6º a 9º). Aquí, el estudiante consolida conocimientos en áreas fundamentales del saber y desarrolla competencias para la vida.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <b>Educación media.</b> Corresponde a los grados 10º y 11º. Su objetivo principal es preparar al estudiante para la educación superior, el ingreso al mundo laboral o la formación técnica profesional.
            span Es importante recordar que, como se estipula en la Ley, la educación formal debe ser <b>gratuita y obligatoria</b> en los niveles de básica y media en instituciones públicas, garantizando así el acceso y permanencia de todos los niños y jóvenes.
          .div(titulo="Educación no formal")
            p Se refiere a programas y actividades educativas que, aunque no conducen a títulos o certificaciones académicas, están diseñados para complementar, actualizar o profundizar conocimientos, en áreas específicas. Esta modalidad incluye talleres, cursos de capacitación y actividades orientadas a mejorar competencias laborales o sociales. (Ley 115, 1994, Art. 36)
          .div(titulo="Educación informal")
            p A diferencia de las dos anteriores, esta modalidad no está organizada ni planificada de manera formal. Se desarrolla a lo largo de la vida a partir de experiencias cotidianas, el entorno familiar, laboral y comunitario. Se considera una fuente de aprendizaje permanente y significativa. (Ley 115, 1994, Art. 43).
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La Ley 115 promueve la articulación entre los niveles educativos como una forma de garantizar la continuidad y la calidad del proceso formativo. De esta manera, se busca que los estudiantes transiten de forma coherente desde la educación inicial hasta la formación superior. En este sentido, el <b>Artículo 6</b> resalta la importancia de la educación inicial como la base para el desarrollo integral de las capacidades cognitivas, emocionales y sociales de los infantes.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Es clave señalar que esta articulación no solo ocurre entre niveles formales. La educación no formal y la informal desempeñan un rol fundamental en el aprendizaje a lo largo de la vida, permitiendo a las personas adaptarse a un entorno en constante cambio.
        .bg-azul.p-4.mb-4(data-aos="fade-up")
          span Analizar la estructura del sistema educativo, permite comprender cómo las políticas públicas, materializadas en normativas como la Ley 115, buscan garantizar el derecho a la educación y responder a las necesidades del contexto social colombiano. Sin embargo, es fundamental reflexionar sobre la implementación efectiva de estos lineamientos en la realidad.
        span Por ejemplo, a pesar de los avances en cobertura educativa, aún persisten desafíos relacionados con la calidad, la infraestructura y la equidad en el acceso, especialmente en las zonas rurales y las comunidades más vulnerables. Así, surge la necesidad de fortalecer la articulación entre los niveles, mejorar la formación docente y garantizar recursos adecuados para hacer de la educación un motor de transformación social.


    .row.mb-4
      .col-12.col-xl-8
        .bg-gris.p-4.mb-4(data-aos="fade-up")
          span Se invita a analizar no solo la estructura del sistema educativo, sino también su impacto en la formación de ciudadanos críticos, reflexivos y comprometidos con el desarrollo del país. Como futuros educadores, directivos o actores del ámbito educativo, la comprensión profunda de esta estructura resulta esencial para liderar procesos de mejora en la calidad educativa.
        span La <b>Ley 115 de 1994</b>, no solo organiza el sistema educativo, sino que también establece los principios y fines que orientan el proceso formativo en Colombia. Al reconocer la educación como un derecho fundamental, se abre un camino hacia la equidad y el desarrollo integral de las personas. Comprender esta estructura es clave para identificar oportunidades de mejora y proponer soluciones que contribuyan a la transformación de la educación en el país.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2  
        h2 Derechos y responsabilidades de los actores educativos

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 La <b>Ley 115 de 1994</b>, conocida como la <b>Ley General de Educación</b>, es la normativa que regula y organiza el sistema educativo colombiano. Uno de los aspectos más relevantes que aborda esta Ley es la definición clara de los <b>derechos y responsabilidades</b> de los actores educativos, entendiendo estos como todas las personas o entidades involucradas en el proceso educativo: estudiantes, docentes, padres de familia, directivos docentes, el Estado y la comunidad en general.
        p.mb-4 Este tema resulta fundamental porque la educación, al ser un <b>derecho fundamental</b> y un deber del Estado, requiere la participación activa y comprometida de todos los actores, cada uno con sus funciones específicas. 
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Es así como la Ley busca garantizar un equilibrio entre los derechos que se reconocen y las responsabilidades que cada uno debe asumir para lograr una educación de calidad, inclusiva y equitativa.
    p.mb-4 En el marco de la <b>Ley 115 de 1994</b>, se establecen derechos específicos para cada actor educativo, los cuales permiten garantizar la participación efectiva en el proceso educativo.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Derechos de los estudiantes")
            p.mb-3 Los estudiantes, como protagonistas del proceso educativo, tienen derecho a:
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Recibir una <b>educación de calidad</b>, que promueva el desarrollo integral de sus capacidades.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Ser respetados en su <b>dignidad y derechos humanos</b> dentro del entorno escolar.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Participar activamente en la vida académica y en la toma de decisiones relacionadas con la convivencia escolar, a través de espacios como los <b>gobiernos escolares y las representaciones estudiantiles</b> (Art. 94).
            div.d-flex.mb-4
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Recibir <b>orientación y apoyo</b> en su proceso formativo por parte de los docentes y directivos, respetando sus intereses, necesidades y ritmos de aprendizaje.
            span Al reconocer estos derechos, se promueve una formación que no solo apunta al desarrollo académico, sino también a la formación de ciudadanos activos, críticos y responsables.
          .div(titulo="Derechos de los docentes")
            p.mb-3 La Ley 115 también reconoce los derechos de los docentes, quienes cumplen un papel fundamental en la construcción del conocimiento y en la formación de valores. Algunos de estos derechos incluyen:
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Ejercer la docencia con autonomía pedagógica y con el respaldo de recursos adecuados para desarrollar su labor.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Acceder a procesos de <b>formación continua</b>, que les permitan actualizar y fortalecer sus competencias profesionales.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Recibir condiciones laborales dignas, respetando sus derechos salariales, prestacionales y de bienestar.
            div.d-flex.mb-4
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Participar en la construcción del <b>proyecto educativo institucional (PEI)</b> y en los espacios de toma de decisiones en las instituciones educativas.
            span Es importante destacar que, al garantizar los derechos de los docentes, se contribuye significativamente a la mejora de la calidad educativa, pues un maestro motivado y bien formado impacta positivamente en sus estudiantes.
          .div(titulo="Derechos de los padres de familia")
            p.mb-3 Los padres de familia, como <b>actores corresponsables</b> del proceso educativo, tienen derecho a:
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Participar en la formación integral de sus hijos.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Conocer y ser parte activa de los proyectos y procesos educativos desarrollados por las instituciones educativas.
            div.d-flex.mb-1
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Acceder a información transparente sobre el desempeño académico, conductual y social de sus hijos.
            span La participación de las familias es esencial, puesto que la educación no puede desligarse del contexto familiar y social de los estudiantes.
          .div(titulo="Derechos del Estado y la comunidad")
            span El Estado tiene derecho a implementar políticas educativas que promuevan el desarrollo nacional, mientras que la comunidad tiene derecho a participar en la planeación y evaluación del servicio educativo, fomentando la construcción de una sociedad más justa y equitativa.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    p.mb-4 De manera complementaria, la <b>Ley 115</b> establece que los derechos reconocidos a cada actor educativo conllevan una serie de <b>responsabilidades</b>. Este equilibrio garantiza que todos los actores participen de manera consciente y activa en la construcción de una educación de calidad.
    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-3 Responsabilidades de los estudiantes
              p.mb-3 Los estudiantes deben asumir un papel activo y responsable frente a su proceso educativo. Sus principales responsabilidades incluyen:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Asistir</b> de manera puntual y constante a las actividades académicas.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <b>Respetar</b> las normas de convivencia escolar y a todos los miembros de la comunidad educativa.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Participar con compromiso en las actividades académicas, culturales y formativas que ofrece la institución.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Cuidar y respetar los recursos e instalaciones de la institución educativa.
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-3 Responsabilidades de los docentes
              p.mb-3 Los docentes, además de garantizar la enseñanza de calidad, tienen la responsabilidad de:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Promover ambientes de aprendizaje inclusivos, democráticos y respetuosos.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Evaluar de manera justa y transparente el proceso formativo de los estudiantes, como lo establece el <b>Decreto 1290 del 2009</b>.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Contribuir a la formación integral de los estudiantes, no solo en lo académico, sino también en lo ético, social y emocional.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Participar activamente en los procesos de actualización pedagógica y profesional.
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-3 Responsabilidades de los padres de familia
              p.mb-3 Los padres, como primeros educadores de sus hijos, tienen la responsabilidad de:
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Acompañar y apoyar el proceso formativo de sus hijos.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Promover valores y hábitos que faciliten su desempeño académico y personal.
              div.d-flex.mb-1
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 Mantener una comunicación constante con los docentes y directivos para garantizar el bienestar de los estudiantes.
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-3 Responsabilidades del Estado y la comunidad
              p.mb-0 El Estado tiene la responsabilidad de garantizar el derecho a la educación, asignando recursos, desarrollando políticas públicas y promoviendo la formación docente. Por su parte, la comunidad debe apoyar los procesos educativos y contribuir a la construcción de entornos protectores para los estudiantes.
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
         
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-azul.mb-4.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La <b>Ley 115 de 1994</b> reconoce que la educación es un proceso <b>social y participativo</b>, en el cual intervienen diversos actores con derechos y responsabilidades claramente definidos. La articulación efectiva entre estudiantes, docentes, familias, el Estado y la comunidad, resulta indispensable para alcanzar los fines de la educación: la formación integral de ciudadanos comprometidos con el desarrollo social, económico y cultural del país.

        span En este sentido, se invita a reflexionar sobre la importancia de asumir con responsabilidad los roles asignados en el proceso educativo. La educación, más allá de ser un derecho, es también un compromiso colectivo que demanda una participación activa, consciente y equitativa de todos los actores involucrados.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3  
        h2 Principios y fines de la educación en Colombia

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 La <b>Ley 115 de 1994</b>, conocida como la Ley General de Educación, establece un marco normativo fundamental para el desarrollo del sistema educativo en Colombia. Esta Ley no solo organiza la estructura y los procesos del sistema educativo, sino que también define los principios y fines que deben guiar el ejercicio educativo en el país.
        .d-flex.align-items-start.bg-amarillo.mb-4.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0 Estos principios y fines son fundamentales porque orientan las políticas públicas, las prácticas pedagógicas y la convivencia dentro de los establecimientos educativos, estableciendo una visión clara y coherente sobre la educación que se desea para todos los ciudadanos colombianos.
        span Los principios que rigen la educación en Colombia, establecidos en el <b>Artículo 5 de la Ley 115 de 1994</b>, son la base sobre la cual se construye el sistema educativo nacional. Estos principios aseguran que la educación sea un proceso inclusivo, participativo y democrático, permitiendo que todos los estudiantes, independientemente de sus condiciones sociales, económicas o culturales, accedan a una educación de calidad. Conozcamos cada uno de ellos:  


    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principio de equidad", :iconUrl="require('@/assets/curso/unidad/img-22.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Principio de equidad
            p(data-aos="fade-up") Uno de los principios más importantes es el de equidad, el cual establece que la educación debe ser igualitaria y no discriminatoria, brindando las mismas oportunidades de aprendizaje a todos los estudiantes. La Ley reconoce las desigualdades sociales y busca compensarlas, promoviendo la inclusión de grupos vulnerables como aquellos en situación de pobreza, las poblaciones indígenas, las personas con discapacidad, entre otros. Este principio responde a la necesidad de ofrecer una educación que no solo prepare para el mundo laboral, sino que también forme a los individuos como ciudadanos responsables que contribuyan a la equidad social y económica del país.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principio de calidad", :iconUrl="require('@/assets/curso/unidad/img-22.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Principio de calidad
            p(data-aos="fade-up") La <b>calidad educativa</b> es otro principio clave de la Ley 115 de 1994. Este principio destaca la importancia de ofrecer una educación que permita el desarrollo integral de los estudiantes, tanto en el ámbito cognitivo como en el social y emocional. La calidad no solo se refiere a los contenidos académicos, sino también a las metodologías de enseñanza, la formación de los docentes, los recursos disponibles y la infraestructura escolar. En este sentido, la calidad educativa es un proceso continuo que debe ser evaluado y ajustado conforme a las necesidades de los estudiantes y la sociedad.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principio de participación", :iconUrl="require('@/assets/curso/unidad/img-22.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Principio de participación
            p(data-aos="fade-up") La <b>participación</b> es otro principio esencial, el cual resalta la importancia de la interacción de todos los actores educativos en la construcción del proceso formativo. Esto implica que no solo los docentes y estudiantes son responsables de la educación, sino que los padres de familia, los directivos, la comunidad y el Estado deben participar activamente en la creación de un ambiente educativo que fomente la cooperación, el respeto mutuo y el trabajo conjunto. Este principio también reconoce la importancia de la autonomía institucional, permitiendo a las instituciones educativas tomar decisiones que se adapten a sus contextos específicos.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principio de diversidad", :iconUrl="require('@/assets/curso/unidad/img-22.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Principio de diversidad
            p(data-aos="fade-up") La educación en Colombia debe ser <b>diversa</b> y respetar las características culturales, lingüísticas y sociales de cada región y comunidad. La Ley reconoce la <b>pluralidad</b> de la sociedad colombiana y garantiza que la educación sea un medio para valorar y preservar las identidades culturales de los diversos pueblos que componen el país. Este principio aboga por la integración de contenidos que resalten las tradiciones, costumbres y lenguas de las comunidades indígenas, afrodescendientes y otras poblaciones, promoviendo el respeto por la diversidad y la convivencia pacífica.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    p.mb-4 Los fines de la educación, establecidos en el <b>Artículo 5 de la Ley 115 de 1994</b>, definen los objetivos que deben alcanzar todos los procesos educativos en Colombia. Estos fines guían tanto el currículo escolar como las políticas públicas del sector educativo, y son fundamentales para lograr los propósitos de una educación integral, democrática y de calidad. A continuación, se presentan cada uno de ellos:


    .row.mb-5
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Formación integral del individuo")
            p Uno de los fines más importantes de la educación en Colombia, es la formación integral de los estudiantes, que no solo debe abarcar los conocimientos académicos, sino también el desarrollo de habilidades, valores, actitudes y competencias que les permitan vivir de manera plena y responsable en sociedad. Esto implica una formación que no solo prepare para el trabajo, sino también para ser ciudadanos comprometidos con los derechos humanos, la paz y la democracia.
          .div(titulo="Desarrollo de capacidades para el trabajo y la vida")
            p El sistema educativo colombiano busca que los estudiantes adquieran las competencias necesarias para enfrentar los retos de la vida y el trabajo. Esto incluye habilidades cognitivas, pero también capacidades en áreas como la resolución de problemas, la creatividad, el pensamiento crítico y la gestión emocional. En este sentido, la educación debe ser vista como una herramienta para el desarrollo personal y profesional de los individuos, ayudándoles a desempeñarse en la sociedad y en el mercado laboral de manera ética y responsable.
          .div(titulo="Fomento de los valores democráticos")
            p La Ley 115 también subraya el fomento de los valores democráticos, como la solidaridad, la tolerancia, el respeto por los derechos humanos y la convivencia pacífica. La educación debe ser un espacio donde los estudiantes no solo aprendan a ser competentes en distintas áreas del conocimiento, sino también a vivir juntos, respetar las opiniones ajenas y contribuir a una sociedad más justa e igualitaria. Este objetivo es clave en un país diverso y multicultural como Colombia, donde el respeto por las diferencias es crucial para la paz y el desarrollo social.
          .div(titulo="Promoción de la cultura nacional e internacional")
            p El último fin de la educación en Colombia establecido por la Ley, es la promoción de la cultura nacional y el respeto por las culturas internacionales. Este fin está vinculado con la formación de una identidad nacional que valore la riqueza cultural del país, al mismo tiempo que se promueva el respeto y la comprensión hacia otras culturas. La educación debe, por tanto, preparar a los estudiantes para vivir en un mundo globalizado, respetando la diversidad y promoviendo el intercambio cultural y científico.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://rieoei.org/RIE/article/view/886") La concertación de la educación en Colombia - Revista iberoamericana de educación [Artículo]
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://revistas.unicordoba.edu.co/index.php/dersoc/article/view/1497") Derecho y educación - Revista Derecho y sociedad [Artículo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=rTshZ0a9cAA&t=2s") A 30 años de la expedición de la Ley 115 de 1994 ¿Qué ha pasado con la democracia en la escuela? [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=GC6w9cYlqzA") Capacitación sobre el Registro Único de Prestadores de Educación Inicial [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
