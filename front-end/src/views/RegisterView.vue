<script setup>
import { ref } from 'vue'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import axios from '@/axios'

const firstName = ref('');
const lastName = ref('');
const companyName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const passwordConf = ref('');

const Register = async() => {
  if (!firstName || !lastName || !companyName || !username.value || 
  !email.value || !password.value || !passwordConf.value) {
    return alert("Please enter all fields");
  }

  if (password.value.length < 8) {
    return alert("Password must be a least 8 characters long");
  }

  if (password.value !== passwordConf.value) {
    return alert("Passwords do not match");
  }

  // create an object with the data that is going to be sent to the backend
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    companyName: companyName.value,
    username: username.value,
    email: username.value,
    password: password.value
  };


  try {
    const response = await axios.post('/api/user/register', { 
      email: username.value, 
      password: password.value
    });

    const successMessage = response.data.message;
    console.log(response.data);
    return alert(successMessage);

  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(error.response.data.message);
    // throw new Error(error.response.status);

    return alert(errorMessage);
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
            <label class="slds-form-element__label" for="username">Username</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#user"
                ></use>
              </svg>
              <input id="username" type="text" class="slds-input" v-model="username" autocomplete="username" />
            </div>
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="username">Email</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#email"
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
            <label class="slds-form-element__label" for="password">Confirm Password</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use
                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#lock"
                ></use>
              </svg>
              <input id="passwordConf" type="password" class="slds-input" v-model="passwordConf" autocomplete="new-password" />
            </div>
          </div>
          <div class="slds-form-element">
            <button class="slds-button slds-button_brand" @click="login">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
