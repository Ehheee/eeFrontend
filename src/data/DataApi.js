const DataApi = {};
const serverLocation = "http://localhost/api"
DataApi.sendRequest = async (path, options) => {
    const resp = await fetch(serverLocation + path, options);
    var o = await resp.json();
    return o.result;
};
DataApi.sendPost = async (path, data) => {
    return await DataApi.sendRequest(path, {
        method: "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
DataApi.getProducts = async () => {
    return await DataApi.sendRequest("/products");
};
DataApi.reserveProduct = async (product, amount) => {
    return await DataApi.sendPost("/sale/reserve/" + amount, product);
};
DataApi.reset = async (sale) => {
    return await DataApi.sendPost("/sale/reset", sale);
};
export default DataApi;