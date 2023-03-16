import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
import products from "../data/products";

const firebaseConfig = {
  apiKey: "AIzaSyAtiC48Hc_GwdwIHX6QgJjK7d2eCho4aLU",
  authDomain: "e-comerse-react.firebaseapp.com",
  projectId: "e-comerse-react",
  storageBucket: "e-comerse-react.appspot.com",
  messagingSenderId: "639048759731",
  appId: "1:639048759731:web:9f69537987deea110333c6"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

// Traer todos los documentos (productos)
export default async function getProducts() {
  const colectionProducts = collection(DB, "E-comerse-react")
  const docSnapshot = await getDocs(colectionProducts)

  const documentsData = docSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

// Traer documento por ID

export async function getSingleProduct(idParam) {
  const docRef = doc(DB, "E-comerse-react", idParam);
  const docSnap = await getDoc(docRef);

  let itemData = docSnap.data();
  itemData.id = docSnap.id;

  return itemData;
}

// Traer documentos por categoria
export async function getProductsByCategory(categoryParams) {
  const collectionRef = collection(DB, "E-comerse-react");

  const queryCat = query(collectionRef, where("category", "==", categoryParams))
  const docSnapshot = await getDocs(queryCat)

  const documentsData = docSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  })
  return documentsData;
}

// Order
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

// Exportar todos los productos a firebase
export async function exportProductsToFirebase() {
  const collectionRef = collection(DB, "E-comerse-react")
  for (let item of products) {
    delete(item.id);
    let docOrder = await addDoc(collectionRef, item);
    console.log("creado " + docOrder.id);
  }
}