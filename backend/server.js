import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
dotenv.config();

import productRoutes from  './routes/productRoutes.js';

const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.get('/', (req, res) => { 
    res.send('API is runing....');
})


app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);






app.listen(port, () => console.log(`server running on port ${port}`));