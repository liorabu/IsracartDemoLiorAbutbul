import axiosLiveInstance from "../axios";

const fetchBooks = async (): Promise<FetchBooksResponseProps[]> => {
    try{
        const response = await axiosLiveInstance.get<FetchBooksResponseProps[]>('');
        return response.data;
    } catch {
        return []
    }
};

export {
    fetchBooks
}