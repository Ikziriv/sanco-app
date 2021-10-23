// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function clickOutside(node: { contains: (arg0: any) => any; dispatchEvent: (arg0: CustomEvent<unknown>) => void; }) {
    function handleClick(event: { target: any; defaultPrevented: any; }) {
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