<?php
/**
 * Plugin Name:       Poe Code
 * Description:       Super simple code block for fullsiteediting.com.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Carolina Nymark
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       poe-code
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function poe_code_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'poe_code_block_init' );
