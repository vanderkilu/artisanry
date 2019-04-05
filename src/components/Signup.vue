<template>
    <div class="auth">
        <p class="auth__text--main">Connect now</p>
        <form  class="auth__form">
            <input type="text" class="input" placeholder="username">
            <input type="email" class="input" placeholder="email">
            <input type="text" class="input" placeholder="number">
            <button class="btn btn-fill">Sign up</button>
            <p class="auth__text--small">Already have an account? sign in here</p>
        </form>
    </div>
</template>


<style scoped>
    @media (min-width: 320px) {
        .auth,.auth__form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        .auth__text--main {
            font-size: 2.5rem;
            color: #4a148c;
            margin: 0;
            font-weight: 600;
        }
        .auth__text--small {
            font-size: 1.4rem;
            color: #9e9e9e;
            text-align: center;
        }
        .auth__form {
            width: 70%;
            padding: 4rem;
        }
        .input {
            padding: 1.5rem 2rem;
            border: none;
            border-radius: 0.6rem;
            border-bottom: 1px solid #9e9e9e;
            border-radius: 0.6rem;
            margin: 1rem 0;
            font-family: inherit;
            width: 100%;
        }
        .input:focus {
            outline: none;
        }
        .btn {
            padding: 1.2rem 1.5rem;
            background-color: #ad1457;
            color: white;
            border: none;
            border-radius: 3px;
            box-shadow: 0 0.6rem 1.6rem #f8bbd0;
            margin: 4rem 0;
        }
        .btn-fill {
            width: 100%;
            font-size: 1.5rem;
        }
    }
</style>