

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCardsDetail, getSelectedcard } from '../../features/movies/movieSlice';
import { MovieDetailStyle } from '../style/componentsStyle';
import { StyleCard } from '../MovieCard/StyleCard';


const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedcard)
    console.log(data)
    // const { client, date } = data
    // const aggregatedArticleList =
    //     client.map(({ item }) => {
    //         return (
    //             <div key={item.id}> {item.GST_NO} </div>
    //         )
    //     });
    useEffect(() => {
        dispatch(fetchAsyncCardsDetail(id))
    }, [dispatch, id])

    // clientData = data.client ? ((data.client).map((item) => {
    //     return (
    //         <>
    //         <div>
    //             {item.phone}
    //         </div>
    //         </>
    //     )
    // }) : ( <p>loading</p> )

    return (
        <MovieDetailStyle>
            <div>


                <section>
                    <h1>Job Card</h1>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Date :</div>
                            <div class="content">{data.date}</div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Job Card No :</div>
                            <div class="content"></div>
                        </div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Party Name :</div>
                        <div class="partycontent">wasgwr</div>
                    </div>
                    <div>

                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">GST No :  </div>
                            <div class="content"> {data.client?.GST_NO} </div>

                            {/* {data.client.map((item) => {
                                return (
                                    <StyleCard item={item} key={item.id} />
                                )
                            })} */}
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Style:</div>
                            <div class="content"> {data.date} </div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Job Coordinator :</div>
                            <div class="content"> {data.job_coordinator} </div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Mob :</div>
                            <div class="content"></div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Quantity :</div>
                            <div class="content"> {data.quantity} </div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Rate :</div>
                            <div class="content">{data.rate}</div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Delivery Date :</div>
                            <div class="content">{data.deliver_date}</div>
                        </div>
                        {/* <div class="firstcontentfirst">
                            <div class="fixedheading">Rate :</div>
                            <div class="content">{data.rate}</div>
                        </div> */}
                    </div>
                </section>
                <section>
                    <h1>Style Information</h1>
                    <div class="styleinfo">
                        <div class="styleinfoone">
                            <p>Main Fabric</p>
                            <div class="style">
                                <p>Front :</p>
                                <p>Middle :</p>
                                <p>Back :</p>
                            </div>
                        </div>
                        <div class="styleinfoone">
                            <p>Visor Fabric</p>
                            <div class="style">
                                <p>Front :</p>
                                <p>Middle :</p>
                                <p>Back :</p>
                            </div>
                        </div>
                        <div class="styleinfoone">
                            <p>Piping Fabric</p>
                            <div class="style">
                                <p>Front :</p>
                                <p>Middle :</p>
                                <p>Back :</p>
                            </div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Fusing :</div>
                            <div class="content"></div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Eyelet :</div>
                            <div class="content"></div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Taper :</div>
                            <div class="content"></div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Sweatband :</div>
                            <div class="content"></div>
                        </div>
                    </div>
                    <div class="firstcontent">
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Button :</div>
                            <div class="content"></div>
                        </div>
                        <div class="firstcontentfirst">
                            <div class="fixedheading">Visor Stitch :</div>
                            <div class="content"></div>
                        </div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Back Closer :</div>
                        <div class="partycontent">agvfrdga</div>
                    </div>
                </section>
                <section>
                    <h1>Embroidary Placement</h1>
                    <div className='emb'>
                        <div>
                            <div className='emblab'>Front</div>
                            <div className='embcon'>front</div>
                        </div>
                        <div>
                            <div className='emblab'>Back</div>
                            <div className='embcon'>front</div>
                        </div>
                        <div>
                            <div className='emblab'>Left Middle</div>
                            <div className='embcon'>front</div>
                        </div>
                        <div>
                            <div className='emblab'>Right Middle</div>
                            <div className='embcon'>front</div>
                        </div>
                        <div>
                            <div className='emblab'>Visor</div>
                            <div className='embcon'>front</div>
                        </div>
                        <div>
                            <div className='emblab'>Velor</div>
                            <div className='embcon'>front</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="secondcontent">
                        <div class="party">Front Emb Colour Code :</div>
                        <div class="partycontent">warygh</div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Back Emb Colour Code :</div>
                        <div class="partycontent">lo57o</div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Left Middle Emb Colour Code :</div>
                        <div class="partycontent">esi432</div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Right Middle Emb Colour Code :</div>
                        <div class="partycontent">3w5aqu</div>
                    </div>
                    <div class="secondcontent">
                        <div class="party">Special Instruction :</div>
                        <div class="partycontent">68p6rw34at</div>
                    </div>
                </section>

            </div>
        </MovieDetailStyle>
    );
};

export default MovieDetail;