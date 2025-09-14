import React from "react";
import { Tabs, Tab, Card, CardBody, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { AppointmentCard } from "../components/appointment-card";

export const AppointmentsPage: React.FC = () => {
  const [selected, setSelected] = React.useState("upcoming");

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-6">Agenda Médica</h1>
        
        <Card className="mb-6">
          <CardBody className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Buscar citas"
                startContent={<Icon icon="lucide:search" />}
                className="flex-1"
              />
              <Button color="primary">
                <Icon icon="lucide:plus" className="mr-1" />
                Nueva Cita
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      
      <Tabs 
        selectedKey={selected} 
        onSelectionChange={setSelected as any}
        variant="underlined"
        color="primary"
        size="lg"
        className="mb-4"
      >
        <Tab key="upcoming" title="Próximas" />
        <Tab key="completed" title="Completadas" />
        <Tab key="canceled" title="Canceladas" />
      </Tabs>
      
      <div className="space-y-4">
        {selected === "upcoming" && (
          <>
            <AppointmentCard
              doctor="Dr. Alejandro Méndez"
              specialty="Cardiología"
              date="15 de Julio, 2024"
              time="10:30 AM"
              location="Clínica San Rafael - Consultorio 205"
              status="upcoming"
            />
            
            <AppointmentCard
              doctor="Dra. María González"
              specialty="Medicina General"
              date="22 de Julio, 2024"
              time="9:00 AM"
              location="Centro Médico Norte - Consultorio 112"
              status="upcoming"
            />
          </>
        )}
        
        {selected === "completed" && (
          <>
            <AppointmentCard
              doctor="Dr. Roberto Sánchez"
              specialty="Neurología"
              date="5 de Julio, 2024"
              time="11:15 AM"
              location="Hospital Central - Consultorio 310"
              status="completed"
            />
          </>
        )}
        
        {selected === "canceled" && (
          <>
            <AppointmentCard
              doctor="Dra. Carmen Jiménez"
              specialty="Oftalmología"
              date="1 de Julio, 2024"
              time="3:45 PM"
              location="Centro Oftalmológico - Consultorio 8"
              status="canceled"
            />
          </>
        )}
      </div>
    </div>
  );
};