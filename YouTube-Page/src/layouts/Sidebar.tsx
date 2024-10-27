import { Ghost, Home } from "lucide-react";
import { ElementType } from "react";
import { buttonStyles } from "../components/Button";

export function Sidebar(){
    return (
        <aside className="flex sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col ml-1 lg:hidden">
            <SmallSidebarItem Icon ={Home} title="Home" url="/"></SmallSidebarItem>
        </aside>
    );
}



type SmallSidebarItemProps={
    Icon: ElementType
    title: string
    url: string
}
function SmallSidebarItem( { Icon, title, url}:
    SmallSidebarItemProps){
        return <a href={url} className={buttonStyles({variant: "ghost"})}>
            <Icon className="w-6 h-6"></Icon>
            <div className = "text-sm">{title}</div>
        </a>
    }