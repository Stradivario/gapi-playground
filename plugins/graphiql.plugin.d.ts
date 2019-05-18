import { PlaygroundConfig } from '../palyground.config';
import { Server, Request, ResponseToolkit } from 'hapi';
export declare class GraphiQLPlaygroundPlugin {
    private server;
    private config;
    constructor(server: Server, config: PlaygroundConfig);
    register(): Promise<void>;
    handler(request: Request, h: ResponseToolkit): Promise<import("hapi").ResponseObject>;
}
