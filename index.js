"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlaygroundModule_1;
const core_1 = require("@rxdi/core");
const plugins_1 = require("./plugins");
const palyground_config_1 = require("./palyground.config");
let PlaygroundModule = PlaygroundModule_1 = class PlaygroundModule {
    static forRoot(config) {
        return {
            module: PlaygroundModule_1,
            services: [
                {
                    provide: palyground_config_1.PLAYGROUND_CONFIG,
                    useValue: config || {
                        path: '/graphiql',
                        endpoint: '/graphql',
                        version: '1.7.1'
                    }
                }
            ]
        };
    }
};
PlaygroundModule = PlaygroundModule_1 = __decorate([
    core_1.Module({
        plugins: [plugins_1.GraphiQLPlaygroundPlugin]
    })
], PlaygroundModule);
exports.PlaygroundModule = PlaygroundModule;
