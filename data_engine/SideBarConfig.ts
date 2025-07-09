import { SideBarConfig } from '@/types/SideBarTypes';

const DEFAULT_BACKGROUND_COLOR = '#FFFFFF';

export const sideBarConfig: SideBarConfig = {
    partitions: [
        {
            name: 'Containers',
            icon: 'container.svg',
            iconHeight: 20,
            iconWidth: 20,
            nodes: [
                {
                    title: 'Server',
                    icon: 'server.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Host',
                    icon: 'host.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Client',
                    icon: 'client.svg',
                    iconHeight: 20,
                    iconWidth: 20
                }
            ]
        },
        {
            name: 'Severs',
            icon: 'server.svg',
            iconHeight: 20,
            iconWidth: 20,
            nodes: [
                {
                    title: 'Tool',
                    icon: 'tool.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Resource',
                    icon: 'resource.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Prompt',
                    icon: 'prompt.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Logging',
                    icon: 'log.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Pagination',
                    icon: 'pagination.svg',
                    iconHeight: 20,
                    iconWidth: 20
                },
                {
                    title: 'Completion',
                    icon: 'completion.svg',
                    iconHeight: 20,
                    iconWidth: 20
                }
            ]
        },
        {
            name: 'Client',
            icon: 'client.svg',
            iconWidth: 20,
            iconHeight: 20,
            nodes: [
                {
                    title: 'Roots',
                    icon: 'roots.svg',
                    iconWidth: 20,
                    iconHeight: 20
                },
                {
                    title: 'Sampling',
                    icon: 'sampling.svg',
                    iconWidth: 20,
                    iconHeight: 20
                },
                {
                    title: 'Elicitation',
                    icon: 'elicitation.svg',
                    iconWidth: 20,
                    iconHeight: 20
                }
            ]
        }
    ]
};

if (sideBarConfig.backgroundColor == undefined) {
    sideBarConfig.backgroundColor = DEFAULT_BACKGROUND_COLOR;
}
