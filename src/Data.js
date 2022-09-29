import { useState } from "react";

  const postList = (props) => {
    const [boards, setBoard] = useState([]);

    const fetchData = async () => {
        const request = await axios.get(`http://localhost:8080/api/boards`)
        const data = request.data;
        console.log(data)
        setBoards(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  }
  
  const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    postList,
    getPostByNo
  };