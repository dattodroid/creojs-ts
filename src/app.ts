const m = require("module");

function test(): string {
    const session = pfcGetCurrentSession();
    m.foo("Hello");
    return getScriptPath().toString();
}
