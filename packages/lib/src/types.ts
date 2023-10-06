export type Actions<ActionDef> = {
  [key in keyof ActionDef]: Action;
};

export type Action = {
  indexStart: number;
  indexEnd: number;
  tileDisplayDuration: number;
  mustLoop?: boolean;
  hideWhenFinished?: boolean;
  clampWhenFinished?: boolean;
};

export type ActionNames<ActionDef> = keyof ActionDef;
