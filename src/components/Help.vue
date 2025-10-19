<template>
    <div class="help">
        <button class="help-button" @click="showDialog = true"><b>?</b> Help</button>

        <Teleport to="body">
            <div v-if="showDialog" class="dialog-overlay" @click="showDialog = false">
                <div class="dialog" @click.stop>
                    <div class="dialog-header">
                        <h2>Keyboard Shortcuts</h2>
                        <button class="close-button" @click="showDialog = false">×</button>
                    </div>

                    <div class="dialog-content">
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
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onKeyStroke } from "@vueuse/core";

const showDialog = ref(false);

// Close dialog with Escape key
onKeyStroke("Escape", () => {
    showDialog.value = false;
});
</script>

<style scoped>
.help {
    display: inline-block;
    margin-left: 0.5em;
}

.help-button {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1em;
    cursor: pointer;
    transition: all 0.2s;
}

.help-button:hover {
    color: white;
}

.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.dialog {
    background: #222;
    border: 0.2em solid rgba(255, 255, 255, 0.2);
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    border-bottom: 0.1em solid rgba(255, 255, 255, 0.1);
}

.dialog-header h2 {
    margin: 0;
    color: white;
    font-size: 1.5em;
}

.close-button {
    width: 2em;
    height: 2em;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 2em;
    line-height: 1;
    cursor: pointer;
    border-radius: 0.2em;
    transition: background 0.2s;
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.2);
}

.dialog-content {
    padding: 2em;
    color: rgba(255, 255, 255, 0.9);
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

/* Scrollbar styling */
.dialog::-webkit-scrollbar {
    width: 0.5em;
}

.dialog::-webkit-scrollbar-track {
    background: #111;
}

.dialog::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 0.25em;
}

.dialog::-webkit-scrollbar-thumb:hover {
    background: #666;
}
</style>
