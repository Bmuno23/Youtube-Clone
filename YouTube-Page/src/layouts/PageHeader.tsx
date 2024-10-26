import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Screenshot 2024-10-26 at 10.02.31 AM.png";
import { Button } from "../components/Button";
import { useState } from "react";

export function PageHeader() {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (

    //main div (whole Page header)------------
    <div /*main container*/ className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">

      {/* Left side of page header ------*/}
      <div /*button/YT logo container*/ className={`flex gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        {/*element of "Button" for drop down menu - brings the "Button" from tsx file - has some classes which are specified within tsx file  */}
        <Button variant="ghost" size="icon">
          {/* Menu icon from lucide-react library */}
          <Menu></Menu>
        </Button>
        {/* img of youtube logo - has link to nowhere bc just front end proj */}
        <a href="/">
          <img src={logo} alt="logo" className="h-12" />
        </a>
      </div>

      {/* Middle of page header ------*/}
      <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>

      {showFullWidthSearch && (<Button 
      onClick={() => setShowFullWidthSearch(false)}
      size="icon" 
      variant= "ghost" 
      className="flex-shrink-0" 
      type="button">
          <ArrowLeft></ArrowLeft>
        </Button>)}
        
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />

          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0">
            <Search></Search>
          </Button>
        </div>

        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic></Mic>
        </Button>
      </form>

      {/* Right side of page header ------*/}
      <div className={`gap-4 flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
          <Search></Search>
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic></Mic>
        </Button>
        <Button size="icon" variant="ghost">
          <Upload></Upload>
        </Button>
        <Button size="icon" variant="ghost">
          <Bell></Bell>
        </Button>
        <Button size="icon" variant="ghost">
          <User></User>
        </Button>
      </div>
    </div>
  );
}
