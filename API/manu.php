<?php
require __DIR__ . '/woo.php';

$results = $woocommerce->get('products');

$response = [];

foreach ($results as $result){
    $cats = $result[categories];

    if ( count($cats) > 1 ){
        foreach ($cats as $cat){
            if ($cat[id] == 22){
                array_push($response, $result);

            }else{

            }
        }
    }else{
        //ar_dump($cats);

        if ( $cats[0][id] == 22 ){
            //var_dump($cats);
            array_push($response, $result);

        }else{

        }
    }
}

echo json_encode($response);
//echo json_encode($results[0]);
