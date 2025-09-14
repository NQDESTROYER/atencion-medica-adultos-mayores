import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
import { LoginPage } from "./pages/login";
import { MainMenu } from "./pages/main-menu";
import { AppointmentsPage } from "./pages/appointments";
import { ChatPage } from "./pages/chat";
import { EmergencyPage } from "./pages/emergency";
import { MedicationsPage } from "./pages/medications";

// Layout
import { AppLayout } from "./layouts/app-layout";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <LoginPage />
        </motion.div>
      </Route>
      
      <Route path="/app">
        <AppLayout>
          <Switch>
            <Route exact path="/app/menu">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <MainMenu />
              </motion.div>
            </Route>
            
            <Route exact path="/app/appointments">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AppointmentsPage />
              </motion.div>
            </Route>
            
            <Route exact path="/app/chat">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ChatPage />
              </motion.div>
            </Route>
            
            <Route exact path="/app/emergency">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EmergencyPage />
              </motion.div>
            </Route>
            
            <Route exact path="/app/medications">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <MedicationsPage />
              </motion.div>
            </Route>
            
            <Redirect to="/app/menu" />
          </Switch>
        </AppLayout>
      </Route>
      
      <Redirect to="/" />
    </Switch>
  );
};

export default App;