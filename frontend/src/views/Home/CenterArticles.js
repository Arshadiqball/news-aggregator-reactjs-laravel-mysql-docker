import React from "react"
import NullImage from "../../views/Images/nullImage.png"

function CenterArticles(props) {
    const { allArticles } = props

    return (
        <>
            {allArticles && allArticles
                .filter(article => article.category === 'business')
                .slice(0, 1).map((element, index) => (
                    <a key={index} href={element.url}
                        rel="bookmark">
                        <div className="mvp-feat1-feat-wrap left relative">
                            <div className="mvp-feat1-feat-img left relative">
                                <img width="560" height="600"
                                    src={element.image || NullImage}
                                    className="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image"
                                    alt="" decoding="async" />
                                <div className="mvp-vid-box-wrap mvp-vid-marg">
                                    <i className="fa fa-2 fa-play" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="mvp-feat1-feat-text left relative">
                                <div className="mvp-cat-date-wrap left relative">
                                    <span className="mvp-cd-cat left relative">{element.category}</span><span
                                        className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                </div>
                                <h2>{element.title.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>
                                <p>{element.description.length > 100 ? `${element.description.substring(0, 100)}...` : element.description}</p>
                            </div>
                        </div>
                    </a>
                ))}

            {allArticles && allArticles
                .slice(1, 3).map((element, index) => (
                    <div className="mvp-feat1-sub-wrap left relative" key={index}>
                        <a href={element.url}
                            rel="bookmark">
                            <div className="mvp-feat1-sub-cont left relative">
                                <div className="mvp-feat1-sub-img left relative">
                                    <img width="590" height="354"
                                        src={element.image || NullImage}
                                        className="mvp-reg-img wp-post-image" alt=""
                                        decoding="async"
                                        sizes="(max-width: 590px) 100vw, 590px" /> <img
                                        width="400" height="240"
                                        src={element.image || NullImage}
                                        className="mvp-mob-img wp-post-image" alt=""
                                        decoding="async"
                                        sizes="(max-width: 400px) 100vw, 400px" />
                                    <div className="mvp-vid-box-wrap">
                                        <i className="fa fa-2 fa-camera" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="mvp-feat1-sub-text">
                                    <div className="mvp-cat-date-wrap left relative">
                                        <span
                                            className="mvp-cd-cat left relative">{element.category}</span><span
                                                className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                    </div>
                                    <h2>{element.title}</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}

                

            {allArticles && allArticles
                .slice(0, 1).length === 0 && (
                    <center><p>There's no article available</p></center>
            )}
        </>
    )
}

export default CenterArticles
