import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../common/apis/movieApi"


export const fetchAsyncCards = createAsyncThunk('cards/fetchAsyncCards', async () => {
    const response = await movieApi.get(`/api/`);

    // console.log("response", response)
    // dispatch(addCards(response.data))
    return response.data;
})

export const fetchAsyncCardsDetail = createAsyncThunk('cards/fetchAsyncCardsDetail', async (id) => {
    const response = await movieApi.get(`/api/detail/${id}`);

    return response.data;
})

export const postFormDetail = createAsyncThunk('cards/fetchAsyncCardsDetail', async () => {
    const response = await movieApi.post(`/api`);

    return response.data;
})

// added style

export const fetchAsyncStyle = createAsyncThunk('cards/fetchAsyncStyle', async () => {
    const response = await movieApi.get(`/api/style`);

    return response.data;
})

// added size

export const fetchAsyncSize = createAsyncThunk('cards/fetchAsyncSize', async () => {
    const response = await movieApi.get(`/api/size`);

    return response.data;
})

// added mainfabric

export const fetchAsyncMainfabric = createAsyncThunk('cards/fetchAsyncMainfabric', async () => {
    const response = await movieApi.get(`/api/mainfabric`);

    return response.data;
})

// addded visortype

export const fetchAsyncVisortype = createAsyncThunk('cards/fetchAsyncVisortype', async () => {
    const response = await movieApi.get(`/api/visortype`);

    return response.data;
})

// added piping

export const fetchAsyncPiping = createAsyncThunk('cards/fetchAsyncPiping', async () => {
    const response = await movieApi.get(`/api/piping`);

    return response.data;
})

// added fusing

export const fetchAsyncFusing = createAsyncThunk('cards/fetchAsyncFusing', async () => {
    const response = await movieApi.get(`/api/fusing`);

    return response.data;
})


// added tepper

export const fetchAsyncTepper = createAsyncThunk('cards/fetchAsyncTepper', async () => {
    const response = await movieApi.get(`/api/tepper`);

    return response.data;
})


// added sweatbandtype

export const fetchAsyncSweatbandtype = createAsyncThunk('cards/fetchAsyncSweatbandtype', async () => {
    const response = await movieApi.get(`/api/sweatebandtype`);

    return response.data;
})


// added sweatbandcolor

export const fetchAsyncSweatbandcolor = createAsyncThunk('cards/fetchAsyncSweatbandcolor', async () => {
    const response = await movieApi.get(`/api/sweatebandcolor`);

    return response.data;
})


// added button

export const fetchAsyncButton = createAsyncThunk('cards/fetchAsyncButton', async () => {
    const response = await movieApi.get(`/api/button`);

    return response.data;
})


// added eyeletfront

export const fetchAsyncEyeletfront = createAsyncThunk('cards/fetchAsyncEyeletfront', async () => {
    const response = await movieApi.get(`/api/eyeletfront`);

    return response.data;
})


// added eyeletback

export const fetchAsyncEyeletback = createAsyncThunk('cards/fetchAsyncEyeletback', async () => {
    const response = await movieApi.get(`/api/eyeletback`);

    return response.data;
})


// added eyeletmiddle

export const fetchAsyncEyeletmiddle = createAsyncThunk('cards/fetchAsyncEyeletmiddle', async () => {
    const response = await movieApi.get(`/api/eyeletmiddle`);

    return response.data;
})


// added backcloertype

export const fetchAsyncBackcloertype = createAsyncThunk('cards/fetchAsyncBackcloertype', async () => {
    const response = await movieApi.get(`/api/backcloertype`);

    return response.data;
})


// added backclosercolor

export const fetchAsyncBackclosercolor = createAsyncThunk('cards/fetchAsyncBackclosercolor', async () => {
    const response = await movieApi.get(`/api/backclosercolor`);

    return response.data;
})


// added visorstitch

export const fetchAsyncVisorstitch = createAsyncThunk('cards/fetchAsyncVisorstitch', async () => {
    const response = await movieApi.get(`/api/visorstitch`);

    return response.data;
})



// added

export const CreateJobCard = createAsyncThunk(
    "jobcard/createJobCard",
    async ({ values }) => {
        const response = await fetch(`http://127.0.0.1:8000/api/addjobcard`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                client: values.client,
                date: values.date,
                job_coordinator: values.job_coordinator,
                quantity: values.quantity,
                rate: values.rate,
                artwork: values.artwork,
                deliver_date: values.deliver_date,
                style: values.style,
                size: values.size,
                visior_type: values.visior_type,
                main_fabric: values.main_fabric,
                piping_type: values.piping_type,
                fusing: values.fusing,
                eyelet_front: values.eyelet_front,
                eyelet_back: values.eyelet_back,
                eyelet_middle: values.eyelet_middle,
                tapper: values.tapper,
                sweate_band_type: values.sweate_band_type,
                sweate_band_color: values.sweate_band_color,
                button: values.button,
                back_close_type: values.back_close_type,
                back_closer_color: values.back_closer_color,
                visor_stitch: values.visor_stitch,
                img1: values.files,
            }),
        });
        const data = await response.json();
        return data;
    }
);
export const UpdateJobCard = createAsyncThunk(
    "jobcard/updateJobCard",
    async ({ values, id }) => {
        const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
            },
            body: JSON.stringify({

            }),
        });
        const data = await response.json();
        return data;
    }
);

// export const fetchAsyncCardsDetail = createAsyncThunk('cards/fetchAsyncCardsDetail', async (id) => {
//     const response = await movieApi.get(`/api/detail/${id}`);

//     return response.data;
// })


const initialState = {
    cards: {},
    selectedCard: [],
    style: [],
    selectedStyle: [],
    selectedSize: [],
    selectedMainfabric: [],
    selectedVisortype: [],
    selectedPiping: [],
    selectedFusing: [],
    selectedTepper: [],
    selectedSweatbandtype: [],
    selectedSweatbandcolor: [],
    selectedButton: [],
    selectedEyeletfront: [],
    selectedEyeletback: [],
    selectedEyeletmiddle: [],
    selectedBackclosertype: [],
    selectedBackclosercolor: [],
    selectedVisorstitch: [],

    loading: false,
    error: null,
    // form: {},
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCards: (state, { payload }) => {
            state.cards = payload;
        },
        // addForm: (state, { payload }) => {
        //     state.form = payload;
        // }
    },
    extraReducers: {
        [fetchAsyncCards.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncCards.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, cards: payload };
        },
        [fetchAsyncCards.rejected]: () => {
            console.log("Rejected");
        },

        // [fetchAsyncCardsDetail.pending]: () => {
        //     console.log("Pending");
        // },

        [fetchAsyncCardsDetail.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedCard: payload };
        },
        // [postFormDetail.fulfilled]: (state, { payload }) => {
        //     console.log("Post successfully");
        //     return { ...state, selectedForm: payload };
        // },
        // [fetchAsyncCardsDetail.rejected]: () => {
        //     console.log("Rejected");
        // },

        [fetchAsyncStyle.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedStyle: payload };
        },
        [fetchAsyncSize.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedSize: payload };
        },
        [fetchAsyncMainfabric.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedMainfabric: payload };
        },
        [fetchAsyncVisortype.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedVisortype: payload };
        },
        [fetchAsyncPiping.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedPiping: payload };
        },
        [fetchAsyncFusing.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedFusing: payload };
        },
        [fetchAsyncTepper.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedTepper: payload };
        },
        [fetchAsyncSweatbandtype.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedSweatbandtype: payload };
        },
        [fetchAsyncSweatbandcolor.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedSweatbandcolor: payload };
        },
        [fetchAsyncButton.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedButton: payload };
        },
        [fetchAsyncEyeletfront.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedEyeletfront: payload };
        },
        [fetchAsyncEyeletback.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedEyeletback: payload };
        },
        [fetchAsyncEyeletmiddle.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedEyeletmiddle: payload };
        },
        [fetchAsyncBackcloertype.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedBackclosertype: payload };
        },
        [fetchAsyncBackclosercolor.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedBackclosercolor: payload };
        },
        [fetchAsyncVisorstitch.fulfilled]: (state, { payload }) => {
            // console.log("Fetched successfully");
            return { ...state, selectedVisorstitch: payload };
        },



        [CreateJobCard.pending]: (state) => {
            state.loading = true;
        },
        [CreateJobCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.style = [action.payload];
        },
        [CreateJobCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [UpdateJobCard.pending]: (state) => {
            state.loading = true;
        },
        [UpdateJobCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.style = [action.payload];
        },
        [UpdateJobCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { addCards } = cardSlice.actions;
export const getAllcards = (state) => state.cards.cards;
export const getSelectedcard = (state) => state.cards.selectedCard;
// export const getSelectedcard = (state) => state.cards.selectedCard;
export const getSelectedstyle = (state) => state.cards.selectedStyle;
export const getSelectedsize = (state) => state.cards.selectedSize;
export const getSelectedmainfabric = (state) => state.cards.selectedMainfabric;
export const getSelectedvisortype = (state) => state.cards.selectedVisortype;
export const getSelectedpiping = (state) => state.cards.selectedPiping;
export const getSelectedfusing = (state) => state.cards.selectedFusing;
export const getSelectedtepper = (state) => state.cards.selectedTepper;
export const getSelectedsweatbandtype = (state) => state.cards.selectedSweatbandtype;
export const getSelectedsweatbandcolor = (state) => state.cards.selectedSweatbandcolor;
export const getSelectedbutton = (state) => state.cards.selectedButton;
export const getSelectedeyeletfront = (state) => state.cards.selectedEyeletfront;
export const getSelectedeyeletback = (state) => state.cards.selectedEyeletback;
export const getSelectedeyeletmiddle = (state) => state.cards.selectedEyeletmiddle;
export const getSelectedbackclosertype = (state) => state.cards.selectedBackclosertype;
export const getSelectedbackclosercolor = (state) => state.cards.selectedBackclosercolor;
export const getSelectedvisorstitch = (state) => state.cards.selectedVisorstitch;
export default cardSlice.reducer;