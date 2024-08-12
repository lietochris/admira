export default interface Metric {
  pageViews: PageView[];
  sessions: Session[];
  demography: Demography;
}

export interface PageView {
  date: string;
  views: number;
}

export interface Session {
  date: string;
  sessions: number;
  bounceRate: number;
}

export interface Demography {
  age: Age[];
  gender: Gender[];
}

export interface Age {
  range: string;
  percentage: number;
}

export interface Gender {
  type: string;
  percentage: number;
}
