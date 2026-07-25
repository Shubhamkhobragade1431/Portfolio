export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number; // 0-100 percentage
  icon?: string;
}