import axios from 'axios';
import { url } from './Url';

// art details
export const oneArtLoader = async ({ params }) => {
    const data = await axios.get(`${url}/allArts/${params._id}`);
    return data;
};

// Subcategory data
export const subcategoryLoader = async ({ params }) => {
    const data = await axios.get(`${url}/subcategory/${params.category}`);
    return data;
};
