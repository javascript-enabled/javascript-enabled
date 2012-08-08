/**
 * The Greeting module
 */

/*global console */
var greeting = ( function() {
    "use strict";
         return {
            hello : function hello(name) {
                return 'Hello, ' + name + "!";
            }
        };
    }());
