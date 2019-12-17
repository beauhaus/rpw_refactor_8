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

  // return evtsArr;



return evtsArr.map(item => ({
    title: item.event.title,
    datesArr: item.event.dates,
    desc: item.event.desc,
    tags: item.event.tags,
    slug: item.event.slug,
    hours: item.event.hours,
    excerpt: item.excerpt
  }))

}
export default useEvents
