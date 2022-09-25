<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import logo from '../assets/logo.png';

	const activeClass =
		'block py-2 pr-4 pl-3 md:p-0 rounded md:border-0 text-white bg-amber-700 md:bg-transparent md:text-amber-700 md:dark:text-white dark:bg-amber-600 md:dark:bg-transparent';
	const nonActiveClass =
		'block py-2 pr-4 pl-3 md:p-0 rounded md:border-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen';

	const pages = [
		{ name: 'Home', href: '/' },
		{ name: 'Coffees', href: '/coffees' }
	];
	$: pageHref = $page.routeId;
</script>

<div>
	<Navbar navClass="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b" let:hidden let:toggle>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="MyCoffee Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold text-amber-700"
				>My Coffee</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			{#each pages as page}
				<NavLi {activeClass} {nonActiveClass} href={page.href} active={`/${pageHref}` === page.href}
					>{page.name}</NavLi
				>
			{/each}
		</NavUl>
	</Navbar>
</div>
