import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { codeHighlightOptions } from "./lib/codeHighlightOptions";
import rehypePrettyCode from "rehype-pretty-code";

export const Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: `**/*.{md,mdx}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Content],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, codeHighlightOptions]],
  },
});
