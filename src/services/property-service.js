import data from '../data/data';
import { from } from 'rxjs';

export class ApiService {
    getAllResults = () => from(data.results);
    getAllSavedProperties = () => from(data.saved);
}

