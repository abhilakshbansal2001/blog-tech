import matter from 'gray-matter'

const getTitles = (context) => {
  const keys = context.keys()
 
  const values = keys.map(context)


  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const value = values[index]
    const document = matter(value.default)

    const title = document.data.title

    return {
        title
    }
  })
  return data
}

export default getTitles
