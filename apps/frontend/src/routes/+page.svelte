<script lang="ts">
	import VanillaCalendar from 'vanilla-calendar-pro';
	import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';
	import 'bulma/css/bulma.css';
	import { onMount } from 'svelte';
	let calDiv;
	onMount(() => {
		const calendar = new VanillaCalendar(calDiv, {
			type: 'default',
			settings: {
				lang: 'en',
				iso8601: true
			}
		});
		calendar.init();
	});
</script>

<title>Kutano</title>

<section class="hero">
	<div class="hero-body">
		<p class="title">Kutano</p>
		<p class="subtitle">
			Kutano aims to be a dead-simple OSS 🐧 that can a be a replacement for calendly 📅. It should
			be easily pluggable in existing Wordpress 📚 installations, or be used as
			stand-alone-application ⚡.
		</p>
	</div>
</section>

<div class="fixed-grid">
	<div class="grid">
		<div class="cell">
			<div class="card">
				<div class="card-content">
					<p class="title">15 Minute Meeting</p>
					<p class="subtitle">Subtitle</p>
				</div>
			</div>
		</div>
		<div class="cell">
			<section class="section">
				<div class="container">
					<div bind:this={calDiv}></div>
				</div>
			</section>
		</div>
	</div>
</div>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			<strong>Kutano</strong> is
			<a href="https://en.wikipedia.org/wiki/Swahili_language">swahili</a> and means calendar.
		</p>
	</div>
</footer>
