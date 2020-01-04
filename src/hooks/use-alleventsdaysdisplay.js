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
            stylecode
          }
          excerpt
        }
      }
    }`
  );

  var evtsArr = data.db.evtList;

  // return evtsArr;

// console.log("hook cc: ", evtsArr[0])
    // slug: `/events/${item.event.slug}`,????

return evtsArr.map(item => ({
    title: item.event.title,
    datesArr: item.event.dates,
    desc: item.event.desc,
    tags: item.event.tags,
    slug: item.event.slug,
    hours: item.event.hours,
    excerpt: item.excerpt,
    stylecode: item.event.stylecode
  }))

}
export default useEvents
