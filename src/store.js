import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
  		status: '',
  		token: localStorage.getItem('token') || '',
		username: localStorage.getItem('username') || '',
		avatar: localStorage.getItem('avatar') || ''
	},
	mutations: {
		auth_request(state){
	    	state.status = 'loading'
	  	},
	  	auth_success(state, token){
		    state.status = 'success'
		    state.token = token
		  },
		username(state, username) {
			state.username = username
		},
		avatar(state, avatar) {
			state.avatar = avatar
		},
	  	auth_error(state){
	    	state.status = 'error'
	  	},
	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	    	state.username = ''
	    	state.avatar = ''
	  	},
	},
	actions: {
	  	login({commit}, user){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios({url: 'http://ec2-100-26-151-181.compute-1.amazonaws.com:3001/login', data: user, method: 'POST' })
	            .then(resp => {
					console.log(resp.data)
	                const token = resp.data.token
					const {username, avatar} = resp.data.info
					console.log(username)

					localStorage.setItem('token', token)
					commit('auth_success', token)

					localStorage.setItem('username', username)
					commit('username', username)
					
					localStorage.setItem('avatar', avatar)
					commit('avatar', avatar)

					
	                // localStorage.setItem('avatar', avatar)
					
	                // Add the following line:
	                // axios.defaults.headers.common['Authorization'] = token
					
	                resolve(resp)
	            })
	            .catch(err => {
	                commit('auth_error')
	                localStorage.removeItem('token')
	                reject(err)
	            })
	        })
	    },
	  	logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	localStorage.removeItem('token')
		      	localStorage.removeItem('username')
		      	localStorage.removeItem('avatar')
		      	delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	},
	},
	getters : {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	  username: state => state.username,
	  avatar: state => state.avatar
	}
})
