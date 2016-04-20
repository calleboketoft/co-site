System.config({
    baseURL: '/',
    warnings: true,
    map: {
        'angular2': '../node_modules/angular2',
        'rxjs': '../node_modules/rxjs',
        '@ngrx/store': '../node_modules/@ngrx/store',
        'co-browser-storage': '../node_modules/co-browser-storage'
    },
    packages: {
        'src': {
            defaultExtension: 'js'
        },
        'angular2': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        '@ngrx/store': {
            defaultExtension: 'js',
            main: 'dist/index.js'
        },
        'co-browser-storage': {
            defaultExtension: 'js'
        }
    }
});
//# sourceMappingURL=systemjs.config.js.map