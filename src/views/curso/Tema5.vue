<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Ley 1620 del 2013: Ley de Convivencia Escolar y Decreto 1421 del 2017'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4
      .col-12.col-xl-8
        span(data-aos="fade-up") A lo largo de este tema, se explorará la <b>Ley 1620 del 2013</b>, Ley de Convivencia Escolar, un marco legal fundamental para el fortalecimiento de los ambientes educativos en Colombia. Esta Ley tiene como objetivo garantizar el derecho de los estudiantes a recibir una educación en un entorno libre de violencia, promoviendo una convivencia armónica y respetuosa entre todos los miembros de la comunidad educativa. Al analizar sus principios y disposiciones, se podrá comprender cómo esta normativa contribuye a la construcción de espacios de aprendizaje seguros, inclusivos y equitativos.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Estrategias para la prevención del acoso escolar y violencia
          p.mb-5 La creación de entornos escolares seguros y libres de violencia es un desafío prioritario dentro del sistema educativo colombiano. La Ley 1620 de 2013, conocida como la Ley de Convivencia Escolar, establece lineamientos claros para prevenir el acoso escolar y otras formas de violencia en las instituciones educativas, promoviendo una cultura de respeto, inclusión y diálogo. En el PDF Estrategias para la prevención del acoso escolar y violencia, se analizan las principales disposiciones de esta Ley y las estrategias prácticas que las instituciones pueden implementar para prevenir y gestionar situaciones de conflicto. Este documento invita a reflexionar sobre el rol de la comunidad educativa en la promoción de una convivencia pacífica y en la construcción de espacios escolares donde los estudiantes puedan desarrollarse integralmente en un ambiente seguro, respetuoso y libre de discriminación.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Estrategias para la prevención del acoso escolar y violencia.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Estrategias para la prevención del acoso escolar y violencia. 

    h2 Decreto 1421 de 2017
    .row.mb-4
      .col-12.col-xl-8
        span(data-aos="fade-up") Para iniciar el tema del Decreto 1421 del 2017, un hito en la legislación colombiana que busca garantizar una educación inclusiva y de calidad para las personas con discapacidad. Este Decreto establece los lineamientos necesarios para adaptar el sistema educativo a las diversas necesidades de los estudiantes, promoviendo su participación plena en el proceso educativo. A lo largo de este tema, se reflexionará sobre las acciones necesarias para crear un entorno educativo inclusivo, los roles claves de los docentes y la importancia de los planes individualizados de atención. Acompáñenos en este análisis de la normativa que fortalece la equidad y la inclusión en las aulas.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')


    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Decreto 1421 de 2017
          p.mb-5 La educación inclusiva busca garantizar que todos los estudiantes, independientemente de sus capacidades, puedan acceder a una formación de calidad en condiciones de equidad y respeto por la diversidad. El Decreto 1421 de 2017, en Colombia, establece un marco normativo para la atención educativa de la población con discapacidad, orientado a eliminar barreras físicas, pedagógicas y sociales en las instituciones educativas. En el PDF Decreto 1421 de 2017, se analizan los principios de inclusión y accesibilidad establecidos en esta normativa, así como las estrategias necesarias para adaptar los procesos educativos y garantizar la participación activa de los estudiantes en el aula. Este documento invita a reflexionar sobre el compromiso que deben asumir los docentes, directivos y la comunidad educativa en general para construir entornos educativos más inclusivos y accesibles, donde la diversidad sea reconocida como una oportunidad de aprendizaje y crecimiento colectivo.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Decreto 1421 de 2017.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Decreto 1421 de 2017. 


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normativas vigentes en educación',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué regula la Ley 115 de 1994?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La constitución política de Colombia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El derecho a la educación en Colombia',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El sistema de salud pública',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Las políticas laborales', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué aspecto fundamental establece el Decreto 2247 de 1994?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los principios educativos del sistema educativo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El proceso de inclusión educativa',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La organización de las instituciones de educación superior',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las normas sobre convivencia escolar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el objetivo principal de la Ley 1098 de 2006?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La creación de nuevas universidades',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La reglamentación de la educación básica',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La protección de los derechos de la infancia y adolescencia',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El establecimiento de programas de becas educativas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué tema regula el Decreto 1290 de 2009?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La calidad de la educación en el ámbito rural',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los criterios y procedimientos de evaluación',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La normativa para la educación en zonas indígenas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los programas de becas para estudiantes de bajos recursos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué aspecto promueve la Ley 1620 de 2013?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La inclusión de tecnología en las aulas',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La convivencia escolar', esCorrecta: true },
            {
              id: 'c',
              texto: 'La educación religiosa en las instituciones',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La formación docente en áreas rurales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
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
