export type HomeState = {
    url?:{
        backdrop: string,
        poster: string,
        profile: string
    };
    genres?: Record<string, unknown>;
  }

export const initialState: HomeState = {
    url: {
        backdrop:'',
        poster:'',
        profile:''
    },
    genres: {},
  };

interface HomeAction {
    type: string;
    payload: HomeState;
  }
  
export const reducer = (state:HomeState , action:HomeAction ) :HomeState=> {
    switch (action.type) {
      case "getApiConfiguration":
        return {...state,
            url: action.payload.url, };
      case "getGenres":
        return {...state,
            genres: action.payload.genres, };
      default:
        return state;
    }
  };