const m: typeof import("./module") = require("module.js");

function test(): string {
    const session = pfcGetCurrentSession();
    m.foo("Hello");
    return getScriptPath().toString();
}
