const themeToggle = document.querySelector('.theme-toggle');
const themeToggleDiv = document.querySelector('.theme-toggle div');

setTimeout(() => {
	themeToggleDiv.style.opacity = '1';
}, 0);

if (localStorage.getItem('theme') === 'dark') {
	if (!document.body.classList.contains('dark')) {
		document.body.classList.add('dark');
	}
}

if (localStorage.getItem('transition-complete') === 'true') {
	if (document.body.classList.contains('dark')) {
		themeToggleDiv.classList.add('complete');
	}
}

themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark');

	if (document.body.classList.contains('dark')) {
		setTimeout(() => {
			themeToggleDiv.classList.add('complete');
			localStorage.setItem('transition-complete', 'true');
		}, 501);
	} else {
		themeToggleDiv.classList.remove('complete');
		localStorage.setItem('transition-complete', 'false');
	}

	localStorage.setItem(
		'theme',
		document.body.classList.contains('dark') ? 'dark' : 'light'
	);
});
