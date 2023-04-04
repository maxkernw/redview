import { App } from "./elements/app";
import { Thread } from "./elements/thread/thread";
import { defineElement } from "./utils/helper";


export default function () {
    defineElement("redview-app", App)
    defineElement("thread-element", Thread)
}