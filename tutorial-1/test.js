const Module = require('./build/printf.js')

Module['onRuntimeInitialized'] = function() {
    // function call without parameter    
    Module._print();

    // function called with str argument
    var jsStr = "hello from JS";
    const length = Module.lengthBytesUTF8(jsStr) + 1;
    var cStr = Module._malloc(length);
    Module.stringToUTF8(jsStr, cStr, length);
    Module._printWithParameters(cStr);

    Module._free(cStr);
}