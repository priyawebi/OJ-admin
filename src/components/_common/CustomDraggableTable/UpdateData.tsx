const arrayMoveMutate = (array: any[], from: any, to: number) => {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

const UpdateData = (array: any[], from: any, to: number) => {
    array = array.slice();
    arrayMoveMutate(array, from, to);
    return array;
};

export default UpdateData;
