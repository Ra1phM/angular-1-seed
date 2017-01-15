# Scalable and clean structure for Angular 1.6+ applications

This project is a starting point for a scalable and easily manageable Angular 1.6+ application.
It makes uses of Angular Components, browserify and gulp.

Based on the tutorial : http://code.ciphertrick.com/2015/11/23/scalable-angularjs-setup-with-gulp-browserify/

# Usage

- `npm install` to install all required node modules.
- `gulp` to start the browserSync server.
- `gulp clean` to clean the public directory.

See `gulpfile.js` for more tasks.

# Basic Structure

    src/ # Contains the source code
        app/
            app.js # The entry point for Angular
            component1/ # An Angular Component
                c1.component.js
                c1.template.html
            component2/
                c2.component.js
                c2.template.html
                component2-1/
                    c2-1.component.js # Must be required in c2.component.js
                    c2-1.template.html
        assets/
            css/ # Here are generated CSS
            scss/ # Here are source SCSS files
            js/ # All other third-party javascript libraries that are not installed using npm
        env/
            dev.js
            prod.js
        bundle.js # The application bundled in one file 
    public/ # Contains the processed files for deploymenents

