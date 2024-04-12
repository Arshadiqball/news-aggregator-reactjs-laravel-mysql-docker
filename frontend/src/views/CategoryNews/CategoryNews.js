import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Loading from "../Loading/Loading"
import { useDispatch, useSelector } from "react-redux"
import { categoryArticle } from "../../store/action"
import NewsSection from "./NewsSection"

function CategoryNews(props) {
  const { newscategory } = props
  const dispatch = useDispatch()
  const [selectedDateRange, setSelectedDateRange] = useState(() => localStorage.getItem("selectedDateRange") || "all")
  const [selectedSource, setSelectedSource] = useState(() => localStorage.getItem("selectedSource") || "G API")

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(categoryArticle(newscategory, selectedDateRange, selectedSource))
      ])
    }

    fetchData()
  }, [newscategory, selectedDateRange, selectedSource, dispatch])

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  document.title = `${capitaLize(newscategory)}`

  const { categoryArticles, categoryLoading } = useSelector((state) => state.cat_articles)

  const handleDateRangeChange = (event) => {
    localStorage.setItem("selectedDateRange", event.target.value)
    setSelectedDateRange(event.target.value)
  }

  const handleSourceChange = (event) => {
    localStorage.setItem("selectedSource", event.target.value)
    setSelectedSource(event.target.value)
  }

  return (
    <>
      <div>
        {categoryLoading ? (
          <center><div className="spinner-border button__spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div></center>
        ) : (
          <div id="mvp-main-body-wrap" className="left relative" style={{ transform: "none", marginTop: "0px" }}>
            <div className="mvp-main-blog-wrap left relative" style={{ transform: "none" }}>
              <div className="mvp-main-box" style={{ transform: "none" }}>
                <div className="mvp-main-blog-cont left relative" style={{ transform: "none" }}>
                  <div className="mvp-widget-home-head">
                    <h4 className="mvp-widget-home-title">
                      <span className="mvp-widget-home-title">{capitaLize(newscategory)} News</span>
                    </h4>
                  </div>
                  <div className="mvp-main-blog-out left relative" style={{ transform: "none" }}>

                    {categoryLoading ? (
                      <Loading leftPosition={"250"} />
                    ) : (
                      <NewsSection categoryArticles={categoryArticles} />
                    )
                    }

                    <div id="mvp-side-wrap" className="left relative theiaStickySidebar"
                      style={{
                        position: "relative", overflow: "visible", boxSizing: "border-box",
                        minHeight: "1px"
                      }}>
                      <div className="theiaStickySidebar"
                        style={{
                          paddingTop: "0px", paddingBottom: "1px", position: "static",
                          transform: "none", top: "0px", left: "954.5px"
                        }}>
                        <section id="mvp_tabber_widget-5" className="mvp-side-widget mvp_tabber_widget">
                          <div class="h-100 d-flex flex-column justify-content-between">
                            <div>
                              <b for="dateRange">Filter by Date Range</b>
                              <select id="dateRange" onChange={handleDateRangeChange} value={selectedDateRange}>
                                <option value="all">All</option>
                                <option value="today">Today</option>
                                <option value="thisWeek">This Week</option>
                                <option value="thisMonth">This Month</option>
                                <option value="thisYear">This Year</option>
                              </select>
                              <br />
                              <br />
                              <b for="source">Filter by Source</b>
                              <select id="source" onChange={handleSourceChange} value={selectedSource}>
                                <option value="G API">G API</option>
                                <option value="News API">News API</option>
                                <option value="The New York Times">The New York Times</option>
                              </select>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

CategoryNews.defaultProps = {
  newscategory: "general",
}

CategoryNews.propTypes = {
  newscategory: PropTypes.string,
}

export default CategoryNews
