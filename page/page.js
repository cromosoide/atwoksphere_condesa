(()=>{
    "use strict";
    var e = {
        version: "7.10.7",
        websiteUrl: "http://localhost:4000",
        functionsUrl: "http://localhost:5000",
        helpUrl: "https://help.briskine.com/",
        dashboardTarget: "gt-dashboard",
        eventDestroy: "briskine-destroy",
        eventPage: "briskine-page",
        eventStatus: "briskine-status",
        eventSandboxCompile: "briskine-template-compile"
    };
    const t = e = Object.assign(e, {
        websiteUrl: "https://www.briskine.com",
        functionsUrl: "https://app.briskine.com"
    });
    let n;
    function o(e) {
        const o = e.data || {};
        "ckeditor-insert" === o.type && function(e, t={}) {
            const n = e.ckeditorInstance;
            n && n.model.change((e=>{
                t.removeShortcut && e.model.modifySelection(n.model.document.selection, {
                    direction: "backward",
                    unit: "word"
                });
                const o = n.data.processor.toView(t.content)
                  , s = n.data.toModel(o);
                e.model.insertContent(s)
            }
            ))
        }(document.activeElement, o.data),
        n.postMessage({
            type: t.eventPage
        })
    }
    (new MessageChannel).port1,
    window.addEventListener("message", (function e(t) {
        "page-init" === t.data.type && (n = t.ports[0],
        n.onmessage = o,
        window.removeEventListener("message", e))
    }
    ))
}
)();
