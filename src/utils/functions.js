import path from "path";
import { fileURLToPath } from "url";

export const _dirname = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);
  const pathFile = path.dirname(__filename);
  return pathFile;
};

export const getCurrentDate24 = () => {
  const currentDate = new Date();
  const dia = currentDate.getDate();
  const mes = currentDate.getMonth() + 1;
  const año = currentDate.getFullYear();
  return {
    today: `${año}-${mes}-${dia}`,
  };
};