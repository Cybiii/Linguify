// app/admin/page.tsx

import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import AdminClient from "./AdminClient";

const AdminPage = async () => {
  const admin = await isAdmin();

  if (!admin) {
    // Server-side redirect for unauthorized users
    redirect("/");
  }

  // Render the Client Component for authorized users
  return <AdminClient />;
};

export default AdminPage;
