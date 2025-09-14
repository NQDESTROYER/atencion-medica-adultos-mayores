import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

interface MenuCardProps {
  title: string;
  icon: string;
  path: string;
  color: "primary" | "secondary" | "danger" | "warning" | "success";
}

export const MenuCard: React.FC<MenuCardProps> = ({ title, icon, path, color }) => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push(path);
  };
  
  const colorClasses = {
    primary: "bg-primary-100 text-primary",
    secondary: "bg-secondary-100 text-secondary",
    danger: "bg-danger-100 text-danger",
    warning: "bg-warning-100 text-warning",
    success: "bg-success-100 text-success",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        isPressable 
        onPress={handleClick}
        className="h-full"
        disableRipple
      >
        <CardBody className="flex flex-col items-center justify-center gap-4 p-6">
          <div className={`p-4 rounded-full ${colorClasses[color]}`}>
            <Icon icon={icon} width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </CardBody>
      </Card>
    </motion.div>
  );
};