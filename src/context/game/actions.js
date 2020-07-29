export const NEXT_GENERATION = "NEXT_GENERATION";

//== Action Creators ==//
export const updateGeneration = (payload) => {
   return { type: NEXT_GENERATION, payload };
};
