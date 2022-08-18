const sideBar = document.querySelector("aside"),
    openBtn = document.querySelector("#menu-btn"),
    closeBar = document.querySelector("#close-btn"),
    colorChanger = document.querySelector(".theme-toggler");


openBtn.addEventListener('click', () => {
    sideBar.style.display = "block";
})

closeBar.addEventListener('click', () => {
    sideBar.style.display = "none";
})

colorChanger.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme-toggler");

    colorChanger.querySelector("span:nth-child(1)").classList.toggle("active");
    colorChanger.querySelector("span:nth-child(2)").classList.toggle("active");
})

// INPUT ORDERS TO TABLE FROM JAVASCRIPT 
order.forEach(ordes => {
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${ordes.productName}</td>
                    <td>${ordes.productNumber}</td>
                    <td>${ordes.paymentStatus}</td>
                    <td class="${ordes.shippingStatus === `Declined` ? 'danger' : ordes.shippingStatus === 'Pending' ? 'warning' : 'success'}">${ordes.shippingStatus}</td>
                    <td class="primary">Details</td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
})





































