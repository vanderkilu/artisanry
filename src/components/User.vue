<template>
    <div class="user">
        <img src="" alt="../assets/profile.png" class="user__img">
        <div class="user__profile">
            <p class="user__name">Kit harrignton</p>
            <p class="user__profession">carpenter</p>
        </div>
        <button class="btn btn-rounded">follow</button>
    </div>
</template>


<style scoped>
@media (min-width: 320px) {
    .user {
        display: grid;
        grid-template-columns: 5rem 2fr 1fr;
        padding: 1rem;
        border-radius: 3px;
        background-color: white;
        margin: 0.1rem;
        box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.01);
    }
    .user__img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .user__name {
        color: #4a148c;
        font-size: 1.5rem;
    }
    .user__profession {
        color: #9e9e9e;
        font-size: 1.4rem;
    }
}
</style>
