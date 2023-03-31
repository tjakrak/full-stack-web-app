<script setup>
import axios from '@/axios'
import Cookies from 'js-cookie'
import { onMounted } from 'vue'

onMounted(async () => {
  const jwtToken = Cookies.get(jwtToken)
  const config = {
    headers: {
      'Authorization': `${jwtToken}`
    }
  };

  // If token exist, decode the JWT and update companyName
  const response = await axios.get('/api/assessments', config)
  console.log(response)
  assessments.value = response.data
  
})

</script>

<template>
  <div class="organization-summary" style="width: 30%">
    <div class="slds-page-header slds-page-header_vertical">
      <div class="slds-media">
        <div class="slds-media__figure">
          <span class="slds-icon_container slds-icon-standard-opportunity" title="opportunity">
            <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
              <use xlink:href="@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
            </svg>
            <span class="slds-assistive-text">opportunity</span>
          </span>
        </div>
        <div class="slds-media__body">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span class="slds-page-header__title slds-hyphenate" title="Organization Summary"
                  >Organization Summary</span
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="slds-page-header__controls"></div>
      <ul class="slds-page-header__detail-list">
        <li class="slds-page-header__detail-item">
          <div class="slds-text-title slds-truncate" title="Full Name">Full Name</div>
          <div title="First Name Last Name">
            <span>Mr.Test</span>
          </div>
        </li>
        <li class="slds-page-header__detail-item">
          <div class="slds-text-title slds-truncate" title="No of Assessments">
            No of Assessments
          </div>
          <div title="No of Assessments">3</div>
        </li>
        <li class="slds-page-header__detail-item">
          <div class="slds-text-title slds-truncate" title="Last Assessment Score">
            Last Assessment Score
          </div>
          <div title="Last Assessment Score">2</div>
        </li>
        <li class="slds-page-header__detail-item">
          <div class="slds-text-title slds-truncate" title="Trending Weighted Score">
            Trending Weighted Score
          </div>
          <div title="$375,000.00">3</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.organization-summary {
  margin: 20px;
}

.slds-text-title {
  font-weight: bold;
}
</style>
