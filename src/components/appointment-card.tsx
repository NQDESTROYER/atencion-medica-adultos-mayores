import React from "react";
import { Card, CardBody, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface AppointmentCardProps {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "completed" | "canceled";
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctor,
  specialty,
  date,
  time,
  location,
  status,
}) => {
  const statusConfig = {
    upcoming: { color: "primary", label: "Próxima" },
    completed: { color: "success", label: "Completada" },
    canceled: { color: "danger", label: "Cancelada" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4">
        <CardBody className="p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-primary-100 p-3 rounded-full">
                <Icon icon="lucide:stethoscope" width={24} height={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{doctor}</h3>
                <p className="text-default-500">{specialty}</p>
              </div>
            </div>
            
            <Chip 
              color={statusConfig[status].color as any} 
              variant="flat"
              className="self-start md:self-center"
            >
              {statusConfig[status].label}
            </Chip>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:calendar" className="text-default-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:clock" className="text-default-500" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <Icon icon="lucide:map-pin" className="text-default-500" />
              <span>{location}</span>
            </div>
          </div>
          
          {status === "upcoming" && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button color="primary" variant="flat" className="flex-1">
                <Icon icon="lucide:video" className="mr-1" />
                Videollamada
              </Button>
              <Button color="secondary" variant="flat" className="flex-1">
                <Icon icon="lucide:calendar-check" className="mr-1" />
                Recordatorio
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};