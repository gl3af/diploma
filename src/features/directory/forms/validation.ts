import { z } from "zod";

export const $CreateThemeSchema = z.object({
  name: z.string().trim().min(1, "Введите название темы"),
});

const invalidContent = ["", "<p></p>"];

export const $ArticleSchema = z.object({
  name: z.string().trim().min(1, "Введите название статьи"),
  shortContent: z.string().trim().min(1, "Введите описание статьи"),
  content: z.string().refine(
    (value) => {
      if (invalidContent.includes(value)) return false;

      return true;
    },
    {
      message: "Введите наполнение статьи",
    },
  ),
});
