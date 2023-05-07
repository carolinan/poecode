window.addEventListener( 'load', () => {
	// Find all code blocks.
	const codeBlocks = document.querySelectorAll('.wp-block-poena-code');

	codeBlocks.forEach( ( codeBlock ) => {
		const copyButton = codeBlock.querySelector(
			'.poe-code-copy'
		);
		const codeContent = codeBlock.querySelector(
			'pre code'
		);

		if ( navigator.clipboard) {
			copyButton.addEventListener('click', () => {
				navigator.clipboard.writeText(codeContent.innerText).then(() => {
					copyButton.innerText = 'Copied!';
					setTimeout(() => {
					copyButton.innerText = 'Copy';
					}, 2000);
				});
			});
		} else {
			// Hide the button if the browser doesn't support the clipboard API
			copyButton.style.display = 'none';
		}

	} );
} );
