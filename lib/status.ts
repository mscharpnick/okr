import { Objective, Stage, KeyResult } from "@prisma/client";
export type RAG='GREEN'|'AMBER'|'RED';
export function objectiveOutOfRange(o:Objective, s:Stage){
  if(!o.dueDate) return false;
  const d=new Date(o.dueDate as any).getTime();
  return d<new Date(s.startDate as any).getTime()||d>new Date(s.endDate as any).getTime();
}
export function objectiveRag(o:Objective,krs:KeyResult[]):RAG{
  const now=Date.now();
  const due=o.dueDate?new Date(o.dueDate as any).getTime():undefined;
  if(due&&due<now) return 'RED';
  const p=krs.find(k=>k.type==='PERCENT'&&typeof k.percent==='number')?.percent??0;
  return p<80?'AMBER':'GREEN';
}
export function stageRag(r:RAG[]):RAG{ if(r.includes('RED'))return 'RED'; if(r.includes('AMBER'))return 'AMBER'; return 'GREEN'; }
