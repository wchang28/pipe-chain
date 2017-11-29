import {Writable, Readable, Transform} from "stream";

export function pipe_chain(readable: Readable, writable: Writable,  transformers?: Transform[]) : Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (err: any) => void) => {
        readable.on("error", reject);
        if (transformers && transformers.length > 0) {
            for (let i in transformers) {
                readable = readable.pipe(transformers[i]);
                readable.on("error", reject);
            }
        }
        readable.on("end", () => {
            //console.log("<<Readable.END>>");
        });
        writable.on("finish", () => {
            //console.log("<<Writable.FINISH>>");
            resolve();
        }).on("error", reject);
        readable.pipe(writable);
    });
}