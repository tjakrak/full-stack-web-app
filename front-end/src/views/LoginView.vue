<script setup>
  import {ref, watch} from 'vue'
  import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</script>

<template>
    <div class="slds-grid slds-grid_frame slds-grid_align-center slds-p-around_large">
      <div class="slds-box slds-theme_default slds-m-around_medium">
        <h2 class="slds-text-heading_medium slds-p-bottom_small">Login</h2>
        <div class="slds-form slds-form_stacked">
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="username">Username</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
              </svg>
              <input id="username" type="text" class="slds-input" v-model="username">
            </div>
          </div>
          <div class="slds-form-element">
            <label class="slds-form-element__label" for="password">Password</label>
            <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
              <svg class="slds-input__icon" aria-hidden="true">
                <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
              </svg>
              <input id="password" type="password" class="slds-input" v-model="password">
            </div>
          </div>
          <div class="slds-form-element">
            <button class="slds-button slds-button_brand" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </template>