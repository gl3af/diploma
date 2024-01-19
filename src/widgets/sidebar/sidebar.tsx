import { Routes } from "@/features/sidebar";

export const Sidebar = () => {
  return (
    <aside className="sm:align-center sticky hidden w-fit p-4 sm:flex lg:min-w-80">
      <Routes />
    </aside>
  );
};
