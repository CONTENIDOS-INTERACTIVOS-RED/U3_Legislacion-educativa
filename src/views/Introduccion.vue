<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
    
        .row.mb-4
          .col-12.col-xl-7.d-flex.flex-column
            .d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-right")
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.pe-xl-3.mb-0(data-aos="fade-up")
            span.text-bold(data-aos="fade-up")
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4.text-center 
              p.px-1.text-small.mb-0.d-flex.text-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center 
              p.px-1.text-small.mb-0.d-flex.text-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center 
              p.px-1.text-small.mb-0.d-flex.text-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.text-bold.mb-4.text-center 
              p.px-1.text-small.mb-0.d-flex.text-center 
    h2
    p.mb-4

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="")
            p 
          .div(titulo="")
            p 
          .div(titulo="")
            p 
          .div(titulo="")
            p 
    p.mb-4
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span
        span
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0




    
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
