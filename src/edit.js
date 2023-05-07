/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, onRemove } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<button className="poe-code-copy">Copy</button>
			<pre>
				<RichText
					tagName="code"
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					onRemove={ onRemove }
					placeholder={ __( 'Write code…' ) }
					aria-label={ __( 'Code' ) }
					preserveWhiteSpace
					__unstablePastePlainText
				/>
			</pre>
		</div>
	);
}
