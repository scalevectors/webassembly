const Module = require('./build/string.js')

Module['onRuntimeInitialized'] = function() {

    // Print internal string
    Module._printCString();

    // Test 1 - get string from C
    var pcStr = Module._getString();
    var jsStr = Module.UTF8ToString(pcStr);
    console.log("_getString: " + jsStr);

    // Test 2 - query String From C
    var ppcStr = Module._malloc(4);
    Module._queryString(ppcStr); 

    //  Use Module.HEAP32[qptr >> 2] or Module.HEAP32[qptr / 4] or Module.getValue(ppcStr, "i32")
    //  You will get the same results
    var pcStr = Module.getValue(ppcStr, "i32");
    var jsStr = Module.UTF8ToString(pcStr);
    console.log("_queryString: " + jsStr);
    Module._free(ppcStr);

    // Test 3 - copy string from C
    var length = jsStr.length + 1;
    var pcStr1 = Module._malloc(length);
    Module._copyString(pcStr1); 
    var jsStr1 = Module.UTF8ToString(pcStr1);
    console.log("_copyString: " + jsStr1);
    Module._free(pcStr1);

    // Test 4 - update C string data
    var jsStr2 = "Data passed from JS to C";
    const length2 = Module.lengthBytesUTF8(jsStr2) + 1;
    pcStr2  =  Module._malloc(length2);
    Module.stringToUTF8(jsStr2, pcStr2, length2);
    var result = Module._compareString(pcStr2, length2);
    console.log("_compareString before setString: " + result);
    Module._setString(pcStr2);
    var result = Module._compareString(pcStr2, length2);
    console.log("_compareString after setString: " + result);

    Module._free(pcStr2);
}