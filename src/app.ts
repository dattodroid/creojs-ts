const m: typeof import("./mods/foo") = require("foo.js");

function test(): string {
    const session = pfcGetCurrentSession();
    m.foo("Hello");
    return getScriptPath().toString();
}
