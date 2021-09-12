const pricePackages = [["10k pageviews", 8],["50k pageviews", 12],["100k pageviews", 16],["500k", 24], ["1M pageviews", 36]];
let discountBtn = document.querySelector('#discountBtn'),
    slider = document.querySelector("#slider"),
    isDiscounted = discountBtn.checked;

function updatePrice(){
    const rangeValue = slider.value,
          priceViews = document.querySelector(".pricing__views"),
          priceDollars = document.querySelector(".pricing__cost--dollars");

    if(rangeValue >= 0 && rangeValue < 20){
        priceDollars.innerText = `$ ${isDiscounted ? `${(pricePackages[0][1]/1.15).toFixed(2)}` : `${pricePackages[0][1]}.00`}`
        priceViews.innerText = pricePackages[0][0];
    } else if(rangeValue > 20 && rangeValue <= 40){
        priceDollars.innerText = `$ ${isDiscounted ? `${(pricePackages[1][1]/1.15).toFixed(2)}` : `${pricePackages[1][1]}.00`}`
        priceViews.innerText = pricePackages[1][0];
    } else if(rangeValue > 40 && rangeValue <= 60){
        priceDollars.innerText = `$ ${isDiscounted ? `${(pricePackages[2][1]/1.15).toFixed(2)}` : `${pricePackages[2][1]}.00`}`
        priceViews.innerText = pricePackages[2][0];
    } else if(rangeValue > 60 && rangeValue <= 80){
        priceDollars.innerText = `$ ${isDiscounted ? `${(pricePackages[3][1]/1.15).toFixed(2)}` : `${pricePackages[3][1]}.00`}`
        priceViews.innerText = pricePackages[3][0];
    } else {
        priceDollars.innerText = `$ ${isDiscounted ? `${(pricePackages[4][1]/1.15).toFixed(2)}` : `${pricePackages[4][1]}.00`}`
        priceViews.innerText = pricePackages[4][0];
    }
}

window.onload = () => {
    slider.addEventListener('change', () => {
        updatePrice();
    });
    discountBtn.addEventListener('change', () => {
        isDiscounted = discountBtn.checked;
        updatePrice();
    });
}

