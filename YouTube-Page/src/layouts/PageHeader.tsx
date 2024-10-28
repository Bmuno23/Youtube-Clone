import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Screenshot 2024-10-26 at 10.02.31 AM.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function PageHeader() {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (

    //main div (whole Page header)------------
    <div /*main container*/ className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">

      <PageHeaderFirstSection hidden={showFullWidthSearch}></PageHeaderFirstSection>
      {/* Middle of page header ------*/}
      <form /* Search bar - Microphone - Return :container*/ className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>

        {/* Return button when search bar resizes to take up full header (on smaller screen sizes) */}
        
      {showFullWidthSearch && (<Button 
      onClick={() => setShowFullWidthSearch(false)}
      size="icon" 
      variant= "ghost" 
      className="flex-shrink-0" 
      type="button">
          <ArrowLeft></ArrowLeft>
        </Button>)}

        {/* Search icon for search bar container*/}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />

        {/* Actual button for search */}
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0">
            <Search></Search>
          </Button>
        </div>

        {/* Microphone button */}
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic></Mic>
        </Button>
      </form>

      {/* Right side of page header ------*/}
      <div /* Small Screen Search and Mic - Upload - Bell - User :container*/ className={`gap-4 flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        {/* if search button(when on small screen is clicked change "setShowFullWidthSearch" to true - which will hide buttons and show full size search) */}
        <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
          <Search></Search>
        </Button>
        {/* Small screen mic - hides when medium screen and up */}
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic></Mic>
        </Button>
        {/* upload btn */}
        <Button size="icon" variant="ghost">
          <Upload></Upload>
        </Button>
        {/* bell btn */}
        <Button size="icon" variant="ghost">
          <Bell></Bell>
        </Button>
        {/* user btn */}
        <Button size="icon" variant="ghost">
          <User></User>
        </Button>
      </div>
    </div>
  );
}


type PageHeaderFirstSectionProps ={
  hidden?: boolean
}

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps){
  const{toggle} = useSidebarContext()
  {/* Left side of page header ------*/}
  return <div /* Button - YT logo :container*/ className={`flex gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
  {/*element of "Button" for drop down menu - brings the "Button" from tsx file - has some classes which are specified within tsx file  */}
  <Button onClick={toggle} variant="ghost" size="icon">
    {/* Menu icon from lucide-react library */}
    <Menu></Menu>
  </Button>
  {/* img of youtube logo - has link to nowhere bc just front end proj */}
  <a href="/">
    <img src={logo} alt="logo" className="h-12" />
  </a>
</div>
}
