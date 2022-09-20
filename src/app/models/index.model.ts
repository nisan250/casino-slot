export interface IData {
  backgroundImage: number;
  backgroundMusic: string;
  slots: ISlot[];
}

export interface ISlot {
  id: number;
  image: string;
  isLocked: boolean;
  jackpot: number;
  name: string;
  order: number;
}
