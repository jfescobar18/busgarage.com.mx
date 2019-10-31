function APIUrl() {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        return config.ProductionURL;
    }
    else {
        return config.ProductionURL;
    }
}

function formatMoney(amount, decimalCount = 2, decimal = '.', thousands = ',') {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? '-' : '';

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return '$' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
    } catch (e) {
        console.log(e)
    }
}

function showLoader() {
    var loader = document.getElementById('loader');
    loader.className += ' displayed';
}

function hideLoader() {
    var loader = document.getElementById('loader');
    loader.className = loader.className.replace(/\bdisplayed\b/g, '');
}