import React, { useState } from "react"
import NullImage from "../../views/Images/nullImage.png"

function RightArticles(props) {
    const { allArticles, limitArticles } = props
    const [activeTab, setActiveTab] = useState('latest')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    return (

        (allArticles.length > 0 &&
            <>
                <div className="mvp-feat1-list-head-wrap left relative">
                    <ul className="mvp-feat1-list-buts left relative">
                        <li className={`mvp-feat-col-tab ${activeTab === 'latest' ? 'active' : ''}`}>
                            <a onClick={() => handleTabClick('latest')}>
                                <span className="mvp-feat1-list-but">Latest</span>
                            </a>
                        </li>
                        <li className={`mvp-feat-col-tab ${activeTab === 'old' ? 'active' : ''}`}>
                            <a onClick={() => handleTabClick('old')}>
                                <span className="mvp-feat1-list-but">Old</span>
                            </a>
                        </li>
                        <li className={`mvp-feat-col-tab ${activeTab === 'random' ? 'active' : ''}`}>
                            <a onClick={() => handleTabClick('random')}>
                                <span className="mvp-feat1-list-but">Random</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`mvp-feat1-list left relative mvp-tab-col-cont`} style={{ display: activeTab === 'latest' ? 'block' : 'none' }}>

                    {allArticles && allArticles
                        .slice(0, limitArticles).map((element, index) => (
                            <a key={index} href={element.url}
                                rel="bookmark">
                                <div className="mvp-feat1-list-cont left relative">
                                    <div className="mvp-feat1-list-out relative">
                                        <div className="mvp-feat1-list-img left relative">
                                            <img width="80" height="80"
                                                src={element.image ?? NullImage}
                                                className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                                alt="" decoding="async" loading="lazy"
                                                sizes="(max-width: 80px) 100vw, 80px" />
                                        </div>
                                        <div className="mvp-feat1-list-in">
                                            <div className="mvp-feat1-list-text">
                                                <div className="mvp-cat-date-wrap left relative">
                                                    <span
                                                        className="mvp-cd-cat left relative">{element.category ?? "Not Defined"}</span><span
                                                            className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                </div>
                                                <h2>{element.title.length > 30 ? `${element.title.substring(0, 30)}` : element.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                </div>

                <div className={`mvp-feat1-list left relative mvp-tab-col-cont`} style={{ display: activeTab === 'old' ? 'block' : 'none' }}>

                    {allArticles && allArticles
                        .slice(-limitArticles).map((element, index) => (
                            <a key={index} href={element.url}
                                rel="bookmark">
                                <div className="mvp-feat1-list-cont left relative">
                                    <div className="mvp-feat1-list-out relative">
                                        <div className="mvp-feat1-list-img left relative">
                                            <img width="80" height="80"
                                                src={element.image ?? NullImage}
                                                className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                                alt="" decoding="async" loading="lazy"
                                                sizes="(max-width: 80px) 100vw, 80px" />
                                        </div>
                                        <div className="mvp-feat1-list-in">
                                            <div className="mvp-feat1-list-text">
                                                <div className="mvp-cat-date-wrap left relative">
                                                    <span
                                                        className="mvp-cd-cat left relative">{element.category ?? "Not Defined"}</span><span
                                                            className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                </div>
                                                <h2>{element.title.length > 30 ? `${element.title.substring(0, 30)}` : element.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                </div>

                <div className={`mvp-feat1-list left relative mvp-tab-col-cont`} style={{ display: activeTab === 'random' ? 'block' : 'none' }}>

                    {allArticles && shuffle(allArticles)
                        .slice(0, limitArticles).map((element, index) => (
                            <a key={index} href={element.url}
                                rel="bookmark">
                                <div className="mvp-feat1-list-cont left relative">
                                    <div className="mvp-feat1-list-out relative">
                                        <div className="mvp-feat1-list-img left relative">
                                            <img width="80" height="80"
                                                src={element.image ?? NullImage}
                                                className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                                alt="" decoding="async" loading="lazy"
                                                sizes="(max-width: 80px) 100vw, 80px" />
                                        </div>
                                        <div className="mvp-feat1-list-in">
                                            <div className="mvp-feat1-list-text">
                                                <div className="mvp-cat-date-wrap left relative">
                                                    <span
                                                        className="mvp-cd-cat left relative">{element.category ?? "Not Defined"}</span><span
                                                            className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                </div>
                                                <h2>{element.title.length > 30 ? `${element.title.substring(0, 30)}` : element.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}


                </div>
            </>
        ))
}

export default RightArticles
