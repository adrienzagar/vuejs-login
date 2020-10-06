<template>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-flex">
                                <div class="flex-grow-1 bg-login-image" style="background-image: url(&quot;assets/img/foodtime-mockup.jpg&quot;);"></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Connexion</h4>
                                    </div>
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group"><input require v-model="email" class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" name="email"></div>
                                        <div class="form-group"><input require v-model="password" class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Mot de Passe" name="password"></div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"><label class="form-check-label custom-control-label" for="formCheck-1">Rester connecté</label></div>
                                            </div>
                                        </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Se connecter</button>
                                        <hr class="d-none"><a class="btn btn-primary btn-block text-white d-none btn-google btn-user" role="button"><i class="fab fa-google"></i>&nbsp; Login with Google</a><a class="btn btn-primary btn-block text-white d-none btn-facebook btn-user"
                                            role="button"><i class="fab fa-facebook-f"></i>&nbsp; Login with Facebook</a>
                                        <hr>
                                    </form>
                                    <div class="text-center"><a @click.prevent="forgot" class="small" href="forgot-password.html">Mot de passe oublié ?</a></div>
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
		data(){
			return {
				email : "",
            	password : ""
            }
		},
		methods: {
		 	login: function () {
		   		let mail = this.email.toLowerCase() 
		   		let password = this.password
				this.$store.dispatch('login', { mail, password })
		   		.then(() => this.$router.push('/logged'))
		   		.catch(err => console.log(err))
			},
			forgot() {
				this.$router.push({ name: 'forgot' });
			}   
		}
	}
</script>