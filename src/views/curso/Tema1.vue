<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Constitución Política de Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span
        span
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')  

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Principios fundamentales

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4  
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-11.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") 

    p.mb-4 
    h2 
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span
        span
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4  
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") 
        span.text-bold

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="")
            p 
          .div(titulo="")
            p 
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')


    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") 
        span 

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold 
              p 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold 
              p 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold 
              p 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold 
              p 
    p.mb-4(data-aos="fade-up")
    
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-19.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up")
        span

      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')  

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto 
          p.mb-5 
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')



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
