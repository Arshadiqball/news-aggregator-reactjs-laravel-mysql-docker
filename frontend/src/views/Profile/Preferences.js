import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserPreferences, getUserPreferences } from '../../store/action'
import { Toaster } from './../../components/Toaster'

const Preferences = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSources, setSelectedSources] = useState([])
  const [selectedAuthors, setSelectedAuthors] = useState([])
  const { preferences } = useSelector((state) => state.preferences.preferences)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUserPreferences())
    }

    fetchData()
  }, [dispatch])

  useEffect(() => {
    if (preferences?.category != null) {
      setSelectedCategories(preferences.category)
    }
    if (preferences?.source != null) {
      setSelectedSources(preferences.source)
    }
    if (preferences?.author != null) { // Set selected authors from preferences
      setSelectedAuthors(preferences.author)
    }
  }, [preferences])

  const handleCategoryChange = (event) => {
    setSelectedCategories(Array.from(event.target.selectedOptions, (option) => option.value))
  }

  const handleSourceChange = (event) => {
    setSelectedSources(Array.from(event.target.selectedOptions, (option) => option.value))
  }

  const handleAuthorChange = (event) => { // Handle author selection change
    setSelectedAuthors(Array.from(event.target.selectedOptions, (option) => option.value))
  }

  const handleApplyPreferences = () => {
    dispatch(setUserPreferences(selectedCategories, selectedSources, selectedAuthors)) 
      .then(() => {
        Toaster.toastSuccess({
          message: 'Preferences & Settings Updated',
        })
      })
      .catch((error) => {
        Toaster.toastError({
          message: 'Error updating user preferences: ' + error,
        })
      })
  }

  return (
    <div>
      <div id="mvp-main-body-wrap" className="left relative" style={{ transform: 'none', marginTop: '0px' }}>
        <div className="mvp-main-blog-wrap left relative" style={{ transform: 'none' }}>
          <div className="mvp-main-box" style={{ transform: 'none' }}>
            <div className="mvp-main-blog-cont left relative" style={{ transform: 'none' }}>
              <div className="mvp-widget-home-head">
                <h4 className="mvp-widget-home-title">
                  <span className="mvp-widget-home-title">Preferences & Settings</span>
                </h4>
              </div>
              <div className="mvp-main-blog-out left relative" style={{ transform: 'none' }}>
                <section id="mvp_tabber_widget-5" className="mvp-side-widget mvp_tabber_widget">
                  <div className="h-100 d-flex flex-column justify-content-between">
                    <div>
                      <b htmlFor="category">Select your interested categories:</b>

                      <select id="category" onChange={handleCategoryChange} multiple style={{ height: "150px" }}>
                        <option value="business" selected={selectedCategories.includes("business")}>Business</option>
                        <option value="entertainment" selected={selectedCategories.includes("entertainment")}>Entertainment</option>
                        <option value="general" selected={selectedCategories.includes("general")}>General</option>
                        <option value="health" selected={selectedCategories.includes("health")}>Health</option>
                        <option value="science" selected={selectedCategories.includes("science")}>Science</option>
                        <option value="sports" selected={selectedCategories.includes("sports")}>Sports</option>
                        <option value="technology" selected={selectedCategories.includes("technology")}>Technology</option>
                      </select>
                      <br />
                      <br />
                      <b htmlFor="source">Select your interested sources:</b>

                      <select id="source" onChange={handleSourceChange} multiple>
                        <option value="The New York Times" selected={selectedSources.includes("The New York Times")}>The New York Times</option>
                        <option value="G API" selected={selectedSources.includes("G API")}>G API</option>
                        <option value="News API" selected={selectedSources.includes("News API")}>News API</option>
                      </select>

                      <br />
                      <br />
                      <b htmlFor="author">Select your interested authors:</b>

                      <select id="author" onChange={handleAuthorChange} multiple>
                        <option value="By Allan Kreda" selected={selectedAuthors.includes("By Allan Kreda")}>Allan Kreda</option>
                        <option value="By Joe Drape" selected={selectedAuthors.includes("By Joe Drape")}>Joe Drape</option>
                        <option value="By Tyler Kepner" selected={selectedAuthors.includes("By Tyler Kepner")}>Tyler Kepner</option>
                        <option value="By Bill Pennington" selected={selectedAuthors.includes("By Bill Pennington")}>Bill Pennington</option>
                        <option value="By Emmanuel Morgan" selected={selectedAuthors.includes("By Emmanuel Morgan")}>Emmanuel Morgan</option>
                        <option value="By Matthew Futterman" selected={selectedAuthors.includes("By Matthew Futterman")}>Matthew Futterman</option>
                      </select>

                      <br />
                      <br />
                      <button type="button" className="btn btn-sm btn-secondary" onClick={handleApplyPreferences}>
                        Apply Preferences
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences
