<script setup>
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import { reactive } from 'vue'

const topic = reactive([
  { 
    summary: 'Trust', details: '', isOpen: true,
    subTopics1: [
      { 
        summary: 'Security', details: '', isOpen: true,
        subTopics2: [
          { 
            summary: 'Organizational Security', details: '', isOpen: true,
            subTopics3: [
              { summary: 'Authentication', details: '', isOpen: true }
            ]
          },
          { summary: 'Session Security', details: '', isOpen: true },
        ]
      },
      { 
        summary: 'Compliant', details: '', isOpen: false,
        subTopics2: [
          { summary: 'Legal Adherence', details: '', isOpen: false },
        ] 
      },
      { summary: 'Reliable', details: '', isOpen: true },
    ]
  },
  { summary: 'Topic 2', details: '', isOpen: false },
  { summary: 'Topic 3', details: '', isOpen: false },
])

// const subTopic1 = reactive([
//   { summary: 'Security', details: '', isOpen: true },
//   { summary: 'Compliant', details: '', isOpen: true },
//   { summary: 'Reliable', details: '', isOpen: true },
// ])

// const subTopic2 = reactive([
//   { summary: 'Organizational Security', details: '', isOpen: true },
//   { summary: 'Session Security', details: '', isOpen: true },
//   { summary: 'Data Security', details: '', isOpen: true },
// ])

const toggleAccordion = (index, isNested, isNested2, isNested3) => {
  let items = topic;
  if (isNested) {
    items = topic[index].subTopics1;
    if (isNested2) {
      items = topic[index].subTopics1[isNested2].subTopics2;
      if (isNested3) {
        items = topic[index].subTopics1[isNested2].subTopics2[isNested3].subTopics3;
      }
    }
  }
  items.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
  });
};

</script>

<template>
  <ul class="slds-accordion">
    <li class="slds-accordion__list-item" v-for="(item, index) in topic" :key="index">
      <section class="slds-accordion__section" :class="{ 'slds-is-open': item.isOpen }">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action"
              :aria-controls="'referenceId-' + index"
              :aria-expanded="item.isOpen"
              @click="toggleAccordion(index)">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">{{ item.summary }}</span>
            </button>
          </h2>
        </div>
        <div class="slds-accordion__content" :id="'referenceId-' + index" v-if="item.isOpen">{{ item.details }}</div>
        <!-- <div class="slds-accordion__content" id="referenceId-"> -->
        <div class="slds-accordion__content" :id="'referenceId-' + index + '-' + subIndex" v-if="item.isOpen">
          <ul class="slds-accordion">
            <li class="slds-accordion__list-item" v-for="(subItem, subIndex) in item.subTopics1" :key="subIndex">
              <section class="slds-accordion__section" :class="{ 'slds-is-open': subItem.isOpen }">
                <div class="slds-accordion__summary">
                  <h2 class="slds-accordion__summary-heading">
                    <button class="slds-button slds-button_reset slds-accordion__summary-action"
                      :aria-controls="'referenceId-' + (subIndex + topic.length)"
                      :aria-expanded="subItem.isOpen"
                      @click="toggleAccordion(subIndex, true)">
                      <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                      </svg>
                      <span class="slds-accordion__summary-content">{{ subItem.summary }}</span>
                    </button>
                  </h2>
                </div>
                <div class="slds-accordion__content" :id="'referenceId-' + index + '-' + subIndex + '-' + subSubIndex">
                <!-- <div class="slds-accordion__content" id="referenceId-"> -->
                  <ul class="slds-accordion">
                    <li class="slds-accordion__list-item" v-for="(subSubItem, subSubIndex) in subItem.subTopics2" :key="subSubIndex">
                      <section class="slds-accordion__section" :class="{ 'slds-is-open': subSubItem.isOpen }">
                        <div class="slds-accordion__summary">
                          <h2 class="slds-accordion__summary-heading">
                            <button class="slds-button slds-button_reset slds-accordion__summary-action"
                              :aria-controls="'referenceId-' + (subSubIndex + subIndex + index + topic.length + 1)"
                              :aria-expanded="subSubItem.isOpen"
                              @click="toggleAccordion(subSubIndex, subIndex, Index)">
                              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                                <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                              </svg>
                              <span class="slds-accordion__summary-content">{{ subSubItem.summary }}</span>
                            </button>
                          </h2>
                        </div>
                      </section>
                    </li>
                  </ul>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </section>
    </li>
  </ul>
</template>

<style scoped>
</style>
