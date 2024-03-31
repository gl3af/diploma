import { type Editor } from "@tiptap/react";
import { Box } from "../box";
import { Button } from "../../button";
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
import { Skeleton } from "../../skeleton";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return <Skeleton className="h-10 w-full bg-background" />;

  const clickWrapper = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback: () => void,
  ) => {
    e.preventDefault();
    callback();
  };

  return (
    <Box className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().toggleBold().run())
        }
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={cn(editor.isActive("bold") && "ring-2")}
      >
        <Bold size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().toggleItalic().run())
        }
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={cn(editor.isActive("italic") && "ring-2")}
      >
        <Italic size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().toggleStrike().run())
        }
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={cn(editor.isActive("strike") && "ring-2")}
      >
        <Strikethrough size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().setParagraph().run())
        }
        className={cn(editor.isActive("paragraph") && "ring-2")}
      >
        <Pilcrow size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().setTextAlign("left").run(),
          )
        }
        className={cn(editor.isActive({ textAlign: "left" }) && "ring-2")}
      >
        <AlignLeft size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().setTextAlign("center").run(),
          )
        }
        className={cn(editor.isActive({ textAlign: "center" }) && "ring-2")}
      >
        <AlignCenter size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().setTextAlign("right").run(),
          )
        }
        className={cn(editor.isActive({ textAlign: "right" }) && "ring-2")}
      >
        <AlignRight size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().setTextAlign("justify").run(),
          )
        }
        className={cn(editor.isActive({ textAlign: "justify" }) && "ring-2")}
      >
        <AlignJustify size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().toggleHeading({ level: 1 }).run(),
          )
        }
        className={cn(editor.isActive("heading", { level: 1 }) && "ring-2")}
      >
        <Heading1 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().toggleHeading({ level: 2 }).run(),
          )
        }
        className={cn(editor.isActive("heading", { level: 2 }) && "ring-2")}
      >
        <Heading2 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().toggleHeading({ level: 3 }).run(),
          )
        }
        className={cn(editor.isActive("heading", { level: 3 }) && "ring-2")}
      >
        <Heading3 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().toggleBulletList().run())
        }
        className={cn(editor.isActive("bulletList") && "ring-2")}
      >
        <List size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () =>
            editor.chain().focus().toggleOrderedList().run(),
          )
        }
        className={cn(editor.isActive("orderedList") && "ring-2")}
      >
        <ListOrdered size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().undo().run())
        }
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo2 size={16} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) =>
          clickWrapper(e, () => editor.chain().focus().redo().run())
        }
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo2 size={16} />
      </Button>
    </Box>
  );
};
