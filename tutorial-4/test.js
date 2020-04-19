const Module = require('./build/struct.js')

Module['onRuntimeInitialized'] = function() {

    var ppStruct = Module._malloc(4);

    Module._structCreate(ppStruct);

    var pStruct = Module.getValue(ppStruct, "i32");
    
    Module._structPrint(pStruct); // print default values

    var pa = Module._malloc(4);
    var pb = Module._malloc(4);

    Module._structQuery(pStruct, pa, pb); // query values

    var a = Module.getValue(pa, "i32");
    var b = Module.getValue(pb, "double");
    console.log("Queried values {" + a + ", "+ b + "}");

    // set new value
    Module._structSet(pStruct, 10, 7.25);

    Module._structPrint(pStruct);
    
    Module._structDestory(pStruct);

    Module._free(pa);
    Module._free(pb);
    Module._free(ppStruct);
}