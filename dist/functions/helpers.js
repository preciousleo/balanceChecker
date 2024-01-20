"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isEmpty = (mixedVar) => {
    let undef;
    let key;
    let i;
    let len;
    const emptyValues = [undef, null, false, 0, '', '0', 'null', 'undefined'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i] || typeof mixedVar == 'undefined') {
            return true;
        }
    }
    if (typeof mixedVar === 'object') {
        for (key in mixedVar) {
            if (mixedVar.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    return false;
};
exports.isEmpty = isEmpty;
