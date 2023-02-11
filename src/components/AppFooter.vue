<script>
import { store } from '../store.js'
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class=" row">
                <div class="col-6 d-flex align-items-center">
                    <a href="#home" class="navbar-brand justify-content-center d-flex ">
                        <img src="../assets/logo.png" width="" alt="Logo">
                    </a>
                </div>
                <div class="text-center text-sm-end col-6">
                    <div class="social-icon mt-3">
                        <a href="https://www.linkedin.com/in/michele-rossetti-298561263/"><img
                                src="../assets/nav-icon1.svg" alt="" /></a>
                        <a href="https://github.com/MicheleRossetti02"><img src="../assets/github.svg" alt="" /></a>
                        <a href="https://www.instagram.com/michele_rossetti4/"><img src="../assets/nav-icon3.svg"
                                alt="" /></a>
                    </div>
                    <p><i class="fas fa-copyright fa-sm fa-fw"></i> CopyRight 2023. All Right Reserved Michele Rossetti
                    </p>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
/************ Footer Css ************/

.social-icon {
    display: inline-block;
    margin-left: 14px;

}

.social-icon a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.social-icon a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    color: #fff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
}

.social-icon a:hover::before {
    transform: scale(1);
}

.social-icon a img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.social-icon a:hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
}

.footer {
    padding: 0 0 50px 0;
    background-image: url('../assets/footer-bg.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}


.footer img {
    width: 26%;
}

.footer p {
    font-weight: 400;
    font-size: 14px;
    color: #B8B8B8;
    letter-spacing: 0.5px;
    margin-top: 20px;
}
</style>