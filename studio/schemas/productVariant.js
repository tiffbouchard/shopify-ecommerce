export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      title: 'Bar code',
      name: 'barcode',
      type: 'barcode'
    }
  ]
}
