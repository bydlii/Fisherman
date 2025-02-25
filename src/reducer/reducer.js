export const initialState = {
    rods:[],
    categories:[],
    selectedCategory:"Tümü",
    search:"",
    selectedProduct:"",
    productName:"",
    brand:"",
    category:"Kategori Seçiniz",
    material:"",
    size:"",
    weight:"",
    throws:"",
    image:"",
    description:""
}

export const reducer = (state,action)=>{
    switch(action.type) {
        //case-1
        case "getRods":
            return {
                ...state,
                rods:action.payload
            }
            //case-2
        case "getCategories":
            return {
                ...state,
                categories:action.payload
            }
            //case-3
        case "formReset":
            return {
                ...state,
                productName:"",
                brand:"",
                category:"Kategori Seçiniz",
                material:"",
                size:"",
                weight:"",
                throws:"",
                image:"",
                description:""
        }
        //case-4
        case "productName":
            return {
                ...state,
                productName:action.payload
        }
        //case-5
        case "brand":
            return {
                ...state,
                brand:action.payload
        }
        //case-6
        case "category":
            return {
                ...state,
                category:action.payload
        }
        //case-7
        case "material":
            return {
                ...state,
                material:action.payload
        }
        //case-8
        case "size":
            return {
                ...state,
                size:action.payload
        }
        //case-9
        case "weight":
            return {
                ...state,
                weight:action.payload
        }
        //case-10
        case "image":
            return {
                ...state,
                image:action.payload
        }
        //case-11
        case "throws":
            return {
                ...state,
                throws:action.payload
        }
        //case-12
        case "description":
            return {
                ...state,
                description:action.payload
        }
        //case-13
        case "search":
            return {
                ...state,
                search:action.payload
        }
        //case-14
        case "selectedCategory":
            return {
                ...state,
                selectedCategory:action.payload
        }
        //case-15
        case "selectedProduct":
            const choosen = action.payload
            return {
                ...state,
                selectedProduct:choosen,
                productName:choosen.productName,
                brand:choosen.brand,
                category:choosen.category,
                material:choosen.material,
                size:choosen.size,
                throws:choosen.throws,
                weight:choosen.weight,
                description:choosen.description
        }
        //case-16
        case "AddProduct":
            const newrods = [...state.rods,action.newproduct];
            return {
                ...state,
                rods: newrods
        }
        //case-17
        case "deleteProduct":
            const updatedrods = state.rods.filter(item=>item.id !== action.id);
            return {
                ...state,
                rods: updatedrods
        }
        //case-18
        case "editProduct":
            const editedRods = state.rods.map(product=>{
                if(product.id === state.selectedProduct.id){
                    return{...action.newproduct}
                }
                else {
                    return{...product}
                }       
            })
            return {
                ...state,
                rods:editedRods,
                selectedProduct:""
        }
    }
}