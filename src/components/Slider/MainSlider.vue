<template>
  <swiper
        :pagination="pagination"
        :modules="modules"
        class="main-slider"
        :navigation="true"
        :effect="'fade'"
    >
    <swiper-slide
        v-for="slide in slides"
        :key="slide.title"
        class="slide"
    >
        <img class="slide__img" :src="slide.img" :alt="slide.title">
        <div class="slide__info">
            <h2 class="slide__title">{{ slide.title }}</h2>
            <p class="slide__desc">{{ slide.desc }}</p>
        </div>
        
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
        modules: [Pagination, Navigation, EffectFade],
      };
    },
    data() {
        return {
            slides: [
                {
                    title: 'Краски',
                    desc: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!',
                    img: '/src/assets/images/slides/slide.jpg'
                },
                {
                    title: 'Краски 2',
                    desc: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!',
                    img: '/src/assets/images/slides/slide2.jpg'
                }
            ]
        }
    }
  };
</script>

<style lang="scss">
    .slide {
        position: relative;
        height: 560px;
        display: flex;
        align-items: center;
        justify-content: center;

        &__img {
            position: absolute;
            left: 0;
            top: 0;
            object-fit: cover;
        }

        &__info {
            text-align: center;
            z-index: 2;
            color: #ffffff;
            max-width: 472px;
        }

        &__title {
            font-size: 4.5rem;  
            line-height: 0.9;
            margin-bottom: 24px;
        }
    }

    .main-slider {
        display: flex;
        align-items: center;
        justify-content: center;
       
        .swiper-button-prev, .swiper-button-next  {
            background-image: url('../../assets/icons/arrow.svg');
            background-repeat: no-repeat;
            width: 20px;
            height: 40px;
            position: absolute;
            bottom: 22%;
            z-index: 2;
            background-size: contain;
            cursor: pointer;
            transition: filter .3s;

            &:hover {
                filter: brightness(0.5)
            }
        }

        .swiper-button {
            &-prev {
                transform: rotate(-180deg);
                left: 26%;
            }

            &-next {
                right: 26%;
            }

            &-disabled {
                display: none;
            }
        }

        .swiper-pagination {
            position: absolute;
            bottom: 40px;
            z-index: 2;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            gap: 8px;
            border-radius: 16px;
            width: auto;
            padding: 13px 24px;

            &-bullet {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #ffffff;
                opacity: 0.4;
                cursor: pointer;
                transition: opacity .3s;

                &:hover {
                    opacity: 1;
                }

                &-active {
                    opacity: 1;
                }
            }
        }

        
    }
</style>