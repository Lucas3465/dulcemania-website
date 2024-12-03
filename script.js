let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');


}

window.onscroll = () =>
{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');

}

var swiper = new Swiper(".presentaciones-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });


  var swiper = new Swiper(".comentarios-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.categories input[type="checkbox"]');
    const products = document.querySelectorAll('.product');
    const noProductsMessage = document.querySelector('.no-products');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });

    function filterProducts() {
        const activeCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        let visibleProducts = 0;

        products.forEach(product => {
            const productCategories = product.dataset.categories.split(',');
            if (activeCategories.length === 0 || activeCategories.some(category => productCategories.includes(category))) {
                product.style.display = 'block';
                visibleProducts++;
            } else {
                product.style.display = 'none';
            }
        });

        if (visibleProducts === 0) {
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
        }
    }
});
