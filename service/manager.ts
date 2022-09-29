export interface Manager<T> {
    add(t: T);
    findById(id: number);
    deleteById(id:number);
    editById(id: number, t: T);
    showAll();
}