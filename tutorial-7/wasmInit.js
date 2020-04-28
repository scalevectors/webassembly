const getDefaultEnv = () => ({
    memoryBase:0,
    tableBase: 0,
    memory: new WebAssembly.Memory({initial: 256}),
    table: new WebAssembly.Table({initial: 2, element:'anyfunc'}),
    abort: console.log
})

async function loadWasm(fileName, importObj = { env:{} }) {
    // Override default env values with the passed env values
    const allEnv = Object.assign({}, getDefaultEnv(), importObj.env);

    // Ensure the importObj object includes the valid env value
    const allImportObjs = Object.assign({}, importObj, {env: allEnv});

    return fetch(fileName)
            .then(response => {
                if(response.ok){
                    return response.arrayBuffer();
                }                 
                throw new Error(`Unable to fetch Webassembly filr ${fileName}`);
            })
            .then(bytes => WebAssembly.instantiate(bytes, allImportObjs));
}