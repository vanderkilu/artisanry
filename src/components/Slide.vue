<template>
    <div class="wrapper">
        <transition-group :name="transitionName">
            <div class="slide" v-if="incrementor === 1" key="1">
                <img src="../assets/slide1.svg" alt="colloborate slide 1" class="slide__svg">
                <h3 class="slide__text--large">Colloborate</h3>
                <p class="slide__text--small">Join and Colloborate with friends and new people to generate ideas</p>
                <div class="slide__controls">
                    <img class="slide__arr next" src="../assets/next.svg" @click="next">
                </div>
            </div>
            <div class="slide" v-if="incrementor === 2" key="2">
                <img src="../assets/slide2.svg" alt="colloborate slide 1" class="slide__svg">
                <h3 class="slide__text--large">Learn</h3>
                <p class="slide__text--small">Learn new techniques and skills from people in the same career bound as yours.</p>
                <div class="slide__controls">
                    <img class="slide__arr back" src="../assets/back.svg" @click="back">
                    <img class="slide__arr next" src="../assets/next.svg" @click="next">
                </div>
            </div>
            <div class="slide" v-if="incrementor === 3" key="3">
                <img src="../assets/slide3.svg" alt="colloborate slide 1" class="slide__svg">
                <h3 class="slide__text--large">Connect</h3>
                <p class="slide__text--small">Connect with new people who share common interests</p>
                <div class="slide__controls">
                    <img class="slide__arr back" src="../assets/back.svg" @click="back">
                    <img class="slide__arr next" src="../assets/next.svg" @click="next">
                </div>
            </div>
        </transition-group>
    </div>
</template>


<script>
import { slideAnimation } from './mixins/slideMixin.js'
export default {
    mixins: [slideAnimation],
    data() {
        return {
            incrementor: 1,
            howFar: 3
        }
    },
    methods: {
        next() {
            if (this.incrementor >= this.howFar) {
                this.$router.push({name: 'signup'})
            }
            else this.incrementor++
        },
        back() {
            if (this.incrementor <= 1) return;
            else this.incrementor--
        }
    },
    mounted() {
        console.log(this.transitionName)
    }
}
</script>


<style scoped>
    @media (min-width: 320px) {
        .slide {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem 4rem;
            padding-bottom: 4rem;
        }
        .slide__svg {
            width: 100%; 
        }
        .slide__text--large {
            font-size: 3rem;
            font-weight: 600;
            color: #4a148c;
            margin: 2rem 0;
        }
        .slide__text--small {
            font-size: 2rem;
            color: #9e9e9e;
            text-align: center;
        }
        .slide__controls {
            flex-basis: 100%;
        }
        .slide__arr {
            margin-top: 2rem;
            width: 4rem;
            height: 4rem;
        }
        .back {
            margin-right: 5rem;
        }
    }
</style>