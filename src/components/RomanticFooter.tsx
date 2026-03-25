import { Heart } from "lucide-react";

const RomanticFooter = () => {
  return (
    <footer className="py-12 romantic-gradient text-center">
      <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-soft" />
        <span>just for you obvvv </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground/60 font-body">
        Because you deserve the worldddddddddd ❤️
      </p>
    </footer>);

};

export default RomanticFooter;