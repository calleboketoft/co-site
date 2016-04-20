"use strict";
exports.NAMESPACE = 'cosite';
exports.DEBUG = 'debug';
exports.browserStorageConfig = {
    namespace: exports.NAMESPACE,
    initialState: [
        {
            key: exports.DEBUG,
            default: 'false',
            storageType: 'localStorage',
            valueType: 'text'
        }
    ]
};
//# sourceMappingURL=browser-storage-config.js.map