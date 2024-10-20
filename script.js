function predictPrice() {
    var area = parseInt(document.getElementById("area").value);
    var bedrooms = parseInt(document.getElementById("bedrooms").value);
    var bathrooms = parseInt(document.getElementById("bathrooms").value);

    // Fixed prices per sqft for the cities
    var pricesPerSqFt = {
        mumbai: 945,
        pune: 12000,
        bangalore: 9000
    };

    if (isNaN(area) || area <= 0 || isNaN(bedrooms) || bedrooms < 0 || isNaN(bathrooms) || bathrooms < 0) {
        alert("Please enter valid positive numbers for area, bedrooms, and bathrooms.");
        return;
    }

    // Base price calculation
    var basePriceMumbai = (area * pricesPerSqFt.mumbai);
    var basePricePune = (area * pricesPerSqFt.pune);
    var basePriceBangalore = (area * pricesPerSqFt.bangalore);

    // Additional price based on number of bedrooms and bathrooms
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
