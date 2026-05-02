<?php

declare(strict_types=1);

namespace Bloxy\Ui;

use Illuminate\Support\ServiceProvider;

class BloxyUiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/bloxy-ui.php',
            'bloxy-ui'
        );
    }

    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/bloxy-ui.php' => config_path('bloxy-ui.php'),
            ], 'bloxy-ui-config');

            $this->publishes([
                __DIR__ . '/../resources/tailwind/preset.js' => base_path('tailwind.preset.js'),
            ], 'bloxy-ui-tailwind');
        }
    }
}
