const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

const route = require('./routes')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.use("/reviews/api/", route);
app.use("/reviews/api/meta", route);
app.use('/reviews',(req,res) => {
  res.send('hello')
})
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
