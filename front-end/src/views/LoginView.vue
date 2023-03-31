<script setup>
import axios from '@/axios'
import Cookies from 'js-cookie'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {

  try {
    // Register user to the backend and waiting for the response
    const response = await axios.post('/api/user/login', { 
      email: email.value, 
      password: password.value
    })
    // Get jwt token and store to the cookie
    console.log(response.data)
    const jwtToken = response.data.accessToken
    Cookies.set('jwtToken', jwtToken)
    // Redirect to the home page
    router.push('/');
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(error.response.data);
    return alert(errorMessage)
  }
}
</script>

<template>
  <!-- <Carrousel></Carrousel> -->
  <div class="slds-grid slds-grid_frame slds-grid_align-center slds-p-around_large">
    <div class="slds-box slds-theme_default slds-m-around_medium">
      <h2 class="slds-text-heading_medium slds-p-bottom_small">Login</h2>
      <div class="slds-form slds-form_stacked">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="email">Email</label>
          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
            <svg class="slds-input__icon" aria-hidden="true">
              <use
                xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#user"
              ></use>
            </svg>
            <input id="email" type="text" class="slds-input" v-model="email" autocomplete="email" />
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
            <input id="password" type="password" class="slds-input" v-model="password" autocomplete="new-password" />
          </div>
        </div>
        <div class="slds-form-element">
          <div class="slds-text-body_small"> don't have an account? 
            <RouterLink to="/register">Register</RouterLink>
          </div>
        </div>
        <div class="slds-form-element">
          <button class="slds-button slds-button_brand" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slds-form-element {
  --slds-c-button-brand-color-background: var(--lwc-palettePurple50);
  --slds-c-button-brand-color-background-hover: var(--lwc-palettePurple30);
  --slds-c-button-brand-color-border: var(--lwc-palettePurple50);
  --slds-c-button-brand-color-border-hover: var(--lwc-palettePurple30);
  --slds-c-button-brand-text-color: var(--lwc-paletteNeutral100);
}
</style>
