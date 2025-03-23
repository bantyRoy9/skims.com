import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { addItem } from "../../Redux/Store.Reducers";
import { getProjects } from "./../../Redux/Store.Actions";
import { IProduct } from "../../Redux/type";

export const useAddToCart = () => {
    const dispatch = useAppDispatch();
    const { addtocard, products,isDrawOpen } = useAppSelector(state => state);
    useEffect(() => { 
        dispatch(getProjects());
    }, [dispatch]);
    const addProduct = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,type: -1 | 1, product: IProduct) => {
        e.stopPropagation(); 
        dispatch(addItem({ product, type }));
    };
    const calculateTotalMRP = (products:Record<string, IProduct[]>) => {
        let totalMRP = 0 as number;
        for (const productId in products) {
            totalMRP += products[productId].reduce((total: number, group: IProduct) => total + parseFloat(group.base_price), 0);
        }
        return totalMRP;
    };
    const totalProduct = () => Object.values(addtocard).flat().length;
    return { products, addtocard, addProduct, calculateTotalMRP, totalProduct,isDrawOpen }
};