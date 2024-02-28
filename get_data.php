<?php

$country_data = [
    "India" => [
        "Uttar Pradesh" => [
            "Jhansi",
            "Banda",
            "Mahoba",
            "Lucknow",
            "Noida",
            "Kalinjar",
            "Kanpur",
            "Jhansi",
            "Lalitpur",
            "Gorakhpur",
            "Mirzapur",
            "Chitrakoot",
            "Varanasi"
        ],
        "Madhya Pradesh" => [
            "Chhatarapur",
            "Bhopal",
            "Orchha"
        ],
        "Uttrakhand" => [
            "Haridwar"
        ],
    ],
    "Pakistan" => [
        "Lahore" => [
            "city1",
            "city2",
            "city3"
        ],
        "Islamabad" => [
            "city1",
            "city2",
            "city3",
            "city4",
            "city5"
        ]
    ]
];


$requested_data = $_REQUEST['request_data'];
$country_name   = $_REQUEST['country'] ?? '';
$state_name     = $_REQUEST['state'] ?? '';
// $city_name      = $_REQUEST['city'];

// if country requested 
if ($requested_data === "country") {
    $country_res = $country_data;

    echo json_encode(array_keys($country_res));
}

// if state requested 
else if ($requested_data === "state") {
    $state_res = $country_data[$country_name];

    echo json_encode(array_keys($state_res));
}
// if city requested 
else if ($requested_data === "city") {
    $city_res = $country_data[$country_name][$state_name];

    echo json_encode($city_res);
}

