import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Menu } from "@/shared/menu/ui/components/menu";
import { Tengwar } from "@/shared/tengwar/ui/components/Tengwar";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex mt-8 items-center flex-col max-w-2xl">
      <div className="flex justify-between w-full">
        <HoverCard>
          <HoverCardTrigger>
            <Tengwar>
              <h3 className="cursor-default text-3xl">2</h3>
            </Tengwar>
          </HoverCardTrigger>
          <HoverCardContent className="w-90 text-left">
            Буква <i>"ando"</i> на тенгваре. Означает <i>"дверь"</i> или{' '}
            <i>"Дурин"</i>
          </HoverCardContent>
        </HoverCard>
        <Menu />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}