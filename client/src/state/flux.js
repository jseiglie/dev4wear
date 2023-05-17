const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      auth: false,
      userEmail: null,
      isAdmin: true,
      user: null,
      token: null,
      products: null,
      productDetails: null,
      loginNeeded: false,
      categories: null,
      cloudinaryImages: null,
      itemDetails: null,
      itemId: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      designDetails: async (id) => {
        const store = getStore();
        const resp = await fetch(
          `${process.env.REACT_APP_API}/designDetails/${id}`
        );
        const data = await resp.json();
        setStore({ itemDetails: data });
        const item = await store.products && store.products.data.filter((el) => el.title == data.name ? el.id : "")
        setStore({
          itemId: item[0].id
        });
      },
      cloudinaryImages: async () => {
        const resp = await fetch(`${process.env.REACT_APP_API}/images`);
        const data = await resp.json();
        setStore({ cloudinaryImages: data });
      },
      getCategories: async () => {
        const resp = await fetch(`${process.env.REACT_APP_API}/categories`);
        const data = await resp.json();
        setStore({ categories: data });
      },
      buyNow: (id) => {
        console.log(id);
      },
      needLogin: () => {
        const store = getStore();
        store.needLogin
          ? setStore({ needLogin: false })
          : setStore({ needLogin: true });
      },
      add_to_cart: (id) => {
        console.log(id);
      },
      add_removeFavorite: (user_id, id) => {
        console.log(user_id, id);
      },
      login_register: async (url, email, password) => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const raw = JSON.stringify({
            email: email,
            password: password,
          });
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          const resp = await fetch(url, requestOptions);
          if (!resp.ok) throw new Error("There was an error loging in");
          const data = await resp.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user.email);
          localStorage.setItem("user", data.user.id);
          // console.log(data);
          setStore({ auth: true });
          setStore({ userEmail: data.user.email });
          setStore({ user: data.user });
          setStore({ token: data.token });
        } catch (error) {
          console.log(error);
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setStore({ auth: false });
        setStore({ userEmail: null });
        setStore({ user: null });
      },
      edit: async (
        firstName,
        lastName,
        email,
        password,
        newPassword,
        phone,
        address,
        zip,
        city,
        state,
        country,
        id
      ) => {
        try {
          const myHeaders = new Headers();
          const raw = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            newPassword: newPassword,
            phone: phone,
            address: address,
            zip: zip,
            city: city,
            state: state,
            country: country,
            id: id,
          });
          myHeaders.append("Content-Type", "application/json");
          const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          //console.log(raw);
          const resp = await fetch(
            `${process.env.REACT_APP_API}/edit_user`,
            requestOptions
          );
          if (!resp.ok) throw new Error("There was an error loging in");
          const data = await resp.json();
          if (localStorage.getItem("user") !== data.user.email) {
            localStorage.removeItem("user");
            localStorage.setItem("user", data.user.email);
          }
          //console.log(data);
          setStore({ userEmail: data.user.email });
          setStore({ user: data.user });
        } catch (error) {
          console.log(error);
        }
      },
      products: async () => {
        try {
          const resp = await fetch(`${process.env.REACT_APP_API}/products`);
          const data = await resp.json();
          setStore({ products: data });
          localStorage.setItem("products", JSON.stringify(data.data));
        } catch (error) {
          console.log(error);
        }
      },
      productsDetails: async (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
        try {
          const resp = await fetch(
            `${process.env.REACT_APP_API}/product/${id}`,
            requestOptions
          );
          const data = await resp.json();
          setStore({ productDetails: data });
        } catch (error) {
          console.log(error);
        }
      },
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },

      // getMessage: async () => {
      // 	try{
      // 		// fetching data from the backend
      // 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
      // 		const data = await resp.json()
      // 		setStore({ message: datay
      // 		console.log("Error loading message from backend", error)
      // 	}
      // },
      // changeColor: (index, color) => {
      // 	//get the store
      // 	const store = getStore();

      // 	//we have to loop the entire demo array to look for the respective index
      // 	//and change its color
      // 	const demo = store.demo.map((elm, i) => {
      // 		if (i === index) elm.background = color;
      // 		return elm;
      // 	});

      // 	//reset the global store
      // 	setStore({ demo: demo });
      // }
    },
  };
};

export default getState;
