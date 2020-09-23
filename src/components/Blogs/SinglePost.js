import React, { Component } from 'react'
import Footer from "../Commons/Footer"

import hero1 from "../../images/hero_1.jpg"
import person1 from "../../images/person_1.jpg"
import slider1 from "../../images/slider-1.jpg"
import CardComment from './CardComment'

export default class SinglePost extends Component {
    render() {
        return (
            <div>
                <div className="single_post_cover">
                    <div className="container">
                        <div className="row align-items-lg-center cover_content">
                            <div className="col-lg-6 order-lg-1 text-center mx-auto">
                                <h1>Blog Single Post</h1>
                                <p>July 3, 2018 • by John Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-50">
                    <div className="row">
                        <div className="col-8 post_left">
                            <div className="post_content">
                                <h3>World Cup 2018</h3>
                                <img src={hero1} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                                <h3>Molestiae cupiditate inventore animi, maxime sapiente optio</h3>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                                <img src={slider1} alt="" />
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                                <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                                <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>

                                <div className="tag">
                                    <span className="badge badge-secondary">Relax</span>
                                    <span className="badge badge-secondary">Hotel</span>
                                    <span className="badge badge-secondary">Luxury</span>
                                    <span className="badge badge-secondary">Unwind</span>
                                </div>
                            </div>
                            <div className="post_comment mt-80">
                                <h3 className="mb-5">6 Comments</h3>
                                <CardComment />
                                <CardComment />
                                <CardComment />
                            </div>
                            <div className="post_message mt-80">
                                <h3>Leave a comment</h3>
                                <form className="mt-30 p-5">
                                    <div className="form-group">
                                        <label htmlFor="commentName">Name</label>
                                        <input type="text" className="form-control" id="commentName" aria-describedby="emailHelp" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="commentEmail">Email</label>
                                        <input type="email" className="form-control" id="commentEmail" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="commentWebsite">Website</label>
                                        <input type="text" className="form-control" id="commentWebsite" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="commentMessage">Message</label>
                                        <textarea className="form-control" id="commentMessage" rows={7} defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">POST COMMENT</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-4 post_right">
                            <div className="post_search">
                                <input type="text" class="form-control" id="search_input" placeholder="Type a keyword and hit enter" />
                            </div>
                            <div className="post_category mt-80">
                                <h3>Categories</h3>
                                <ul>
                                    <li>
                                        <p>Courses <span>(12)</span></p>
                                    </li>
                                    <li>
                                        <p>News <span>(22)</span></p>
                                    </li>
                                    <li>
                                        <p>Design <span>(37)</span></p>
                                    </li>
                                    <li>
                                        <p>HTML <span>(42)</span></p>
                                    </li>
                                    <li>
                                        <p>Web Development <span>(14)</span></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="post_author mt-80">
                                <img src={person1} alt="" />
                                <h4 className="mt-30">About The Author</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button className="btn btn-primary">READ MORE</button>
                            </div>
                            <div className="tag_cloud mt-80">
                                <span className="badge badge-secondary">Life</span>
                                <span className="badge badge-secondary">Sport</span>
                                <span className="badge badge-secondary">Tech</span>
                                <span className="badge badge-secondary">Travel</span>
                                <span className="badge badge-secondary">Life</span>
                                <span className="badge badge-secondary">Sport</span>
                                <span className="badge badge-secondary">Tech</span>
                                <span className="badge badge-secondary">Travel</span>
                            </div>
                            <div className="paragraph mt-80">
                                <h4>Paragraph</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
