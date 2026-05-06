import axios from "axios";

const token =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const sendLog = async (
  level: string,
  message: string
) => {

  try {

    await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack: "frontend",
        level,
        package: "component",
        message,
      },
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
          "Content-Type":
            "application/json",
        },
      }
    );

  } catch (error) {

    console.error(error);

  }
};
