import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<ul>
	 <li><Link to='/'>Homepage - Route: /</Link></li>
	  <li><Link to='/blog'>Blog - Route: /blog</Link></li>
	  <li><Link to='/blog/item-1'>Blog Item 1 - Route: /blog/item-1</Link></li>
	  <li><Link to='/blog/item-2'>Blog Item 2 - Route: /blog/item-2</Link></li>
	  <li><Link to='/news'>News - Route: /news</Link></li>
	  <li><Link to='/news/item-1'>News Item 1 - Route: /news/item-1</Link></li>
	  <li><Link to='/news/item-2'>News Item 2 - Route: /news/item-2</Link></li>
	  <li><Link to='/contact'>Contact - Route: /contact</Link></li>
  	</ul>
)
