import axios, { AxiosInstance } from "axios";
export const BaseURL = process.env.NODE_ENV === "development" ?  process.env.REACT_APP_API_URL : process.env.REACT_APP_HOST;
export const pimg = "https://skims.imgix.net/s/files/1/0259/5448/4284/files/BO-BBR-5356M-SAN-SB-SKIMS-MENS_0002-FR.jpg?auto=format&w=2000&h=2000&q=100"
export const pimg1 = "https://skims-sanity.imgix.net/images/hfqi0zm0/production/409fbb976d073f2c8c5d37b4a77103489998e1fd-706x894.jpg?auto=format&ixlib=react-9.10.0&w=1946"
export const pimg2="https://skims-sanity.imgix.net/images/hfqi0zm0/production/cf1c904fc3836d0a062871bf0105081bed85c69d-706x894.jpg?auto=format&ixlib=react-9.10.0&w=512"
export const dd = [{"id":5,"name":"Licensed Aluminum Bacon","description":"Professional-grade Hat perfect for different training and recreational use","base_price":"34.99","created_at":"2025-02-14T15:02:58.651Z","brand":{"id":3,"name":"Kuphal - Mosciski","description":"Operative encompassing success","created_at":"2025-02-14T15:02:58.639Z"},"category":{"id":4,"name":"Electronics","created_at":"2025-02-14T15:02:58.644Z"},"shopProducts":[{"id":1,"price":"541.99","created_at":"2025-02-14T15:02:58.665Z"},{"id":6,"price":"599.95","created_at":"2025-02-14T15:02:58.668Z"}]},{"id":9,"name":"Modern Concrete Ball","description":"The Green Salad is the latest in a series of possible products from Bogisich, Schaefer and Durgan","base_price":"308.60","created_at":"2025-02-14T15:02:58.654Z","brand":{"id":2,"name":"Jones LLC","description":"Profit-focused AI-powered initiative","created_at":"2025-02-14T15:02:58.638Z"},"category":{"id":5,"name":"Automotive","created_at":"2025-02-14T15:02:58.645Z"},"shopProducts":[{"id":2,"price":"540.68","created_at":"2025-02-14T15:02:58.666Z"}]},{"id":1,"name":"Practical Plastic Chair","description":"The Abagail Car is the latest in a series of yearly products from Ryan, Toy and Smitham","base_price":"729.79","created_at":"2025-02-14T15:02:58.648Z","brand":{"id":1,"name":"Daniel, Crist and Gerhold","description":"Centralized motivating encoding","created_at":"2025-02-14T15:02:58.632Z"},"category":{"id":3,"name":"Automotive","created_at":"2025-02-14T15:02:58.643Z"},"shopProducts":[{"id":3,"price":"206.00","created_at":"2025-02-14T15:02:58.667Z"},{"id":4,"price":"816.39","created_at":"2025-02-14T15:02:58.667Z"}]},{"id":2,"name":"Frozen Plastic Shoes","description":"Modern Pants designed with Concrete for disloyal performance","base_price":"321.99","created_at":"2025-02-14T15:02:58.649Z","brand":{"id":3,"name":"Kuphal - Mosciski","description":"Operative encompassing success","created_at":"2025-02-14T15:02:58.639Z"},"category":{"id":1,"name":"Tools","created_at":"2025-02-14T15:02:58.642Z"},"shopProducts":[{"id":5,"price":"533.19","created_at":"2025-02-14T15:02:58.667Z"},{"id":13,"price":"927.28","created_at":"2025-02-14T15:02:58.670Z"}]},{"id":7,"name":"Rustic Gold Bacon","description":"Our bee-friendly Mouse ensures frugal comfort for your pets","base_price":"710.09","created_at":"2025-02-14T15:02:58.652Z","brand":{"id":3,"name":"Kuphal - Mosciski","description":"Operative encompassing success","created_at":"2025-02-14T15:02:58.639Z"},"category":{"id":2,"name":"Clothing","created_at":"2025-02-14T15:02:58.643Z"},"shopProducts":[{"id":7,"price":"721.95","created_at":"2025-02-14T15:02:58.668Z"}]},{"id":10,"name":"Handmade Metal Shirt","description":"New Shoes model with 55 GB RAM, 637 GB storage, and clear-cut features","base_price":"54.69","created_at":"2025-02-14T15:02:58.654Z","brand":{"id":4,"name":"Halvorson, Hilll and McKenzie","description":"Total holistic capacity","created_at":"2025-02-14T15:02:58.640Z"},"category":{"id":5,"name":"Automotive","created_at":"2025-02-14T15:02:58.645Z"},"shopProducts":[{"id":8,"price":"518.45","created_at":"2025-02-14T15:02:58.668Z"},{"id":12,"price":"821.19","created_at":"2025-02-14T15:02:58.670Z"}]},{"id":6,"name":"Refined Ceramic Soap","description":"Discover the bear-like agility of our Pizza, perfect for icy users","base_price":"112.69","created_at":"2025-02-14T15:02:58.652Z","brand":{"id":4,"name":"Halvorson, Hilll and McKenzie","description":"Total holistic capacity","created_at":"2025-02-14T15:02:58.640Z"},"category":{"id":5,"name":"Automotive","created_at":"2025-02-14T15:02:58.645Z"},"shopProducts":[{"id":9,"price":"595.89","created_at":"2025-02-14T15:02:58.669Z"},{"id":11,"price":"635.09","created_at":"2025-02-14T15:02:58.670Z"},{"id":14,"price":"553.99","created_at":"2025-02-14T15:02:58.671Z"}]},{"id":3,"name":"Elegant Bronze Bacon","description":"Stylish Cheese designed to make you stand out with quick-witted looks","base_price":"739.75","created_at":"2025-02-14T15:02:58.650Z","brand":{"id":5,"name":"Hermann, Hermiston and D'Amore","description":"Operative immersive database","created_at":"2025-02-14T15:02:58.641Z"},"category":{"id":4,"name":"Electronics","created_at":"2025-02-14T15:02:58.644Z"},"shopProducts":[{"id":10,"price":"766.15","created_at":"2025-02-14T15:02:58.669Z"}]},{"id":4,"name":"Fresh Cotton Salad","description":"The teal Gloves combines Finland aesthetics with Erbium-based durability","base_price":"29.99","created_at":"2025-02-14T15:02:58.651Z","brand":{"id":2,"name":"Jones LLC","description":"Profit-focused AI-powered initiative","created_at":"2025-02-14T15:02:58.638Z"},"category":{"id":3,"name":"Automotive","created_at":"2025-02-14T15:02:58.643Z"},"shopProducts":[{"id":15,"price":"495.45","created_at":"2025-02-14T15:02:58.671Z"}]},{"id":18,"name":"Unbranded Granite Hat","description":"Discover the poor new Mouse with an exciting mix of Granite ingredients","base_price":"857.06","created_at":"2025-02-27T15:53:44.547Z","brand":{"id":10,"name":"Mann, Nikolaus and Towne","description":"Stand-alone leading edge contingency","created_at":"2025-02-27T15:53:44.532Z"},"category":{"id":10,"name":"Tools","created_at":"2025-02-27T15:53:44.537Z"},"shopProducts":[{"id":16,"price":"856.65","created_at":"2025-02-27T15:53:44.597Z"},{"id":28,"price":"625.09","created_at":"2025-02-27T15:53:44.601Z"}]},{"id":16,"name":"Incredible Silk Car","description":"Handcrafted Salad designed with Bamboo for unwelcome performance","base_price":"897.59","created_at":"2025-02-27T15:53:44.546Z","brand":{"id":9,"name":"Nolan LLC","description":"Grass-roots eco-centric approach","created_at":"2025-02-27T15:53:44.531Z"},"category":{"id":8,"name":"Toys","created_at":"2025-02-27T15:53:44.534Z"},"shopProducts":[{"id":17,"price":"518.19","created_at":"2025-02-27T15:53:44.598Z"},{"id":22,"price":"323.99","created_at":"2025-02-27T15:53:44.599Z"},{"id":25,"price":"395.99","created_at":"2025-02-27T15:53:44.600Z"}]},{"id":20,"name":"Modern Marble Pants","description":"New Shirt model with 49 GB RAM, 638 GB storage, and soggy features","base_price":"831.79","created_at":"2025-02-27T15:53:44.548Z","brand":{"id":6,"name":"Bogisich, Berge and Hodkiewicz","description":"Networked modular initiative","created_at":"2025-02-27T15:53:44.524Z"},"category":{"id":10,"name":"Tools","created_at":"2025-02-27T15:53:44.537Z"},"shopProducts":[{"id":18,"price":"290.33","created_at":"2025-02-27T15:53:44.598Z"}]},{"id":14,"name":"Unbranded Aluminum Gloves","description":"Ergonomic Soap made with Rubber for all-day posh support","base_price":"15.40","created_at":"2025-02-27T15:53:44.545Z","brand":{"id":6,"name":"Bogisich, Berge and Hodkiewicz","description":"Networked modular initiative","created_at":"2025-02-27T15:53:44.524Z"},"category":{"id":6,"name":"Jewelry","created_at":"2025-02-27T15:53:44.532Z"},"shopProducts":[{"id":19,"price":"57.09","created_at":"2025-02-27T15:53:44.598Z"}]},{"id":15,"name":"Gorgeous Concrete Tuna","description":"The sleek and warmhearted Salad comes with violet LED lighting for smart functionality","base_price":"328.89","created_at":"2025-02-27T15:53:44.546Z","brand":{"id":6,"name":"Bogisich, Berge and Hodkiewicz","description":"Networked modular initiative","created_at":"2025-02-27T15:53:44.524Z"},"category":{"id":9,"name":"Movies","created_at":"2025-02-27T15:53:44.535Z"},"shopProducts":[{"id":20,"price":"874.89","created_at":"2025-02-27T15:53:44.599Z"},{"id":23,"price":"792.59","created_at":"2025-02-27T15:53:44.600Z"}]},{"id":17,"name":"Handmade Cotton Shoes","description":"Ergonomic Salad made with Ceramic for all-day rewarding support","base_price":"506.19","created_at":"2025-02-27T15:53:44.547Z","brand":{"id":6,"name":"Bogisich, Berge and Hodkiewicz","description":"Networked modular initiative","created_at":"2025-02-27T15:53:44.524Z"},"category":{"id":7,"name":"Electronics","created_at":"2025-02-27T15:53:44.534Z"},"shopProducts":[{"id":21,"price":"417.45","created_at":"2025-02-27T15:53:44.599Z"}]},{"id":19,"name":"Refined Metal Shirt","description":"New Shirt model with 84 GB RAM, 609 GB storage, and faraway features","base_price":"113.19","created_at":"2025-02-27T15:53:44.548Z","brand":{"id":8,"name":"Kris Group","description":"Organized impactful initiative","created_at":"2025-02-27T15:53:44.530Z"},"category":{"id":7,"name":"Electronics","created_at":"2025-02-27T15:53:44.534Z"},"shopProducts":[{"id":24,"price":"753.45","created_at":"2025-02-27T15:53:44.600Z"},{"id":29,"price":"382.89","created_at":"2025-02-27T15:53:44.601Z"}]},{"id":12,"name":"Handmade Aluminum Chair","description":"The Kelsi Hat is the latest in a series of impressionable products from Robel Group","base_price":"792.40","created_at":"2025-02-27T15:53:44.544Z","brand":{"id":10,"name":"Mann, Nikolaus and Towne","description":"Stand-alone leading edge contingency","created_at":"2025-02-27T15:53:44.532Z"},"category":{"id":7,"name":"Electronics","created_at":"2025-02-27T15:53:44.534Z"},"shopProducts":[{"id":26,"price":"199.10","created_at":"2025-02-27T15:53:44.601Z"},{"id":27,"price":"533.05","created_at":"2025-02-27T15:53:44.601Z"}]},{"id":13,"name":"Incredible Bronze Car","description":"The white Ball combines Netherlands aesthetics with Xenon-based durability","base_price":"385.85","created_at":"2025-02-27T15:53:44.545Z","brand":{"id":7,"name":"Franey LLC","description":"Devolved national strategy","created_at":"2025-02-27T15:53:44.529Z"},"category":{"id":10,"name":"Tools","created_at":"2025-02-27T15:53:44.537Z"},"shopProducts":[{"id":30,"price":"273.37","created_at":"2025-02-27T15:53:44.602Z"}]},{"id":11,"name":"Soft Granite Pizza","description":"The Alysa Fish is the latest in a series of imaginative products from Nikolaus and Sons","base_price":"384.19","created_at":"2025-02-27T15:53:44.543Z","brand":{"id":7,"name":"Franey LLC","description":"Devolved national strategy","created_at":"2025-02-27T15:53:44.529Z"},"category":{"id":8,"name":"Toys","created_at":"2025-02-27T15:53:44.534Z"},"shopProducts":[]},{"id":8,"name":"Unbranded Metal Towels","description":"Innovative Sausages featuring black-and-white technology and Plastic construction","base_price":"530.65","created_at":"2025-02-14T15:02:58.653Z","brand":{"id":2,"name":"Jones LLC","description":"Profit-focused AI-powered initiative","created_at":"2025-02-14T15:02:58.638Z"},"category":{"id":3,"name":"Automotive","created_at":"2025-02-14T15:02:58.643Z"},"shopProducts":[]}]
let activeRequests = 0;
const configureAxios = (): AxiosInstance => {
    let token = localStorage.getItem("token") || document.cookie;
    const axiosInstance: AxiosInstance = axios.create({
        baseURL:BaseURL!,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${token}`
        }
    });
    const showLoading = () => {
        if (activeRequests === 0) {
            setTimeout(()=>{
                if(document.getElementById("loading")){
                    document.getElementById("loading")!.className = "loading active";
                }
            },100)
        }
        activeRequests++;
    };
    const hideLoading = () => {
        activeRequests--;
        if (activeRequests === 0) {
            setTimeout(() => {
                if(document.getElementById("loading")){
                    document.getElementById("loading")!.className = "loading";
                }
            }, 1000);
        }
    };
    axiosInstance.interceptors.request.use(
        config => {
            if(!config.url?.includes('GetCompatibleInvertersForModule')){
                showLoading();
            }
            return config;
        },
        error => {
            hideLoading();
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        response => {
            hideLoading();
            return response;
        },
        error => {
            hideLoading();
            if (error.response?.status === 403 || error.response?.status === 401) {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = '/';
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};
export const AxiosConfig:AxiosInstance = configureAxios()
export const routes = {
   Products:"products",
   Product:"products"
}
