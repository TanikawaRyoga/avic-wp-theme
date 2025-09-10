<?php
function avic_enqueue_scripts() {
  // CSSを読み込む
  wp_enqueue_style(
    'avic-style',
    get_template_directory_uri() . '/dist/css/style.min.css',
    array(),
    filemtime(get_template_directory() . '/dist/css/style.min.css')
  );

  // JSを読み込む（必要なら）
  wp_enqueue_script(
    'avic-main',
    get_template_directory_uri() . '/dist/js/main.js',
    array(),
    filemtime(get_template_directory() . '/dist/js/main.js'),
    true
  );
}
add_action('wp_enqueue_scripts', 'avic_enqueue_scripts');
