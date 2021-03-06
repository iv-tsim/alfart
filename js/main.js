$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

        let firefox = navigator.userAgent.search(/Firefox/) > 0 ? true : false;

        function addZero(number) {

            if (number < 10) {

                return '0' + number;

            } else {

                return number;

            }

        }

        function hide(item1, item2) {

            item1.forEach(function(item, index) {

                item1[index].classList.remove('active');
                item2[index].classList.remove('active');

            });
            
        }

        function show(b, item1, item2) {

            if (!item1[b].classList.contains('active')) {

                hide(item1, item2);
                item1[b].classList.add('active');
                item2[b].classList.add('active');

            }

        }

        const sliders = document.querySelectorAll('.popular-slider');

        sliders.forEach(function(item, index) {

            let name = 'popular-slider_' + index;

            item.classList.add(name);

            item.closest('.swiper-container').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let popularSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 40,
                slidesPerView: 4,
                slidesPerGroup: 4,
                observer: true,
                observeParents: true,
                touchEventsTarget: 'wrapper',
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow__next.slider-arrow_' + index
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                },
                breakpoints: {
                    1300: {
                        spaceBetween: 40,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    1270: {
                        spaceBetween: 25,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    960: {
                        spaceBetween: 25,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    650: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    }
                }
            });

        }); 

        let componentsSlider = new Swiper('.components-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 4,
            slidesPerGroup: 4,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev',
                nextEl: '.slider-arrow.slider-arrow__next'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            breakpoints: {
                1300: {
                    spaceBetween: 40,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1270: {
                    spaceBetween: 25,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                960: {
                    spaceBetween: 25,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                650: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }

        });

        const heroDec = document.querySelector('.hero-dec');
        const heroImg = document.querySelector('.hero-img');
        let heroSliderData;

        if (firefox) {

            heroDec.classList.add('firefox');

        }

        if (document.querySelector('.hero')) {

            heroSliderData = document.querySelector('.hero').dataset.images.split(', ');

        }

        let heroSlider = new Swiper('.hero-slider', {

            speed: 600,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            autoplay: {
                delay: 5000
            },
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.hero-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.hero-arrow'
            },
            pagination: {
                el: '.hero-text .slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            on: {
                afterInit() {

                    if (!firefox) {

                        heroDec.classList.add('active');

                    }

                },
                slideChange() {

                    heroDec.classList.remove('active');

                    if (!firefox) {

                        heroDec.style.backgroundPosition = 'calc(50%) calc(50%)';
                        heroDec.style.backgroundImage =  'url(' + heroSliderData[this.realIndex] + ')';

                    }

                    heroImg.style.backgroundImage =  'url(' + heroSliderData[this.realIndex] + ')';
                    
                    setTimeout(function() {

                        if (!firefox) {

                            heroDec.classList.add('active');

                        }

                    }, 10);

                },
            }
        });

        const worksSliders = document.querySelectorAll('.works-item__slider');

        worksSliders.forEach(function(item, index) {

            let name = 'works-item__slider_' + index;

            item.classList.add(name);

            item.closest('.swiper-container').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let worksSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 40,
                slidesPerView: 1,
                slidesPerGroup: 1,
                touchEventsTarget: 'wrapper',
                observer: true,
                observeParents: true,
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow__next.slider-arrow_' + index
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                }
            });

        }); 

        let workSlider = new Swiper('.work-slider', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerGroup: 2,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            loop: true,
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev',
                nextEl: '.slider-arrow.slider-arrow__next'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: false
                }
            }

        });

        const usageSliders = document.querySelectorAll('.usage-info__slider');

        usageSliders.forEach(function(item, index) {

            let name = 'usage-info__slider_' + index;

            item.classList.add(name);

            item.closest('.swiper-container').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let usageSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 40,
                slidesPerView: 3,
                slidesPerGroup: 3,
                touchEventsTarget: 'wrapper',
                observer: true,
                observeParents: true,
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow__next.slider-arrow_' + index
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                },
                breakpoints: {
                    1300: {
                        spaceBetween: 40,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1100: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    850: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    450: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }
                }
            });

        }); 

        let blogCardSlider = new Swiper('.blogCard-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            touchEventsTarget: 'wrapper',
            observeParents: true,
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev',
                nextEl: '.slider-arrow.slider-arrow__next'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            },
            breakpoints: {
                1200: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                700: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                0: {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            }

        });

        const tabs = document.querySelectorAll('.popular-tab');
        const tabsContent = document.querySelectorAll('.popular-body');
        const cardColors = document.querySelectorAll('.card-colors__item');
        const cardNumber = document.querySelector('.card-quantity__number');
        const cardInfoMainHidden = document.querySelector('.card-info__main-hidden');
        const cardInfoBtn = document.querySelector('.card-info__btn');

        const contactsColumn = document.querySelectorAll('.contacts-column');

        if (contactsColumn) {

            contactsColumn.forEach(function(item) {

                let max = 0;

                let values = Array.from(item.querySelectorAll('.contacts-item__name'));

                let numbers = [];

                values.forEach(function(item, index) {

                    numbers[index] = item.clientWidth;

                });

                numbers.sort(function(a, b) {

                    return b - a;

                });

                values.forEach(function(item) {
                   
                    item.style.minWidth = numbers[0] + 'px';

                });

            });

        }

        const menu = document.querySelector('.menu-wrapper');
        const menuText = document.querySelector('.menu-text');
        const menuTextContent = document.querySelector('.menu-text__text');
        const menuItems = Array.from(document.querySelectorAll('.menu-item'));

        let menuCurrent = 'main',
            currentTarget,
            menuHistory = [];

        OverlayScrollbars(document.querySelectorAll('.menu-item'), {});

        function returnMenuItem(items, compare) {

            return items.find(function(item) {

                return item.dataset.menu == compare;

            });
            
        }

        function destroyMenu() {

            menu.classList.remove('active');

            for (let i = 0; i < menuHistory.length; i++) {

                menuHistory.shift();

            }

            menuCurrent = 'main';
            
            menuItems.forEach(function(item) {

                item.classList.remove('active');

            });

            returnMenuItem(menuItems, menuCurrent).classList.add('active');

            menuText.classList.remove('active');

        }

        document.addEventListener('click', function(event) {

            const { target } = event;

            if (target.matches('.popular-tab')) {

                tabs.forEach(function(item, index) {

                    if (target.closest('.popular-tab') === tabs[index]) {

                        show(index, tabs, tabsContent);
                        return;

                    }

                });

            }

            if (target.closest('.card-colors__item')) {

                cardColors.forEach(function(item) {

                    item.classList.remove('active');

                });

                target.closest('.card-colors__item').classList.add('active');

            }

            if (target.matches('.card-quantity__img')) {

                let cardNumberData = +cardNumber.value;

                if (target.classList.contains('card-quantity__minus')) {

                    if (cardNumberData > 1) {

                        cardNumberData -= 1;

                    }

                } else {

                    cardNumberData += 1;

                }

                cardNumber.value = cardNumberData;
                cardNumber.dataset.number = cardNumber.value;

            }

            if (target.matches('.card-info__btn')) {

                if (cardInfoMainHidden.classList.contains('active')) {

                    cardInfoMainHidden.classList.remove('active');

                    $('.card-info__main-hidden').slideUp();

                    cardInfoBtn.textContent = 'Смотреть больше';

                } else {

                    cardInfoMainHidden.classList.add('active');

                    $('.card-info__main-hidden').slideDown();

                    cardInfoBtn.textContent = 'Скрыть';

                }
    
            }

            if (target.closest('.item-favourite')) {

                let heart = target.closest('.item-favourite');

                event.preventDefault();

                if (heart.classList.contains('active')) {

                    heart.classList.remove('active');

                } else {

                    heart.classList.add('active');

                }

            }

            //Меню

            if (target.matches('.menu-link_clickable')) {

                event.preventDefault();

                menuHistory.unshift({name: menuCurrent, text: target.textContent});
                menuCurrent = target.dataset.menu;

                currentTarget = returnMenuItem(menuItems, menuCurrent);

                menuItems.forEach(function(item) {

                    item.classList.remove('active');

                });

                currentTarget.classList.add('active');

                menuText.dataset.menu = menuHistory[0].name;
                menuTextContent.textContent = menuHistory[0].text;
                menuText.classList.add('active');

            }

            //Пойти назад в меню

            if (target.closest('.menu-text.active')) {

                currentTarget.classList.remove('active');

                currentTarget = returnMenuItem(menuItems, menuHistory[0].name);

                currentTarget.classList.add('active');
                menuCurrent = menuHistory[0].name;
                menuHistory.shift();

                if (menuHistory.length != 0) {

                    menuText.dataset.menu = menuHistory[0].name;
                    menuTextContent.textContent = menuHistory[0].text;

                } else {

                    menuText.classList.remove('active');
                    menuCurrent = 'main';

                }

            }

            if (target.matches('.menu-close') || (!target.closest('.menu-wrapper') && menu.classList.contains('active'))) {

                event.preventDefault();

                destroyMenu();

            }

            if (target.closest('.header-burger')) {

                menu.classList.add('active');

            }
            
            if (target.closest('.catalog-menu__mobile')) {

                menu.classList.add('active');

                // TODO: Тут обработчик каталога

            }
            
        });

        document.addEventListener('input', function(event) {

            const target = event.target;

            if (target.matches('.card-quantity__number')) {

                if (target.value == '' || target.value <= 0) {

                    target.value = 1;

                }

                target.dataset.number = target.value;

            }

        });

        function isScrolledIntoView(elements) {

            return Array.from(elements).filter(function(item) {

                let rect = item.getBoundingClientRect();
                let elemTop = rect.top;
                let elemBottom = rect.bottom;

                if (elemTop < window.innerHeight && elemBottom >= 0) {

                    return item;

                }

            });

        }

        function ActiveIfScrolledIntoView(items) {

            if (isScrolledIntoView(items).length != 0) {

                isScrolledIntoView(items).forEach(function(item) {

                    item.classList.add('active');

                });

            } else {

                items.forEach(function(item) {

                    item.classList.remove('active');

                });

            }

        }

        const blogCards = document.querySelectorAll('.blog-item');
        const deliveryCards = document.querySelectorAll('.delivery-item');
        const collabImg = document.querySelector('.collab-img');

        ActiveIfScrolledIntoView(blogCards);
        ActiveIfScrolledIntoView(deliveryCards);

        document.addEventListener('scroll', function() {

            ActiveIfScrolledIntoView(blogCards);
            ActiveIfScrolledIntoView(deliveryCards);

            let scale = 1 + window.pageYOffset / 4000;

            if (scale > 1.3) {

                scale = 1.3;

            }

            if (collabImg) {

                collabImg.style.transform = 'scale(' + scale + ')';

            }

        });

        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [55.738634183808095,37.58233018297014],
                    zoom: 15
                });
                
                var myPlacemark = new ymaps.Placemark([55.73947806899443,37.576716999999945], {
                    hintContent: '140056, Россия, Москва, ул. Смоленская, д. 47/б, оф. 289, м. Смоленская',
                    balloonContent: '140056, Россия, Москва, ул. Смоленская, д. 47/б, оф. 289, м. Смоленская'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/general/mark.svg',
                    iconImageSize: [35, 35],
                    iconImageOffset: [-19, -52]
                });
    
                myMap.geoObjects.add(myPlacemark);
    
                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('rulerControl')
                    .remove('zoomControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }

        const mapElements = document.querySelectorAll('.dealer-item');

        if (document.querySelector('div#modalMap')) {
            ymaps.ready(function () {

                let mapData = JSON.parse(document.getElementById('mapData').textContent);

                var myMap = new ymaps.Map('modalMap', {
                    center: [59.20815280167776,39.88709988737485],
                    zoom: 12
                });

                var objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    gridSize: 32
                });

                objectManager.objects.options
                    .set('preset', 'islands#redIcon')
                    .set('iconLayout', 'default#image')
                    .set('iconImageHref', './img/general/mark.svg')
                    .set('iconImageSize', [23, 37])
                    .set('iconImageOffset'), [0, 0];
    
                myMap.geoObjects.add(objectManager);

                objectManager.add(mapData);
    
                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('rulerControl');
                    // .remove('zoomControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);

                document.querySelectorAll('.dealer-item__btn').forEach(function(item) {

                    item.addEventListener('click', function(event) {
    
                        let target = event.target.closest('.dealer-item');
    
                        mapElements.forEach(function(item, index) {
                            
                            if (item === target) {
    
                                setTimeout(function() {

                                    myMap.container.fitToViewport();

                                }, 20);
        
                                myMap.setCenter(mapData.features[index].geometry.coordinates, 14);
        
                            }
        
                        });
    
                    });
    
                }); 

            });
        }

        //Адаптив

        let windowHeight = document.documentElement.clientWidth;

        if (windowHeight < 1000) {
            
            let advantageSlider = new Swiper('.advantages-list__wrapper', {

                speed: 600,
                spaceBetween: 40,
                slidesPerView: 2,
                slidesPerGroup: 2,
                observer: true,
                observeParents: true,
                touchEventsTarget: 'wrapper',
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.advantage-arrow',
                    nextEl: '.slider-arrow.slider-arrow__next.advantage-arrow'
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                },
                breakpoints: {
                    550: {
                        spaceBetween: 40,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }
                }
            });

        }

        if (windowHeight < 1250) {
            
            let blogSlider = new Swiper('.blog-list__wrapper', {

                speed: 600,
                spaceBetween: 40,
                slidesPerView: 2,
                slidesPerGroup: 2,
                observer: true,
                observeParents: true,
                touchEventsTarget: 'wrapper',
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.blog-arrow',
                    nextEl: '.slider-arrow.slider-arrow__next.blog-arrow'
                },
                pagination: {
                    el: '.slider-count',
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                                '<div class="slider-count__dec"></div>' +
                                '<div class="slider-count__total">' + addZero(total) + '</div>';
                    }
                },
                breakpoints: {
                    700: {
                        spaceBetween: 40,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    0: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }
                }
            });

        }

    });

})();

