import React, { Children } from 'react'

interface RenderItemProps {
  component: any;
  data: Array<any>
}

const RenderItem = ({ component, data }: RenderItemProps) => {
  return Children.toArray(data.map((item, index) => component(item, index)))
}

export default RenderItem