import fetch from 'node-fetch'; // Use 'node-fetch' for making HTTP requests in Node.js

class CurrencyExchangeAPIClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    };

    getCurrencyData = async function (currencyCode) {
        const url = `${this.baseUrl}/currencies/${currencyCode.toLowerCase()}.json`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
            return null;
        }
    };

    getCurrencies = async function () {
        const url = `${this.baseUrl}/currencies.json`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
            return null;
        }
    }
}

export default CurrencyExchangeAPIClient;