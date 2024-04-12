import { FormControl, Form, Button, Dropdown } from "react-bootstrap"
import { getToken, clearUser } from "../../services/authorization"
import { FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import React, { useState, useContext } from "react"
import { navs } from "../../config/config"
import Context from './../../context/UserContext'
import Logo from "../../views/Images/logo.png"

function Header() {
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const handleLogout = () => {
    clearUser()
    window.location.reload()
  }

  const handleProfile = () => {
    navigate("/profile")
  }

  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchQuery}`)
    setSearchQuery("")
    toggleSearch()
  }

  const isSearchButtonDisabled = searchQuery.trim() === ""

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const {
    user
  } = useContext(Context)

  return (
    <header id="mvp-main-head-wrap" className="left relative">
      <div id="mvp-search-wrap" className={`${isSearchOpen ? 'mvp-search-toggle' : ''}`}>
        <div id="mvp-search-box">
          <Form
            onSubmit={handleSubmit}
            className="d-flex align-items-center justify-content-center"
          >
            <FormControl
              type="text"
              placeholder="Explore news..."
              className="form-control shadow-sm border-dark flex-grow-1 mr-2"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
        </div>
        <div className="mvp-search-but-wrap" onClick={toggleSearch}>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav id="mvp-main-nav-wrap" className="left relative">
        <div id="mvp-main-nav-top" className="left relative">
          <div className="mvp-main-box">
            <div id="mvp-nav-top-wrap" className="left relative">
              <div className="mvp-nav-top-right-out left relative">
                <div className="mvp-nav-top-right-in">
                  <div className="mvp-nav-top-cont left relative">
                    <div className="mvp-nav-top-left-out relative">
                      <div className="mvp-nav-top-left">
                        <div className="mvp-nav-soc-wrap">
                          <a href="http://www.facebook.com/envato"
                            target="_blank" rel="noreferrer"><span
                              className="mvp-nav-soc-but fab fa-facebook-f"></span></a>
                          <a href="http://www.twitter.com/mvpthemes"
                            target="_blank" rel="noreferrer"><span
                              className="mvp-nav-soc-but fab fa-twitter"></span></a>
                          <a href="http://www.instagram.com/envato"
                            target="_blank" rel="noreferrer"><span
                              className="mvp-nav-soc-but fab fa-instagram"></span></a>
                          <a href="https://www.youtube.com/user/envato"
                            target="_blank" rel="noreferrer"><span
                              className="mvp-nav-soc-but fab fa-youtube"></span></a>
                        </div>
                        <div className="mvp-fly-but-wrap mvp-fly-but-click left relative">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="mvp-nav-top-left-in">
                        <div className="mvp-nav-top-mid left relative" itemScope=""
                          itemType="http://schema.org/Organization">
                          <a className="mvp-nav-logo-reg" itemProp="url"
                            href="/"><img
                              itemProp="logo"
                              src={Logo}
                              alt="Zox News" width="70" height="70" data-rjs="2" /></a>
                          <a className="mvp-nav-logo-small"
                            href="/"><img
                              src={Logo}
                              alt="Zox News" width="70" height="70" data-rjs="2" /></a>
                          <h1 className="mvp-logo-title">Zox News</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mvp-nav-top-right">
                  {getToken() && (
                    <Dropdown>
                      <Dropdown.Toggle as={Button} variant="link" className="text-white">
                        <FaUser style={{ marginRight: "5px" }} />
                        {user['name'].split(' ')[0]}
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="right">
                        <Dropdown.Item onClick={handleProfile}>Preferences</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mvp-main-nav-bot" className="left relative" style={{ marginTop: "0px" }}>
          <div id="mvp-main-nav-bot-cont" className="left">
            <div className="mvp-main-box">
              <div id="mvp-nav-bot-wrap" className="left">
                <div className="mvp-nav-bot-right-out left">
                  <div className="mvp-nav-bot-right-in">
                    <div className="mvp-nav-bot-cont left">
                      <div className="mvp-nav-bot-left-out">
                        <div className="mvp-nav-bot-left-in">
                          <div className="mvp-nav-menu left">
                            <div className="menu-main-menu-container">
                              <ul id="menu-main-menu-1" className="menu">
                                {navs.map((navItem) => (
                                  <li key={navItem.nav}
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7">
                                    <a
                                      href={navItem.page}>{navItem.nav}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mvp-nav-bot-right left relative">
                    <span
                      className="mvp-nav-search-but fa fa-search fa-2" onClick={toggleSearch}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
