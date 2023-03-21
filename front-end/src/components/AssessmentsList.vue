<script scoped>
export default {
  name: 'AssessmentList',
  data() {
    return {
      Assessment: [
        {
          id: 1,
          assignment: 'Assessment 1',
          description: 'Description for Assignment 1',
          dueDate: '2023-04-01',
          status: 'In Progress',
          assignedTo: 'John Doe',
          assignedBy: 'Jane Smith'
        },
        {
          id: 2,
          assignment: 'Assessment 2',
          description: 'Description for Assignment 2',
          dueDate: '2023-05-01',
          status: 'Not Started',
          assignedTo: 'John Doe',
          assignedBy: 'Jane Smith'
        },
        {
          id: 3,
          assignment: 'Assessment 3',
          description: 'Description for Assignment 3',
          dueDate: '2023-06-01',
          status: 'Completed',
          assignedTo: 'John Doe',
          assignedBy: 'Jane Smith'
        }
      ]
    };
  }
};
</script>

<template>
<article class="slds-card">
  <div class="slds-card__header slds-grid">
    <header class="slds-media slds-media_center slds-has-flexi-truncate">
      <div class="slds-media__figure">
        <span class="slds-icon_container slds-icon-standard-task" title="task">
          <svg class="slds-icon slds-icon_small" aria-hidden="true">
            <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
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
        <button class="slds-button slds-button_neutral">New</button>
      </div>
    </header>
  </div>
  <div class="slds-card__body">
    <table class="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid" aria-label="Example table in a Card">
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
        <tr class="slds-hint-parent">
          <th scope="row">
            <div class="slds-truncate" title="Assessment 1">
              <a href="#" tabindex="-1">Assessment 1</a>
            </div>
          </th>
          <td role="gridcell">
            <div class="slds-truncate" title="Mar 10, 2023 10:00 AM">Mar 10, 2023 10:00 AM</div>
          </td>
          <td role="gridcell">
            <div class="slds-truncate" title="80%">80%</div>
          </td>
          <td role="gridcell">
            <div class="slds-truncate" title="Incomplete">Incomplete</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <footer class="slds-card__footer">
    <a class="slds-card__footer-action" href="#">View All
      <span class="slds-assistive-text">Assessment</span>
    </a>
  </footer>
</article>


    <!-- <div class="slds-card">
      <div class="slds-card__header slds-grid slds-has-flexi-truncate">
        <h2 class="slds-text-heading_small slds-truncate">Assessment</h2>
        <div class="slds-grid slds-no-flex">
          <button class="slds-button slds-button_neutral">New</button>
        </div>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <ul class="slds-list slds-list_vertical">
          <li v-for="assignment in Assessment" :key="assignment.id">
            <div class="slds-grid slds-wrap slds-grid_vertical-align-center">
              <div class="slds-col slds-size_1-of-12">
                <div class="slds-truncate" title="Assignment">{{ assignment.assignment }}</div>
              </div>
              <div class="slds-col slds-size_3-of-12">
                <div class="slds-truncate" title="Description">{{ assignment.description }}</div>
              </div>
              <div class="slds-col slds-size_2-of-12">
                <div class="slds-truncate" title="Due Date">{{ assignment.dueDate }}</div>
              </div>
              <div class="slds-col slds-size_2-of-12">
                <div class="slds-truncate" title="Status">{{ assignment.status }}</div>
              </div>
              <div class="slds-col slds-size_2-of-12">
                <div class="slds-truncate" title="Assigned To">{{ assignment.assignedTo }}</div>
              </div>
              <div class="slds-col slds-size_2-of-12">
                <div class="slds-truncate" title="Assigned By">{{ assignment.assignedBy }}</div>
              </div>
              <div class="slds-col slds-size_1-of-12">
                <div class="slds-grid slds-grid_align-end">
                  <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" title="Edit">
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                    </svg>
                    <span class="slds-assistive-text">Edit</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
</template>
  
<style scoped>
.slds-card {
  margin: 20px;
}
</style>