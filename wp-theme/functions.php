<?php
function theme_enqueue_assets() {
    $theme_dir = get_template_directory();
    $manifest_path = $theme_dir . '/dist/.vite/manifest.json';

    if (!file_exists($manifest_path)) {
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    // CSS
    if (isset($manifest['scss/style.scss']['file'])) {
        wp_enqueue_style(
            'theme-style',
            get_template_directory_uri() . '/dist/' . $manifest['scss/style.scss']['file'],
            [],
            null
        );
    }

    // JS
    if (isset($manifest['js/main.js']['file'])) {
        wp_enqueue_script(
            'theme-script',
            get_template_directory_uri() . '/dist/' . $manifest['js/main.js']['file'],
            [],
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'theme_enqueue_assets');
