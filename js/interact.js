let totalCost = document.getElementById('total-price');
let total = document.getElementById('total')
// 8GB memory section 
document.getElementById("default-memory-btn").addEventListener('click', function () {
    document.getElementById('extra-memory-price').innerText = '0';
    overallCost()
})
// 16GB memory section
document.getElementById('extra-memory-btn').addEventListener('click', function () {
    document.getElementById('extra-memory-price').innerText = '180';
    overallCost()
})
//                         Storage section 

// 256GB storage section 
document.getElementById('default-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-price').innerText = '0';
    overallCost()
})
// 512GB storage section 
document.getElementById('big-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-price').innerText = '100';
    overallCost()
})
// 1TB storage section 
document.getElementById('biggest-storage').addEventListener('click', function () {
    document.getElementById('extra-storage-price').innerText = '180';
    overallCost()
})
//                      Delivery section
// default delivery 
document.getElementById('normal-delivery').addEventListener('click', function () {
    document.getElementById('total-delivery-price').innerText = '0';
    overallCost()
})
// Prime delivery 
document.getElementById('prime-delivery').addEventListener('click', function () {
    document.getElementById('total-delivery-price').innerText = '20';
    overallCost()
})
//                      Overall cost section
function overallCost() {
    const extraMemory = document.getElementById('extra-memory-price');
    const extraStorage = document.getElementById('extra-storage-price');
    const deliveryCharge = document.getElementById('total-delivery-price');

    totalCost.innerText = 1299 + parseInt(extraMemory.innerText) + parseInt(extraStorage.innerText) + parseInt(deliveryCharge.innerText);
    total.innerText = 1299 + parseInt(extraMemory.innerText) + parseInt(extraStorage.innerText) + parseInt(deliveryCharge.innerText);
}
//                       PromoCode section
const discount = document.getElementById('input-value');

function discountCode(promo) {
    document.getElementById(promo).addEventListener('click', function () {
        if (discount.value == 'stevekaku') {
            let discounAmount = (parseInt(totalCost.innerText) - parseInt(totalCost.innerText) * 0.2).toFixed(2)
            total.innerText = discounAmount;
        }
        else {
            window.alert('⚠️ Promo Code does not exists')
        }
        discount.value = '';
    })
}
discountCode('apply-btn');