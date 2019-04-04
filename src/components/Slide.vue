<template>
    <div class="wrapper">
        <div class="slide" v-if="incrementor === 1">
            <img src="../assets/slide1.svg" alt="colloborate slide 1" class="slide__svg">
            <h3 class="slide__text--large">Colloborate</h3>
            <p class="slide__text--small">Join and Colloborate with friends and new people to generate ideas</p>
            <div class="slide__controls">
                <img class="slide__arr back" src="../assets/back.svg" @click="back">
                <img class="slide__arr next" src="../assets/next.svg" @click="next">
            </div>
        </div>
        <div class="slide" v-if="incrementor === 2">
            <img src="../assets/slide1.svg" alt="colloborate slide 1" class="slide__svg">
            <h3 class="slide__text--large">Colloborate</h3>
            <p class="slide__text--small">Join and Colloborate with friends and new people to generate ideas</p>
            <div class="slide__controls">
                <img class="slide__arr back" src="../assets/back.svg" @click="back">
                <img class="slide__arr next" src="../assets/next.svg" @click="next">
            </div>
        </div>
        <div class="slide" v-if="incrementor === 3">
            <img src="../assets/slide1.svg" alt="colloborate slide 1" class="slide__svg">
            <h3 class="slide__text--large">Colloborate</h3>
            <p class="slide__text--small">Join and Colloborate with friends and new people to generate ideas</p>
            <div class="slide__controls">
                <img class="slide__arr back" src="../assets/back.svg" @click="back">
                <img class="slide__arr next" src="../assets/next.svg" @click="next">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            incrementor: 1,
            howFar: 3
        }
    },
    methods: {
        next() {
            if (this.incrememtor >= this.howFar) return;
            return this.incrementor++
        },
        back() {
            if (this.incrementor < 1) return;
            return this.incrementor--
        }
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
            padding: 2rem;
            margin-top: 1rem;
        }
        .slide__svg {
            width: 100%;
        }
        .slide__text--large {
            font-size: 2rem;
            font-weight: 600;
            color: #4a148c;
            margin: 2rem 0;
        }
        .slide__text--small {
            font-size: 1.4rem;
            color: #9e9e9e;
            text-align: center;
        }
        .slide__controls {
            flex-basis: 100%;
        }
        .slide__arr {
            margin-top: 2rem;
            width: 2.5rem;
            height: 2.5rem;
        }
        .back {
            margin-right: 5rem;
        }
    }
</style>