/// <reference types="node" />
import { Writable, Readable, Transform } from "stream";
export declare function pipe_chain(readable: Readable, writable: Writable, transformers?: Transform[]): Promise<void>;
