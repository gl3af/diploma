import Link from "next/link";
import { Telegram, Vk, WhatsApp } from "./icons";

export const Socials = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="#" className="hover:opacity-80" title="Связаться в Телеграм">
        <Telegram className="h-8 w-8" />
      </Link>
      <Link href="#" className="hover:opacity-80" title="Связаться в ВК">
        <Vk className="h-8 w-8" />
      </Link>
      <Link href="#" className="hover:opacity-80" title="Связаться в WhatsApp">
        <WhatsApp className="h-8 w-8" />
      </Link>
    </div>
  );
};
