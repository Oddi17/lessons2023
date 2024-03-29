<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitebfac42b93eb974ad936eece9f8faf16
{
    public static $prefixLengthsPsr4 = array (
        'o' => 
        array (
            'orderproject\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'orderproject\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitebfac42b93eb974ad936eece9f8faf16::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitebfac42b93eb974ad936eece9f8faf16::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitebfac42b93eb974ad936eece9f8faf16::$classMap;

        }, null, ClassLoader::class);
    }
}
