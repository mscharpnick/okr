export default function TimelineGrid({startYear}:{startYear:number}){
  const m=['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];
  return (
    <div className="grid text-xs bg-slate-50 border-b" style={{gridTemplateColumns:`260px repeat(12, minmax(0,1fr))`}}>
      <div className="p-2 font-medium border-r">Workstream</div>
      {m.map((x,i)=>(<div key={i} className="p-2 text-center border-r last:border-r-0">{x}</div>))}
    </div>
  );
}
