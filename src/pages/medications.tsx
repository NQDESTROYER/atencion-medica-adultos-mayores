import React from "react";
import { Card, CardBody, Input, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MedicationCard } from "../components/medication-card";

export const MedicationsPage: React.FC = () => {
  const [selected, setSelected] = React.useState("active");

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-6">Mis Medicamentos</h1>
        
        <Card className="mb-6">
          <CardBody className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Buscar medicamentos"
                startContent={<Icon icon="lucide:search" />}
                className="flex-1"
              />
              <Button color="primary">
                <Icon icon="lucide:bell-plus" className="mr-1" />
                Nueva Alarma
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
        <Tab key="active" title="Activos" />
        <Tab key="history" title="Historial" />
      </Tabs>
      
      <div className="space-y-4">
        {selected === "active" && (
          <>
            <MedicationCard
              name="Enalapril 10mg"
              dosage="1 tableta"
              frequency="Cada 12 horas"
              timeLeft="2 horas"
              nextDose="10:30 AM"
              progress={75}
              isActive={true}
            />
            
            <MedicationCard
              name="Aspirina 100mg"
              dosage="1 tableta"
              frequency="Una vez al día"
              timeLeft="5 horas"
              nextDose="1:00 PM"
              progress={40}
              isActive={true}
            />
            
            <MedicationCard
              name="Metformina 850mg"
              dosage="1 tableta"
              frequency="Con las comidas"
              timeLeft="30 minutos"
              nextDose="8:30 AM"
              progress={15}
              isActive={true}
            />
          </>
        )}
        
        {selected === "history" && (
          <>
            <MedicationCard
              name="Paracetamol 500mg"
              dosage="1 tableta"
              frequency="Cada 8 horas"
              timeLeft="Completado"
              nextDose="Completado"
              progress={100}
              isActive={false}
            />
            
            <MedicationCard
              name="Loratadina 10mg"
              dosage="1 tableta"
              frequency="Una vez al día"
              timeLeft="Completado"
              nextDose="Completado"
              progress={100}
              isActive={false}
            />
          </>
        )}
      </div>
    </div>
  );
};