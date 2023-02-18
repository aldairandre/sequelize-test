import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import testdbControllers from './src/routers/testDB.js';
import userRouters from './src/routers/user.js';

const app = express();

// Config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// Route
app.use('/user',userRouters);
app.use('/test-db',testdbControllers);

app.use((req,res,next) =>{
  const error = new Error('Nothing Here')
  error.status = 404;
  next(error)
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  return res.send({
    error : {
      message: error.message
    }
  })
});

export default app;