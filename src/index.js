import express from 'express'
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import personasRoutes from './routes/personas.routes.js'


// Inicialización
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


// opciones y puerto
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes
app.get('/', (req, res)=>{
    res.render('index')
})

app.use(personasRoutes);

// carpetas publicas
app.use(express.static(join(__dirname, 'public')));

// iniciar servidor (run server)
app.listen(app.get('port'), ()=>
    console.log('Server listening on port', app.get('port')));



    // END