import React, { useState, useEffect } from 'react'
import Novel from './Novel'
import Search from './Search'
import { filterNovels, retrieveNovels } from '../utils/novels'


export default () => {
  const [novelList, setNovelList] = useState([])
  const [filterNovelList, setFilterNovelList] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelList(novels)
      setFilterNovelList(novels)
    }
    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelList, searchTerm)

    setFilterNovelList(filtered)
  }, [searchTerm])

  return (
    <div className="form">
      <h1>Great Novels</h1>
      <Search term={searchTerm} setter={setSearchTerm} />
      <ul>
        {
          filterNovelList.map(novel => (
            <Novel
              key={novel.id}
              title={novel.title}
              author={`${novel.author.nameFirst} ${novel.author.nameLast}`}
            />
          ))
        }
      </ul>
    </div>
  )
}
