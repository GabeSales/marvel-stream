import axios from "axios";
import md5 from "md5";
import { useEffect } from "react";
import * as styled from "./styles";

const { VITE_APP_BASE_URL, VITE_APP_PRIVATE_KEY, VITE_APP_PUBLIC_KEY } =
    import.meta.env;

const timeStamp = new Date().toLocaleDateString("pt-Br");
const apiKey = VITE_APP_PUBLIC_KEY;
const hash = md5(timeStamp + VITE_APP_PRIVATE_KEY + VITE_APP_PUBLIC_KEY);
const URL = `${VITE_APP_BASE_URL}/characters/1010354?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;

export const Home = () => {
    const getCharacters = () => {
        axios.get(`${URL}`).then((res: any) => {
            console.log(res.data);
        });
    };

    useEffect(() => {
        getCharacters();
    }, []);
    return (
        <styled.Container>
            <styled.MainPoster>
                <styled.Img
                    src={
                        "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_incredible.jpg"
                    }
                />
                <styled.Content>
                    <h2>Quarteto fantástico</h2>
                    <p>Descrição aleatoria</p>
                    <button>assistir</button>
                </styled.Content>
            </styled.MainPoster>
        </styled.Container>
    );
};
