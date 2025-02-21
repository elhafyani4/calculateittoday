// src/app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Define routes for each HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/bmi', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bmi.html'));
});

app.get('/bmr', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bmr.html'));
});

app.get('/body-fat', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/body_fat.html'));
});

app.get('/finance', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/finance.html'));
});

app.get('/loan-amortization', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/loan_amortization.html'));
});

app.get('/fitness', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/fitness.html'));
});

app.get('/fitness/calorie-calculator', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/fitness/calorie_calculator.html'));
});

app.get('/finance/amortization', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/finance/amortization.html'));
});

app.get('/finance/auto-loan-calculator', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/finance/auto_loan.html'));
});

app.get('/finance/compound-interest-calculator', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/finance/coumpound_interest.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});