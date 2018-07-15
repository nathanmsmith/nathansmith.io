import { createElement } from 'react'
import * as rehypeReact from 'rehype-react'

import ColoredLink from '../components/ColoredLink'

const renderAst = new rehypeReact({
  createElement,
  components: { a: ColoredLink },
}).Compiler

export default renderAst
