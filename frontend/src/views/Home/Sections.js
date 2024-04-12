import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allArticle } from "../../store/action"
import LeftArticles from "./LeftArticles"
import CenterArticles from "./CenterArticles"
import RightArticles from "./RightArticles"
import BusinessSection from "./BusinessSection"
import MoreNewsSection from "./MoreNewsSection"
import HealthSection from "./HealthSection"
import ScienceSection from "./ScienceSection"
import EntertainmentSection from "./EntertainmentSection"
import Loading from "../Loading/Loading"

function Sections() {
	const dispatch = useDispatch()

	const capitaLize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	document.title = `${capitaLize('News Feed')}`

	const { allArticles, articleLoading } = useSelector((state) => state.all_articles)

	useEffect(() => {
		const fetchData = async () => {
			await Promise.all([
				dispatch(allArticle()),
			])
		}

		fetchData()
	}, [dispatch])

	return (
		<div id="mvp-main-body-wrap" className="left relative" style={{ transform: "none", marginTop: "0px" }}>
			<div className="mvp-main-box">
				<section id="mvp-feat1-wrap" className="left relative">
					<div className="mvp-feat1-right-out left relative">
						<div className="mvp-feat1-right-in">
							<div className="mvp-feat1-main left relative">
								<div className="mvp-feat1-left-wrap relative">
									{articleLoading ? (
										<Loading leftPosition={"250"} />
									) : (
										<CenterArticles allArticles={allArticles} />
									)
									}
								</div>

								{articleLoading ? (
									<Loading leftPosition={"150"} />
								) : (
									<LeftArticles allArticles={allArticles} />
								)
								}

							</div>
						</div>
						<div className="mvp-feat1-right-wrap left relative">
							<div className="mvp-feat1-list-wrap left relative">

								{articleLoading ? (
									<Loading leftPosition={"250"} />
								) : (
									<RightArticles allArticles={allArticles} limitArticles={12} />
								)
								}
							</div>
						</div>
					</div>
				</section>
			</div>
			<div id="mvp-home-widget-wrap" className="left relative">
				{articleLoading ? (
					<Loading leftPosition={"250"} />
				) : (
					<EntertainmentSection allArticles={allArticles} />
				)
				}

				{articleLoading ? (
					<Loading leftPosition={"250"} />
				) : (
					<BusinessSection allArticles={allArticles} />
				)
				}

				{articleLoading ? (
					<Loading leftPosition={"250"} />
				) : (
					<HealthSection allArticles={allArticles} />
				)
				}

				{articleLoading ? (
					<Loading leftPosition={"250"} />
				) : (
					<ScienceSection allArticles={allArticles} />
				)
				}

			</div>

			{allArticles
				.filter(article => article.category === 'technology')
				.length > 0 &&
				<div className="mvp-main-blog-wrap left relative" style={{ transform: "none" }}>
					<div className="mvp-main-box" style={{ transform: "none" }}>
						<div className="mvp-main-blog-cont left relative" style={{ transform: "none" }}>
							<div className="mvp-widget-home-head">
								<h4 className="mvp-widget-home-title">
									<span className="mvp-widget-home-title">More News</span>
								</h4>
							</div>
							<div className="mvp-main-blog-out left relative" style={{ transform: "none" }}>

								{articleLoading ? (
									<Loading leftPosition={"250"} />
								) : (
									<MoreNewsSection allArticles={allArticles} />
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
											<div className="mvp-widget-tab-wrap left relative">
												{articleLoading ? (
													<Loading leftPosition={"250"} />
												) : (
													<RightArticles allArticles={allArticles} limitArticles={5} />
												)
												}
											</div>

										</section>
										<div className="resize-sensor"
											style={{
												position: "absolute", inset: "0px", overflow: "hidden",
												zIndex: "-1", visibility: "hidden"
											}}>
											<div className="resize-sensor-expand"
												style={{
													position: "absolute", left: "0",
													top: "0", right: "0", bottom: "0", overflow: "hidden",
													zIndex: "-1", visibility: "hidden"
												}}>
												<div
													style={{
														position: "absolute", left: "0px",
														top: "0px", transition: "all 0s ease 0s",
														width: "330px", height: "617px"
													}}>
												</div>
											</div>
											<div className="resize-sensor-shrink"
												style={{
													position: "absolute", left: "0",
													top: "0", right: "0", bottom: "0", overflow: "hidden",
													zIndex: "-1", visibility: "hidden"
												}}>
												<div
													style={{
														position: "absolute", left: "0",
														top: "0", transition: "0s", width: "200%",
														height: "200%"
													}}>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Sections
