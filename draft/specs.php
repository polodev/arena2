classified ads sites
=========================

## 01-Build-a-classified-ads-site-Introduction-and-demo (Media-no: 1)

introduction

## 02-Build-a-classified-ads-site-Installing-Laravel-and-setting-up (Media-no: 2)

installing laravel
setting up default auth


## 03-Build-a-classified-ads-site-Introducing-nested-sets.mp4

install nested set laravel package

## 04-Build-a-classified-ads-site-Fake-email

open account classified ads site fake email

## 05-Build-a-classified-ads-site-Laravel-DebugBar (Media-no: 5)

Installing laravel laravel-debugber
just add service provider in config/app.php file
in env set to local

## 06-Build-a-classified-ads-site-Breaking-up-the-default-template (Media-no: 6)
split master layout to header and navigation

## 07-Build-a-classified-ads-site-Populating-areas (Media-no: 7)

using nested set in migration and model file
inside migration for nested set
~~~php
NestedSet::columns($table);
~~~
inside model for nested set
~~~php
use NodeTrait;
~~~

~~~php
public function getRouteKeyName() {
 return 'slug';
}

$areas = [

    [
    'name' => 'US',
    'children' => [
      [
        'name' => 'Alabama',
        'children' => [
          [
            ['name' => 'Auburn']
          ]
        ]
      ]
    ]

  ]

];
~~~
making slug. have  to make eloquent listener

inside AppServiceProvider

~~~php
\App\Area::crating(function ($area) {
  $prefix = $area->parent ? $area->parent : "";
  $area->slug = str_slug($prefix . $area->name);
})
~~~

## 08-Build-a-classified-ads-site-Area-selection.mp4

~~~
Area::get()->toTree();

foreach($country->children as $state) {

}
~~~

## 09-Build-a-classified-ads-site-Choosing-and-persisting-an-area (Media-no: 9)
make slug persist

making a view composer inside http folder


~~~
public function boot(){
  View::compose('*', AreaComposer::class);
}
public function register() {
  $this->app->singleton(AreaComposer::class);
}
~~~
Area composer class
~~~
class AreaComposer {
  private $area ;

  public function compose(View $view)
  {
    if(!$this->area) {
      $this->area = Area::where('slug', session()->get('area', 'us')->first );
    }
    return $view->with('area', $this->area);

  }
}

// inside config folder access
config()->get('fresh.defaults.area');
~~~

## 10-Build-a-classified-ads-site-Populating-categories.mp4

making categories table

name, slug, price(float), NestedSet::columns($table);


<?php
$phones = [
  'title' => 'Samsung Galaxy S10+',
  'slug'  => 'Some Slug',
  'manufacture_id' => 'mobile phone manufacture id. eg. 1',
  'network' => [
    [
      'technology' => [],
      '2g_bands' => [
        'global' => [
          'gsm' => [850, 900, 1800, 1900,],
        ],
        'usa' => [
          'cdma' =>
        ],
      ],
      '3g_bands' => [
        'global' => [
          'hsdpa' => [850, 900, 1700 (aws), 1900, 2100],
        ],
        'usa' => [
          'cdma2000' => []
        ]
      ],
      '4g_bands' => [
        'global' => [
          'lte band' => [],
          'usa' => []
        ]
      ],
      'speed' => [
        'hspa' => 'hspa 42.2/5.76 Mbps, lte-a(7ca)',
        'category' => 20,
      ],
      'gprs' => true,
      'edge' => true,
    ]
  ],
  // end network
  'launch' => [
    'availability' => true,
    'release_month' => 'march',
    'release_year' => 2019,
  ],
  // end launch
  'design' => [
    'height' => 157.6, // mm
    'width' => 74.1, // mm
    'thickness' => 7.8, // mm
    'weight' => 175, // g
    'colors' => '',
    'variations' => [
      'weights' => [
        'variation_name' => 'ceramic',
        'weight' => 198
      ]
    ],
    'sim_slot' => 'Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)',
    'sim_size' => [ 'nano', 'nano' ],
    'protection' => [
      'build' => '',
      'ip_rating' => '',
    ]
  ]
  // end design
  'display' => [],
  'platform' => [
    'os' => 'android',
    'version' => '9.0 (pie)',
    'ui' => 'one ui',
  ],
  'processor' => [], // there won't be a processor field
  /**
   * processors will have different table
   * id, soc_brand_id, name, lightography, gpu, cpu
   * phone_processor [pivot]
   * phone_id, processor_id, country(nullable) [eg: 'usa and china']
   *
   * */
  'memory' => [],


'number_of_main_camera' => 3,
'main_camera_megapixel' => 20,
'main_camera_array' => [
  '12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS'
  '12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom'
  '16 MP, f/2.2, 12mm (ultrawide), 1.0µm',
],
'main_camera_features' => 'LED flash, auto-HDR, panorama',
'main_camera_video' => '2160p@60fps, 1080p@240fps, 720p@960fps, HDR, dual-video rec.',

'number_of_front_camera' => 1,
'front_camera_megapixel' => 20,
'front_camera_array' => [
  '12 MP, f/1.5-2.4, 26mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS'
  '12 MP, f/2.4, 52mm (telephoto), 1/3.6", 1.0µm, AF, OIS, 2x optical zoom'
  '16 MP, f/2.2, 12mm (ultrawide), 1.0µm',
],
'front_camera_features' => 'LED flash, auto-HDR, panorama',
'front_camera_video' => '2160p@60fps, 1080p@240fps, 720p@960fps, HDR, dual-video rec.',







];






























































