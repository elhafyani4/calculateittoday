import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import CurrencyExchangeAPIClient from './currency_client.js'; // Import the module
import {mapFinancialRoutes, mapUtilitiesRoutes, mapFitnessRoutes} from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

const client = new CurrencyExchangeAPIClient("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1");

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, '../public')));

// Serve static files from the "assets" directory
app.use('/assets', express.static(join(__dirname, '../assets')));

// Define routes for each HTML page
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'));
});


app.get('/body-fat', (req, res) => {
    res.sendFile(join(__dirname, '../public/body_fat.html'));
});

app.get('/finance', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance.html'));
});

app.get('/loan-amortization', (req, res) => {
    res.sendFile(join(__dirname, '../public/loan_amortization.html'));
});


mapFinancialRoutes(app);
mapUtilitiesRoutes(app);
mapFitnessRoutes(app);




app.get('/math/random-number-generator', (req, res) => {
    res.sendFile(join(__dirname, '../public/math/random_number_generator.html'));
});

app.get('/math/scientific-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/math/scientific_calculator.html'));
});






// generate a get request that will return the exchange rate for a specific currency
app.get('/api/get-currency-exchange', async (req, res) => {
    const { currency } = req.query;
    const rate = await client.getCurrencyData(currency);
    res.json({ rate });
});

app.get('/api/get-currencies', async (req, res) => {
    const rate = await client.getCurrencies();
    res.json({ rate });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

