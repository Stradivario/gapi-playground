import { Module, ModuleWithServices } from '@rxdi/core';
import { GraphiQLPlaygroundPlugin } from './plugins';
import { PlaygroundConfig, PLAYGROUND_CONFIG } from './palyground.config';

@Module({
    plugins: [GraphiQLPlaygroundPlugin]
})
export class PlaygroundModule {
    public static forRoot(config?: PlaygroundConfig): ModuleWithServices {
        return {
            module: PlaygroundModule,
            services: [
                {
                    provide: PLAYGROUND_CONFIG,
                    useValue: config || {
                        path: '/graphiql',
                        endpoint: '/graphql',
                        version: '1.7.1'
                    }
                }
            ]
        }
    }
}