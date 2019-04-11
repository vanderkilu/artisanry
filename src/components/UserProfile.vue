<template>
    <div class="wrapper">
        <div class="user-profile">
            <img src="../assets/profile.png" alt="" class="user-profile__img">
            <p class="user-profile__name">Jane Doe</p>
            <p class="user-profile__profession">carpenter</p>
            <div class="follow-details">
                <div class="follow">
                    <p class="follow__count">20K</p>
                    <p class="follow__text">following</p>
                </div>
                <div class="follow">
                    <p class="follow__count">500</p>
                    <p class="follow__text">followers</p>
                </div>
            </div>
            <div class="btns">
                <button class="btn-custom btn-message">message</button>
                <button class="btn-custom btn-call">call</button>
            </div>
        </div>
    </div>
   
</template>

<script>
import { EventBus } from '../main'
export default {
    mounted() {
         EventBus.$emit('SET-HEADER', false)
    }
}
</script>

<style scoped>
@media (min-width: 320px) {
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 6rem 2rem;
        margin-top: -2rem;
        background-image:  linear-gradient(rgba(128,0,128, 0.9)),url('../assets/happy.svg');
        margin-bottom: 2rem;
    }
    .user-profile__img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
    }
    .user-profile__profession {
        font-size: 2rem;
        color: white;
        font-weight: bold;
    }
    .user-profile__name {
        font-size: 3rem;
        color: white;
        font-weight: bolder;
    }
    .follow-details {
        display: flex;
        justify-content: center;
    }
    .follow {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 2rem;
    }
    .follow > * {
        margin: 0.6rem;
    }
    .follow__count {
        font-size: 1.8rem;
        color: white;
        font-weight: bold;
    }
    .follow__text {
        color: #eeeeee;
        font-size: 1.5rem;
        font-weight: 500;
    }
    .followers {
        margin-right: 0;
    }
    .btn-custom {
        padding: 1.2rem 2rem;
        background-color: transparent;
        color: white;
        border: none;
        border-radius: 3rem;
        border: 1px solid white;
        margin: 4rem 0;
        display: block;
        width: 100%;
        font-size: 1.5rem;
    }
}
</style>
