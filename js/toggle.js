if (localStorage.getItem('theme') === 'dark') {
	if (!document.body.classList.contains('dark')) {
		document.body.classList.add('dark');
	}
}

const themeToggle = document.querySelector('.theme-toggle');
const themeToggleDiv = document.querySelector('.theme-toggle div');

themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	themeToggleDiv.classList.toggle('complete');

	localStorage.setItem(
		'theme',
		document.body.classList.contains('dark') ? 'dark' : 'light'
	);
});
