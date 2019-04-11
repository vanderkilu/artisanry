<template>
    <div class="user-container">
        <div class="user-container__category">
            <h3 class="user-container__text">ARTISANS / CAPENTRY</h3> 
        </div>
        <app-user v-for="user in users" :key="user.id"></app-user>
    </div>
</template>


<script>
import User from './User.vue'
import { EventBus } from '../main'
export default {
    data() {
        return {
            users: [1,2,3,4,5,6,7]
        }
    },
    components: {
        appUser: User
    },
    mounted() {
        EventBus.$emit('SET-HEADER', false)
    }
}
</script>

<style scoped>
@media (min-width: 320px) {
    .user-container {
        background-color: #f5f5f5;
    }
    .user-container__category {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        height: 40vh;
        margin-top: -2rem;
        background-image:  linear-gradient(rgba(128,0,128, 0.6)),url('../assets/happy.svg');
        margin-bottom: 2rem;
    }
    .user-container__text {
        font-size: 3rem;
        color: white;
        font-weight: 800;
    }
}
</style>