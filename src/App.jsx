import React, { useEffect, useState } from "react";
import Loading from "./components/UI/Loading";
import Button from "./components/UI/Button";
import Advice from "./components/Advice";
import Card from "./components/UI/Card";

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setLoading(true);

      /*
        In the code block below, I intentionally sent an ID with a random number because if the API is requested again within 2 seconds, it returns the same result again. To prevent this, I prefer to generate a random number and send a request with an ID each time the function is called.
      */
      do {
        let randomNumber = Math.floor(Math.random() * 224) + 1;

        const response = await fetch(
          `https://api.adviceslip.com/advice/${randomNumber}`
        );

        if (response.status === 404) {
          throw new Error("Something went wrong, please refresh the page");
        }

        if (response.ok) {
          const result = await response.json();
          if (result?.message?.type !== "error") {
            setAdvice(result);
            break;
          }
        } else {
          throw new Error("Something went wrong, please refresh the page");
        }
      } while (true);
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const handleClick = () => {
    if (!loading) {
      fetchAdvice();
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <Card className={loading && "card-loading"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Advice advice={advice} />
        </>
      )}
      <Button onClick={handleClick} loading={loading} />
    </Card>
  );
}

export default App;
