import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useFirestore = () => {
  const toast = useToast();

  const addDocument = async (collectionName, data) => {
    try {
      const docRef = doc(collection(db, collectionName));
      await setDoc(docRef, data);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
      toast({
        title: "Error",
        description: "An error occured",
        status: "error",
        isClosable: true,
      });
    }
  };

  const addToWatchList = async (userId, dataId, data) => {
    try {
      if (await checkIfInWatchList(userId, dataId)) {
        toast({
          title: "Error!",
          description: "This item is alredy in your watchlist",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return false;
      }
      await setDoc(doc(db, "users", userId, "watchlist", dataId), data);
      toast({
        title: "Success!",
        description: "Added to watchlist",
        status: "success",
        isClosable: true,
      });
    } catch (e) {
      console.error(e);
      toast({
        title: "Error",
        description: "An error occured",
        status: "error",
        isClosable: true,
      });
    }
  };

  const checkIfInWatchList = async (userId, dataId) => {
    const docRef = doc(
      db,
      "users",
      userId?.toString(),
      "watchlist",
      dataId?.toString()
    );

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  };

  const removeFromWatchlist = async (userId, dataId) => {
    try {
      await deleteDoc(
        doc(db, "users", userId?.toString(), "watchlist", dataId?.toString())
      );
      toast({
        title: "Success!",
        description: "Removed from watchlist",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      console.log(error, "Error while deleting doc");
      toast({
        title: "Error",
        description: "An error occured",
        status: "error",
        isClosable: true,
      });
    }
  };

  const getWatchlist = useCallback(async (userId) => {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, "watchlist")
    );
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    return data;
  }, []);

  return {
    addDocument,
    addToWatchList,
    checkIfInWatchList,
    removeFromWatchlist,
    getWatchlist,
  };
};
