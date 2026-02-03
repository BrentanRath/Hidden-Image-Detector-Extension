if (!CONFIG.shouldRunOnThisPage()) {
	console.log('Not running on this URL:', window.location.href);
} else {
	console.log('Running on:', window.location.href);
	console.log('Searching for hidden images:');
	let hiddenCount = 0;
	document.querySelectorAll('img').forEach(img => {
		if (CONFIG.findHiddenElements) {
			const style = window.getComputedStyle(img);
			if (style.visibility === 'hidden' || style.display === 'none' || style.opacity === '0') {
				hiddenCount++;
				console.log('Hidden image found:', img);
				console.log('Classes:', img.className);
				console.log('ID:', img.id);
				console.log('Style:', style.visibility, style.display, style.opacity);
				console.log('---');
			}
		}
	});``
	if (CONFIG.changeHiddenElements) {
		if (hiddenCount === 0) {
			console.log('No hidden images found!');
		} else {
			console.log(`Found ${hiddenCount} hidden image(s)`);
		}
	}

	const showAllImages = () => {
		const allImages = document.querySelectorAll('img');
		console.log(`Found ${allImages.length} images, making them visible...`);

		allImages.forEach(img => {
			img.style.setProperty('visibility', 'visible', 'important');
			img.style.setProperty('display', 'block', 'important');
			img.style.setProperty('opacity', '1', 'important');
		});
	};

	if (CONFIG.changeHiddenElements) {
		showAllImages();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', showAllImages);
	} else {
		showAllImages();
	}

	const observer = new MutationObserver(showAllImages);
	observer.observe(document.body, { childList: true, subtree: true });
}