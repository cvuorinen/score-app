<template>
    <Teleport to="body">
        <div v-if="show" class="dialog-overlay" @click="handleOverlayClick">
            <div class="dialog" @click.stop>
                <div class="dialog-header">
                    <h2>{{ title }}</h2>
                    <button class="close-button" @click="closeDialog">×</button>
                </div>

                <div class="dialog-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { onKeyStroke } from "@vueuse/core";

const props = defineProps<{
    show: boolean;
    title: string;
}>();

const emit = defineEmits<{
    close: [];
}>();

function closeDialog() {
    emit("close");
}

function handleOverlayClick() {
    closeDialog();
}

// Close dialog with Escape key
watch(() => props.show, (newValue) => {
    if (newValue) {
        const stopKeyStroke = onKeyStroke("Escape", () => {
            closeDialog();
            stopKeyStroke();
        });
    }
});
</script>

<style scoped>
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
    border-radius: 1em;
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
    padding: 0.5em 1em 0.5em 2em;
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
