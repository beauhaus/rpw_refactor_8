// import { graphql, useStaticQuery } from 'gatsby'


// /* THis file produces events in the listing ??*/
// const useEvents = (searchParam) => {
//   const data = useStaticQuery(graphql`
//     query {
//       db: allMdx {
//         evtList: nodes {
//           event: frontmatter {
//             title
//             desc
//             tags
//             hours
//             slug
//             dates
//           }
//           excerpt
//         }
//       }
//     }`
//   );

//   var evtsArr = data.db.evtList;

//   return evtsArr;


// }
// export default useEvents
