//show date
const todayDate = document.getElementById('show-date');
const toDate = new Date()
todayDate.innerText = toDate.toLocaleDateString();
//shoe time
const todayTime = document.getElementById('show-time');
const toTime = new Date()
todayTime.innerText = toTime.toLocaleTimeString();
//target submit button
const detailsButton = document.getElementById('detail-submit-btn');
detailsButton.addEventListener('click',function(){
    // console.log('clicked');
    const bayerDetailes = document.getElementById('buyer-details-input');
    // console.log(bayerDetailes.value);
    //add ivoice input
    const invoiceInput = document.getElementById('buyer-info');
    // console.log(invoiceInput.innerText);
    // invoiceInput.innerText = Number(invoiceInput.innerText)+ Number(bayerDetailes.value);
    invoiceInput.innerText = bayerDetailes.value
    bayerDetailes.value = '';
});
//add sector
const addProductBtn = document.getElementById('add-details-btn');
addProductBtn.addEventListener('click',function(){
    //find table
    const tableInfo = document.getElementById('info-table');
    const iteamName=document.getElementById('item-name-input');
    const iteamPrice=document.getElementById('item-price-input');
    const iteamQuantity=document.getElementById('item-quantity-input');
    // console.log(iteamName.value, iteamPrice.value, iteamQuantity.value);
    //table genarete
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    //ad class
    td3.classList.add('total_iteam')
    //add value
    th.innerText = iteamName.value;
    td1.innerText = iteamPrice.value;
    td2.innerText = iteamQuantity.value;
    td3.innerText = Number(iteamPrice.value)*Number(iteamQuantity.value);
    //appent to tr
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    //appent to button
    tableInfo.appendChild(tr)
    //clear value
    iteamName.value='';
    iteamPrice.value='';
    iteamQuantity.value='';


    totalCalculation()

});
function totalCalculation(){
    const inTotal = calculateSubtotal();
    const updateSubTotal = document.getElementById('sub-total');
    updateSubTotal.innerText = inTotal;
    const tax = (Number(updateSubTotal.innerText) * .2);
    const taxces = document.getElementById('tax');
    taxces.innerText = tax.toFixed(2);
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = tax + Number(updateSubTotal.innerText);
    const grandTotal2 = document.getElementById('grand-total-2');
    grandTotal2.innerText = tax + Number(updateSubTotal.innerText);
}


function calculateSubtotal(){
    let inTotal = 0;
    const totalCost = document.getElementsByClassName('total_iteam');
    for (let i = 0; i < totalCost.length; i++) {
        const element = totalCost[i];
        const price = parseInt(element.innerText)
        inTotal = inTotal + price;
        
    }
return inTotal;
};

