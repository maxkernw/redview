
import { HttpClient } from '../../http/http-client';
import { ThreadResponse } from '../../http/thread-response';
import { createTemplate } from '../../utils/helper';
import markup from './thread.html?raw';
export class Thread extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    httpClient: HttpClient;
    private _main: any;

    constructor() {
        super();
        this.httpClient = new HttpClient();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(createTemplate(markup).content.cloneNode(true));
        this._main = this._shadowRoot.querySelector(".main");

    }

    async connectedCallback(): Promise<void> {

        const data = await this.httpClient.get<ThreadResponse>("https://api.reddit.com/r/videos.json", "json");
        if (data instanceof Error) {
            console.log("OH no!");
            return;
        }

        data.data.children.forEach(e => {
            console.log(e.data.thumbnail)
            const figure = document.createElement("figure");
            const span = document.createElement("span")
            span.textContent = e.data.title
            figure.appendChild(span)

            if (e.data.secure_media?.reddit_video) {
                const video = document.createElement("video");
                video.controls = true;
                const source = document.createElement("source");
                source.src = e.data.secure_media.reddit_video.fallback_url;
                video.appendChild(source)
                figure.appendChild(video);
            }
            else if (e.data.secure_media_embed) {
                const div = document.createElement("div")
                console.log(e.data.secure_media_embed.content)
                div.innerHTML = `${e.data.secure_media_embed.content.replace("&lt;", "<").replace("&gt;", ">")}`;

                const iframe = div.querySelector("iframe")!;
                iframe.width = "100%";
                const span = document.createElement("span")
                span.textContent = e.data.title
                div.appendChild(span);
                return this._main.appendChild(div)

            }
            else {
                const imgElement = document.createElement("img");
                imgElement.src = e.data.url;
                figure.appendChild(imgElement);

                imgElement.onerror = () => {
                    imgElement.remove()
                }
            }
            this._main.appendChild(figure)
        })
    }
    disconnectedCallback(): void {
    }

}
