import { forwardRef } from "react";
const BufferContent = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
  }
>(({ children }, ref) => {
  return (
    <div className="pl-4 w-full h-fit" ref={ref}>
      {children}
    </div>
  );
});
export default BufferContent;
