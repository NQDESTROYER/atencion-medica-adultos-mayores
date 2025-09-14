import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader, Button, Input, Checkbox, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  
  const handleLogin = () => {
    history.push("/app/menu");
  };
  
  const handleQuickLogin = () => {
    history.push("/app/menu");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full">
          <CardHeader className="flex flex-col items-center gap-3 pb-0">
            <div className="bg-primary-100 p-4 rounded-full">
              <Icon icon="lucide:heart-pulse" width={40} height={40} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-center">Atención Médica</h1>
            <h2 className="text-xl text-default-500 text-center">Adultos Mayores</h2>
          </CardHeader>
          
          <CardBody className="gap-4 py-6">
            <Button
              color="secondary"
              size="lg"
              fullWidth
              onPress={handleQuickLogin}
              className="text-lg py-6"
            >
              <Icon icon="lucide:fingerprint" width={24} height={24} className="mr-2" />
              Inicio Rápido
            </Button>
            
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-default-200"></div>
              <span className="text-default-500">o</span>
              <div className="flex-1 h-px bg-default-200"></div>
            </div>
            
            <Input
              label="Correo o Teléfono"
              placeholder="Ingrese su correo o teléfono"
              size="lg"
              variant="bordered"
              labelPlacement="outside"
              className="mb-4"
            />
            
            <Input
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              type="password"
              size="lg"
              variant="bordered"
              labelPlacement="outside"
              className="mb-2"
            />
            
            <div className="flex justify-between items-center mb-4">
              <Checkbox size="lg">
                <span className="text-base">Recordarme</span>
              </Checkbox>
              <Link href="#" className="text-primary text-base">
                ¿Olvidó su contraseña?
              </Link>
            </div>
            
            <Button 
              color="primary" 
              size="lg" 
              fullWidth 
              onPress={handleLogin}
              className="text-lg py-6"
            >
              Iniciar Sesión
            </Button>
            
            <div className="text-center mt-4">
              <span className="text-default-500">¿No tiene cuenta? </span>
              <Link href="#" className="text-primary text-base">
                Registrarse
              </Link>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};