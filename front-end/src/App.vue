<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'

</script>

<template>
  <header>
    <!-- <div class="slds-form-element">
      <label class="slds-form-element__label" for="username">Username</label>
      <div class="slds-form-element__control">
        <input type="text" id="username" class="slds-input" />
      </div>
    </div>

    <div>
      <svg class="slds-icon slds-icon-text-default slds-icon_x-small">
        <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
      </svg>
    </div> -->

    <!-- <div class="slds-accordion">
      <template v-for="section in sections">
        <section :class="{ 'slds-is-open': section.id === activeSectionId }" :key="section.id">
          <div class="slds-accordion__summary" @click="activeSectionId = (activeSectionId === section.id ? null : section.id)">
            <span class="slds-accordion__summary-action slds-text-link_reset">{{ section.title }}</span>
          </div>
          <div class="slds-accordion__content" v-show="section.id === activeSectionId">
            {{ section.content }}
          </div>
        </section>
      </template>
    </div> -->

    <ul class="slds-accordion">
      <li class="slds-accordion__list-item">
        <section class="slds-accordion__section slds-is-open">
          <div class="slds-accordion__summary">
            <h2 class="slds-accordion__summary-heading">
              <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-45" aria-expanded="true" title="Accordion summary">
                <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                </svg>
                <span class="slds-accordion__summary-content">Accordion summary</span>
              </button>
            </h2>
          </div>
          <div hidden="" class="slds-accordion__content" id="referenceId-45">Accordion details - A</div>
        </section>
      </li>
      <li class="slds-accordion__list-item">
        <section class="slds-accordion__section">
          <div class="slds-accordion__summary">
            <h2 class="slds-accordion__summary-heading">
              <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-46" aria-expanded="false" title="Accordion summary">
                <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                </svg>
                <span class="slds-accordion__summary-content">Accordion summary</span>
              </button>
            </h2>
          </div>
          <div hidden="" class="slds-accordion__content" id="referenceId-46">Accordion details - B</div>
        </section>
      </li>
      <li class="slds-accordion__list-item">
        <section class="slds-accordion__section">
          <div class="slds-accordion__summary">
            <h2 class="slds-accordion__summary-heading">
              <button class="slds-button slds-button_reset slds-accordion__summary-action" aria-controls="referenceId-47" aria-expanded="false" title="Accordion summary">
                <svg class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                  <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                </svg>
                <span class="slds-accordion__summary-content">Accordion summary</span>
              </button>
            </h2>
          </div>
          <div hidden="" class="slds-accordion__content" id="referenceId-47">Accordion details - C</div>
        </section>
      </li>
    </ul>
    
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>  -->
  </header>

  <!-- <RouterView /> -->
</template>

<style lang="scss">
  $static-font-path: '/assets/fonts/webfonts';
  @import '@salesforce-ux/design-system/scss/index.scss';
</style>

<style scoped>
/* 
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

</style>
