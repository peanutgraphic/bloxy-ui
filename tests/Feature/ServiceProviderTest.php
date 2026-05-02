<?php

declare(strict_types=1);

it('boots without error and merges config', function () {
    expect(config('bloxy-ui.theme.default_app_name'))->toBeString();
});

it('publishes the tailwind preset to the project root with the bloxy-ui-tailwind tag', function () {
    $this->artisan('vendor:publish', ['--tag' => 'bloxy-ui-tailwind', '--force' => true])
        ->assertSuccessful();
});

it('publishes the config to config/bloxy-ui.php with the bloxy-ui-config tag', function () {
    $this->artisan('vendor:publish', ['--tag' => 'bloxy-ui-config', '--force' => true])
        ->assertSuccessful();
});
