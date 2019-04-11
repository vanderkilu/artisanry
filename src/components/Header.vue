<template>
    <div class="logo" @click="routeTo" v-show="setHeader">
        <img src="../assets/logo.png" alt="logo" class="logo__small">
    </div>
</template>


<script>
import { EventBus } from '../main'
export default {
    data() {
        return {
            setHeader: true
        }
    },
    methods: {
        routeTo() {
            this.$router.push({name: 'home'})
        }
    },
    mounted() {
        EventBus.$on('SET-HEADER', (bool)=> this.setHeader = bool)
    }
}
</script>
<style scoped>
    .logo {
        display: flex;
        justify-content: center;
        align-content: center;
        cursor: pointer;
    }
    .logo__small {
        width: 15rem;
        height: 15rem;
    }
</style>