// components/Loader/CustomLoader.tsx
import { Loader2 } from "lucide-react";

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      <span className="ml-2 text-muted-foreground">Loading blogs...</span>
    </div>
  );
};

export default CustomLoader;
