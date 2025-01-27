<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Decreto 2247 de 1997'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-right")
        p.mb-0 El Decreto 2247 de 1997, constituye un marco normativo fundamental para la organización y funcionamiento de la educación preescolar en Colombia. Este Decreto establece las directrices necesarias para garantizar una educación integral y de calidad en los primeros años de vida de los niños y niñas, etapa crucial para su desarrollo cognitivo, emocional y social.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1  
        h2 Organización del nivel preescolar

    p.mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.

    .row.mb-4
      .col-12.col-md-10.col-lg-7.col-xl-6.mx-auto.ms-xl-auto(data-aos="fade-left")
        TarjetaAudio.color-primario.bg-white.mb-3(
              texto="Organización del nivel preescolar."
              tiempo
              :audio="require('../../assets/componentes/audios/Podcast_contenido_unidad_III_Legislación educativa en Colombia.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
      .d-none.d-lg-block.col-5.col-md-4(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    p.mb-4 Reflexionando sobre la organización del nivel preescolar, se puede afirmar que una estructura bien planificada y unos enfoques pedagógicos adecuados no solo facilitan la transición de los niños hacia la educación primaria, sino que también sientan las bases para un desarrollo integral. Es decir, una educación preescolar organizada contribuye significativamente a la formación de individuos capaces, críticos y emocionalmente equilibrados.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2  
        h2 Proyecto educativo

    p.mb-4 El Decreto 2247 de 1997 establece normas relativas a la prestación del servicio educativo del nivel preescolar en Colombia. Este Decreto es fundamental para garantizar una educación de calidad y coherente en el nivel preescolar, proporcionando una guía clara para las instituciones educativas.

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.mb-4.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-30.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") <b>El Decreto establece</b> que los objetivos y metas del proyecto educativo deben estar alineados con el desarrollo integral de los niños. Esto incluye el desarrollo cognitivo, emocional, social y físico. Además, se enfatiza la importancia de fomentar la autonomía de los niños, promoviendo actividades que les permitan tomar decisiones y resolver problemas por sí mismos (MEN, 1997).

        span En cuanto a las metodologías, <b>el Decreto destaca</b> la importancia de utilizar enfoques pedagógicos lúdicos e interactivos. Estas metodologías deben ser flexibles y adaptarse a las necesidades individuales de los niños, permitiendo que cada niño aprenda a su propio ritmo. Según Piaget, el juego es una actividad fundamental en el desarrollo infantil, puesto que permite a los niños comprender el mundo que les rodea y desarrollar habilidades cognitivas y sociales.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-azul-claro.p-4.mb-4(data-aos="fade-up")
          span <b>El Decreto también subraya</b> la necesidad de que el proyecto educativo sea flexible y adaptable a las necesidades individuales de los niños y a los contextos socioculturales específicos de cada comunidad educativa. Esto asegura que la educación sea inclusiva y equitativa, respondiendo a las particularidades de cada grupo de niños.
        .bg-gris.p-4(data-aos="fade-up")
          span Reflexionando sobre el Decreto 2247 de 1997, se puede afirmar que una planificación cuidadosa y una implementación efectiva de los objetivos, metas y metodologías son esenciales para ofrecer una educación de calidad. Un proyecto educativo bien diseñado no solo prepara a los niños para los desafíos académicos futuros, sino que también contribuye significativamente a su desarrollo integral, formando individuos capaces y seguros de sí mismos.
      
    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
	
        #t_2_3.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 2.3  
            h2 Continuidad educativa

        p.mb-4 El Decreto 2247 de 1997 establece normas relativas a la prestación del servicio educativo del nivel preescolar en Colombia. En su Artículo 3, se menciona que los establecimientos educativos, tanto estatales como privados, deben promover el acceso de sus alumnos a la educación básica para garantizar el tránsito y continuidad de los educandos del nivel preescolar (MEN, 1997).

        .row.mb-4
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
              div.mb-4 La continuidad educativa es crucial para asegurar que los niños no solo adquieran conocimientos y habilidades en el nivel preescolar, sino que también puedan aplicarlos y expandirlos en la educación básica. Esta transición fluida es esencial para evitar el abandono escolar y asegurar que los niños continúen su desarrollo académico y personal de manera constante.
                p.text-small.px-4.text-center.pb-2
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
              div.mb-4 Para garantizar la continuidad educativa, el Decreto 2247 de 1997 establece que los establecimientos preescolares deben colaborar con instituciones educativas de nivel básico para facilitar el ingreso de los niños a la siguiente etapa educativa. Esto incluye la creación de acuerdos y la implementación de programas que aseguren una transición sin contratiempos (MEN, 1997).
                p.text-small.px-4.text-center.pb-2

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-35.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Reflexionando sobre la importancia de la continuidad educativa, se puede afirmar que una transición bien planificada y coordinada entre el preescolar y la educación básica es fundamental para el éxito académico y personal de los niños. La continuidad educativa no solo facilita el aprendizaje, sino que también fortalece la confianza y la motivación de los estudiantes, preparándolos para enfrentar los desafíos futuros con mayor seguridad y competencia.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://revistas.unisimon.edu.co/index.php/justicia/article/view/548") Breve estudio de la Nueva Ley de la Infancia y la Adolescencia - Revista Unimision [Artículo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://dialnet.unirioja.es/servlet/articulo?codigo=7179297") La reforma educativa y la calidad de la educación en Colombia [Artículo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=mhu37TxIWU0&t=90s") Derechos desde el principio / Presentación Notas Técnicas de Primera Infancia en Colombia [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=EHSTTBWrQ3M") Política Pública de Infancia y Adolescencia [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
