// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяць',

  address: ' Kyiv, 4b Yaroslaviv Val st.',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/dmytro-tes',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ====================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for nev technologies, jhioi ljhguy ftrdutf lkkhuguy jhbugujhyugyg jlhgugjhghhjhjhjhkjh hjjhhhhuhj
        hjhjjhlkjhl hlkjhyhljhlkjh hhhht to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Olkjj kjnkljl; k;jn;k;knkj hgfffhvjhgv jhjhghgjhbjb jhbjh lkkfrjvkj hhhhhhhhhhhhhkuhj kjnkjhkjhflidjfr hiuh
        kjkkhiuhj khujlkjhljhhjghjljh jhjhbhohlh.`,
      },
    },

    footer,
  })
})

// ====================================================================

// ====================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      hobbies: [
        {
          name: 'Traveling',
          isMain: false,
        },
        {
          name: 'Fishing',
          isMain: false,
        },
        {
          name: 'Music',
          isMain: true,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
        },
        {
          name: 'VS Code',
          point: 10,
        },
        {
          name: 'Git',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})
// ====================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Massachusetts Institute of Technology',
          isEnd: true,
        },
        {
          name: 'University of Cambridge',
          isEnd: false,
        },
        {
          name: 'Stanford University',
          isEnd: true,
        },
        {
          name: 'University of Oxford',
          isEnd: false,
        },
        {
          name: 'Harvard University',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'Salesforce',
          id: 111,
        },
        {
          name: 'AWS',
          id: 222,
        },
        {
          name: 'Azure',
          id: 333,
        },
      ],
    },

    footer,
  })
})
// ====================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstak Developer',
          company: {
            name: 'It Brains',
            url: 'http://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbonb competitor. High-load application for searching apartaments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router