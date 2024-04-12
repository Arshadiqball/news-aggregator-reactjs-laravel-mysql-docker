import React from "react"
import NullImage from "../../views/Images/nullImage.png"

function ScienceSection(props) {
    const { allArticles } = props

    return (
        (allArticles
            .filter(article => article.category === 'science')
            .length > 0 &&
            <section id="mvp_home_feat2_widget-4"
                className="mvp-widget-home left relative mvp_home_feat2_widget">
                <div className="mvp-main-box">
                    <div className="mvp-widget-home-head">
                        <h4 className="mvp-widget-home-title"><span
                            className="mvp-widget-home-title">Science</span></h4>
                    </div>
                    <div className="mvp-widget-feat2-wrap left relative">
                        <div className="mvp-widget-feat2-out left relative">
                            <div className="mvp-widget-feat2-in">
                                <div className="mvp-widget-feat2-main left relative">
                                    <div className="mvp-widget-feat2-left left relative mvp-widget-feat2-left-alt">

                                        {allArticles && (
                                            allArticles
                                                .filter(article => article.category === 'science')
                                                .slice(0, 1).map((element, index) => (
                                                    <a href={element.url} key={index}
                                                        rel="bookmark">
                                                        <div className="mvp-widget-feat2-left-cont left relative">
                                                            <div className="mvp-feat1-feat-img left relative">
                                                                <img width="560" height="600"
                                                                    src={element.image ?? NullImage}
                                                                    className="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image"
                                                                    alt="" decoding="async" />
                                                                <div className="mvp-vid-box-wrap mvp-vid-marg">
                                                                    <i className="fa fa-2 fa-play" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                            <div className="mvp-feat1-feat-text left relative">
                                                                <div className="mvp-cat-date-wrap left relative">
                                                                    <span
                                                                        className="mvp-cd-cat left relative">{element.category}</span><span
                                                                            className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                                </div>
                                                                <h2>{element.title.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>
                                                                <p>{element.description.length > 100 ? `${element.description.substring(0, 100)}...` : element.description}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))
                                        )}
                                    </div>
                                    <div className="mvp-widget-feat2-right left relative">
                                        {allArticles && (
                                            allArticles
                                                .filter(article => article.category === 'science')
                                                .slice(1, 3).map((element, index) => (
                                                    <a href={element.url} key={index}
                                                        rel="bookmark">
                                                        <div className="mvp-widget-feat2-right-cont left relative">
                                                            <div className="mvp-widget-feat2-right-img left relative">
                                                                <img width="400" height="240"
                                                                    src={element.image ?? NullImage}
                                                                    className="mvp-reg-img lazy wp-post-image" alt=""
                                                                    decoding="async"
                                                                    sizes="(max-width: 400px) 100vw, 400px" /> <img
                                                                    width="80" height="80"
                                                                    src={element.image ?? NullImage}
                                                                    className="mvp-mob-img lazy wp-post-image" alt=""
                                                                    decoding="async"
                                                                    sizes="(max-width: 80px) 100vw, 80px" />
                                                            </div>
                                                            <div className="mvp-widget-feat2-right-text left relative">
                                                                <div className="mvp-cat-date-wrap left relative">
                                                                    <span
                                                                        className="mvp-cd-cat left relative">{element.category}</span><span
                                                                            className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                                </div>
                                                                <h2>{element.title.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>

                                                            </div>
                                                        </div>
                                                    </a>
                                                ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mvp-widget-feat2-side left relative">
                                <div className="mvp-widget-feat2-side-list left relative">
                                    <div className="mvp-feat1-list left relative">
                                        {allArticles && (
                                            allArticles
                                                .filter(article => article.category === 'science')
                                                .slice(4, 7).map((element, index) => (
                                                    <a href={element.url} key={index}
                                                        rel="bookmark">
                                                        <div className="mvp-feat1-list-cont left relative">
                                                            <div className="mvp-feat1-list-out relative">
                                                                <div className="mvp-feat1-list-img left relative">
                                                                    <img width="80" height="80"
                                                                        src={element.image ?? NullImage}
                                                                        className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image"
                                                                        alt="" decoding="async"
                                                                        sizes="(max-width: 80px) 100vw, 80px" />
                                                                </div>
                                                                <div className="mvp-feat1-list-in">
                                                                    <div className="mvp-feat1-list-text">
                                                                        <div className="mvp-cat-date-wrap left relative">
                                                                            <span
                                                                                className="mvp-cd-cat left relative">{element.category}</span><span
                                                                                    className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                                        </div>
                                                                        <h2>{element.title.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))
                                        )}
                                    </div>
                                    <a href="categories/science">
                                        <div className="mvp-widget-feat2-side-more-but left relative">
                                            <span className="mvp-widget-feat2-side-more">More
                                                Science</span><i className="fa fa-long-arrow-right"
                                                    aria-hidden="true"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    )
}

export default ScienceSection
