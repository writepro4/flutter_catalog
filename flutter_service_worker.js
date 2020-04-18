'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "8341727a2fd1be077dae0891e190968b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/LICENSE": "f2437019c73898de7ef52016e84fa2c0",
"assets/AssetManifest.json": "e7f07d7fe763a760dd58bd6c1bb87ef9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/res/images/material_design_3.png": "c4c9411cb6b23dc218688d48f6bf514c",
"assets/res/images/dart-side.png": "6162e4c6ba269007cd5f2ae8d78e69af",
"assets/res/images/material_design_4.jpg": "43e36ec401db9d8a6c44bb3d327b99b3",
"assets/res/images/animated_flutter_lgtm.gif": "b652a58dd464c07a80516f7a8f99ddf1",
"assets/res/images/launcher_icon.png": "d8697155bb89d87d8f5ce939cd3c0c6e",
"assets/res/lottie/world.json": "8140dee112e141cd5c53c04e5727cb58",
"assets/res/lottie/thumbs-up.json": "4b4cb2af6893316e53405eae64157cce",
"assets/res/DroidSansMono.ttf": "78c0de8abf66567262ee5e4e653fc11c",
"assets/lib/routes/lists_reorderable_ex.dart": "54aeb79c2adb6096bcbd1b756cfc7c50",
"assets/lib/routes/persistence_file_rw_ex.dart": "df6d8f80c47c3d10008b9a083cb001e3",
"assets/lib/routes/nav_tabs_ex.dart": "8c43bd30b98198d36a51965143916350",
"assets/lib/routes/widgets_card_ex.dart": "7a514d3fa090c917948454746f628194",
"assets/lib/routes/widgets_stateful_widgets_ex.dart": "f8415671e2c87dcc3b95dbc7dbc960f7",
"assets/lib/routes/widgets_textfield_ex.dart": "0fcb919ef51ec6fef76530e66526bdbd",
"assets/lib/routes/state_streamcontroller_ex.dart": "9f2e2ad8fa6e80dc67cb220daa71da6e",
"assets/lib/routes/animation_opacity_ex.dart": "9bd106dd8992471cd3611137a492f4ba",
"assets/lib/routes/nav_routes_ex.dart": "aa29af6262a6097b892c629a7cd37326",
"assets/lib/routes/lists_grid_list_ex.dart": "e6e1560aa90665c0b5af0067b0db4cf6",
"assets/lib/routes/networking_googlebooks_ex.dart": "529f8c01a76e16b61457e1ec35b8a053",
"assets/lib/routes/persistence_preference_ex.dart": "bdfef99eb587dc05fd896b15434162bb",
"assets/lib/routes/lists_datatable_ex.dart": "55e8d38924ac842a5dcc1aa56cb450c5",
"assets/lib/routes/lists_swipe_to_dismiss_ex.dart": "9ef0138777bce94c68b82bef7f1626eb",
"assets/lib/routes/appbar_backdrop_ex.dart": "6876c61483b912c4ba34c2133e9fffa7",
"assets/lib/routes/widgets_icon_ex.dart": "ffe60315c18693af4cda9c30d3aa22bd",
"assets/lib/routes/persistence_sqlite_ex.dart": "e1131c6c8a52e2d390eea368c283fef9",
"assets/lib/routes/nav_pageselector_ex.dart": "7ae27aea5f8ec072fd89f757d562db9f",
"assets/lib/routes/nav_bottom_navbar_ex.dart": "a4c7383e19e32134c170339f87942761",
"assets/lib/routes/appbar_search_ex.dart": "df5ee756b24c669db41518541b08b541",
"assets/lib/routes/lists_expansion_tile_ex.dart": "708eedb65127f66177f0feba6d6f8180",
"assets/lib/routes/lists_listview_builder_ex.dart": "a41696e961d80246572fa4872a543fb1",
"assets/lib/routes/firebase_vote_ex.dart": "03e7e6daa9eef0858cb56f3b980aad16",
"assets/lib/routes/animation_animated_container_ex.dart": "c59400eadbf13a993a654f9430d25e5c",
"assets/lib/routes/state_scoped_model_ex.dart": "bddb75def35843dc60be01b96396f2f7",
"assets/lib/routes/state_streambuilder_ex.dart": "d294211b6fbaf73ff8148978aebfbc89",
"assets/lib/routes/persistence_hive_ex.dart": "33161ec9ccfb39366bba3a1d6004dff7",
"assets/lib/routes/animation_hero_ex.dart": "aff31c2eedd9e0a45c42c647b07ebbc1",
"assets/lib/routes/nav_draggable_scrollable_sheet_ex.dart": "4a1451dd91ee36b9ea9aca44f5ba96c1",
"assets/lib/routes/layouts_expanded_ex.dart": "87c3b9ea65148fbef5a8beb79e56a0d2",
"assets/lib/routes/appbar_bottom_appbar_ex.dart": "042e6ca2509a34ce5548b42c5d50d4e3",
"assets/lib/routes/appbar_sliver_appbar_ex.dart": "f9a566a0a51876d767c28f09d075b237",
"assets/lib/routes/widgets_buttons_ex.dart": "d15b80a42b6be9d1a75cd6b55c5344be",
"assets/lib/routes/plugins_markdown_ex.dart": "d122fdfc0bd81b9319e7a5f2e101a137",
"assets/lib/routes/appbar_basic_appbar_ex.dart": "568d73360a88b1999358663437801ce7",
"assets/lib/routes/firebase_chatroom_ex.dart": "ca5ece1416682815ead8ca07ee4af5d4",
"assets/lib/routes/charts_pie_chart_ex.dart": "99b7800b96bd31924978fec375618aa4",
"assets/lib/routes/about.dart": "ef6874fd184e9d762ac3cb9d026f7d84",
"assets/lib/routes/firebase_mlkit_ex.dart": "8576077f7a5ccb32ba0e80ccd8c21d45",
"assets/lib/routes/firebase_login_ex.dart": "342b653fae3ca600953302938a345f1e",
"assets/lib/routes/widgets_textformfield_ex.dart": "99fd4b94786932adb6c275ad290ee11a",
"assets/lib/routes/animation_animated_widget_ex.dart": "a5b365d67bc33c1ee32db3e5ff08e27e",
"assets/lib/routes/nav_nav_drawer_header_ex.dart": "89a17380383351ba64f2220b62c0efe7",
"assets/lib/routes/state_provider_ex.dart": "6bd72365cd69b292d3b55bad29566a74",
"assets/lib/routes/animation_lottie_ex.dart": "8df96229a833ce42e10277aa2b89dc5f",
"assets/lib/routes/widgets_dropdown_button_ex.dart": "47c578e658849061077cc32c1d7bc569",
"assets/lib/routes/persistence_sembast_ex.dart": "884f2f8ea040ffc4b9be062749131f9d",
"assets/lib/routes/nav_bottom_tabbar_ex.dart": "284d97e0d1639365421ce29ad14a0f66",
"assets/lib/routes/state_inherited_widget_ex.dart": "ee2eb1c5d08c662913c7f8bb13f3ea9d",
"assets/lib/routes/nav_bottom_sheet_ex.dart": "ea80a2322c6b2e63652cb7058922fdcc",
"assets/lib/routes/layouts_wrap_ex.dart": "c4833d3f6e96c05007233ae40ce3b840",
"assets/lib/routes/state_bloc_lib_ex.dart": "496417ef1bf3933d44c14b47f307c66d",
"assets/lib/routes/charts_time_series_ex.dart": "effa8e092c30e0570436e1e4ccf8315b",
"assets/lib/routes/layouts_stack_ex.dart": "b9bc81272ec1f971faf9a4eea9ec2017",
"assets/lib/routes/networking_rest_api_send_ex.dart": "6aeaecaaa194a93490a60e18ea436f0f",
"assets/lib/routes/animation_low_level_ex.dart": "b5bfcf71788ccede18dbe3c4d28de6b0",
"assets/lib/routes/animation_animated_builder_ex.dart": "6a514bdfec66c64b3d35a25135fd6be8",
"assets/lib/routes/networking_hacker_news_ex.dart": "d6a272400ce26d93ae1c5e86838abd88",
"assets/lib/routes/lists_list_tile_ex.dart": "9a7a163659f0f666c799a5fedabb5664",
"assets/lib/routes/nav_dialogs_ex.dart": "729e930173d4c64d4c5c1f8e19b5da9d",
"assets/lib/routes/widgets_image_ex.dart": "83bd194de9e5cb34bdc96b0d167f9b29",
"assets/lib/routes/plugins_image_picker_ex.dart": "38365e65c514fab9a0d3462f15171478",
"assets/lib/routes/layouts_row_col_ex.dart": "9994030b62e0ae798d9317b5858b1240",
"assets/lib/routes/plugins_webview_ex.dart": "4cba8302520c338b070f05d1b0fddff0",
"assets/lib/routes/plugins_local_auth_ex.dart": "8663c99ce29c77d39e35562c57b6fbf8",
"assets/lib/routes/state_bloc_ex.dart": "bbc395283e0fd5bc2326035035cc09bc",
"assets/lib/routes/networking_rest_api_fetch_ex.dart": "1a9a238d0d5f24f907f36c071b4ee51e",
"assets/lib/routes/widgets_text_ex.dart": "eb8204c2b94c936583bfe0def69927f4",
"assets/lib/routes/layouts_container_padding_center_ex.dart": "5f9a4675f0b1f10797fad24ce3adc754",
"assets/FontManifest.json": "b2d9bf71b4e037a8d6e30aee3b605125",
"assets/packages/flutter_gallery_assets/animated_images/animated_flutter_stickers.webp": "b44800b701a3d0bb1285726003b1ae5c",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "06c19391a3ccd79a9628f84741b3e1b8",
"index.html": "5386bbc87d0c0fa42b4bc6fb8f388a55",
"/": "5386bbc87d0c0fa42b4bc6fb8f388a55"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
