import { graphql, useStaticQuery } from 'gatsby'

const useEvents = (searchParam) => {
  const data = useStaticQuery(graphql`
    query {
      db: allMdx {
        evtList: nodes {
          event: frontmatter {
            title
            desc
            tags
            hours
            slug
            dates
          }
          excerpt
        }
      }
    }`
  );

  var evtsArr = data.db.evtList;

  var filteredArray = evtsArr.filter(evtItem => {
    let hasEvt = evtItem.event.dates.indexOf(searchParam)
    return hasEvt !== -1;
  })
  return filteredArray;


}
export default useEvents
