export function currentFY(today=new Date()){
  const y=today.getFullYear();
  const startYear = today.getMonth()<6 ? y-1 : y;
  return { startYear };
}
