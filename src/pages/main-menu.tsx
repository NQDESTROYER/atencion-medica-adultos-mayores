import React from "react";
import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MenuCard } from "../components/menu-card";

export const MainMenu: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardBody className="p-4">
            <div className="flex items-center gap-4">
              <Avatar
                src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                className="w-16 h-16"
              />
              <div>
                <h2 className="text-xl font-semibold">¡Bienvenido, Carlos!</h2>
                <p className="text-default-500">¿Cómo se siente hoy?</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="bg-danger-50 border-danger-100">
          <CardBody className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-danger-100 p-2 rounded-full">
                  <Icon icon="lucide:bell-ring" width={24} height={24} className="text-danger" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Próxima medicina</h3>
                  <p className="text-danger">Enalapril - 10:30 AM</p>
                </div>
              </div>
              <Button color="danger" variant="flat" size="sm">
                Ver
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Acceso Rápido</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <MenuCard 
          title="Agenda Médica" 
          icon="lucide:calendar" 
          path="/app/appointments" 
          color="primary" 
        />
        
        <MenuCard 
          title="Emergencia" 
          icon="lucide:phone" 
          path="/app/emergency" 
          color="danger" 
        />
        
        <MenuCard 
          title="Chat Médico" 
          icon="lucide:message-circle" 
          path="/app/chat" 
          color="secondary" 
        />
        
        <MenuCard 
          title="Medicamentos" 
          icon="lucide:pill" 
          path="/app/medications" 
          color="warning" 
        />
        
        <MenuCard 
          title="Historial" 
          icon="lucide:file-text" 
          path="/app/history" 
          color="success" 
        />
        
        <MenuCard 
          title="Familiares" 
          icon="lucide:users" 
          path="/app/family" 
          color="primary" 
        />
      </div>
    </div>
  );
};