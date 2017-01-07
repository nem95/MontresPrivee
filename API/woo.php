<?php
header('Access-Control-Allow-Origin: *');
require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://www.eowatch.fr/',
    'ck_a5ba0862d6937423f67b000888263394faafa8ad',
    'cs_9c190760827f9338af14916444b1042e7ecc1421',
    [
        'wp_api' => true,
        'version' => 'wc/v1',
    ]
);

