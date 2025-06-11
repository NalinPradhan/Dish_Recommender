import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Bell, Home, Search, Settings } from "lucide-react";

export default function CircularNavbar() {
  return (
    // add fixed  to the nav class name to make the navbar stick to the bottom of the screen
    <nav className="bg-green-300 bottom-0 left-0 right-0 border-t  p-4 backdrop-blur-sm">
      <div className=" container gap-5 mx-auto flex items-center justify-between">
        <Button size="icon" className="rounded-b-none" variant="ghost">
          <Home className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Button>
        <Button size="icon" className="rounded-b-none" variant="ghost">
          <img src="/avatar.png" className="w-7"></img>
          <span className="sr-only">Home</span>
        </Button>
      </div>
    </nav>
  );
}
