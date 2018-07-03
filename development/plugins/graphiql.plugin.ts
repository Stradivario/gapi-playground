import { renderPlaygroundPage } from 'graphql-playground-html'
import { HAPI_SERVER } from '@rxdi/hapi';
import { Plugin, Inject, OnInit } from '@rxdi/core';
import { PLAYGROUND_CONFIG, PlaygroundConfig } from '../palyground.config';
import { Server } from 'hapi';

@Plugin()
export class GraphiQLPlaygroundPlugin implements OnInit {
    middlewareOptions: PlaygroundConfig;
    constructor(
        @Inject(HAPI_SERVER) private server: Server,
        @Inject(PLAYGROUND_CONFIG) private config: PlaygroundConfig
    ) { }

    OnInit() {
        this.middlewareOptions = this.config;
    }

    async register(server, options: any) {
        if (this.config.graphiqlPlayground) {
            this.server.route({
                method: 'GET',
                path: this.middlewareOptions.path,
                handler: this.handler.bind(this)
            });
        }
    }

    async handler(request, h) {
        return h.response(renderPlaygroundPage(this.middlewareOptions)).type('text/html');
    }

}