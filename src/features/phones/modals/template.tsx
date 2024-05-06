import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

import { useCreateQueryString } from "@/shared/hooks";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/shared/ui";

type TemplateProps = {
  icon: ReactNode;
  title: string;
};

export function Template({ children, icon, title }: PropsWithChildren<TemplateProps>) {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryString();

  const onOpenChange = (open: boolean) => {
    if (open) return;

    router.replace(`${pathname}?${createQueryString(null, "dept")}`);
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{icon}</DialogTrigger>
      <DialogContent className="rounded-xl sm:max-w-[550px]">
        <DialogHeader className="text-lg font-bold">{title}</DialogHeader>
        <DialogDescription className="text-md font-medium">Заполните все поля</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
