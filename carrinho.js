document.addEventListener('DOMContentLoaded', function() {
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const orderSummary = document.getElementById('orderSummary');
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('d-flex', 'justify-content-between', 'mb-2');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>R$ ${item.price.toFixed(2)}</span>
        `;
        orderSummary.appendChild(itemElement);
        total += item.price;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('d-flex', 'justify-content-between', 'fw-bold', 'mt-3');
    totalElement.innerHTML = `
        <span>Total:</span>
        <span>R$ ${total.toFixed(2)}</span>
    `;
    orderSummary.appendChild(totalElement);

    
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
      
       

        alert('Pagamento confirmado! Obrigado pela sua compra.');
        
       
        localStorage.removeItem('cart');
        
        
        window.location.href = 'index.html';
    });
});