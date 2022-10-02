import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CreateJobCard, UpdateJobCard, getSelectedcard } from "../../features/movies/movieSlice";
import { StyledCardStyle } from "../style/componentsStyle";

import {
    fetchAsyncStyle, fetchAsyncSize, getSelectedstyle, getSelectedsize, fetchAsyncMainfabric, getSelectedmainfabric,
    fetchAsyncVisortype, getSelectedvisortype, fetchAsyncPiping, getSelectedpiping, fetchAsyncFusing, getSelectedfusing,
    fetchAsyncTepper, getSelectedtepper, fetchAsyncSweatbandtype, getSelectedsweatbandtype, fetchAsyncSweatbandcolor,
    getSelectedsweatbandcolor, fetchAsyncButton, getSelectedbutton, fetchAsyncEyeletfront, getSelectedeyeletfront,
    fetchAsyncEyeletback, getSelectedeyeletback, fetchAsyncEyeletmiddle, getSelectedeyeletmiddle, fetchAsyncBackcloertype,
    getSelectedbackclosertype, fetchAsyncBackclosercolor, getSelectedbackclosercolor, fetchAsyncVisorstitch, getSelectedvisorstitch,
} from "../../features/movies/movieSlice";


const StyledCard = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        client: "", date: "", job_coordinator: "", quantity: "", rate: "", artwork: "",
        deliver_date: "", style: "", size: "", visior_type: "", main_fabric: "", piping_type: "", fusing: "",
        eyelet_front: "", eyelet_back: "", eyelet_middle: "", tapper: "", sweate_band_type: "", button: "", back_close_type: "",
        back_closer_color: "", visor_stitch: "", img1: "",
    });
    const { card, loading } = useSelector((state) => ({ ...state.cards }))
    const dispatch = useDispatch();

    const dataa = useSelector(getSelectedcard)
    console.log(dataa)

    useEffect(() => {
        dispatch(UpdateJobCard(id))
    }, [dispatch, id])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(CreateJobCard({ values }))
        setValues({
            client: "", date: "", job_coordinator: "", quantity: "", rate: "", artwork: "",
            deliver_date: "", style: "", size: "", visior_type: "", main_fabric: "", piping_type: "", fusing: "",
            eyelet_front: "", eyelet_back: "", eyelet_middle: "", tapper: "", sweate_band_type: "", button: "", back_close_type: "",
            back_closer_color: "", visor_stitch: "", img1: "",
        })
        console.log(values)
    }


    const sstyle = useSelector(getSelectedstyle)
    const ssize = useSelector(getSelectedsize)
    const smainfabric = useSelector(getSelectedmainfabric)
    const svisortype = useSelector(getSelectedvisortype)
    const spiping = useSelector(getSelectedpiping)
    const sfusing = useSelector(getSelectedfusing)
    const stepper = useSelector(getSelectedtepper)
    const ssweatbandtype = useSelector(getSelectedsweatbandtype)
    const ssweatbandcolor = useSelector(getSelectedsweatbandcolor)
    const sbutton = useSelector(getSelectedbutton)
    const seyeletfront = useSelector(getSelectedeyeletfront)
    const seyeletback = useSelector(getSelectedeyeletback)
    const seyeletmiddle = useSelector(getSelectedeyeletmiddle)
    const sbackclosertype = useSelector(getSelectedbackclosertype)
    const sbackclosercolor = useSelector(getSelectedbackclosercolor)
    const svisorstitch = useSelector(getSelectedvisorstitch)
    // console.log(sstyle)
    // console.log(ssize)
    // console.log(smainfabric)
    // console.log(svisortype)

    useEffect(() => {
        dispatch(fetchAsyncStyle())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncSize())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncMainfabric())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncVisortype())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncPiping())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncFusing())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncTepper())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncSweatbandtype())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncSweatbandcolor())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncButton())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncEyeletfront())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncEyeletback())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncEyeletmiddle())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncBackcloertype())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncBackclosercolor())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchAsyncVisorstitch())
    }, [dispatch])



    //function style




    //     <div name="submitform">
    //     <label class="required" for="id_client">Style :</label>
    //     <select name="style" required="" id="id_style" onChange={getstyle()} >
    //         {sstyle.map((astyle, id) => {
    //             return (

    //                 <option value={astyle.style} key={id}> {astyle.style} </option>

    //             )

    //         })}


    //         {/* <option value="1" selected="">fuck you</option> */}
    //     </select>
    //     <a href="addoption.html"><i class="fa fa-plus"></i></a>
    // </div>
    // <input
    //     type="text"
    //     id="id_client_input"
    // />

    // let selection = document.getElementById("id_style");
    // let result = document.getElementById("id_client_input");
    // selection.addEventListener('change', () => {
    //     result.innerText = selection.option[selection.selectedIndex].innerText;
    // })

    // const [selects, setSelects] = useState();


    return (
        <StyledCardStyle>
            <>
                <div className="form">
                    <form onSubmit={handleSubmit} >
                        {/* <input
                            type="text"
                            name="name"
                            value={values.name}
                            placeholder="style"
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                        />
                        <input
                            type="date"
                            name="date"
                            value={values.date}
                            placeholder="date"
                            onChange={(e) => setValues({ ...values, date: e.target.value })}
                        />

                        <button type="submit">Create</button> */}


                        {/* added form */}

                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client"> Client name :</label>
                                    <input
                                        type="text"
                                        list="client"
                                        name="client"
                                        value={values.client}
                                        placeholder="Enter job coordinator"
                                        onChange={(e) => setValues({ ...values, client: e.target.value })}
                                    />
                                    <datalist name="client" required="" id="client">
                                        <option value="">---------</option>

                                        <option selected="">
                                            sinhgad industrieal association
                                        </option>
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Job Coordinator :</label>
                                    <input
                                        type="text"
                                        // list="coordinators"
                                        name="job_coordinator"
                                        value={values.job_coordinator}
                                        placeholder="Enter job coordinator"
                                        onChange={(e) => setValues({ ...values, job_coordinator: e.target.value })}
                                    />
                                    {/* <datalist name="coordinators" required="" id="coordinators">
                                    <option value="">---------</option>

                                    <option selected="">
                                        sinhgad industrieal association
                                    </option>
                                </datalist> */}
                                </div>

                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Quantity :</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={values.quantity}
                                        placeholder="Quantity"
                                        onChange={(e) => setValues({ ...values, quantity: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Rate :</label>
                                    <input
                                        type="text"
                                        name="rate"
                                        value={values.rate}
                                        placeholder="Enter Rate"
                                        onChange={(e) => setValues({ ...values, rate: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Artwork :</label>
                                    <input
                                        type="text"
                                        name="artwork"
                                        value={values.artwork}
                                        placeholder="Enter Artwork"
                                        onChange={(e) => setValues({ ...values, artwork: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Delivery date :</label>
                                    <input
                                        type="date"
                                        name="deliver_date"
                                        value={values.deliver_date}
                                        placeholder="Enter Artwork"
                                        onChange={(e) => setValues({ ...values, deliver_date: e.target.value })}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <div name="submitform">
                                        <label class="required" for="id_client">Style :</label>
                                        <input
                                            type="text"
                                            list="style"
                                            name="style"
                                            value={values.style}
                                            onChange={(e) => setValues({ ...values, style: e.target.value })}
                                        />
                                        <datalist name="ostyle" required="" id="style"  >
                                            {sstyle.map((astyle, id) => {
                                                return (

                                                    <option key={id}> {astyle.style} </option>

                                                )

                                            })}


                                            {/* <option value="1" selected="">fuck you</option> */}
                                        </datalist>
                                        <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                    </div>

                                </div>
                            </div>
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Size :</label>
                                    <input
                                        type="text"
                                        list="size"
                                        name="size"
                                        value={values.size}
                                        onChange={(e) => setValues({ ...values, size: e.target.value })}
                                    />
                                    <datalist name="size" required="" id="size">
                                        {ssize.map((asize, id) => {
                                            return (

                                                <option value={asize.style} key={id}> {asize.size} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Visor Type :</label>
                                    <input
                                        type="text"
                                        list="visor_type"
                                        name="visior_type"
                                        value={values.visior_type}
                                        onChange={(e) => setValues({ ...values, visior_type: e.target.value })}
                                    />
                                    <datalist name="visor_type" required="" id="visor_type">
                                        {svisortype.map((avisortype, id) => {
                                            return (

                                                <option value={avisortype.visor_type} key={id}> {avisortype.visor_type} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Main Fabric:</label>
                                    <input
                                        type="text"
                                        list="main_fabric"
                                        name="main_fabric"
                                        value={values.main_fabric}
                                        onChange={(e) => setValues({ ...values, main_fabric: e.target.value })}
                                    />
                                    <datalist name="main_fabric" required="" id="main_fabric">
                                        {smainfabric.map((amainfabric, id) => {
                                            return (

                                                <option value={amainfabric.main_fabric} key={id}> {amainfabric.main_fabric} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Piping Type :</label>
                                    <input
                                        type="text"
                                        list="piping_type"
                                        name="piping_type"
                                        value={values.piping_type}
                                        onChange={(e) => setValues({ ...values, piping_type: e.target.value })}
                                    />
                                    <datalist name="piping_type" required="" id="piping_type">
                                        {spiping.map((apiping, id) => {
                                            return (

                                                <option value={apiping.piping} key={id}> {apiping.piping} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Fusing :</label>
                                    <input
                                        type="text"
                                        list="fusing"
                                        name="fusing"
                                        value={values.fusing}
                                        onChange={(e) => setValues({ ...values, fusing: e.target.value })}
                                    />
                                    <datalist name="fusing" required="" id="fusing">
                                        {sfusing.map((afusing, id) => {
                                            return (

                                                <option value={afusing.fusing} key={id}> {afusing.fusing} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Eyelet Front :</label>
                                    <input
                                        type="text"
                                        list="eyelet_front"
                                        name="eyelet_front"
                                        value={values.eyelet_front}
                                        onChange={(e) => setValues({ ...values, eyelet_front: e.target.value })}
                                    />
                                    <datalist name="eyelet_front" required="" id="eyelet_front">
                                        {seyeletfront.map((aeyeletfront, id) => {
                                            return (

                                                <option value={aeyeletfront.eyelet_front} key={id}> {aeyeletfront.eyelet_front} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Eyelet Back :</label>
                                    <input
                                        type="text"
                                        list="eyelet_back"
                                        name="eyelet_back"
                                        value={values.eyelet_back}
                                        onChange={(e) => setValues({ ...values, eyelet_back: e.target.value })}
                                    />
                                    <datalist name="eyelet_back" required="" id="eyelet_back">
                                        {seyeletback.map((aeyeletback, id) => {
                                            return (

                                                <option value={aeyeletback.eyelet_back} key={id}> {aeyeletback.eyelet_back} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">

                                <div class="form-row">
                                    <label class="required" for="id_client">Eyelet Middle :</label>
                                    <input
                                        type="text"
                                        list="eyelet_middle"
                                        name="eyelet_middle"
                                        value={values.eyelet_middle}
                                        onChange={(e) => setValues({ ...values, eyelet_middle: e.target.value })}
                                    />
                                    <datalist name="eyelet_middle" required="" id="eyelet_middle">
                                        {seyeletmiddle.map((aeyeletmiddle, id) => {
                                            return (

                                                <option value={aeyeletmiddle.eyelet_middle} key={id}> {aeyeletmiddle.eyelet_middle} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Tapper :</label>
                                    <input
                                        type="text"
                                        list="tapper"
                                        name="tapper"
                                        value={values.tapper}
                                        onChange={(e) => setValues({ ...values, tapper: e.target.value })}
                                    />
                                    <datalist name="tapper" required="" id="tapper">
                                        {stepper.map((atepper, id) => {
                                            return (

                                                <option value={atepper.tapper} key={id}> {atepper.tapper} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Sweat Band Type :</label>
                                    <input
                                        type="text"
                                        list="sweat_band_type"
                                        name="sweate_band_type"
                                        value={values.sweate_band_type}
                                        onChange={(e) => setValues({ ...values, sweate_band_type: e.target.value })}
                                    />
                                    <datalist name="sweat_band_type" required="" id="sweat_band_type">
                                        {ssweatbandtype.map((asweatbandtype, id) => {
                                            return (

                                                <option value={asweatbandtype.swateband_type} key={id}> {asweatbandtype.swateband_type} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                            {/* <div class="aligned">
                                    <div class="form-row">
                                        <label class="required" for="id_client">Sweat Band Color :</label>
                                        <input
                                            type="text"
                                            list="sweate_band_color"
                                            name="sweate_band_color"
                                            value={values.sweate_band_color}
                                            onChange={(e) => setValues({ ...values, sweate_band_color: e.target.value })}
                                        />
                                        <datalist name="sweat_band_type" required="" id="sweat_band_type">
                                            {ssweatbandcolor.map((asweatbandcolor, id) => {
                                                return (

                                                    <option value={asweatbandcolor} key={id}> {asweatbandcolor.swateband_color} </option>

                                                )

                                            })}
                                        </datalist>
                                        <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div> */}

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Button :</label>
                                    <input
                                        type="text"
                                        list="button"
                                        name="button"
                                        value={values.button}
                                        onChange={(e) => setValues({ ...values, button: e.target.value })}
                                    />
                                    <datalist name="button" required="" id="button">
                                        {sbutton.map((abutton, id) => {
                                            return (

                                                <option value={abutton.button} key={id}> {abutton.button} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Closer Type:</label>
                                    <input
                                        type="text"
                                        list="closer_type"
                                        name="back_close_type"
                                        value={values.back_close_type}
                                        onChange={(e) => setValues({ ...values, back_close_type: e.target.value })}
                                    />
                                    <datalist name="closer_type" required="" id="closer_type">
                                        {sbackclosertype.map((abackclosertype, id) => {
                                            return (

                                                <option value={abackclosertype.closer_type} key={id}> {abackclosertype.closer_type} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Closer Color :</label>
                                    <input
                                        type="text"
                                        list="closer_color"
                                        name="back_closer_color"
                                        value={values.back_closer_color}
                                        onChange={(e) => setValues({ ...values, back_closer_color: e.target.value })}
                                    />
                                    <datalist name="closer_color" required="" id="closer_color">
                                        {sbackclosercolor.map((abackclosercolor, id) => {
                                            return (

                                                <option value={abackclosercolor.closer_color} key={id}> {abackclosercolor.closer_color} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="align">
                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Visor Stitch :</label>
                                    <input
                                        type="text"
                                        list="visor"
                                        name="visor_stitch"
                                        value={values.visor_stitch}
                                        onChange={(e) => setValues({ ...values, visor_stitch: e.target.value })}
                                    />
                                    <datalist name="visor" required="" id="visor">
                                        {svisorstitch.map((avisorstitch, id) => {
                                            return (

                                                <option value={avisorstitch.visor_stitch} key={id}> {avisorstitch.visor_stitch} </option>

                                            )

                                        })}
                                    </datalist>
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>

                            {/* <div class="aligned">
                                    <div class="form-row">
                                        <label class="required" for="id_client">Tapper :</label>
                                        <select name="client" required="" id="id_client">
                                            {spiping.map((apiping, id) => {
                                                return (

                                                    <option value={apiping.piping} key={id}> {apiping.piping} </option>

                                                )

                                            })}
                                        </select>
                                        <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div> */}

                            {/* <div class="aligned">
                                    <div class="form-row">
                                        <label class="required" for="id_client">Tapper :</label>
                                        <input type="text" list="emb_placement" />
                                        <datalist id="emb_placement" name="embroidary_placement" required="" multiple="">
                                            <option selected="">embroidary placement</option>
                                            <option selected="">new placement back</option>
                                            <option selected="">extraone placement main</option>
                                        </datalist>
                                        <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div> */}

                            {/* <input type="text" list="cars" />
                                <datalist id="cars">
                                    <option>Volvo</option>
                                    <option>Saab</option>
                                    <option>Mercedes</option>
                                    <option>Audi</option>
                                </datalist> */}

                            <div class="aligned">
                                <div class="form-row">
                                    <label class="required" for="id_client">Upload image :</label>
                                    <input
                                        type="file"
                                        // list="visor"
                                        name="img1"
                                        value={values.files}
                                        onChange={(e) => setValues({ ...values, img1: e.target.value })}
                                    />
                                    {/* <datalist name="visor" required="" id="visor">
                                            {svisorstitch.map((avisorstitch, id) => {
                                                return (

                                                    <option value={avisorstitch.visor_stitch} key={id}> {avisorstitch.visor_stitch} </option>

                                                )

                                            })}
                                        </datalist> */}
                                    <a href="addoption.html"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form >


                </div>








            </>
        </StyledCardStyle >
    )



}



export default StyledCard