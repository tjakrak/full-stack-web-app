<script setup>

</script>

<template>
    <div class="assessment-summary" style="width:30%">
        <div class="slds-page-header slds-page-header_vertical">
            <div class="slds-media">
                <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-standard-opportunity" title="opportunity">
                        <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                        </svg>
                        <span class="slds-assistive-text">opportunity</span>
                    </span>
                </div>
                <div class="slds-media__body">
                    <div class="slds-page-header__name">
                        <div class="slds-page-header__name-title">
                            <h1>
                                <span class="slds-page-header__title slds-hyphenate" title="Assessments Summary">Assessments Summary</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slds-page-header__controls"></div>
            <ul class="slds-page-header__detail-list">
                <li class="slds-page-header__detail-item">
                    <div class="slds-text-title slds-truncate" title="Field 1">Full Name</div>
                    <div title="First Name Last Name">
                        <span>Mr.Test</span>
                    </div>
                </li>
                <li class="slds-page-header__detail-item">
                    <div class="slds-text-title slds-truncate" title="Close Date">No of Assessments</div>
                    <div title="No of Assessments">3</div>
                </li>
                <li class="slds-page-header__detail-item">
                    <div class="slds-text-title slds-truncate" title="Opportunity Owner">Last Assessment Score</div>
                    <div title="Last Assessment Score">2</div>
                </li>
                <li class="slds-page-header__detail-item">
                    <div class="slds-text-title slds-truncate" title="Amount">Trending Weighted Score</div>
                    <div title="$375,000.00">3</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.assessment-summary {
    margin: 20px;
}
</style>