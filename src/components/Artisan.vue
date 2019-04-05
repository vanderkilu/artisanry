<template>
    <div class="artisans">
        <p class="artisans__text--main">Locate an artisan now </p>
        <div class="artisan" v-for="artisan in artisans" :key="artisan.title">
            <img :src="artisan.photoUrl" :alt="artisan.title" class="artisan__svg">
            <p class="artisans__text--small">{{artisan.title}}</p>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            artisans: [
                {
                    title: 'barber',
                    photoUrl: '../assets/barber.svg'
                },
                {
                    title: 'electrical',
                    photoUrl: '../assets/electrical.svg'
                },
                {
                    title: 'mechanical',
                    photoUrl: '../assets/mechanical.svg'
                },
                {
                    title: 'fitness',
                    photoUrl: '../assets/fitness.svg'
                }
            ]
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
    }
    .artisans__text--main {
        font-size: 2rem;
        color: #4a148c;
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
    }
</style>