const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const postsRouter = require('./routes/posts');
//const singlePostsRouter = require('./routes/singlepost');

const { getPosts, getSinglePost } = require('./database');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));

app.use('/posts', postsRouter);
//app.use('/singlepost', singlePostsRouter);

app.get('/', async (req, res) => {
  res.render("posts", { posts: await getPosts() })
});


app.get('/singlepost/:id', async(req, res) => {
  try {
  const posts = await getSinglePost(req.params.id)
  res.render('singlepost', {post:posts[0]})
  } catch (err) {
  console.error(err.message);
  }
 });
 

app.get('/addnewpost', async (req, res) => {
  res.render("addnewpost")
});

app.get('*', async function(req, res){
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
