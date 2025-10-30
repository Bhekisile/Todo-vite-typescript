import type { FC, ReactElement } from "react";
import { Card } from "@/components/ui/card";
import { UserProfile } from "@/components/userProfile/userProfile";
import { CreateTaskForm } from "@/components/createTaskForm/createTaskForm";
import { Logout } from "@/components/logout/logout";
import styles from "./style.module.css";

export const TaskSidebar: FC = (): ReactElement => {
  return (
    <section className={`fixed top-4 right-4 ${styles.sidebarHeight}`}>
      <Card className="flex flex-col p-6 w-full h-full justify-between">
        <UserProfile firstName="Mark" />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
}