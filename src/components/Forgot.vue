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
                                    <div class="text-center">
                                        <h4 class="text-dark mb-2">Mot de passe oublié ?</h4>
                                        <p class="mb-4">Aucun problème, ce sont des choses qui arrivent. Remplissez votre adresse mail afin de recevoir un lien de ré-initialisation</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" name="email"></div><button @click.prevent="forgot" class="btn btn-primary btn-block text-white btn-user"
                                            type="submit">Ré-initialiser</button></form>
                                    <div class="text-center">
                                        <hr><a @click.prevent="forgot" class="small" href="" >Vous l'avez retrouvé ? Connectez vous</a></div>
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
    methods: {
        forgot() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>