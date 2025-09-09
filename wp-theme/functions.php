<?php
function my_theme_enqueue_assets() {
    $uri = get_template_directory_uri();
    wp_enqueue_style('my-style', $uri . '/dist/assets/index.css', [], null);
    wp_enqueue_script('my-script', $uri . '/dist/assets/index.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_assets');
