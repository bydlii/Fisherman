import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext(); 

export const DataProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer, initialState)
    const {rods, selectedProduct} = state;

    const getRods = async()=>{
    const url = "http://localhost:3005/rods";
    const response = await fetch(url);
    const rods = await response.json();
    //case-1
    dispatch({type:"getRods", payload:rods})
    }

    const getCategories = async()=>{
    const url = "http://localhost:3005/categories";
    const response = await axios.get(url);
    const categories = response.data;
    //case-2
    dispatch({type:"getCategories", payload:categories})
    }

    const AddNewProduct = async(newproduct) => {
    let url = "http://localhost:3005/rods";
    if(!selectedProduct) {
        //Frontend ekleme
        newproduct.id = (Number(rods[rods.length-1].id)+1).toString();
        dispatch({type:"AddProduct",newproduct})
    //Backend ekleme
    
    const response = await axios.post(url,newproduct);
    //Toast Message
    toast.success('Yeni ürün Eklendi', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    else {
        //Backend
        newproduct.id = selectedProduct.id;
        url+=`/${selectedProduct.id}`;
        const response = await axios.put(url,newproduct);
        //Frontend       
        dispatch({type:"editProduct",newproduct})
        toast.warning('Ürün düzenlendi', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

}

    const DeleteProduct = async(id) => {
    //Frontend silme
    dispatch({type:"deleteProduct",id})
    //Backend silme
    const url = `http://localhost:3005/rods/${id}`;
    // veri hiçbir zaman tamamen silinmez bu yüzden burada bunu kullanmak yanlış olur
    // const response = await axios.delete(url); 
    const response = await axios.patch(url,{isDeleted:true});
    console.log(response.data)
    toast.error('Ürün silindi', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }

   
    const handleSubmit = (e) =>{
    e.preventDefault();
    AddNewProduct({
        
        productName:state.productName,
        brand:state.brand,
        category:state.category,
        material:state.material,
        size:state.size,
        weight:state.weight,
        throws:state.throws,
        image:state.image,
        description:state.description
    });
  
    //case-3
    dispatch({type:"formReset"})
    }




useEffect(()=>{
    getRods();
    getCategories();
    },[])

    return <DataContext.Provider value={{
     
        handleSubmit,
        DeleteProduct,
        state,
        dispatch,
    }}>
                {children}
            </DataContext.Provider>
}

export default DataContext;