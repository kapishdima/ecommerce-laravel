<?php

use Illuminate\Support\Facades\Vite;

if (!function_exists('viteAsset')) {
    function viteAsset($url)
    {
        return Vite::asset($url, 'build/front');
    }
}

if (!function_exists('useFrontStyles')) {
    function useFrontStyles()
    {
        return Vite::useBuildDirectory('build/front')->withEntryPoints('resources/sass/app.scss');
    }
}
if (!function_exists('useFrontJS')) {
    function useFrontJS()
    {
        return Vite::useBuildDirectory('build/front')->withEntryPoints(['resources/js/front/app.js', 'resources/js/front/preloader/index.js']);
    }
}

if (!function_exists('useJsAssets')) {
    function useJsAssets()
    {
        return Vite::useBuildDirectory('build/js')->withEntryPoints('resources/js/index.tsx');
    }
}

if (!function_exists('useAdminAssets')) {
    function useAdminAssets()
    {
        return Vite::useBuildDirectory('build/backoffice')->withEntryPoints('resources/backoffice/index.tsx');
    }
}
