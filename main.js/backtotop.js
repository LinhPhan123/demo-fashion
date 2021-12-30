var mybutton = document.getElementById('backtotop');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let position = document.body.scrollTop || document.documentElement.scrollTop;
    let [button] = document.getElementsByClassName('backtotop');
    if (position > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction() {
    var input, filter, div, long, a, i, txtValue;
    [input] = document.getElementsByClassName('input');
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('product-item');
    let name = document.getElementsByClassName('product-name');
    for (let i = 0; i < name.length; i++) {
        let content = name[i].textContent || name[i].innerText;
        content = content
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/\s/g, '');
        if (content.includes(filter)) {
            div[i].style.display = '';
        } else {
            div[i].style.display = 'none';
        }
    }
}

function showMenu() {
    let menuItem = document.getElementsByClassName('menu-item');
    let menuItemProduct = document.getElementsByClassName('menu-item_product');
    for (let i = 0; i < menuItem.length; i++) {
        if (menuItemProduct[i]) {
            menuItemProduct[i].style.display = menuItemProduct[i].style.display != 'block' ? 'block' : 'none';
        }
        menuItem[i].style.display = menuItem[i].style.display != 'block' ? 'block' : 'none';
    }
}

function closeMenu() {
    let submenuItemProduct = document.getElementsByClassName('submenu-item_product')
    for (let i = 0; i < submenuItemProduct.length; i++) {
        if (submenuItemProduct[i]) {
            submenuItemProduct[i].style.display = submenuItemProduct[i].style.display != 'block' ? 'block' : 'none';
        }
    }
}
