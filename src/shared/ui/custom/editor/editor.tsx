"use client";

import { cn } from "@/shared/utils";
import {
  type EditorContentProps,
  EditorContent,
  useEditor,
} from "@tiptap/react";
import { forwardRef } from "react";
import { MenuBar } from "./menu-bar";
import { Box } from "..";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

export const Editor = forwardRef<
  HTMLDivElement,
  Omit<EditorContentProps, "ref" | "editor" | "onChange"> & {
    onChange: (...event: unknown[]) => void;
  }
>(({ className, content, onChange, ...props }, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepAttributes: true,
          keepMarks: true,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <Box className="grid gap-3">
      <MenuBar editor={editor} />
      <EditorContent
        {...props}
        ref={ref}
        editor={editor}
        className={cn(
          "*:text-md min-h-40 rounded-lg bg-background *:h-full *:min-h-40 *:rounded-lg *:border-none *:px-3 *:py-2 *:font-medium focus-visible:*:outline-none focus-visible:*:ring-2 focus-visible:*:ring-primary",
          className,
        )}
      />
    </Box>
  );
});
