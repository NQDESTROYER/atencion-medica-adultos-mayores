import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Navbar, NavbarContent, NavbarItem, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Footer } from "../components/footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const isEmergencyPage = location.pathname === "/app/emergency";

  // No mostrar el layout en la página de emergencia
  if (isEmergencyPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar 
        className="bg-white shadow-sm py-2"
        maxWidth="xl"
      >
        <NavbarContent justify="start">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              aria-label="Volver"
              onPress={() => history.goBack()}
              className="text-2xl"
            >
              <Icon icon="lucide:chevron-left" width={28} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Link 
              href="/app/menu" 
              className="font-semibold text-xl text-primary"
            >
              Atención Médica
            </Link>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              color="danger"
              variant="flat"
              aria-label="Emergencia"
              onPress={() => history.push("/app/emergency")}
              className="text-2xl"
            >
              <Icon icon="lucide:phone" width={28} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};