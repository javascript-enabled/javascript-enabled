//prevent JSLint from complaining
/*global test, equal, greeting */

test('Module greeting', function() {
    "use strict";
    equal(greeting.hello("world"), 'Hello, world!', 'Greeting module works fine.');
});
