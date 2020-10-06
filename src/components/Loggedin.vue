<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-flex">
                                <div class="flex-grow-1 bg-password-image" style="background-image: url(&quot;assets/img/foodtime-mockup.jpg&quot;);"></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center text-success"><i class="fa fa-smile-o fa-4x"></i>
                                        <img :src="`${avatar}`" style='max-width: 50%' alt="">
                                        <h4 class="text-dark mb-2">Bonjour {{ username }}</h4>
                                        <h5 class="text-dark mb-2">Vous êtes connecté !</h5>
                                    </div>
                                    <div class="text-center">
                                        <hr><a @click.prevent='logout' class="small" href="login.html">Se déconnecter</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed : {
        username : function(){ return this.$store.getters.username },
        avatar : function(){ return this.$store.getters.avatar }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                .then(() => {this.$router.push('/')})
            }
        },
    }

</script>