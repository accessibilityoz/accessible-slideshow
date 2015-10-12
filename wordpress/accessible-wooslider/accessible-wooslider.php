<?php
/*
Plugin Name: Accessible WooSlider
Plugin URI:  https://github.com/accessibilityoz/accessible-slideshow/tree/master/wordpress
Description: A small overlay for WooSlider to make it accessible
Version:     1.0
Author:      AccessibilityOz
Author URI:  http://www.accessibilityoz.com/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: accessible-wooslider
*/

/*  Copyright 2014  AccessibilityOz  (email : matt@accessibilityoz.com.au)
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function accessible_wooslider_scripts() {
	wp_enqueue_script('accessible-wooslider-js', plugins_url( 'js/a11y.js', __FILE__ ),'jquery-flexslider',null,true);
}

function accessible_wooslider_styles() {
	wp_enqueue_style('accessible-wooslider-css', plugins_url( 'css/a11y.css', __FILE__ ));
}


add_action( 'wp_enqueue_scripts', 'accessible_wooslider_scripts', 99999999 );
add_action( 'wp_enqueue_scripts', 'accessible_wooslider_styles', null );

?>
