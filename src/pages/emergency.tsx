import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Button, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const EmergencyPage: React.FC = () => {
  const history = useHistory();
  const [calling, setCalling] = React.useState(false);
  
  const handleCall = () => {
    setCalling(true);
    // Simulación de llamada
    setTimeout(() => {
      setCalling(false);
    }, 3000);
  };
  
  const handleBack = () => {
    history.push("/app/menu");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-danger-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full">
          <CardBody className="flex flex-col items-center gap-6 py-8">
            <h1 className="text-2xl font-bold text-center">Emergencia Médica</h1>
            
            {!calling ? (
              <>
                <p className="text-center text-default-600">
                  Presione el botón para contactar inmediatamente con servicios de emergencia
                </p>
                
                <Button
                  color="danger"
                  size="lg"
                  onPress={handleCall}
                  className="w-40 h-40 rounded-full emergency-button flex flex-col items-center justify-center gap-2"
                >
                  <Icon icon="lucide:phone" width={48} height={48} />
                  <span className="text-lg font-semibold">LLAMAR</span>
                </Button>
                
                <p className="text-center text-sm text-default-500">
                  Se notificará automáticamente a sus contactos de emergencia
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=3" name="Ana" />
                  <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=4" name="Juan" />
                  <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=2" name="Dr. Alejandro" />
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="animate-pulse">
                    <Icon icon="lucide:phone" width={48} height={48} className="text-danger mx-auto" />
                  </div>
                  <p className="text-xl font-semibold mt-4">Llamando...</p>
                  <p className="text-default-500 mt-2">Servicio de Emergencias</p>
                </div>
                
                <div className="flex flex-col gap-2 w-full mt-4">
                  <p className="text-center text-sm text-default-500">
                    Enviando ubicación actual y datos médicos...
                  </p>
                  <div className="w-full bg-default-100 rounded-full h-2.5">
                    <div className="bg-danger h-2.5 rounded-full animate-[progress_2s_ease-in-out_infinite]" style={{width: '70%'}}></div>
                  </div>
                </div>
              </>
            )}
            
            <Button
              color="default"
              variant="flat"
              onPress={handleBack}
              className="mt-4"
            >
              <Icon icon="lucide:arrow-left" className="mr-1" />
              Volver al menú
            </Button>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};