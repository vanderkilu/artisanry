<template>
    <div class="user" @click="routeTo">
        <img :src="user.userPhoto" alt="user-profile" class="user__img">
        <div class="user__profile">
            <p class="user__name">{{user.name}}</p>
            <p class="user__profession">{{user.category}}</p>
        </div>
        <button class="user__btn">follow</button>
    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        routeTo() {
            this.$router.push({name: 'user-profile', params: {id: 1}})
        }
    }
}
</script>

<style scoped>
@media (min-width: 320px) {
    .user {
        display: grid;
        grid-template-columns: 8rem 2fr 1fr;
        padding: 0.5rem 2rem;
        border-radius: 3px;
        background-color: white;
        margin: 0.1rem;
        box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.01);
    }
    .user__img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        transform: translateY(2rem);
    }
    .user__name {
        color: #4a148c;
        font-size: 1.5rem;
    }
    .user__profession {
        color: #9e9e9e;
        font-size: 1.4rem;
    }
    .user__btn {
        padding: 1.2rem 1.5rem;
        background-color: transparent;
        color: #4a148c;
        border: none;
        border-radius: 3rem;
        border: 1px solid #4a148c;
        margin: 4rem 0;
    }
}
</style>
