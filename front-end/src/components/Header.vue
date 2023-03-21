<template>
    <!-- <div class="slds-brand-band slds-brand-band_medium slds-brand-band_group"></div> -->
    <div class="slds-builder-header_container">
        <header class="slds-builder-header">
            <div class="slds-builder-header__item">
            <a href="#" class="slds-builder-header__item-action" title="Back">
                <span class="slds-icon_container slds-icon-utility-back slds-current-color">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                    <use xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#back"></use>
                </svg>
                <span class="slds-assistive-text">Back</span>
                </span>
            </a>
            </div>
            <div class="slds-builder-header__item">
            <div class="slds-builder-header__item-label slds-media slds-media_center">
                <div class="slds-media__figure">
                <span class="slds-icon_container slds-icon-utility-builder slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#builder"></use>
                    </svg>
                </span>
                </div>
                <div class="slds-media__body">AI Harmonizer</div>
            </div>
            </div>
            <nav class="slds-builder-header__item slds-builder-header__nav">
            <ul class="slds-builder-header__nav-list">
                <li class="slds-builder-header__nav-item slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                <button class="slds-button slds-builder-header__item-action slds-media slds-media_center" aria-haspopup="true" aria-expanded="false" title="Click to open menu">
                    <span class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-page slds-current-color">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#page"></use>
                        </svg>
                    </span>
                    </span>
                    <span class="slds-media__body">
                    <span class="slds-truncate" title="Dropdown">Dropdown</span>
                    <span class="slds-icon_container slds-icon-utility-chevrondown slds-current-color slds-m-left_small">
                        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
                        </svg>
                    </span>
                    </span>
                </button>
                </li>
            </ul>
            </nav>
            <div class="slds-builder-header__item slds-has-flexi-truncate">
            <h1 class="slds-builder-header__item-label">
                <span class="slds-truncate" title="Page Type">Page Type</span>
            </h1>
            </div>
            <div class="slds-builder-header__item slds-builder-header__utilities">
            <div class="slds-builder-header__utilities-item">
                <a href="#" class="slds-builder-header__item-action slds-media slds-media_center">
                <span class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-settings slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
                    </svg>
                    </span>
                </span>
                <span class="slds-media__body">
                    <span class="slds-truncate" title="Link">Settings</span>
                </span>
                </a>
            </div>
            <div class="slds-builder-header__utilities-item">
                <a href="#" class="slds-builder-header__item-action slds-media slds-media_center">
                <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-utility-help slds-current-color">
                    <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#help"></use>
                    </svg>
                    </span>
                </div>
                <div class="slds-media__body">Help</div>
                </a>
            </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
.slds-builder-header_container {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin-bottom: 20px;
}

</style>