
import { apiRequest } from "./api";

export async function testBackendConnection() {
  try {
    const result = await apiRequest<unknown>("/");

    console.log("Backend response:", result);
  } catch (error) {
    console.log("Backend connection test:", error);
  }
}
