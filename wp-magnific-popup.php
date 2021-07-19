<?php
/*
Plugin Name: WP Mag-Pop
Plugin URI: https://github.com/mangomkt/wp-magnific-popup
Description: Adding magnific functionality to WP.
Author: Curtis Grant
Author URI: https://www.mangomkt.com/
Version: 0.4
*/
function wpmp_scripts() {

	wp_enqueue_script( 'magpop-js', plugin_dir_url( __FILE__ ) . 'js/magpop.js',array('jquery'), '1.0', true);
	wp_enqueue_script( 'magpop-js', plugin_dir_url( __FILE__ ) . 'js/common-magpop.js',array('jquery'), '1.0', true);
	wp_enqueue_style( 'magpop-css', plugin_dir_url( __FILE__ ) . 'css/magpop.css', '1.0', true);	

}

add_action('wp_enqueue_scripts', 'wpmp_scripts', 99);