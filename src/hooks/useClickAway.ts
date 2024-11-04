import { onDestroy, onMount } from 'svelte';

export function useClickAway(ref: any, callback: any) {
	const handleClickOutside = (event: any) => {
		if (ref && ref.current && !ref.current.contains(event.target)) {
			callback();
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});
	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
}
