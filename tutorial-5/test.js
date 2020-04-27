const Module = require('./build/jsTest.js')

Module['onRuntimeInitialized'] = function() {
    Module._callExternalJSMacro(5, 6);

    var str = "data received from Javascript";
    const len = Module.lengthBytesUTF8(str) + 1;
    buf  =  Module._malloc(len);
    Module.stringToUTF8(str, buf, len);
    Module._callExternalJSMacroWithParameters(buf, len);
    Module._free(buf);

    Module._callInternalJSMacro();
    Module._callInternalJSMacroWithParameters(4, 8);
}