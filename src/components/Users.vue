<template>
    <div class="user-container">
        <p class="user-container__category">ARTISANS / CAPENTRY </p>
        <app-user v-for="user in users" :key="user.id"></app-user>
    </div>
</template>


<script>
import User from './User.vue'
export default {
    data() {
        return {
            users: [1,2,3,4,5,6,7]
        }
    },
    components: {
        appUser: User
    }
}
</script>

<style scoped>
    .user-container {
        background-color: #f5f5f5;
    }
    .user-container__category {
        font-size: 1.5rem;
        color: #4a148c;
        text-align: center;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>