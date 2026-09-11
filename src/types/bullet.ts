export type Bullet = string | {
  text: string;
  url?: string;
  children?: Bullet[];
};
