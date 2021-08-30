const express = require('express');
const morgan = require('morgan');
const app = express();
// const indexRoutes = require('./routes/index');
const cors = require('cors');

app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//app.use('/', indexRoutes);
 app.use(require('./services/user-register'));
 app.use(require('./services/user-login'));
 app.use(require('./services/forge-login'));
 app.use(require('./services/forge-callback-oauth'));
 app.use(require('./services/add-business'));
 app.use(require('./services/add-user'));
 app.use(require('./services/add-autodesk'));
 app.use(require('./services/hubs'));

app.get('/', (req, res) => {
  res.redirect('https://consulting.construction/');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});