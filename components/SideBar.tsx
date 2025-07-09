import { SideBarConfig } from '@/types/SideBarTypes';
import { memo } from 'react';

const SideBar = memo(function SideBar({ config }: { config: SideBarConfig }) {
    return (
        <aside
            style={{ backgroundColor: config.backgroundColor }}
            className="border-r border-gray-300 p-4 w-[18%] min-h-screen flex flex-col shadow-lg"
        >
            {config.partitions.map((partition) => (
                <div key={partition.name} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 px-3 py-2 flex items-center gap-2">
                        {partition.icon && (
                            <img
                                src={partition.icon}
                                alt={partition.name}
                                width={partition.iconWidth || 20}
                                height={partition.iconHeight || 20}
                                className="inline-block"
                            />
                        )}
                        {partition.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-2 px-1">
                        {partition.nodes.map((node) => (
                            <div
                                key={node.title}
                                className="flex flex-col items-center justify-center rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer text-center aspect-square"
                                draggable
                            >
                                <img
                                    src={node.icon}
                                    alt={node.title}
                                    width={node.iconWidth}
                                    height={node.iconHeight}
                                    className="mb-1"
                                />
                                <span className="text-xs font-medium leading-tight">
                                    {node.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
});

export default SideBar;
