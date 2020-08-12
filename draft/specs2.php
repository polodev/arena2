<?php
//gary explain -> processor compare all field
$processors = [
  'id',
  'soc_brand_id',
  'name', // snapdragon
  'description',
  'lightography',
  'gpu',
  'cpu',
];
$phones = [
  'title' => 'Samsung Galaxy S10+',
  'slug' => '',
  'phone_manufacture_id' => 1,
  // comma separted
  'network_technology' => [ 'gsm', 'cdma', 'hspa', 'evdo', 'lte', ],
  'network_2g_bands' => [
    'name' => 'GSM',
    'frequency' => [850, 900, 1800, 1900,],
  ],

  'network_2g_bands_variation' => [
    [
      'variation_name' => 'Only Usa',
      'variation_value' => [
        'name' => 'CDMA',
        'frequency' => [800, 1900],
      ]
    ]
  ],

  'network_3g_bands' => [
    'name' => 'hsdpa',
    // comma separted
    'frequency' => [850, 900, '1700 (aws)', 1900, 2100],
  ],

  'network_3g_bands_variation' => [
    [
      'variation_name' => 'Only Usa',
      'variation_value' => [
        'name' => 'CDMA2000',
        'frequency' => ['1xevdo'],
      ]
    ]
  ],

  'network_4g_bands' => [
    'name' => 'LTE Band',
    'frequency' => ['1(2100)', '2(1900)', '3(1800)', '4(1700/2100)', '5(850)', '7(2600)', '8(900)', '12(700)', '13(700)', '17(700)', '18(800)', '19(800)', '20(800)', '25(1900)', '26(850)', '28(700)', '32(1500)', '38(2600)', '39(1900)', '40(2300)', '41(2500)', '66(1700/2100)', ],
  ],

  'network_4g_bands_variation' => [
    [
      'variation_name' => 'Usa',
      'variation_value' => [
        'name' => 'LTE Band',
        'frequency' => ['1(2100)', '2(1900)', '3(1800)', '4(1700/2100)', '5(850)', '7(2600)', '8(900)', '12(700)', '13(700)', '14(700)', '17(700)', '18(800)', '19(800)', '20(800)', '25(1900)', '26(850)', '28(700)', '29(700)', '30(2300)', '38(2600)', '39(1900)', '40(2300)', '41(2500)', '46', '66(1700/2100)', '71(600)', ],
      ]
    ]
  ],
  'gprs' => 'yes',
  'edge' => 'yes',
  'availability' => 'available', // rumor// upcoming
  'release_date' => 'month and year selection like mess website',

  'colors' => '',
  'height' => 157.6, // mm
  'width' => 74.1, // mm
  'thickness' => 7.8, // mm
  'weight' => 175, // g
  'weight_variation' => [
    'variation_name' => 'Ceramic',
    'variation_value' => 198,
  ],

  'sim_slot' => 'Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)',
  'sim_size' => 'nano',
  'protection_build' => 'Front glass (Gorilla Glass 6), back glass (Gorilla Glass 5), aluminum frame Front glass (Gorilla Glass 6), ceramic body',
  'protection_iprating' => 'IP68 dust/water proof (up to 1.5m for 30 mins)',

  'display_type' => 'Dynamic amoled capacitive touchscreen',
  'display_size' => 6.4, // inch
  'display_resolution' => '1440 x 3040', // pixel
  'display_screen_to_body_ratio' => 88.9, // %
  'display_ratio' => '19:9',
  'display_technology' => 'amoled',
  'display_pixel_per_inch' => 522,
  'display_protection' => 'Corning gorilla glass 6',

  // platform
  'os' => 'android',
  'os_version' => '9.0 (pie)',
  'ui' => 'one ui',
  'processor_id' => 1,
  'processor_id_variation' => 2,

  // storage
  'card_slot' => 'microsd',
  'card_slot_desc' => ' up to 1 TB (uses shared SIM slot) - dual SIM model only',
  'internal_ram' => '1 TB, 12 GB RAM, 128/512 GB, 8 GB RAM',

  // camera
  'number_of_main_camera' => 3,
  'main_camera_megapixel' => 20,
  // new line array
  'main_camera_other_info' => [
    '12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS',
    '12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom',
    '16 MP, f/2.2, 12mm (ultrawide), 1.0µm',
  ],
  'main_camera_features' => 'LED flash, auto-HDR, panorama',
  'main_camera_video' => '2160p@60fps, 1080p@240fps, 720p@960fps, HDR, dual-video rec.',

  'number_of_front_camera' => 2,
  'front_camera_megapixel' => 10,
  // new line array
  'front_camera_other_info' => [
    '10 MP, f/1.9, 26mm (wide), 1.22µm, Dual Pixel PDAF',
    '8 MP, f/2.2, 22mm (wide), 1.12µm, depth sensor',
  ],
  'front_camera_features' => 'Dual video call, Auto-HDR',
  'front_camera_video' => '2160p@30fps, 1080p@30fps',

  // sounds system
  'loudspeker' => 'Yes, with stereo speakers',
  '_35_jack' => true,

  // new line separated
  'sound_other_info' => [
    '32-bit/384kHz audio',
    'Active noise cancellation with dedicated mic',
    'Dolby Atmos/AKG sound',
  ],

  'wlan' =>     'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
  'bluetooth' =>    '5.0, A2DP, LE, aptX',
  'gps' =>  'Yes, with A-GPS, GLONASS, BDS, GALILEO',
  'nfc' =>  'Yes',
  'radio' =>    'FM radio (USA & Canada only)',
  'usb' =>  '3.1, Type-C 1.0 reversible connector',
  'usb_interface' => 'type-c',
  // new line separated
  "sensors" => [
    "Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2",
    "ANT+",
    "Bixby natural language commands and dictation",
    "Samsung DeX (desktop experience support)",
  ],
  'battery' => 'Non-removable Li-Ion',
  'battery_size' => 4100,
  'fast_battery_charging' => '15w',
  'battery_other_info' => [
    'Fast wireless charging 15W',
    'Power bank/Reverse wireless charging 9W',
  ],
  'model' => '',
  'sar' => '',
  'price' => 800

];
