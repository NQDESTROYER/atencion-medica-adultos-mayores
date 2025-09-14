import React from "react";
import { Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ChatMessageProps {
  message: string;
  sender: "user" | "doctor" | "family";
  name: string;
  time: string;
  avatar?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  name,
  time,
  avatar,
}) => {
  const isUser = sender === "user";
  const isAI = sender === "doctor" && !avatar;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      {!isUser && !isAI && (
        <Avatar
          src={avatar}
          name={name}
          className="mr-2"
        />
      )}
      
      {!isUser && isAI && (
        <div className="bg-primary-100 p-2 rounded-full mr-2 h-8 w-8 flex items-center justify-center">
          <Icon icon="lucide:bot" width={16} height={16} className="text-primary" />
        </div>
      )}
      
      <div className={`max-w-[75%]`}>
        {!isUser && (
          <p className="text-sm text-default-500 mb-1">{name}</p>
        )}
        
        <div 
          className={`p-3 rounded-lg ${
            isUser 
              ? "bg-primary text-white rounded-br-none" 
              : isAI
                ? "bg-primary-50 border border-primary-100 rounded-bl-none"
                : "bg-content2 rounded-bl-none"
          }`}
        >
          <p className="text-base">{message}</p>
        </div>
        
        <p className={`text-xs text-default-400 mt-1 ${isUser ? "text-right" : "text-left"}`}>
          {time}
        </p>
      </div>
      
      {isUser && (
        <Avatar
          src={avatar}
          name="Yo"
          className="ml-2"
        />
      )}
    </motion.div>
  );
};