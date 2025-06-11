import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Bell, Home, Search, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function CircularNavbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 border-b bg-green-300 p-4 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center gap-8">
        <Link to="/">
          <Button
            size="icon"
            className="rounded-none"
            variant={location.pathname === "/" ? "default" : "outline"}
          >
            <Home className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>

        <Link to="/me">
          <Button
            size="icon"
            className="rounded-none"
            variant={location.pathname === "/me" ? "default" : "outline"}
          >
            <Avatar>
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
          </Button>
        </Link>
      </div>
    </nav>
  );
}
