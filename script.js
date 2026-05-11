document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const bundle = btn.getAttribute('data-bundle');
        const price = btn.getAttribute('data-price');
        alert(`Demo: Payment for ${bundle} (KES ${price})\n\nIn production, this would open M-Pesa STK push.\nTill: 9504645 | Paybill: 4120273`);
    });
});
