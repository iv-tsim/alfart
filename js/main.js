(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

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
            }

        });

        let heroSlider = new Swiper('.hero-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev',
                nextEl: '.slider-arrow.slider-arrow__next'
            },
            pagination: {
                el: '.hero-slider__wrapper .slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
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
            spaceBetween: 10,
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
            }

        });

        const tabs = document.querySelectorAll('.popular-tab');
        const tabsContent = document.querySelectorAll('.popular-body');
        const cardColors = document.querySelectorAll('.card-colors__item');
        const cardNumber = document.querySelector('.card-quantity__number');

        //Смотреть больше в карточке товара

        const cardItemsContainer = document.querySelector('.card-info__main');

        let cardItemHeight,
            numberOfCardItemsToDisplay = 4,
            totalCardItemsHeight;

        if (cardItemsContainer) {

            cardItemHeight = document.querySelector('.card-info__item').clientHeight;
            totalCardItemsHeight = cardItemHeight * numberOfCardItemsToDisplay;
            cardItemsContainer.style.maxHeight = totalCardItemsHeight + 'px';

        }

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

                let cardNumberData = +cardNumber.dataset.number;

                if (target.classList.contains('card-quantity__minus')) {

                    if (cardNumberData > 1) {

                        cardNumberData -= 1;

                    }

                } else {

                    cardNumberData += 1;

                }

                cardNumber.dataset.number = cardNumberData
                cardNumber.textContent = cardNumberData;

            }

            if (target.matches('.card-info__btn')) {
            
                cardItemContainer = $('.card-info__main');
                
                minimumHeight = totalCardItemsHeight;
                
                currentHeight = cardItemContainer.outerHeight();
                
                autoHeight = cardItemContainer.css('max-height', '100%').outerHeight();
                
                cardItemContainer.css('height', currentHeight).animate({
                    height: autoHeight
                });
                
                document.querySelector('.card-info__btn').style.display = 'none';
    
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
                    iconImageHref: '../img/general/mark.svg',
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

    });

})();