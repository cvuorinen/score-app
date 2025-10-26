<template>
    <div class="help">
        <button class="help-button" @click="showDialog = true">
            <font-awesome-icon icon="circle-info"></font-awesome-icon>

        </button>

        <Dialog :show="showDialog" title="Keyboard Shortcuts" @close="showDialog = false">
            <div class="shortcut-section">
                <div class="shortcut">
                    <kbd>Space</kbd> / <kbd>Enter</kbd>
                    <span>Toggle clock start/stop</span>
                </div>
                <div class="shortcut">
                    <kbd>1</kbd>
                    <span>Increment home score</span>
                </div>
                <div class="shortcut">
                    <kbd>§</kbd>
                    <span>Decrement home score</span>
                </div>
                <div class="shortcut">
                    <kbd>↑</kbd>
                    <span>Increment away score</span>
                </div>
                <div class="shortcut">
                    <kbd>↓</kbd>
                    <span>Decrement away score</span>
                </div>
                <div class="shortcut">
                    <kbd>Page Up</kbd>
                    <span>Increment period</span>
                </div>
                <div class="shortcut">
                    <kbd>Page Down</kbd>
                    <span>Decrement period</span>
                </div>
                <div class="shortcut">
                    <kbd>Ctrl</kbd> + <kbd>B</kbd>
                    <span>Play buzzer sound</span>
                </div>
                <div class="shortcut">
                    <kbd>Ctrl</kbd> + <kbd>R</kbd>
                    <span>Reset clock</span>
                </div>
            </div>

            <div class="shortcut-note">
                💡 Tip: Click on scores, period, or fouls with <kbd>Ctrl</kbd> held to decrement
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dialog from "./Dialog.vue";

const showDialog = ref(false);
</script>

<style scoped>
.help {
    display: inline-block;
    margin-left: 0.5em;
}

.help-button {
    padding: 0.3em 0.6em;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1em;
    cursor: pointer;
}

.help-button:hover {
    color: white;
}

.shortcut-section {
    margin-bottom: 2em;
}

.shortcut {
    display: flex;
    align-items: center;
    gap: 1em;
    margin: 0.7em 0;
    padding: 0.5em;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.3em;
}

kbd {
    display: inline-block;
    padding: 0.3em 0.7em;
    background: #333;
    border: 0.1em solid #555;
    border-radius: 0.3em;
    font-family: monospace;
    font-size: 0.9em;
    color: #fff;
    box-shadow: 0 0.2em 0 #111;
    min-width: 2em;
    text-align: center;
}

.shortcut span {
    flex: 1;
    color: rgba(255, 255, 255, 0.8);
}

.shortcut-note {
    margin-top: 2em;
    padding: 1em;
    background: rgba(255, 165, 0, 0.1);
    border-left: 0.3em solid #ffa500;
    border-radius: 0.3em;
    font-size: 0.95em;
    line-height: 1.6;
}

.shortcut-note kbd {
    font-size: 0.85em;
    padding: 0.2em 0.5em;
}
</style>
