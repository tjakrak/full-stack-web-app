<script setup>
import axios from '@/axios'
import AssessmentPopUp from './AssessmentPopUp.vue'
import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'

let jwtToken = ''
let isPopupVisible = ref(false)
const assessments = ref()

function showPopup() {
  isPopupVisible.value = true
}

function closePopup() {
  getAssessments();
  isPopupVisible.value = false
}

async function getAssessments() {
  if (jwtToken) {
      // Set Authorization header with token value
      const config = {
        headers: {
          'Authorization': `${jwtToken}`
        }
      };

      // If token exist, decode the JWT and update companyName
      const response = await axios.get('/api/assessments', config)
      
      assessments.value = response.data
    }
}

onMounted(async () => {
  jwtToken = Cookies.get('jwtToken')
  getAssessments();
})

</script>

<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <span class="slds-icon_container slds-icon-standard-task" title="task">
            <svg class="slds-icon slds-icon_small" aria-hidden="true">
              <use xlink:href="@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
            </svg>
            <span class="slds-assistive-text">task</span>
          </span>
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <a href="#" class="slds-card__header-link slds-truncate" title="Assessment (1)">
              <span>Assessment (1)</span>
            </a>
          </h2>
        </div>
        <div class="slds-no-flex">
          <button @click="showPopup" class="slds-button slds-button_neutral">New</button>
            <div v-if="isPopupVisible" class="slds-popover" role="dialog">
              <AssessmentPopUp @close="closePopup"></AssessmentPopUp>
            </div>
        </div>
      </header>
    </div>
    <div class="slds-card__body">
      <table
        class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout"
        role="grid"
        aria-label="Example table in a Card"
      >
        <thead>
          <tr class="slds-line-height_reset">
            <th class="" scope="col">
              <div class="slds-truncate" title="Assessment">Assessment</div>
            </th>
            <th class="" scope="col">
              <div class="slds-truncate" title="Date &amp; Time">Date &amp; Time</div>
            </th>
            <th class="" scope="col">
              <div class="slds-truncate" title="Score">Score</div>
            </th>
            <th class="" scope="col">
              <div class="slds-truncate" title="Status">Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="slds-hint-parent"
            v-for="(assessment, index) in assessments"
            :key="assessment.id"
          >
            <th scope="row">
              <div class="slds-truncate" :title="assessment.assessment_name">
                <RouterLink :to="`assessment/${assessment.id}`">{{ assessment.assessment_name }}</RouterLink>
              </div>
            </th>
            <td role="gridcell">
              <div class="slds-truncate" :title="assessment.createdAt">{{ new Date(assessment.createdAt).toLocaleString() }}</div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate" :title="assessment.score">{{ assessment.score }}</div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate" :title="assessment.status">{{ assessment.status }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="slds-card__footer">
      <a class="slds-card__footer-action" href="#"
        >View All
        <span class="slds-assistive-text">Assessment</span>
      </a>
    </footer>
  </article>
</template>

<style scoped>
.slds-popover {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slds-card {
  margin: 20px;
}
</style>
