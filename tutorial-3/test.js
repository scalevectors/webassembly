const Module = require('./build/number.js')

Module['onRuntimeInitialized'] = function() {
    // function call without parameter    
    Module._printInteger();

    // Test 1: get Integer pointer
    var cIntPtr = Module._getIntPtr();
    var jsIntValue = Module.getValue(cIntPtr, "i32"); // or call Module.HEAP32[cIntPtr >> 2] return same value

    console.log("JS {jsIntValue via _getIntPtr: " + jsIntValue + "}");

    // Test 2: Query address
    var pIntPtr2 = Module._malloc(4);
    Module._queryIntPtr(pIntPtr2);
    var jsIntValue2 = Module.HEAP32[pIntPtr2 >> 2]; // or call Module.getValue()
    console.log("JS {jsIntValue via _queryIntPtr: " + jsIntValue2 + "}");
    Module._free(pIntPtr2);

    // Test 3: Set integer value via pointer
    var pIntPtr3 = Module._malloc(4);
    Module.setValue(pIntPtr3, 55, "i32"); // or Module.HEAP32[pIntPtr3 >> 2] = 55;
    Module._setIntPtr(pIntPtr3);
    Module._free(pIntPtr3);

    // Test 4: Get float value
    var cFloatPtr = Module._getFloatPtr();
    var jsFloatValue = Module.getValue(cFloatPtr, "float"); // or call Module.HEAP32[cIntPtr >> 2] return same value
    console.log("JS {jsFloatValue via _getFloatPtr: " + jsFloatValue + "}");

    var pFloatPtr3 = Module._malloc(4);    
    Module.HEAPF32[pFloatPtr3 >> 2] = 5.15;  // or Module.setValue(pFloatPtr3, 5.14, "float");
    Module._setFloatPtr(pFloatPtr3);
    Module._free(pFloatPtr3);
}