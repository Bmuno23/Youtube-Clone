import { ChevronDown, ChevronUp, Clapperboard, Clock, Home, Library, PlaySquare, Repeat, History, ListVideo, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export function Sidebar(){
    const{isLargeOpen, isSmallOpen, close} = useSidebarContext()
    return (
        <>
        <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col ml-1 ${isLargeOpen ? "lg:hidden" : "lg:flex"}`}>
            <SmallSidebarItem Icon ={Home} title="Home" url="/"></SmallSidebarItem>
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/"></SmallSidebarItem>
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"></SmallSidebarItem>
            <SmallSidebarItem Icon = {Library} title = "Library" url = "/library"></SmallSidebarItem>
        </aside>
        {isSmallOpen && (
            <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50">

            </div>
        )}
        <aside className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2  ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
            <div className="lg:hidden pt-s pb-4 px-2 sticky-top-0 bg-white">
            <PageHeaderFirstSection></PageHeaderFirstSection>
            </div>
            <LargeSidebarSection >
                <LargeSidebarItem isActive Icon ={Home} title="Home" url="/" ></LargeSidebarItem>
                <LargeSidebarItem Icon ={Clapperboard} title="Subscriptions" url="/subscriptions" ></LargeSidebarItem>
            </LargeSidebarSection>
            <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            Icon={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            Icon={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map(playlist =>(
            <LargeSidebarItem
            key={playlist.id}
            Icon={ListVideo}
            title={playlist.name}
            url={`/playlist?list=${playlist.id}`}
          />
          ))}
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title="Subscription">
          {subscriptions.map(subscription => (
            <LargeSidebarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
              />
          ))}
            </LargeSidebarSection>
            <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            Icon={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            Icon={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
          <LargeSidebarItem
            Icon={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSidebarItem
            Icon={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSidebarItem
            Icon={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            Icon={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection>
        </aside>
        </>
    );
}



type SmallSidebarItemProps={
    Icon: ElementType
    title: string
    url: string
}
function SmallSidebarItem( { Icon, title, url}:
    SmallSidebarItemProps){
        return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), "py-4 px-1 flex flex-col items-center gap-1 rounded-lg")}>
            <Icon className="w-6 h-6"></Icon>
            <div className = "text-sm">{title}</div>
        </a>
    }


type LargeSidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}


function LargeSidebarSection({children, title, visibleItemCount = Number.POSITIVE_INFINITY}: LargeSidebarSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const showExpandButton = childrenArray.length > visibleItemCount
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
        {showExpandButton && 
            (<Button
             onClick={() => setIsExpanded(e=> !e)}
            variant="ghost" 
            className="w-full flex items-center rounded-lg gap-4 p-3">
                <ButtonIcon className="w-6 h-6"></ButtonIcon>
                <div>{isExpanded ? "Show less" : "Show more" }</div>
            </Button>)
        }
    </div>
}

type LargeSidebarItemProps ={
    Icon: ElementType | string // or img (not replacing)
    title: string
    url: string
    isActive?: boolean
}

function LargeSidebarItem({Icon, title, url, isActive}: LargeSidebarItemProps) {
    return <a href={url} className={twMerge(buttonStyles({variant: "ghost"}), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
        {typeof Icon === "string" ? (<img src={Icon} className="w-6 h-6 rounded-full"></img>): (
        <Icon className="w-6 h-6"></Icon>
        ) }
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
}
