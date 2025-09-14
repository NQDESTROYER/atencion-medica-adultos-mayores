import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="bg-white shadow-md py-2 px-4">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <Button
            variant={isActive("/app/menu") ? "solid" : "flat"}
            color={isActive("/app/menu") ? "primary" : "default"}
            onPress={() => history.push("/app/menu")}
            className="flex flex-col items-center gap-1 h-auto py-2 px-4"
          >
            <Icon icon="lucide:home" width={28} />
            <span className="text-sm">Inicio</span>
          </Button>
          
          <Button
            variant={isActive("/app/appointments") ? "solid" : "flat"}
            color={isActive("/app/appointments") ? "primary" : "default"}
            onPress={() => history.push("/app/appointments")}
            className="flex flex-col items-center gap-1 h-auto py-2 px-4"
          >
            <Icon icon="lucide:calendar" width={28} />
            <span className="text-sm">Agenda</span>
          </Button>
          
          <Button
            variant={isActive("/app/chat") ? "solid" : "flat"}
            color={isActive("/app/chat") ? "primary" : "default"}
            onPress={() => history.push("/app/chat")}
            className="flex flex-col items-center gap-1 h-auto py-2 px-4"
          >
            <Icon icon="lucide:message-circle" width={28} />
            <span className="text-sm">Chat</span>
          </Button>
          
          <Button
            variant={isActive("/app/medications") ? "solid" : "flat"}
            color={isActive("/app/medications") ? "primary" : "default"}
            onPress={() => history.push("/app/medications")}
            className="flex flex-col items-center gap-1 h-auto py-2 px-4"
          >
            <Icon icon="lucide:pill" width={28} />
            <span className="text-sm">Medicinas</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};