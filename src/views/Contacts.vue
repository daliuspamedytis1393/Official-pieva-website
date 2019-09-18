<template>
	<div class="contacts">
		<AppWhiteBox>
		<div id="contact-form" class="contact-form">
			<form class="form" id="form" >
				<ValidationObserver ref="observer">
					<validation-provider rules="required">
						<template #default="{ errors }">
							<input placeholder="Jūsų vardas" type="text" name="name" v-model="form.name">
							<br>
							<small>{{ errors[0] }}</small>
						</template>
					</validation-provider>
					<validation-provider rules="required">
						<div slot-scope="{ errors }">
							<input placeholder="el. paštas"  name="email" type="email" v-model="form.email">
							<br>
							<small >{{ errors[0] }}</small>
						</div>
					</validation-provider>
					<validation-provider rules="required">
						<div slot-scope="{ errors }">
							<textarea name="message" rows="7" placeholder="Žinutė" v-model="form.message"></textarea>
							<br>
							<small>{{ errors[0] }}</small>
						</div>
					</validation-provider>
					</ValidationObserver>
				
				
				<button class="button" type="button" @click="send()">Siųsti</button>
			</form>
			<div class="outer">
  				<div class="inner"></div>
			</div><br>
			<google-map />
		</div>
		</AppWhiteBox>
		<a href="tel:+37062699740"><CallMeButton /></a>
	</div>
</template>
<script>
import * as emailjs from 'emailjs-com'
import AppWhiteBox from '@/components/AppWhiteBox'
import CallMeButton from '@/components/CallMeButton'
import GoogleMap from '@/components/GoogleMap'
export default {
	name: 'Contacts',
	components: {
		GoogleMap,
		CallMeButton,
		AppWhiteBox
	  },
	  data () {
		  return {
			form: {
				name: null,
				email: null,
				message: null
			},
			errorMessage: {
				name: 'vardas privalomas',
				email: 'el. paštas privalomas',
				message: 'žinutė privaloma'
			}
		  	}
	  	},
	  methods: {
		 	 async send () {
				const isValid = await this.$refs.observer.validate()
				if (isValid) {
					emailjs.send('gmail', 'template_lDnrInB3', this.form, 'user_FVas56fqmIZMP3HJU1Xhu')
						.then(response => {
						alert('išsiųsta !')
						location.reload();
						}, function (error) {
					alert('oops kažkas ne taip', error)
						})
				}
				
		  }
	  }
}
</script>

<style lang="css">

	.outer {
  		width: 1px;
  		margin: auto;
  		position: relative;
  		overflow: hidden;
		  height: 313px;
		  transform: rotate3d(50)
	}
	.inner {
		height: 264px;
	  	position: absolute;
	  	width:100%;
 		background: grey;
  		box-shadow: 0px 0px 30px 20px grey;
	}
	.contacts{
		width: 100%;
		flex: 1;
	}
	.contact-form {
		font-family: 16px;	
		display: flex;
		text-align: center;
		align-items: center;
		width: 70%;
		margin: 0 auto;

	}

	.contact-form .form {
		display: flex;
		flex-direction: column;
		font-size: 16px;
		min-width: 40%;
		margin-top: 13px;

	}
	input{
		min-width: 100%;
	}
	textarea{
		min-width: 100%;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea {
		border: solid 1px #e8e8e8;
		font-family: 'Roboto', sans-serif;
		

		outline: none;
	}
	small{
		margin: 20px;
		color: red;
	}

	.contact-form textarea {
		resize: none;
	}

	.contact-form .button {
		width: 30%;
		background: rgba(0,0,0,0.9);
		color: white;
		cursor: pointer;
		margin-top: 2px;
		margin-left: 71%;
		
		text-align: center;

	}

	.contact-form .button:hover {
		background: #ea532a;
		border: solid 1px #ea532a;
	}

	.contact-form input[type="email"],
	.contact-form input[type="text"],
	.contact-form textarea,
	.contact-form .button {
		font-size: 15px;

	}
	@media only screen and (max-width: 775px) {
		.contact-form {
			font-family: 16px;
			justify-content: space-between;
			display: flex;
			flex-direction: column;
			text-align: center;
			align-items: center;
			width: 90%;
			margin: 0 auto;

		}

		.outer{
			display: none;
		}
		input{
			min-width: 75vw;
		}
		.contact-form .button {
			width: 100%;
			align-items: flex-end;
			margin-left: 60%;
			background: rgba(0,0,0,0.9);
			color: white;
			cursor: pointer;
			margin-top: 10px;
			text-align: center;
		}
	}
</style>
