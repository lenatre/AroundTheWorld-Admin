export type Student={uid:string;displayName:string;username:string;publicTokenId:string;active:boolean;journeyMiles:number};
export type RewardType='homework'|'words'|'creative'|'bonus';
export type Reward={id:string;type:RewardType;miles:number;note:string|null;lessonDate:Date|null;source?:string};
export const rewardConfig:Record<RewardType,{label:string;miles:number;color:string}>={homework:{label:'Homework',miles:1,color:'blue'},words:{label:'Words',miles:1,color:'teal'},creative:{label:'Creative Mission',miles:2,color:'purple'},bonus:{label:'Bonus',miles:1,color:'gold'}};
