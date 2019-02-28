// import React from 'react'
// import { Link } from './../../ui/Link'

// import { CardSection } from '../../ui/CardSection'
// import { Card } from './../../ui/Card'
// import { CardScroll } from './../../ui/CardScroll'
// import { CardTitle } from './../../ui/CardTitle'
// import { Subtitle } from './../../ui/Subtitle'
// import { entries } from './../constants/entries'

// export const FeaturedBlogPosts = ({ history, subtitle, link }) => {
//   const onBlogCardClick = file => {
//     history.push(`/blog/${file}/`)
//   }
//   return (
//     <CardSection>
//       <Subtitle>{subtitle}</Subtitle>
//       {link && <Link to={link.to}>{link.text}</Link>}
//       <CardScroll>
//         {Object.entries(entries).map(
//           ([key, value]) =>
//             value.featured && (
//               <Card
//                 key={key}
//                 onClick={() => onBlogCardClick(key)}
//                 backgroundImage={value.backgroundImage}
//               >
//                 <CardTitle>{value.title}</CardTitle>
//               </Card>
//             )
//         )}
//       </CardScroll>
//     </CardSection>
//   )
// }
