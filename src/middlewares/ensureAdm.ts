import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

export async function ensureAdm(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UserRepositories);

  const { adm } = await usersRepositories.findOne(user_id);

  // Verificar se usuario admin

  if (adm) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}