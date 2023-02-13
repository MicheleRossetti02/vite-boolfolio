<script>
export default {
    name: 'AppBanner',
    data() {
        return {
        }
    },
    mounted() {
        let typingEffect = new Typed(".multiText", {
            strings: ["Web Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500

        })
    }
}
</script>

<template>

    <section class="banner" id="home">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-7 ">

                    <h1>Hi I'm Michele Rossetti <br>
                        <span class="multiText"></span>
                    </h1>
                    <span class="tagline my-4">Welcome to my Portfolio</span>

                    <a href="#connect" class="mb-5"> <span>Let's Connect </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </a>

                </div>
                <div class="col-sm-12 col-md-6 col-lg-5">
                    <img src="../assets/header-img.svg" alt="Header Img" />

                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
.banner {

    margin-top: 0;
    padding: 260px 0 100px 0;
    background-position: top center;
    background-image: url('../assets/banner-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;

}

a {
    span {
        font-size: 1.5rem;

    }
}

.banner .tagline {
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 13px 15px;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 30px;
    margin-bottom: 16px;
    display: inline-block;
}

.banner h1 {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 20px;
    display: block;
}

.banner p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    width: 96%;
}

.banner a {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 60px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
}

.banner a svg {
    font-size: 25px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    line-height: 1;
}

.banner a:hover svg {
    margin-left: 25px;
}

.banner img {
    animation: updown 3s linear infinite;
}

@keyframes updown {
    0% {
        transform: translateY(-20px);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(-20px);
    }
}

.txt-rotate>.wrap {
    border-right: 0.08em solid #666;
}
</style>