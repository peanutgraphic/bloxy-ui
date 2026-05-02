<?php

declare(strict_types=1);

return [
    /*
    |--------------------------------------------------------------------------
    | BLOXY UI configuration
    |--------------------------------------------------------------------------
    |
    | Settings governing the bloxy-ui PHP companion package. Most behavior
    | lives in the @peanutgraphic/bloxy-ui npm package; this file is the
    | wiring slot for any future server-side concerns (asset versioning,
    | CSP nonces, etc.).
    |
    */

    'theme' => [
        /*
        |----------------------------------------------------------------------
        | Default app name shown in the shells' top bars
        |----------------------------------------------------------------------
        |
        | Apps typically pass appName as a prop to <CockpitShell> and
        | <PortalShell>; this default is used when none is provided.
        |
        */
        'default_app_name' => env('BLOXY_UI_APP_NAME', config('app.name', 'BLOXY')),
    ],
];
