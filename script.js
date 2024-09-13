function init() {
    includeHTML();
}

function toggleBurgerMenu(burgerBtnHTML) {
    toggleBurgerBtn(burgerBtnHTML);
    openBurgerMenu();
    toggleBurgerMenuBg();
}

function toggleBurgerBtn(burgerBtnHTML) {
    burgerBtnHTML.classList.toggle("change");
}

function openBurgerMenu() {
    document.getElementById("burger-menu").classList.toggle("burger-menu_active");
}

function toggleBurgerMenuBg() {
    document.getElementById("burger-menu_bg").classList.toggle("burger-menu-bg_active");
}

function adjustPortions() {
    const portionInput = parseFloat(document.getElementById('portionInput').value);
    if (isNaN(portionInput) || portionInput <= 0 || portionInput > 20) {
        alert('Bitte verwende eine Zahl von 1 - 20!');
        return;
    }

    const basePortions = 4; // Ausgangsportionen im Originalrezept
    const portionFactor = portionInput / basePortions;

    const items = document.querySelectorAll('td[data-amount]');

    items.forEach(item => {
        const baseAmount = parseFloat(item.getAttribute('data-amount'));
        if (isNaN(baseAmount)) return;

        const newAmount = baseAmount * portionFactor;
        const unitMatch = item.textContent.match(/([a-zA-ZäöüÄÖÜß]+)$/);
        const unit = unitMatch ? unitMatch[0] : '';
        item.textContent = `${Math.round(newAmount * 100) / 100} ${unit}`;
    });
}