// 헤더 js

// 모달창
window.onload = pageLoadedHandler;
function pageLoadedHandler() {
    $(".btn_modal").on("click", openModalHandler);
    // $(".close").on("click", closeModalHandler);
}
function openModalHandler() {
    $(".modal").slideDown(1000);
    $(".modal").on("click", closeModalWindowHandler);
    $(".close").on("click", closeModalWindowHandler);
}
function closeModalHandler() {
    $(".modal").slideUp(1000);
}
function closeModalWindowHandler() {
    if (event.target == $(".modal").get(0)
        || event.target == $(".close").get(0)) {
        $(".modal").slideUp(1000);
        $(".modal").off("click", closeModalWindowHandler);
    }
}

window.onclick = hiddenBoxOpen;
function hiddenBoxOpen() {
    $(".hidden_box_open_button").on("click", openhiddenBox);
}
function openhiddenBox() {
    $(".hidden_box").slideDown(200);
    $(".hidden_box").on("click", closehiddenBox);
    $(".hidden_box_content_close").on("click", closehiddenBox);
}
function closehiddenBox() {
    if (event.target == $(".hidden_box").get(0)
        || event.target == $(".hidden_box_content_close").get(0)) {
        $(".hidden_box").slideUp(1000);
        $(".hidden_box").off("click", closehiddenBox);
    }
}

// 공통 javascript
$(function () {
    var bullet = ['단서를 찾아서 👀', '단서를 찾아서 👀', '🍀 함께 성장해봄', '파이썬 강의 모음', '코딩웍스',
        '그랩 깜짝할인', '신규 강의 🎁', '지식공유신청', '인프런은 🌱', '인프런 동료찾기'];
    var bannerswiper = new Swiper(".banner_swiper", {
        direction: 'horizontal',
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        enabled: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.next_index_and_banner',
            prevEl: '.previous_index_and_banner',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                // console.log(index);
                return '<span class="' + className + '">' + bullet[index] + "</span>";
            },

        }

    });

})
var swiper1 = new Swiper(".welcome_swiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    direction: 'horizontal',
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // },
});


var swiper2 = new Swiper(".roadmap_swiper", {
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 5,
    spaceBetween: 30,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // },
});


const new_lecture_swiper = new Swiper(".new_lecture", {
    direction: 'horizontal',
    slidesPerView: 5,
    grabCursor: true,
    spaceBetween: 6,
    observer: true,
    observeParents: true,
    enabled: true,
});


const swiper = new Swiper('.review-swiper',
    {
        loop: true,
        direction: 'vertical',
        slidesPerView: '3',
        // slidesPerView 수정해야할지도..?
        grabCursor: true,
        spaceBetween: 20,
    })
})
