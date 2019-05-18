import { renderPlaygroundPage } from 'graphql-playground-html'
import { HAPI_SERVER } from '@rxdi/hapi';
import { Plugin, Inject } from '@rxdi/core';
import { PLAYGROUND_CONFIG, PlaygroundConfig } from '../palyground.config';
import { Server, Request, ResponseToolkit } from 'hapi';

@Plugin()
export class GraphiQLPlaygroundPlugin {

    constructor(
        @Inject(HAPI_SERVER) private server: Server,
        @Inject(PLAYGROUND_CONFIG) private config: PlaygroundConfig
    ) { }

    async register() {
        if (this.config.graphiqlPlayground) {
            this.server.route({
                method: 'GET',
                path: this.config.path,
                handler: this.handler.bind(this)
            });
        }
    }

    async handler(request: Request, h: ResponseToolkit) {
        return h.response(renderPlaygroundPage(this.config)).type('text/html');
    }

}