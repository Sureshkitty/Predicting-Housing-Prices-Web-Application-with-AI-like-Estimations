function predictPrice() {
    var area = parseInt(document.getElementById("area").value);
    var bedrooms = parseInt(document.getElementById("bedrooms").value);
    var bathrooms = parseInt(document.getElementById("bathrooms").value);


    var pricesPerSqFt = {
        mumbai: 945,
        pune: 12000,
        bangalore: 9000
    };

    if (isNaN(area) || area <= 0 || isNaN(bedrooms) || bedrooms < 0 || isNaN(bathrooms) || bathrooms < 0) {
        alert("Please enter valid positive numbers for area, bedrooms, and bathrooms.");
        return;
    }


    var basePriceMumbai = (area * pricesPerSqFt.mumbai);
    var basePricePune = (area * pricesPerSqFt.pune);
    var basePriceBangalore = (area * pricesPerSqFt.bangalore);


    var additionalPricePerBedroom = 200000;
    var additionalPricePerBathroom = 150000;

    var predictedPrices = {
        mumbai: basePriceMumbai + (bedrooms * additionalPricePerBedroom) + (bathrooms * additionalPricePerBathroom),
        pune: basePricePune + (bedrooms * additionalPricePerBedroom) + (bathrooms * additionalPricePerBathroom),
        bangalore: basePriceBangalore + (bedrooms * additionalPricePerBedroom) + (bathrooms * additionalPricePerBathroom)
    };

    document.getElementById("result").innerHTML = `
        <div style="border: 25px solid #47C752; background-color: rgba(240, 240, 240, 0.8); padding: 20px; border-radius: 10px;">
            <h2 style="color: red; font-weight: bold;">Predicted Prices:</h2>
            <p style="color: red; font-weight: bold;">Mumbai: ₹${predictedPrices.mumbai.toFixed(2)}</p>
            <p style="color: red; font-weight: bold;">Pune: ₹${predictedPrices.pune.toFixed(2)}</p>
            <p style="color: red; font-weight: bold;">Bangalore: ₹${predictedPrices.bangalore.toFixed(2)}</p>
        </div>
    `;
}

function navigateToPreviousPage() {
    window.history.back("index.html");
}

function navigateToNextPage() {
    window.location.href = "https://script.google.com/macros/s/AKfycbzlgugkAFyoZZlzMW5GW6oNcJteoq44W6PX9SJ9mH4bU1bcb0DLgf2cEvRfB59gDp9G/exec";
}

function navigateToPage(page) {
    window.location.href = page;
}