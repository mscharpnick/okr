import "./globals.css";
export const metadata = { title: "OKR Timeline", description: "Workstreams, Stages, Objectives, and KRs" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen text-slate-900"><div className="max-w-5xl mx-auto p-6">{children}</div></body></html>);
}
