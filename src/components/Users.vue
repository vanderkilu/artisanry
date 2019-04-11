<template>
    <div class="user-container">
        <app-user v-for="user in users" :key="user.id"></app-user>
    </div>
</template>


<script>
import User from './User.vue'
export default {
    data() {
        return {
            users: [1,2,3]
        }
    },
    components: {
        appUser: User
    }
}
</script>