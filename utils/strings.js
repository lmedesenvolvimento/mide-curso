export const INTRO_DIALOGS = [
  {
    avatar: require('assets/images/avatar-dialogo-carla.png'),
    text:
      'Olá! Meu nome é <strong>Carla</strong>. Sou professora de Matemática.'
  },
  {
    right: true,
    avatar: require('assets/images/avatar-dialogo-marcos.png'),
    text:
      'Oi! Meu nome é <strong>Marcos</strong>. Sou professor de Língua Português.'
  },
  {
    avatar: require('assets/images/avatar-dialogo-carla.png'),
    text:
      'É com satisfação que recebemos você no curso "Uso de Recursos Educacionais Digitais".'
  },
  {
    right: true,
    avatar: require('assets/images/avatar-dialogo-marcos.png'),
    text:
      'Neste curso, vamos entender como a <strong>cultura digital</strong> pode mudar algumas práticas de sala de aula. Vamos <strong>conhecer</strong> alguns  Recursos Educacionais Digitais ou, simplesmente, <strong>RED</strong>.'
  },
  {
    avatar: require('assets/images/avatar-dialogo-carla.png'),
    text:
      'Sim! Vamos ver como esses recursos podem ser instrumentos de ensino e de aprendizagem na Língua Portuguesa e na Matemática nos anos iniciais do Ensino Fundamental.'
  },

  {
    right: true,
    avatar: require('assets/images/avatar-dialogo-marcos.png'),
    text:
      'Ao final do curso, vamos conhecer alguns <strong>planejamentos</strong> e também <strong>planejar</strong> aulas com suporte de Recursos Educacionais Digitais.'
  },
  {
    avatar: require('assets/images/avatar-dialogo-carla.png'),
    text: 'Os objetivos do curso são esses:'
  },
  {
    type: 'text',
    text: `
        <ol>
          <li>Desenvolver conhecimento sobre o ensino e a aprendizagem na cultura digital.</li>
          <li>Conhecer Recursos Educacionais Digitais (RED) como instrumentos de ensino e de aprendizagem.</li>
          <li>Planejar aulas com suporte dos RED.</li>
        </ol>
      `
  },
  {
    right: true,
    avatar: require('assets/images/avatar-dialogo-marcos.png'),
    text:
      'Vamos entender um pouco a estrutura do curso. Você deseja ver a <strong>ementa</strong> agora?'
  },
  {
    type: 'bool',
    yes: [
      {
        right: true,
        avatar: require('assets/images/avatar-dialogo-marcos.png'),
        text: 'Tudo bem! Esta é a ementa do curso:'
      },
      {
        type: 'text',
        text:
          'A cultura digital e o mundo contemporâneo. Recursos Educacionais Digitais como instrumentos de ensino e de aprendizagem. Possibilidades do uso de RED de Língua Portuguesa e de Matemática nos anos iniciais do Ensino Fundamental.  Planejamento de aulas com suporte de Recursos Educacionais Digitais'
      },
      {
        avatar: require('assets/images/avatar-dialogo-carla.png'),
        text:
          'Agora, veja a estrutura abaixo para entender a estrutura do curso:'
      },
      {
        type: 'text',
        text: `<img src="${require('assets/images/estrutura-do-curso-com-texto.png')}"/>`
      },
      {
        type: 'end'
      }
    ],
    no: [
      {
        right: true,
        avatar: require('assets/images/avatar-dialogo-marcos.png'),
        text:
          'Tudo bem! Lembre-se que você pode acessar a ementa sempre que desejar durante o curso.'
      },
      {
        avatar: require('assets/images/avatar-dialogo-carla.png'),
        text: 'Agora, veja a imagem abaixo para entender a estrutura do curso:'
      },
      {
        type: 'text',
        text: `
            <img src="${require('assets/images/estrutura-do-curso-com-texto.png')}" />
          `
      },
      {
        type: 'end'
      }
    ]
  }
]

export default {
  INTRO_DIALOGS
}
