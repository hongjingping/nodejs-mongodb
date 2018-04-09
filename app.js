let express = require('express')
let path = require('path')
let port = process.env.PORT || 3000
let app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('imooc started success on port 3000');

// 路由 index page
app.get('/',(req, res) => {
  res.render('index',{
    title: 'wikiHong 首页',
    movies: [{
      title: '机械警察',
      _id: 1,
      poster: 'https://www.imooc.com/video/1226'
    },{
      title: '机械警察',
      _id: 2,
      poster: 'https://www.imooc.com/video/1226'
    },{
      title: '机械警察',
      _id: 3,
      poster: 'https://www.imooc.com/video/1226'
    },{
      title: '机械警察',
      _id: 4,
      poster: 'https://www.imooc.com/video/1226'
    },{
      title: '机械警察',
      _id: 5,
      poster: 'https://www.imooc.com/video/1226'
    },{
      title: '机械警察',
      _id: 6,
      poster: 'https://www.imooc.com/video/1226'
    },]
  })
})

// 路由 detail page
app.get('/detail',(req, res) => {
  res.render('detail',{
    title: 'wikiHong 详情页',
    movie: {
      doctor: 'wiki',
      country: '中国',
      title: '机械警察',
      year: 2018,
      poster: 'http://localhost:3000/detail',
      language: '英语',
      flash: 'http://localhost:3000/detail',
      summary: 'gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组'
    }
  })
})

// 路由 admin page
app.get('/admin',(req, res) => {
  res.render('admin',{
    title: 'wikiHong 后台录入页',
    doctor: '',
    country: '',
    title: '',
    year: '',
    poster: '',
    language: '',
    flash: '',
    summary: ''
  })
})

// 路由 list page
app.get('/list',(req, res) => {
  res.render('list',{
    title: 'wikiHong 列表页',
    movies: [{
      doctor: 'wiki',
      country: '中国',
      title: '机械警察',
      year: 2018,
      poster: 'http://localhost:3000/detail',
      language: '英语',
      flash: 'http://localhost:3000/detail',
      summary: 'gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组'
    }]
  })
})