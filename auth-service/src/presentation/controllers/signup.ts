import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utilities/bcrypt/hashPassword";
import generateToken from "../../utilities/jwt/generateToken";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducers";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { signUpUserUseCase, findUserByEmailUseCase },
  } = dependencies;

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const credential = req.body;

      if (!credential.username || !credential.username.trim()) {
        res.status(400).json({ success: false, message: "Username required" });
        return;
      }

      if (!credential.password || !credential.email) {
        res
          .status(400)
          .json({ success: false, message: "email and password required" });
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(credential.email)) {
        res
          .status(400)
          .json({ success: false, message: "Invalid email format" });
        return;
      }

      if (credential.password.trim().length < 6) {
        res
          .status(400)
          .json({
            success: false,
            message: "Password must be atleast six characters",
          });
        return;
      }

      //Searching for exsisting user using the email provided

      try {
        const existingUser = await findUserByEmailUseCase(dependencies).execute(
          credential.email
        );
        if (existingUser) {
          res
            .status(400)
            .json({
              success: false,
              message: "Email already exist, try another one",
            });
          return;
        }
      } catch (error) {
        console.error("Error finding user by email", error);
      }

      const hashedPassword: string | null = await hashPassword(
        credential.password
      );

      credential.password = hashedPassword;

      const user = await signUpUserUseCase(dependencies).execute(credential);
      console.log("🚀 ~ signupController ~ user:", user)

      if (user) {
        const userId: string = user._id?.toString() ?? "";
        const token = generateToken({
          userId: userId,
          userEmail: user.email,
          isAdmin: user.isAdmin,
          isBlocked: user.isBlocked,
        });

        res.cookie("auth", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
        });
        res
          .status(201)
          .json({ success: true, data: user, message: "User Created" });
          const addedUser = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
            isBlocked: user.isBlocked,
            isAdmin: user.isAdmin,
          };
          console.log("🚀 ~ signupController ~ addedUser:", addedUser)
          if (addedUser) {
            userCreatedProducer(addedUser);
          }
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  };
};
