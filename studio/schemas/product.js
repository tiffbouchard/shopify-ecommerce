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
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
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
    // {
    //   title: 'Default variant',
    //   name: 'defaultProductVariant',
    //   type: 'productVariant'
    // },
    // {
    //   title: 'Variants',
    //   name: 'variants',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Variant',
    //       type: 'productVariant'
    //     }
    //   ]
    // },
    // {
    //   title: 'Tags',
    //   name: 'tags',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string'
    //     }
    //   ],
    //   options: {
    //     layout: 'tags'
    //   }
    // },
    // {
    //   name: 'blurb',
    //   title: 'Blurb',
    //   type: 'localeString'
    // },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
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
