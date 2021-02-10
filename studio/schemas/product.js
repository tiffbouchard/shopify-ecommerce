export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          title: "size",
          type: "string",
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
