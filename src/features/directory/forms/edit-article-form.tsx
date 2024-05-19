"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { useRouter } from "next/navigation";

import { cn } from "@/shared/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Loader,
  Box,
  Textarea,
  Editor,
} from "@/shared/ui";
import { api } from "@/trpc/react";
import { useToast } from "@/shared/hooks";
import { type RouterOutputs } from "@/trpc/shared";

import { $ArticleSchema } from "./validation";

type EditArticle = z.infer<typeof $ArticleSchema>;

type CreateArticleFormProps = {
  article: NonNullable<RouterOutputs["articles"]["getArticle"]>;
};

export function EditArticleForm({ article }: CreateArticleFormProps) {
  const router = useRouter();

  const form = useForm<EditArticle>({
    resolver: zodResolver($ArticleSchema),
    defaultValues: {
      name: article.name,
      shortContent: article.shortContent ?? "",
      content: article.content,
    },
  });

  const { toast } = useToast();

  const utils = api.useUtils();
  const { mutateAsync: create, isLoading } = api.articles.updateArticle.useMutation();

  const onSubmit = async (values: EditArticle) => {
    await create(
      { ...values, id: article.id },
      {
        onSuccess: () => {
          utils.articles.getArticle
            .invalidate()
            .then(() => router.push(`/admin/directory/${article.id}`));
        },
        onError: () =>
          toast({
            title: "Ошибка изменения",
            description: "Статья с таким названием уже существует",
            variant: "destructive",
          }),
      }
    );
  };

  return (
    <Form {...form}>
      <Box as="form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Название <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isLoading}
                  placeholder="Название статьи"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shortContent"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Описание <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={isLoading}
                  placeholder="Описание статьи"
                  className={cn(
                    "text-md font-medium placeholder:text-sm",
                    fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field, fieldState: { error } }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-md text-left font-medium">
                Наполнение <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  {...field}
                  content={field.value}
                  disabled={isLoading}
                  className={cn(
                    "text-md font-medium",
                    error && "ring- ring-2 ring-red-500 focus-visible:ring-red-500"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full space-x-2 text-white sm:w-fit" disabled={isLoading}>
          {isLoading && <Loader size={16} />}
          <Box as="span">Изменить</Box>
        </Button>
      </Box>
    </Form>
  );
}
