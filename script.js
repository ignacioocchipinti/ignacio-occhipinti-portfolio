let hamburgerIcon = document.querySelector(".menu-icon");
    let hamburgerIconClass = document.querySelector(".menu-icon span i");
    let Menu = document.querySelector(".menu-mobile");

    const closeMenu = () => {
        Menu.style.top = "-100%";
        hamburgerIcon.style.fontSize = "30px";
        hamburgerIcon.style.color = "black";
        hamburgerIconClass.classList.remove("fas", "fa-times");
        hamburgerIconClass.classList.add("fas", "fa-bars");
        hamburgerIcon.classList.remove("active"); // Remover clase activa
    };

    const openMenu = () => {
        Menu.style.top = "0px";
        hamburgerIcon.style.fontSize = "32px";
        hamburgerIcon.style.color = "white";
        hamburgerIconClass.classList.remove("fas", "fa-bars");
        hamburgerIconClass.classList.add("fas", "fa-times");
        hamburgerIcon.classList.add("active");
    };

    window.onload = function () {
        hamburgerIcon.addEventListener("click", function () {
            const topValue = getComputedStyle(Menu).getPropertyValue("top");

            if (topValue === "0px" || topValue === "0%") {
                closeMenu();
            } else {
                openMenu();
            }
        });

        const menuLinks = document.querySelectorAll(".menu-mobile li a");
        menuLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                closeMenu();
            });
        });

        // Control de visibilidad del botón de menú
        let lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (window.innerWidth < 992) {
                if (currentScroll > lastScrollTop) {
                    // Desplazamiento hacia abajo
                    hamburgerIcon.style.display = "none";
                } else {
                    // Desplazamiento hacia arriba
                    hamburgerIcon.style.display = "block";
                }
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
        });
    };

    $(document).ready(function () {
        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');
            if (value == "all") {
                $('.filter').show('500').fadeIn(500);
            } else {
                $(".filter").not('.' + value).hide('500').fadeOut(500);
                $('.filter').filter('.' + value).show('500').fadeIn(500);
            }
            if ($(".filter-button").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");
        });
    });