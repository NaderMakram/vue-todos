import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    records: [],
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async fetchRecords() {
      try {
        // the old way

        // const response = await axios.get(
        //   `https://api.airtable.com/v0/app4GVG5QETa94mUJ/tblgBZNGKlwS0RygH`,
        //   {
        //     headers: {
        //       Authorization: `Bearer patR6qxROwtC6iFh6.73e5c0d694b44d0aebbdccd40e0acc44be65a899eff4c2e3a9408395756521ed`,
        //     },
        //   }
        // );

        // new way using express

        const response = await axios.get("http://localhost:3000");
        // console.log(response.data);
        this.records = response.data;
      } catch (error) {
        console.error("Error fetching Airtable records:", error);
      }
    },
    deleteRecord(recordID) {
      try {
        axios
          .delete(
            `https://api.airtable.com/v0/app4GVG5QETa94mUJ/tblgBZNGKlwS0RygH/${recordID}`,
            {
              headers: {
                Authorization: `Bearer patR6qxROwtC6iFh6.73e5c0d694b44d0aebbdccd40e0acc44be65a899eff4c2e3a9408395756521ed`,
              },
            }
          )
          .then(this.fetchRecords);
      } catch (error) {
        console.error("Error fetching Airtable records:", error);
      }
    },
    async postRecord(data) {
      console.log(data);
    },
  },
});
