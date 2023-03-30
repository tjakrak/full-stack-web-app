<script setup>
import axios from '@/axios'
import Cookies from 'js-cookie'
import { ref } from 'vue'

const assessmentName = ref()
const emit = defineEmits()
async function addNewAssessment() {
  try {
    // Get JWT token from cookie
    const jwtToken = Cookies.get('jwtToken');

    // Set Authorization header with token value
    const config = {
      headers: {
        'Authorization': `${jwtToken}`
      }
    };
    
    const response = await axios.post('/api/assessment/register', { 
      assessment_name: assessmentName.value, 
    }, config)

    emit('close')
  } catch(error) {
    console.log(error)
    // const errorMessage = error.response.data.message
    // return alert(errorMessage)
  }
}


</script>

<template>
  <div>
    <!-- <header class="slds-modal__header">
      <h2 class="slds-text-heading_medium">New Assessment</h2>
    </header> -->
    <div class="slds-modal__content slds-p-around_medium">
      <form class="slds-form" @submit.prevent="submitForm">
        <div class="slds-form-element">
          <label class="slds-form-element__label" for="assessmentName">Assessment Name</label>
          <div class="slds-form-element__control">
            <input
              type="text"
              id="assessment-name"
              class="slds-input"
              v-model="assessmentName"
              required
            />
          </div>
        </div>
        <div class="slds-modal__footer">
          <button class="slds-button slds-button_neutral" 
            @click="$emit('close')">
            Cancel
          </button>
          <button class="slds-button slds-button_brand"
            @click="addNewAssessment"
            type="submit"
            :disabled="!assessmentName"
            :assessmentName="assessmentName">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.slds-modal__header {
  background-color: #f3f4f5;
  border-bottom: 1px solid #d8dde6;
  padding: 0.75rem;
  text-align: center;
}

.slds-modal__content {
  padding: 0.75rem;
  text-align: center;
}

.slds-modal__footer {
  background-color: #f3f4f5;
  border-top: 1px solid #d8dde6;
  padding: 0.75rem;
  text-align: center;
}
</style>