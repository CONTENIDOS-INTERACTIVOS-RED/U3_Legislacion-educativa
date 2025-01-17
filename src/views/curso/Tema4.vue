<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Decreto 1290 del 2009: Sistema de Evaluación del Estudiante '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-right")
        p.mb-0 Para abordar el <b>Decreto 1290 del 2009, Sistema de Evaluación del Estudiante</b>, resulta esencial reflexionar sobre el papel que cumple la evaluación en el proceso educativo. No se trata únicamente de calificar el desempeño de los estudiantes, sino de reconocer sus avances, identificar áreas de mejora y fomentar aprendizajes significativos. Este Decreto establece un marco normativo que otorga autonomía a las instituciones educativas para definir sus sistemas de evaluación, siempre respetando los principios de equidad, inclusión y transparencia. Al estudiar este tema, se podrá analizar cómo estos lineamientos impactan tanto en el desarrollo de los estudiantes como en la calidad de la educación, invitando a una reflexión crítica sobre la relación entre evaluación y aprendizaje.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

    #t_4_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 4.1  
        h2 Fundamentos y principios del sistema de evaluación

    p.mb-4 La evaluación en los entornos educativos no solo mide el desempeño de los estudiantes, sino que también constituye un pilar fundamental para mejorar la calidad de los procesos de enseñanza y aprendizaje. En Colombia, el Decreto 1290 de 2009 introduce un enfoque innovador al otorgar autonomía a las instituciones educativas para diseñar sus propios sistemas de evaluación, adaptados a las necesidades y particularidades de sus comunidades.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Fundamentos y principios del sistema de evaluación 
          p.mb-5 En el PDF Fundamentos y principios del sistema de evaluación, se analiza este marco normativo, resaltando principios esenciales como la equidad, la inclusión, la transparencia y la formación integral. A lo largo del documento, se invita a reflexionar sobre cómo la evaluación puede trascender la asignación de calificaciones para convertirse en una herramienta que fomente aprendizajes significativos, participación activa y mejora continua en el sistema educativo.

          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Fundamentos y principios del sistema de evaluación.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Fundamentos y principios del sistema de evaluación.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 4.2  
        h2 Modalidades de evaluación

    .row.mb-4
      .col-12.col-xl-8
        .bg-amarillo.p-4.mb-4(data-aos="fade-up")
          span El Decreto 1290 del 2009, que regula la evaluación del aprendizaje y promoción de los estudiantes en los niveles de educación básica y media, introduce un enfoque dinámico y flexible respecto a las modalidades de evaluación. Este marco normativo resalta que las instituciones educativas tienen la autonomía para diseñar su propio sistema de evaluación, permitiéndoles adaptarlo a las características de su comunidad educativa, siempre que cumplan con los lineamientos generales establecidos por el Ministerio de Educación Nacional (MEN). Es, por tanto, esencial comprender cómo se estructuran estas modalidades y su impacto en el proceso formativo de los estudiantes.
        p.mb-4 Al abordar las modalidades de evaluación, se parte del principio que estas no deben ser homogéneas ni estandarizadas. Más bien, deben responder a la diversidad de contextos, estilos de aprendizaje y necesidades de los estudiantes. En este sentido, el Decreto permite que las instituciones educativas combinen métodos, técnicas e instrumentos evaluativos para garantizar un seguimiento integral del proceso de aprendizaje (Ministerio de Educación Nacional [MEN], 2009).
        span.text-bold Conozcamos cuáles son estas modalidades:
      .d-none.d-xl-block.col-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Modalidades formativa y sumativa")
            p Una de las principales modalidades de evaluación reconocidas en el marco del Decreto es la evaluación formativa, que se centra en el seguimiento continuo del aprendizaje. Este enfoque permite identificar fortalezas y áreas de mejora, fomentando una retroalimentación constante entre docentes y estudiantes. Al priorizar la evaluación como una herramienta para el aprendizaje, y no únicamente como un fin en sí misma, esta modalidad promueve un ambiente donde el error es visto como una oportunidad de crecimiento.<br>Por otro lado, se encuentra la evaluación sumativa, que tiene como objetivo principal registrar el logro de aprendizajes al final de un periodo académico. Esta modalidad, aunque tradicionalmente asociada a calificaciones, debe integrarse con un enfoque reflexivo que permita al estudiante comprender su desempeño y las implicaciones de sus resultados.

          .div(titulo="Modalidades cualitativa y cuantitativa")
            p El Decreto también reconoce la importancia de integrar tanto enfoques cualitativos como cuantitativos en los sistemas de evaluación. La evaluación cualitativa permite describir de manera detallada y contextualizada el progreso de los estudiantes, considerando aspectos como el esfuerzo, la creatividad y el desarrollo de habilidades socioemocionales. Por su parte, la evaluación cuantitativa se enfoca en medir los resultados a través de puntajes o calificaciones numéricas, facilitando la comparación y el análisis de datos de manera objetiva.

    p.mb-4 A partir de estas modalidades, surge una reflexión importante: ¿de qué manera estas prácticas contribuyen a formar ciudadanos críticos, responsables y autónomos? El Decreto plantea un reto tanto para los docentes como para las instituciones educativas, debido a que deben equilibrar los diferentes enfoques para garantizar una evaluación integral. Por ejemplo, una evaluación que combine componentes cualitativos y cuantitativos puede ofrecer una visión más completa del desempeño estudiantil, además de permitir ajustes en las estrategias pedagógicas.

    p.mb-4 Por otra parte, se debe considerar el rol del estudiante en este proceso. El Decreto 1290, promueve la idea que los estudiantes sean protagonistas de su aprendizaje, lo que implica no solo recibir retroalimentación, sino también reflexionar sobre ella. Este aspecto transforma la evaluación en un espacio de diálogo, donde los docentes guían y los estudiantes asumen responsabilidad sobre su desarrollo.

    .d-flex.align-items-start.bg-azul.mb-4.p-4(data-aos="fade-up")
      img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-56.svg', alt='Texto que describa la imagen')
      .d-flex.flex-column
        p.pe-xl-3.mb-0(data-aos="fade-up") En definitiva, las modalidades de evaluación contempladas en el Decreto 1290 del 2009 ofrecen una visión enriquecida y flexible del proceso evaluativo, adaptada a los retos de un sistema educativo inclusivo y de calidad. Al reflexionar sobre su implementación, se evidencia que una evaluación integral no solo mide el aprendizaje, sino que también fomenta el crecimiento personal y académico de los estudiantes. Este enfoque, lejos de ser únicamente técnico, es profundamente humano y transformador.

    #t_4_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 4.3  
        h2 Responsabilidades de los docentes en la evaluación

    p.mb-4 La evaluación del aprendizaje es un proceso clave para garantizar la mejora continua de los estudiantes y, en este contexto, el papel del docente adquiere una relevancia fundamental. El Decreto 1290 de 2009 establece que los docentes no solo deben diseñar y aplicar evaluaciones, sino también acompañar a los estudiantes en este proceso, asegurando que la evaluación sea justa, inclusiva y orientada al desarrollo integral.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Responsabilidades de los docentes en la evaluación 
          p.mb-5 En el PDF Responsabilidades de los docentes en la evaluación, se analizan los principales deberes que tienen los docentes en cuanto a la planificación, ejecución, retroalimentación y registro de las evaluaciones, así como su impacto en la formación de los estudiantes. Este documento invita a reflexionar sobre cómo la evaluación puede convertirse en una herramienta poderosa para potenciar el aprendizaje, fomentar la equidad y fortalecer la autonomía de los estudiantes en su proceso educativo.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Responsabilidades de los docentes en la evaluación.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Responsabilidades de los docentes en la evaluación. 
    
    .d-flex.align-items-start.bg-amarillo.mb-5.p-4(data-aos="fade-up")
      img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-51.svg', alt='Texto que describa la imagen')
      .d-flex.flex-column
        p.pe-xl-3.mb-0(data-aos="fade-up") En resumen, el Decreto 1290 del 2009, subraya la importancia que los docentes asuman sus responsabilidades en el proceso evaluativo no solo como una obligación administrativa, sino como una oportunidad para fomentar un aprendizaje significativo, inclusivo y reflexivo. Las responsabilidades de los docentes en la evaluación, como la planificación, la retroalimentación, la justicia y la documentación, son fundamentales para garantizar que la evaluación sea un proceso positivo para los estudiantes y contribuyan a su desarrollo integral. Reflexionar sobre estas responsabilidades permite comprender cómo una evaluación bien gestionada puede transformar el aula en un espacio de crecimiento y aprendizaje continuo.


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
