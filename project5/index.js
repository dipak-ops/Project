const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const income = document.getElementById('Amount');
    const result = document.getElementById('result');

    const amount = parseInt(income.value);

    let taxValue = 0;

    if (amount <= 1200000) {
        taxValue = 0;
    }
    else if (amount <= 1600000) {
        // 15% on amount exceeding 12L
        taxValue = (amount - 1200000) * 0.15;
    }
    else if (amount <= 2000000) {
        // 60,000 (from previous slab) + 20% on amount exceeding 16L
        taxValue = 60000 + (amount - 1600000) * 0.20;
    }
    else if (amount <= 2400000) {
        // 140,000 (60k + 80k) + 25% on amount exceeding 20L
        taxValue = 140000 + (amount - 2000000) * 0.25;
    }
    else {
        // For anything above 24L (up to 1Cr and beyond)
        // 240,000 (cumulative) + 30% on amount exceeding 24L
        taxValue = 240000 + (amount - 2400000) * 0.30;
    }

    // Optional: Add Surcharge if amount > 50L (common in high-income brackets)
    if (amount > 5000000 && amount <= 10000000) {
        taxValue += taxValue * 0.10; // 10% surcharge
    }
    result.textContent = `Your Tax Is ${taxValue}`;
    form.reset();
})