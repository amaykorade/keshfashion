


import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCardStyle } from '../style/componentsStyle';
import StyledCard from './StyledCard';

const MovieCard = (props) => {
    const { data } = props;
    return (
        <MovieCardStyle>
            <div>



                {/* <table class="content-table">

                        <tbody>
                            <tr >
                                <td> <p>{data.artwork}</p> </td>
                                <td>{data.job_coordinator}</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>
                                    <div>
                                        <input type="submit" name="submit-now" />
                                    </div>
                                </td>

                            </tr>

                        </tbody>
                    </table> */}

                {/* <table class="content-table">
                    <thead>
                        <tr>
                            <th>Job Card No</th>
                            <th>Designer</th>
                            <th>Cutting</th>
                            <th>Production</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>{data.artwork}</p></td>
                            <td>{data.artwork}</td>
                            <td>{data.artwork}</td>
                            <td>{data.artwork}</td>

                            <td>

                                <div>
                                    <Link to={`/detail/${data.id}`}>
                                        <input type="submit" name="submit-now" />
                                    </Link>
                                </div>
                            </td>
                        </tr>



                    </tbody>


                </table> */}

                <section>
                    {/* <h1>Job Card</h1> */}
                    <div class="card">
                        <div class="jocard"><p>{data.artwork}</p></div>
                        <div class="designer"><p>{String(data.is_checked_by_designer)}</p></div>
                        <div class="cutting"><p>{data.artwork}</p></div>
                        <div class="production"><p>{data.artwork}</p></div>
                        <div class="detail">
                            <Link to={`/detail/${data.id}`}>
                                <button>Submit</button>
                            </Link>
                            {/* <Link to={`/update/${data.id}`}>
                                <button>update</button>
                            </Link> */}
                        </div>
                    </div>

                    <div>
                        {String(data.is_checked_by_designer) == "true" && String(data.is_checked_by_production) == "false" && String(data.is_checked_by_accountent) == "false" && String(data.is_checked_by_cutting) == "false" ? <div className='first_div'></div> : null}
                        {String(data.is_checked_by_designer) == "true" && String(data.is_checked_by_production) == "true" && String(data.is_checked_by_accountent) == "false" && String(data.is_checked_by_cutting) == "false" ? <div className='second_div'></div> : null}
                        {String(data.is_checked_by_designer) == "true" && String(data.is_checked_by_production) == "true" && String(data.is_checked_by_accountent) == "true" && String(data.is_checked_by_cutting) == "false" ? <div className='third_div'></div> : null}
                        {String(data.is_checked_by_designer) == "true" && String(data.is_checked_by_production) == "true" && String(data.is_checked_by_accountent) == "true" && String(data.is_checked_by_cutting) == "true" ? <div className='fourth_div'></div> : null}

                    </div>
                </section>






            </div>
        </MovieCardStyle>
    );
};

export default MovieCard;