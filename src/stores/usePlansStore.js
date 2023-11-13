import { create } from "zustand";
import { getPlans, generatePlan } from "../services/plans/plans";
export const usePlansStore = create((set) => ({
  plans: [],
  planDetail: null,
}));
