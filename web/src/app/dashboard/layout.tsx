import { Navbar, Sidebar } from "@/components/layout";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans" dir="rtl">
      <div className="flex">
        {/* Sidebar - Fixed on right side */}
        <div className="fixed top-0 right-0 h-screen z-20">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:mr-72 min-h-screen" dir="ltr">
          <div dir="rtl">
            {/* Navbar - Sticky */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-auto bg-slate-900">
              <div className="mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}