<template>
    <div class="artisans">
        <p class="artisans__text--main">Locate an artisan now </p>
        <div class="artisan" v-for="artisan in artisans" :key="artisan.title">
            <img src="../assets/barber.svg" :alt="artisan.title" class="artisan__svg" v-if="artisan.title === 'barber'" @click="routeTo('barber')">
            <img src="../assets/contractor.svg" :alt="artisan.title" class="artisan__svg" v-if="artisan.title === 'contractor'" @click="routeTo('contractor')">
            <img src="../assets/fitness.svg" :alt="artisan.title" class="artisan__svg" v-if="artisan.title === 'fitness'" @click="routeTo('fitness')">
            <img src="../assets/mechanical.svg" :alt="artisan.title" class="artisan__svg" v-if="artisan.title === 'mechanic'" @click="routeTo('mechanic')">
            <p class="artisans__text--small">{{artisan.title}}</p>
        </div>
        <div class="loader__small center" v-if="isLoading"></div>
        <button class="btn center" @click="toNearest" v-else> Nearest Artisan </button>
    </div>
</template>


<script>
import { EventBus } from '../main'
export default {
    data() {
        return {
            artisans: [
                {
                    title: 'barber',
                },
                {
                    title: 'contractor',
                },
                {
                    title: 'mechanic',
                },
                {
                    title: 'fitness',
                }
            ],
            isLoading: false
        }
    },
    mounted() {
        EventBus.$emit('SET-HEADER', true)
    },
    methods: {
        routeTo(category) {
            this.$router.push({name: 'users', params:{id: category}})
        },
        toNearest() {
            this.isLoading = true
            setTimeout(()=> {
                 this.isLoading = false
                 this.$router.push({name: 'nearest-artisans'})
            }, 5000)
        }
    }
}
</script>

<style scoped>
    .artisans {
        display: grid;
        padding: 2rem 4rem;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
    }
    .artisans__text--main {
        font-size: 2rem;
        color: #4a148c;
        grid-column: 1 / -1;
        text-align: center;
    }
    .artisans__text--small {
        font-size: 1.5rem;
        color: #9e9e9e;
    }
    .artisan {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .artisan__svg {
        width: 100%;
        cursor: pointer;
    }
    .btn {
        background-color: #4a148c;
        animation: pulse 1.5s infinite;
        border-radius: 6rem;
    }
    .center {
        grid-column: 1 / span 2;
        justify-self: center;
    }
    .loader__small {
        border: 0.6rem solid #f3f3f3;
        border-top: 0.6rem solid #4a148c;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
     @-webkit-keyframes pulse {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(128,0,128,0.4);
        }
        70% {
            -webkit-box-shadow: 0 0 0 1.8rem rgba(128,0,128, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(128,0,128, 0);
        }
    }
    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(128,0,128, 0.4);
            box-shadow: 0 0 0 0 rgba(128,0,128, 0.4);
        }
        70% {
            -moz-box-shadow: 0 0 0 1.8rem rgba(128,0,128, 0);
            box-shadow: 0 0 0 1.8rem rgba(128,0,128, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(128,0,128, 0);
            box-shadow: 0 0 0 0 rgba(128,0,128, 0);
        }
    }
</style>