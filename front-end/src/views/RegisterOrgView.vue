<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import axios from '@/axios'
import Cookies from 'js-cookie'

const router = useRouter();
const orgName = ref('');

async function submitOrgName() {
  if (orgName.value !== '') {
    try {
      // Get JWT token from cookie
      const token = Cookies.get('token');

      // Set Authorization header with token value
      const config = {
        headers: {
          'Authorization': `${token}`
        }
      };

      // Register organization to the backend and waiting for the response
      const response = await axios.post('/api/org/register', {
        orgName: orgName
      }, config);

      console.log(response);
      // Get jwt token and store to the cookie
      const newToken = response.data.accessToken
      Cookies.set('token', newToken)
      alert(`Thank you for submitting your organization name: ${orgName.value}`);
      router.push('/');
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response.data.message
      console.log(error.response.data)
      return alert(errorMessage)
    }
  }
}

</script>

<style scoped>
.slds-card {
  padding: 20px;
  width: 400px;
  max-width: 100%;
}
</style>

<template>
  <div class="slds-grid slds-grid_frame slds-align_absolute-center">
    <div class="slds-card slds-card_boundary slds-col slds-size_4-of-12">
      <div class="slds-card__header slds-grid slds-align-center slds-text-heading_medium">
        Enter Your Organization Name
      </div>
      <div class="slds-card__body slds-grid slds-grid_align-center">
        <div class="slds-form slds-form_inline">
          <label class="slds-form-element__label slds-m-right_small" for="org-name-input">
            Organization Name:
          </label>
          <div class="slds-form-element__control">
            <input type="text" id="org-name-input" v-model="orgName" class="slds-input" placeholder="Enter your organization name" />
          </div>
        </div>
      </div>
      <div class="slds-card__footer slds-grid slds-align-center">
        <button class="slds-button slds-button_neutral slds-col slds-size_1-of-1" @click="submitOrgName">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
