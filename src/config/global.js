export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Normativas vigentes en educación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ley 115 de 1994: Ley General de Educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura del sistema educativo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Derechos y responsabilidades de los actores educativos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principios y fines de la educación en Colombia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Decreto 2247 de 1997',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Organización del nivel preescolar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proyecto educativo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Continuidad educativa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ley 1098 del 2006: Código de la Infancia y la Adolescencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Derechos de los niños y adolescentes en educación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Protección integral en las instituciones educativas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Responsabilidades de los establecimientos educativos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Decreto 1290 del 2009: Sistema de Evaluación del Estudiante ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fundamentos y principios del sistema de evaluación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Modalidades de evaluación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Responsabilidades de los docentes en la evaluación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Ley 1620 del 2013: Ley de Convivencia Escolar y Decreto 1421 del 2017',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blanco White, J. M. & Viñao, A. (Il.). (2014). Sobre educación. Biblioteca Nueva.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/105925',
    },
    {
      referencia:
        'Luque de la Rosa, A. (Coord.), Hervás-Gómez, C. (Coord.) & López Catalán, L. (Coord.). (2022). Aprendizaje y formación experiencial (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/227633',
    },
    {
      referencia:
        'Congreso de la República. (1994). Ley 115 de 1994: Ley General de Educación. Diario Oficial No. 41.214.',
      link: 'https://www.mineducacion.gov.co/',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1997). Decreto 2247 de 1997.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1425277',
    },
    {
      referencia:
        'Osorio, M., & Herrera, M. (2013). Educación preescolar en Colombia: Estructura del currículo y modelo pedagógico didáctico. Universidad del Norte.',
      link:
        'https://books.google.com.mx/books?id=OrFCDwAAQBAJ&lpg=PP1&ots=Tdvl_6Zpbn&dq=Fundamentos%20de%20la%20educaci%C3%B3n%20preescolar%20en%20colombia&lr&hl=es&pg=PP1#v=onepage&q=Fundamentos%20de%20la%20educaci%C3%B3n%20preescolar%20en%20colombia&f=false',
    },
    {
      referencia:
        'Carrasco, M. E. D. (2011). Aprendo con el juego en mi aula de educación infantil. Pedagogía magna, (11), 373-381.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3629257',
    },
    {
      referencia:
        'Rojas, M. A. M., & Ruíz, M. T. S. (2017). Fortalecimiento de la creatividad en la educación preescolar orientado por estrategias pedagógicas basadas en el arte y la literatura infantil. Zona próxima: revista del Instituto de Estudios Superiores en Educación, (26), 61-81.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6416725',
    },
    {
      referencia:
        'Gil Álvarez, J. L. & Morales Cruz, M. (2018). Evaluación y calidad de la educación. Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/120857',
    },
    {
      referencia:
        'Simari, G. (2010). Derechos de niños, niñas y jóvenes. MV Ediciones S.R.L.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/78867',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1098 de 2006: Código de la Infancia y la Adolescencia.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1098_2006.htm',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2009). Decreto 1290 de 2009. Por el cual se reglamenta la evaluación del aprendizaje y promoción de los estudiantes de los niveles de educación básica y media.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'Germán, G. (2021). La convivencia democrática en la escuela (1 ed.). Editorial Brujas.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/219959',
    },
    {
      referencia:
        'Navarrete Cazales, Z. (Coord.). (2022). Inclusión en educación (1 ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/225041',
    },
    {
      referencia:
        "Ley 1620 de 2013, 'Por la cual se establece el régimen de convivencia escolar y se dictan otras disposiciones', Congreso de la República de Colombia.",
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2017). Decreto 1421 de 2017. Fortalecimiento de la formación docente.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87040',
    },
  ],
  glosario: [
    {
      termino: 'Decreto 1290 de 2009',
      significado:
        'Normativa que establece los lineamientos sobre la evaluación de los aprendizajes de los estudiantes en el sistema educativo colombiano, incluyendo las disposiciones para la promoción y repitencia.',
    },
    {
      termino: 'Decreto 1421 de 2017',
      significado:
        'Establece la organización y funcionamiento de los establecimientos educativos en Colombia, especificando sus responsabilidades y el marco para la inclusión de estudiantes con discapacidad.',
    },
    {
      termino: 'Ley 1098 de 2006',
      significado:
        'Ley que establece el código de infancia y adolescencia, regulando los derechos y garantías de los menores en el contexto educativo y otros ámbitos de la vida social.',
    },
    {
      termino: 'Ley 115 de 1994',
      significado:
        'Ley general de educación en Colombia, que establece los principios y normas básicas para la educación en el país, regulando el sistema educativo y el acceso a la educación de calidad.',
    },
    {
      termino: 'Ley 1620 de 2013',
      significado:
        'Ley que establece las políticas para la convivencia escolar en Colombia, promoviendo el respeto por los derechos humanos, la paz y la resolución pacífica de los conflictos en las instituciones educativas.',
    },
    {
      termino: 'Planeación Educativa',
      significado:
        'Proceso mediante el cual se organizan y estructuran los objetivos, contenidos, métodos y recursos para llevar a cabo los procesos de enseñanza-aprendizaje en el ámbito educativo.',
    },
    {
      termino: 'Planeación Institucional',
      significado:
        'Proceso organizativo de las instituciones educativas para establecer objetivos, metas y acciones, garantizando la calidad en la prestación del servicio educativo.',
    },
    {
      termino: 'Responsabilidad Institucional',
      significado:
        'Compromiso de las instituciones educativas para ofrecer educación de calidad, cumplir con las normativas establecidas y garantizar el bienestar y desarrollo integral de los estudiantes.',
    },
    {
      termino: 'Sector Educativo Privado',
      significado:
        'Conjunto de instituciones educativas que no dependen del estado, sino que son gestionadas y financiadas por entidades o particulares, pero deben cumplir con las normativas nacionales.',
    },
    {
      termino: 'Sector Educativo Público',
      significado:
        'Conjunto de instituciones educativas que son gestionadas, financiadas y reguladas por el estado, y cuya finalidad es garantizar el acceso y la calidad educativa a todos los ciudadanos.',
    },
    {
      termino: 'Vinculación Docente',
      significado:
        'Proceso mediante el cual se asignan los docentes a las instituciones educativas, ya sea en el sector público o privado, de acuerdo con las normativas y necesidades de cada institución.',
    },
    {
      termino: 'Normativa Educativa',
      significado:
        'Conjunto de leyes, decretos y reglamentos que rigen el funcionamiento y la organización del sistema educativo de un país, estableciendo los derechos, deberes y responsabilidades de los actores educativos.',
    },
    {
      termino: 'Normas de Evaluación',
      significado:
        'Conjunto de directrices y procedimientos establecidos por las autoridades educativas para valorar el aprendizaje de los estudiantes, garantizar su desarrollo académico y la calidad de la enseñanza.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
