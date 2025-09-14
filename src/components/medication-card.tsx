import React from "react";
import { Card, CardBody, Chip, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface MedicationCardProps {
  name: string;
  dosage: string;
  frequency: string;
  timeLeft: string;
  nextDose: string;
  progress: number;
  isActive: boolean;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({
  name,
  dosage,
  frequency,
  timeLeft,
  nextDose,
  progress,
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4">
        <CardBody className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <div className="bg-secondary-100 p-3 rounded-full">
                <Icon icon="lucide:pill" width={24} height={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-default-500">{dosage}</p>
              </div>
            </div>
            
            <Chip 
              color={isActive ? "success" : "default"} 
              variant="flat"
            >
              {isActive ? "Activo" : "Completado"}
            </Chip>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-default-500">Próxima dosis: {nextDose}</span>
              <span className="text-sm font-medium">{timeLeft}</span>
            </div>
            <Progress 
              value={progress} 
              color={progress < 25 ? "danger" : progress < 50 ? "warning" : "success"}
              className="h-2"
            />
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <Icon icon="lucide:repeat" className="text-default-500" />
            <span>{frequency}</span>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};