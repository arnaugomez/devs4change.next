import { Firestore, getFirestore } from "firebase/firestore";

export class BaseRepository {
  private static baseRepositoryInstance: BaseRepository;
  db: Firestore;
  constructor() {
    if (BaseRepository.baseRepositoryInstance) {
      return BaseRepository.baseRepositoryInstance;
    }
    this.db = getFirestore();
    BaseRepository.baseRepositoryInstance = this;
    return this;
  }
}
