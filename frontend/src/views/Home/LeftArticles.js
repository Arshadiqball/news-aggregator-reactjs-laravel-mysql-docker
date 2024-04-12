import React from "react"
import NullImage from "../../views/Images/nullImage.png"

function LeftArticles(props) {

	const { allArticles } = props

	return (
		(allArticles.length > 0 && 
		<div className="mvp-feat1-mid-wrap left relative">
			<h3 className="mvp-feat1-pop-head"><span
				className="mvp-feat1-pop-head">Trending</span></h3>
			<div className="mvp-feat1-pop-wrap left relative">
				{/* Left sidebar Section */}
				{allArticles && (
					allArticles.slice(0, 5).map((element, index) => (
						<a href={element.url} key={index}
							rel="bookmark">
							<div className="mvp-feat1-pop-cont left relative">
								<div className="mvp-feat1-pop-img left relative">
									<img width="400" height="240"
										src={element.image || NullImage}
										className="mvp-reg-img wp-post-image" alt=""
										decoding="async"
										sizes="(max-width: 400px) 100vw, 400px" /> <img width="80"
											height="80"
											src={element.image || NullImage}
											className="mvp-mob-img wp-post-image" alt=""
											decoding="async"
											sizes="(max-width: 80px) 100vw, 80px" />
									<div className="mvp-vid-box-wrap mvp-vid-box-mid mvp-vid-marg">
										<i className="fa fa-2 fa-play" aria-hidden="true"></i>
									</div>
								</div>
								<div className="mvp-feat1-pop-text left relative">
									<div className="mvp-cat-date-wrap left relative">
										<span
											className="mvp-cd-cat left relative">{element.category}</span><span
												className="mvp-cd-date left relative">{element.publish_at_human}</span>
									</div>
									<h2>{element.title}</h2>
								</div>
							</div>
						</a>
					))
				)}
			</div>
		</div>
	)
	)
}

export default LeftArticles
