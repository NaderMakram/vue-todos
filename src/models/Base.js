import axios from 'axios';

class Base {
    resource = '';

  constructor(resource, data ) {
    this.resource = resource;
    this.data = data;
  }

    async getAll() {
        const response = await axios(`/${this.resource}`);
        return response;
    }

    async getById(id) {
        const response = await axios(`/${this.resource}/${id}`);
        return response;
    }

    async create() {
        const response = await axios.post(`/${this.resource}`, this.data);
        return response;
    }

    async update(id) {
        const response = await axios.put(`/${this.resource}/${id}`, this.data);
        return await response.json();
    }

    async delete(id) {
        const response = await axios.delete(`/${this.resource}/${id}`);
        return await response.json();
    }

}