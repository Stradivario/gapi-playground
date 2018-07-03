import { OnInit } from '@rxdi/core';
import { PlaygroundConfig } from '../palyground.config';
import { Server } from 'hapi';
export declare class GraphiQLPlaygroundPlugin implements OnInit {
    private server;
    private config;
    middlewareOptions: PlaygroundConfig;
    constructor(server: Server, config: PlaygroundConfig);
    OnInit(): void;
    register(server: any, options: any): Promise<void>;
    handler(request: any, h: any): Promise<any>;
}
