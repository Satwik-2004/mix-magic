import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl = `${import.meta.env.VITE_COCKTAIL_API_BASE_URL}/search.php?s=`;
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm)=>{
  return{
    queryKey:['search', searchTerm || 'all' ],
    queryFn: async() =>{
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  }
}

export const loader = 
  (queryClient)=>   
  async({request}) =>{
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || 'a';
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
  
  return { searchTerm};
}

const Landing = () => {
  const { searchTerm} = useLoaderData();
  const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));
  
  return (
    <>
    <SearchForm searchTerm={searchTerm}/>
    <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing