import type { TaskModel } from './TaskModels';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number; // Home, CountDown, histórico, MainForm, button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, histórico, MainForm, button
  currentCycle: number; // 1 a 8, Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
