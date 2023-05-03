export interface Task {
  id?: number;
  name: string;
  description: string;
  estimated_minutes: number;
  real_minutes?: number;
  project: number;
  employee?: number;
}
