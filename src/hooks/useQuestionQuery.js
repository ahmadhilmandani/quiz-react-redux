import { useQuery } from "@tanstack/react-query";
import { fetchQuestion } from "../api/fetchQuestion";

export const useQuestionQuery = () => {
  return useQuery({
    queryKey: ['fetchQ'],
    queryFn: fetchQuestion,
    staleTime: Infinity
  })
} 