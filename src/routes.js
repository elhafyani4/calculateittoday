import { join , dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export const mapFinancialRoutes = function(app) {
    const routes = {
        '/finance/amortization': '../public/finance/amortization.html',
        '/finance/auto-loan-calculator': '../public/finance/auto_loan.html',
        '/finance/inflation-calculator': '../public/finance/inflation_calculator.html',
        '/finance/tax-income-calculator': '../public/finance/tax_income.html',
        '/finance/mortgage-calculator': '../public/finance/mortgage_calculator.html',
        '/finance/compound-interest-calculator': '../public/finance/coumpound_interest.html',
        '/finance/retirement-calculator': '../public/finance/retirement_calculator.html',
        '/finance/currency-converter': '../public/finance/currency_converter.html',
        '/finance/commission-calculator': '../public/finance/commission_calculator.html',
        '/finance/appreciation-calculator': '../public/finance/appreciation_calculator.html',
        '/finance/rental-property-calculator': '../public/finance/rental_property_calculator.html',
        '/finance/sales-tax-calculator': '../public/finance/sales_tax_calculator.html',

    };

    mapRoutes(routes, app);
}


export const mapUtilitiesRoutes = function(app)
{
    const routes = {
        '/utilities/password-generator': '../public/utils/password-generator.html',
        '/utilities/time-converter': '../public/utils/time_converter.html',
        '/utilities/age-calculator': '../public/utils/age_calculator.html',
        '/utilities/arabic-keyboard': '../public/utils/arabic_keyboard.html'
    };

    mapRoutes(routes, app);
}

export const mapFitnessRoutes = function(app)
{
    const routes = {
        '/fitness/bmi-calculator': '../public/fitness/bmi.html',
        '/fitness/bmr-calculator': '../public/fitness/bmr.html',
        '/fitness/body-fat-calculator': '../public/fitness/body_fat_calculator.html',
        '/fitness/body-fat1-calculator': '../public/fitness/body_fat.html',
        '/fitness/body-fat': '../public/fitness/body_fat.html',
        '/fitness/calorie-calculator': '../public/fitness/calorie_calculator.html',
        '/fitness/pregnancy-due-date-calculator': '../public/fitness/pregnancy_due_date.html'

    };

    mapRoutes(routes, app);
}

const mapRoutes = function(routes, app)
{
    Object.keys(routes).forEach(route => {
        app.get(route, (req, res) => {
            res.sendFile(join(__dirname, routes[route]));
        });
    });
}

