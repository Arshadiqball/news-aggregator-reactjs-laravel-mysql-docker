import React from "react"
import NullImage from "../../views/Images/nullImage.png"

function NewsSection(props) {
    const { articles } = props

    return (
        <div className="mvp-main-blog-in">
            <div className="mvp-main-blog-body left relative">
                <ul className="mvp-blog-story-list left relative infinite-content">
                    {articles && (
                        articles.length > 0 ? (
                            articles.map((element, index) => (
                                <li className="mvp-blog-story-wrap left relative infinite-post">
                                    <a href={element.url} key={index}
                                        rel="bookmark">
                                        <div className="mvp-blog-story-out relative">
                                            <div className="mvp-blog-story-img left relative">
                                                <img width="1000" height="600"
                                                    src={element.image ?? NullImage}
                                                    className="mvp-big-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy"
                                                    sizes="(max-width: 1000px) 100vw, 1000px" /> <img
                                                    width="400" height="240"
                                                    src={element.image ?? NullImage}
                                                    className="mvp-reg-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy"
                                                    sizes="(max-width: 400px) 100vw, 400px" /> <img
                                                    width="80" height="80"
                                                    src={element.image ?? NullImage}
                                                    className="mvp-mob-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy"
                                                    sizes="(max-width: 80px) 100vw, 80px" />
                                            </div>
                                            <div className="mvp-blog-story-in">
                                                <div className="mvp-blog-story-text left relative">
                                                    <div className="mvp-cat-date-wrap left relative">
                                                        <span
                                                            className="mvp-cd-cat left relative">{element.category ?? "Unknown"}</span><span
                                                                className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                    </div>
                                                    <h2>{element?.title?.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>
                                                    <p>{element?.description?.length > 100 ? `${element.description.substring(0, 100)}...` : element.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <p>There are no articles available.</p>
                        )

                    )}

                </ul>
            </div>
        </div>
    )
}

export default NewsSection
