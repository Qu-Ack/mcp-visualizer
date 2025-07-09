export type SideBarConfig = {
    partitions: SideBarPartition[];
    backgroundColor?: string;
};

type SideBarPartition = {
    name: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
    nodes: SideBarNodes[];
};

type SideBarNodes = {
    title: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
};
