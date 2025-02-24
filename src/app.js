import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import CurrencyExchangeAPIClient from './currency_client.js'; // Import the module

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

app.get('/bmi', (req, res) => {
    res.sendFile(join(__dirname, '../public/bmi.html'));
});

app.get('/bmr', (req, res) => {
    res.sendFile(join(__dirname, '../public/bmr.html'));
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

app.get('/fitness', (req, res) => {
    res.sendFile(join(__dirname, '../public/fitness.html'));
});

app.get('/fitness/calorie-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/fitness/calorie_calculator.html'));
});

app.get('/finance/amortization', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/amortization.html'));
});

app.get('/finance/auto-loan-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/auto_loan.html'));
});

app.get('/finance/inflation-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/inflation_calculator.html'));
});

app.get('/finance/tax-income-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/tax_income.html'));
});

app.get('/finance/mortgage-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/mortgage_calculator.html'));
});

app.get('/finance/compound-interest-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/coumpound_interest.html'));
});

app.get('/finance/retirement-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/retirement_calculator.html'));
});

app.get('/finance/currency-converter', (req, res) => {
    res.sendFile(join(__dirname, '../public/finance/currency_converter.html'));
});

app.get('/math/random-number-generator', (req, res) => {
    res.sendFile(join(__dirname, '../public/math/random_number_generator.html'));
});

app.get('/math/scientific-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/math/scientific_calculator.html'));
});

app.get('/utilities/password-generator', (req, res) => {
    res.sendFile(join(__dirname, '../public/utils/password-generator.html'));
});

app.get('/utilities/time-converter', (req, res) => {
    res.sendFile(join(__dirname, '../public/utils/time_converter.html'));
});

app.get('/utilities/age-calculator', (req, res) => {
    res.sendFile(join(__dirname, '../public/utils/age_calculator.html'));
});

app.get('/utilities/arabic-keyboard', (req, res) => {
    res.sendFile(join(__dirname, '../public/utils/arabic_keyboard.html'));
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

