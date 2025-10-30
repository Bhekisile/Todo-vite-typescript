import type { IResponse } from "@/types/response.interface";
import type { ITask } from "@/types/task.interface";
import type { IUpdateTask } from "@/types/updateTask.interface";
import { useMutation } from "@tanstack/react-query";

// Simulated function to post data to an API endpoint
const updateTask = async (task: IUpdateTask) => {
  console.log("task", task);
  const response = await fetch (`${import.meta.env.VITE_API_URL}/tasks/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error('Network response not OK');
  }

  return await response.json();
}

// Custom hook for posting todos
export const useUpdateTask = () => {
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (response: IResponse<ITask>) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    }
  });
}