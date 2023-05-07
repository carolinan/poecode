/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { escape } from './utils';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<button className="poe-code-copy">Copy</button>
			<pre>
				<RichText.Content
					tagName="code"
					value={ escape( attributes.content ) }
				/>
			</pre>
		</div>
	);
}
