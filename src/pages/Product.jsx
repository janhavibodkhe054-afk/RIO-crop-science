import React from 'react'
import ProductsHero from '../components/product/ProductsHero'
import ProductCategoryFilter from '../components/product/ProductCategoryFilter'
import ProductBenefits from '../components/product/ProductBenefits'
import AvailablePacking from '../components/product/AvailablePacking'
import EnquiryCTA from '../components/product/EnquiryCTA'

const Product = () => {
  return (
    <div>
      <ProductsHero/>
      <ProductCategoryFilter/>
      <ProductBenefits/>
      <AvailablePacking/>
      <EnquiryCTA/>
    </div>
  )
}

export default Product
