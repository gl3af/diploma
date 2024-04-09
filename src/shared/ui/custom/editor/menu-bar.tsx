import { type Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Pilcrow,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";

import { cn } from "@/shared/utils";

import { Box } from "../box";
import { Button, Skeleton } from "../..";

export function MenuBar({ editor }: { editor: Editor | null }) {
  if (!editor) return <Skeleton className="h-10 w-full bg-background" />;

  const clickWrapper = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback: () => void
  ) => {
    e.preventDefault();
    callback();
  };

  const focusEditor = () => editor.chain().focus();
  const editorCanFocus = () => editor.can().chain().focus();

  return (
    <Box className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleBold().run())}
        disabled={!editorCanFocus().toggleBold().run()}
        className={cn(editor.isActive("bold") && "ring-2")}
      >
        <Bold size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleItalic().run())}
        disabled={!editorCanFocus().toggleItalic().run()}
        className={cn(editor.isActive("italic") && "ring-2")}
      >
        <Italic size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleStrike().run())}
        disabled={!editorCanFocus().toggleStrike().run()}
        className={cn(editor.isActive("strike") && "ring-2")}
      >
        <Strikethrough size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().setParagraph().run())}
        className={cn(editor.isActive("paragraph") && "ring-2")}
      >
        <Pilcrow size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().setTextAlign("left").run())}
        className={cn(editor.isActive({ textAlign: "left" }) && "ring-2")}
      >
        <AlignLeft size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().setTextAlign("center").run())}
        className={cn(editor.isActive({ textAlign: "center" }) && "ring-2")}
      >
        <AlignCenter size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().setTextAlign("right").run())}
        className={cn(editor.isActive({ textAlign: "right" }) && "ring-2")}
      >
        <AlignRight size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().setTextAlign("justify").run())}
        className={cn(editor.isActive({ textAlign: "justify" }) && "ring-2")}
      >
        <AlignJustify size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleHeading({ level: 1 }).run())}
        className={cn(editor.isActive("heading", { level: 1 }) && "ring-2")}
      >
        <Heading1 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleHeading({ level: 2 }).run())}
        className={cn(editor.isActive("heading", { level: 2 }) && "ring-2")}
      >
        <Heading2 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleHeading({ level: 3 }).run())}
        className={cn(editor.isActive("heading", { level: 3 }) && "ring-2")}
      >
        <Heading3 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleBulletList().run())}
        className={cn(editor.isActive("bulletList") && "ring-2")}
      >
        <List size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().toggleOrderedList().run())}
        className={cn(editor.isActive("orderedList") && "ring-2")}
      >
        <ListOrdered size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().undo().run())}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo2 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => clickWrapper(e, () => focusEditor().redo().run())}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo2 size={16} />
      </Button>
    </Box>
  );
}
