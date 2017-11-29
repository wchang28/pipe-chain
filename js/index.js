"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pipe_chain(readable, writable, transformers) {
    return new Promise(function (resolve, reject) {
        readable.on("error", reject);
        if (transformers && transformers.length > 0) {
            for (var i in transformers) {
                readable = readable.pipe(transformers[i]);
                readable.on("error", reject);
            }
        }
        readable.on("end", function () {
            //console.log("<<Readable.END>>");
        });
        writable.on("finish", function () {
            //console.log("<<Writable.FINISH>>");
            resolve();
        }).on("error", reject);
        readable.pipe(writable);
    });
}
exports.pipe_chain = pipe_chain;
//# sourceMappingURL=index.js.map