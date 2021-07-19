<?php
/*
Plugin Name: WP Magnific Popup
Plugin URI: https://github.com/mangomkt/wp-magnific-popup
Description: Adding magnific functionality to WP.
Author: Curtis Grant
Author URI: https://www.mangomkt.com/
Version: 1.00
*/

wp_enqueue_script( 'magpop-js', plugin_dir_url( __FILE__ ) . '/js/magpop.js', '1.0', true);
wp_enqueue_style( 'magpop-css', plugin_dir_url( __FILE__ ) . '/css/magpop.css', '1.0', true);	