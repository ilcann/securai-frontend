import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const MaskToggle = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>)  => {
  const [isMasked, setIsMasked] = useState(false);
  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => { setIsMasked(!isMasked); event.stopPropagation() }}
      {...props}
    >
      {isMasked ? <EyeOff /> : <Eye />}
      <span className="sr-only">Toggle Mask</span>
    </Button>
  );
}

export default MaskToggle;
