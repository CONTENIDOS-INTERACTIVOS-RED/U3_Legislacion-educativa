<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(subTitulo="SÍNTESIS")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 La Unidad 3: Normativas vigentes en educación, proporciona un marco fundamental para comprender las leyes y decretos que regulan el sistema educativo en Colombia, garantizando una educación inclusiva, de calidad y equitativa. Esta unidad se centra en analizar normativas esenciales como la Ley 115 de 1994, el Decreto 2247 de 1997, la Ley 1098 de 2006, el Decreto 1290 de 2009, la Ley 1620 de 2013 y el Decreto 1421 de 2017, que establecen los principios, derechos y responsabilidades de los actores educativos. Además, se enfatizan aspectos relacionados con la planeación institucional y los procesos de vinculación docente, tanto en el sector público como en el privado, destacando la importancia de la protección integral de los estudiantes y la promoción de ambientes escolares seguros. Este enfoque permite a los estudiantes adquirir conocimientos legales que les permitirán aplicar las normativas educativas en su ejercicio profesional, contribuyendo a la creación de un sistema educativo más justo y alineado con los principios de inclusión y equidad.
    figure
      img(src='@/assets/componentes/sintesis.png', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import Footer from '../../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
