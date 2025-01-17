<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4 
      .col-12.col-xl-8
        p.mb-4 En esta unidad se explorarán las normativas más relevantes que rigen el sistema educativo en Colombia, las cuales son fundamentales para comprender el marco legal en el que se desarrollan las políticas y prácticas educativas. Se abordarán leyes y decretos claves, como la Ley 115 de 1994, el Decreto 2247 de 1994, la Ley 1098 del 2006, el Decreto 1290 del 2009, la Ley 1620 del 2013 y el Decreto 1421 del 2017. Estas normativas son esenciales para asegurar la calidad educativa, la igualdad de oportunidades y el bienestar de los estudiantes en todos los niveles.
        .bg-azul.p-4.mb-4
          span El principal objetivo de esta unidad es reconocer y comprender los conceptos de planeación, organización y las diferencias en el proceso de vinculación docente en el sector oficial y privado, así como las responsabilidades de los docentes y establecimientos educativos en Colombia. Este conocimiento será aplicado en el contexto legislativo que regula el servicio educativo en el país, promoviendo una educación más justa y equitativa.
        span A lo largo de la unidad, se analizarán las leyes y decretos mencionados y se reflexionará sobre su impacto en la educación y la práctica docente. Se realizarán actividades prácticas que permitirán aplicar los conocimientos adquiridos en situaciones reales del entorno educativo.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Se espera que participe activamente en las actividades de la unidad, discuta los temas con los compañeros y aplique los conceptos aprendidos a contextos educativos reales. Para aprovechar al máximo esta unidad, es recomendable contar con conocimiento previo sobre el sistema educativo colombiano, dado que este será un aspecto fundamental para abordar de manera efectiva los contenidos tratados.

    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
