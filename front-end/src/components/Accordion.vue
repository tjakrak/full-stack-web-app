<template>
  <ul class="slds-accordion">
    <li class="slds-accordion__list-item" v-for="(item, index) in accordionItems" :key="index">
      <section class="slds-accordion__section" :class="{ 'slds-is-open': item.isOpen }">
        <div class="slds-accordion__summary">
          <h2 class="slds-accordion__summary-heading">
            <button class="slds-button slds-button_reset slds-accordion__summary-action"
              :aria-controls="'referenceId-' + index"
              :aria-expanded="item.isOpen"
              @click="toggleAccordion(index)">
              <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
              </svg>
              <span class="slds-accordion__summary-content">{{ item.summary }}</span>
            </button>
          </h2>
        </div>
        <div class="slds-accordion__content" :id="'referenceId-' + index" v-if="item.isOpen">{{ item.details }}</div>
      </section>
    </li>
  </ul>
</template>

<script setup>
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import { reactive } from 'vue'

const accordionItems = reactive([
  { summary: 'Accordion summary', details: 'Accordion details - A', isOpen: true },
  { summary: 'Accordion summary', details: 'Accordion details - B', isOpen: false },
  { summary: 'Accordion summary', details: 'Accordion details - C', isOpen: false },
])

const toggleAccordion = (index) => {
  accordionItems.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen
    } else {
      item.isOpen = false
    }
  })
}
</script>
