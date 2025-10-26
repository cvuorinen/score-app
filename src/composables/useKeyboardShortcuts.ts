/**
 * Returns true if an input field is currently focused
 * Used to disable keyboard shortcuts when typing in inputs
 */
export function useIsInputFocused() {
  return () => {
    const activeElement = document.activeElement;
    if (!activeElement) return false;

    const tagName = activeElement.tagName.toLowerCase();
    return (
      tagName === "input" ||
      tagName === "textarea" ||
      activeElement.getAttribute("contenteditable") === "true"
    );
  };
}
