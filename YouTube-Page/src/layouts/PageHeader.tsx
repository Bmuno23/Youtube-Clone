import { Menu } from "lucide-react";
import logo from "../assets/Screenshot 2024-10-26 at 10.02.31 AM.png";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    // press ctrl / for comment

        // Left side of page header ------
    <div /*main container*/ className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div /*button container*/ className="flex gap-4 items-center flex-shrink-0">

        {/*type "Button" for drop down menu - brings the "Button" from tsx file - has some classes which are specified within tsx file  */}
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
      <div></div>

      {/* Right side of page header ------*/}
      <div></div>
    </div>
  );
}
