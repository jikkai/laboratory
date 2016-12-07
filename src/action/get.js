const about = [{}]

const works = new Promise((resolve, reject) => {
  resolve({
    data: [
      {
        html_url: 'https://gsr.asaki.me',
        name: 'GSR',
        description: 'GITADORA SKILL RECORDER'
      },
      {
        html_url: 'https://github.com/jikkai/vue-ele-starter',
        name: 'vue-ele-starter',
        description: 'Quick start with Vue2 and ElementUI/MintUI'
      },
      {
        html_url: 'hexo-theme-sonne',
        name: 'hexo-theme-sonne',
        description: 'Flexible and lightweight hexo theme.'
      }
    ]
  })
})

export { about, works }
