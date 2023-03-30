<script setup>
import { ref } from 'vue'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import axios from '@/axios'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const companyName = ref('')
const email = ref('')
const password = ref('')
const passwordConf = ref('')

const Register = async () => {
  if (
    !firstName.value || !lastName.value || !companyName.value ||
    !email.value || !password.value || !passwordConf.value
  ) {
    return alert('Please enter all fields')
  }

  if (password.value.length < 8) {
    return alert('Password must be a least 8 characters long')
  }

  if (password.value !== passwordConf.value) {
    return alert('Passwords do not match')
  }

  // create an object with the data that is going to be sent to the backend
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    companyName: companyName.value,
    email: email.value,
    password: password.value
  }

  try {
    const response = await axios.post('/api/user/register', data)
    // Get jwt token and store to the cookie
    const token = response.data.accessToken
    Cookies.set('token', token)
    const successMessage = response.data.message
    alert(successMessage)
    router.push('/register/org')
  } catch (error) {
    const errorMessage = error.response.data.message
    console.log(error.response.data.message)
    // throw new Error(error.response.status);

    return alert(errorMessage)
  }
}

const clientId = process.env.GOOGLE_CLIENT_ID // Replace with your client ID
const signInPending = ref(false)

const handleCredentialResponse = async (credential) => {
  // TODO: Handle the credential response from the API
  try {
    console.log(credential)
    const token = credential.credential
    console.log('Token:', token)

    // Use the token to make API requests here
    // ...
  } catch (error) {
    console.error(error)
  } finally {
    signInPending.value = false
  }
}

const handleSignIn = async () => {
  try {
    signInPending.value = true
    const googleUser = await google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse
    })
    google.accounts.id.prompt()
  } catch (error) {
    console.error(error)
    signInPending.value = false
  }
}
</script>

<template>
  <div class="slds-grid slds-grid_frame slds-grid_align-center slds-p-around_large">
    <div class="slds-box slds-theme_default slds-m-around_medium">
      <h2 class="slds-text-heading_medium slds-p-bottom_small">Register</h2>
      <div class="slds-form slds-form_stacked">
        <form @submit.prevent="Register">
          <div class="slds-grid slds-grid_vertical-align-center">
            <div class="slds-col">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="firstName">First Name</label>
                <input id="firstName" type="text" class="slds-input" v-model="firstName" />
              </div>
            </div>
            <div class="slds-col">
              <div class="slds-form-element">
                <label class="slds-form-element__label" for="lastName">Last Name</label>
                <input id="lastName" type="text" class="slds-input" v-model="lastName" />
              </div>
            </div>
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="companyName">Company Name</label>
            <input id="companyName" type="text" class="slds-input" v-model="companyName" />
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="email">Email</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#email"
                ></use>
              </svg>
              <input
                id="email"
                type="text"
                class="slds-input"
                v-model="email"
                autocomplete="email"
              />
            </div>
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="password">Password</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#lock"
                ></use>
              </svg>
              <input
                id="password"
                type="password"
                class="slds-input"
                v-model="password"
                autocomplete="new-password"
              />
            </div>
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="password">Confirm Password</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#lock"
                ></use>
              </svg>
              <input
                id="passwordConf"
                type="password"
                class="slds-input"
                v-model="passwordConf"
                autocomplete="new-password"
              />
            </div>
          </div>
          <div class="slds-form-element">
            <button class="slds-button slds-button_brand" @click="login">Sign Up</button>
          </div>
        </form>
        <button class="google-button" @click="handleSignIn" :disabled="signInPending">
          <span class="google-icon">&nbsp;</span>
          <span v-if="!signInPending">Continue with Google</span>
          <span v-else>Loading...</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.google-icon {
  display: flex;
  background-image: url('https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.427/static/media/google-logo.e086107b.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: 18px;
  padding-right: 20px;
}
.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  border: none;
  box-shadow: 5px 5px 10px 2px rgba(180, 174, 174, 0.8);
  background-color: #fff;
  color: #757575;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin-left: 30%;
}

.google-button:hover {
  background-color: #fafafa;
}

.google-button:active {
  outline: none;
  /* box-shadow: none; */
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4285f4;
}
</style>
