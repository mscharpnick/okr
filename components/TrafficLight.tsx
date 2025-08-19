export function TrafficLight({status}:{status:'GREEN'|'AMBER'|'RED'}){
  const c=status==='GREEN'?'bg-green-500':status==='AMBER'?'bg-amber-500':'bg-red-500';
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${c}`} />;
}
