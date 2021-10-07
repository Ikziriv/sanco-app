// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function clickOutside(node) {
    function handleClick(event) {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('click-outside'));
        };
    }
    document.addEventListener('click', handleClick, true)

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true)
        }
    }
}