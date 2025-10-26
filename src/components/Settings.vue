<template>
    <div class="settings">
        <button class="settings-button" @click="showDialog = true">
            <font-awesome-icon icon="gear"></font-awesome-icon>

        </button>

        <Dialog :show="showDialog" title="Settings" @close="handleClose">
            <div class="settings-content">
                <div class="setting-item">
                    <label for="home-team">
                        Home Team
                    </label>
                    <div>
                        <input id="home-team" type="text" v-model="localHomeTeam" />
                    </div>
                </div>

                <div class="setting-item">
                    <label for="away-team">
                        Away Team
                    </label>
                    <div>
                        <input id="away-team" type="text" v-model="localAwayTeam" />
                    </div>
                </div>

                <div class="setting-item">
                    <label for="period-length">
                        Period Length
                    </label>
                    <div>
                        <input id="period-length" type="number" v-model.number="localPeriodLength" min="1" max="60" />
                        minutes
                    </div>
                </div>

                <div class="setting-item">
                    <label for="bonus-limit">
                        Foul Limit
                    </label>
                    <div>
                        <input id="bonus-limit" type="number" v-model.number="localBonusLimit" min="1" max="10" />
                        before bonus
                    </div>

                </div>

                <div class="setting-actions">
                    <button class="btn btn-secondary" @click="handleClose">Cancel</button>
                    <button class="btn btn-primary" @click="saveSettings">Save</button>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Dialog from "./Dialog.vue";
import { useScoreStore } from "../store";

const store = useScoreStore();
const showDialog = ref(false);

// Local copies of settings for editing
const localHomeTeam = ref(store.settings.homeTeam);
const localAwayTeam = ref(store.settings.awayTeam);
const localPeriodLength = ref(store.settings.periodLength);
const localBonusLimit = ref(store.settings.bonusLimit);

// Reset local values when dialog opens
watch(showDialog, (newValue) => {
    if (newValue) {
        localPeriodLength.value = store.settings.periodLength;
        localBonusLimit.value = store.settings.bonusLimit;
    }
});

function saveSettings() {
    store.updateSettings({
        homeTeam: localHomeTeam.value,
        awayTeam: localAwayTeam.value,
        periodLength: localPeriodLength.value,
        bonusLimit: localBonusLimit.value,
    });
    showDialog.value = false;
}

function handleClose() {
    showDialog.value = false;
}
</script>

<style scoped>
.settings {
    display: inline-block;
    margin-left: 0.5em;
}

.settings-button {
    padding: 0.3em 0.6em;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1em;
    cursor: pointer;
}

.settings-button:hover {
    color: white;
}

.setting-item {
    margin-bottom: 1em;
    display: flex;
    gap: 1em;

    &>label {
        width: 30%;
        display: block;
        margin-bottom: 0.5em;
        font-size: 1.1em;
        font-weight: bold;
        color: #ffa500;
        line-height: 3;
        text-align: right;
    }

    input {
        margin-right: 0.2em;
        padding: 0.7em 1em;
        font-size: 1.1em;
        border: 0.1em solid rgba(255, 255, 255, 0.3);
        border-radius: 0.3em;
        background: rgba(255, 255, 255, 0.05);
        color: white;
        transition: all 0.2s;

        &:focus {
            outline: none;
            border-color: #ffa500;
            background: rgba(255, 255, 255, 0.1);
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            opacity: 1;
        }
    }
}

.setting-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 0.1em solid rgba(255, 255, 255, 0.1);
}

.btn {
    padding: 0.7em 1.5em;
    font-size: 1em;
    border: none;
    border-radius: 0.3em;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: bold;
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.btn-primary {
    background: #ffa500;
    color: #111;
}

.btn-primary:hover {
    background: #ffb733;
}
</style>
