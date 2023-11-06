import { sequelize, User } from "./DB";
import jwt from "jsonwebtoken";
import performanceNow from "performance-now";

export default function login(req, res) {
  if (req.method === "POST") {
    const { email, password, building } = req.body;

    // 시작 시간 측정
    const startTime = performanceNow();

    User.findOne({ where: { username: email, password, building } })
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: "Invalid email or password." });
          return;
        }

        // JWT 생성
        const accessKey = `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET}`; // Access Token에 사용할 비밀 키
        const accessToken = jwt.sign({ email: user.username }, accessKey, {
          expiresIn: "30m",
        });

        const refreshKey = `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET}`; // Refresh Token에 사용할 비밀 키
        const refreshToken = jwt.sign({ email: user.username }, refreshKey, {
          expiresIn: "14d",
        });

        // 로그인 성공 시 토큰 발행
        res.setHeader("Set-Cookie", [
          `accessToken=${accessToken}; Path=/; Max-Age=1800`,
          `refreshToken=${refreshToken}; Path=/; Max-Age=1209600`,
        ]);
        // login 성공시 쿠키 발행

        res.status(200).json({ message: "Login successful!" });

        // 종료 시간 측정 및 소요 시간 계산
        const endTime = performanceNow();
        const elapsedTime = endTime - startTime;
        console.log(
          `Database request took ${elapsedTime.toFixed(3)} milliseconds`
        );
      })
      .catch((err) => {
        console.error("Failed to log in:", err);
        res
          .status(500)
          .json({ message: "Failed to log in. Please try again." });
      });
  } else {
    res.status(405).end();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
