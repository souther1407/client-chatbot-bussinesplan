import { create } from "zustand";
import { getPlans, generatePlan, getPlanById } from "../services/plans/plans";
export const usePlansStore = create((set) => ({
  plans: [],
  planDetail: null,
  loading: false,
  async generatePlan(msg) {
    try {
      set({ loading: true });
      const newPlan = await generatePlan(msg);
      set((state) => ({
        planDetail: newPlan,
        plans: [
          {
            id: newPlan.id,
            created: newPlan.created,
            userMsg: newPlan.userMsg,
          },
          ...state.plans,
        ],
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      set({ loading: false });
    }
  },
  async getPlans() {
    set({ loading: true });
    try {
      const plans = await getPlans();
      set({ plans });
    } catch (error) {
      alert(error.message);
    } finally {
      set({ loading: false });
    }
  },
  async getPlanDetail(idPlan) {
    set({ loading: true });
    try {
      const planDetail = await getPlanById(idPlan);
      set({ planDetail });
    } catch (error) {
      alert(error.message);
    } finally {
      set({ loading: false });
    }
  },
}));
