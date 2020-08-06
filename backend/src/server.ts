import express from 'express'
import cors from 'cors'
import routes from './routes';

const app = express();      

app.use(cors());     
app.use(express.json());     
app.use(routes);

//rota
app.listen(3333, function(){ 
    console.log('Server running on the port 3333.'); 
 
    //essa mensagem no console, é para ver se está rodando 
});
