enum Endpoint {
    LOG_List = "/logs",

    COLLECTION_List = "/collections",
    COLLECTION_Create = "/collections",
    COLLECTION_Update = "/collections/:id",
    COLLECTION_Get = "/collections/:id",

    MODEL_List = "/models",
    MODEL_Create = "/models",
    MODEL_Update = "/models/:id",
    MODEL_Get = "/models/:id",

    TOKEN_List = "/tokens",
    TOKEN_Get = "/tokens/:id",
    TOKEN_METADATA_Update = "/metadata/:chainId/:collectionA/:tokenId",
    TOKEN_METADATA_Get = "/metadata/:chainId/:collection/:tokenId",
    COLLECTION_METADATA_Get = "/metadata/:chainId/:collection",
}

export default Endpoint