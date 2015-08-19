'use strict';
/**
 * Proposal of basic schema for projects and plugins collections.
 * @returns {*}
 */
UniCollection.getBasicSchema = function () {
    return {
        createdAt: {
            type: Date,
            autoValue: function () {
                if (this.isInsert) {
                    return new Date();
                }
            },
            optional: true,
            uniForm: { //ommiting fields in quickforms
                omit: true
            }
        },
        updatedAt: {
            type: Date,
            autoValue: function () {
                if (this.isUpdate) {
                    return new Date();
                }
            },
            denyInsert: true,
            optional: true,
            uniForm: { //ommiting fields in quickforms
                omit: true
            }
        },
        lastModifiedBy: {
            type: String,
            optional: true,
            autoValue: function () {
                if (this.isUpdate) {
                    return this.value || this.userId;
                }
            },
            denyInsert: true,
            uniForm: { //ommiting fields in quickforms
                omit: true
            }
        },
        ownerId: {
            type: String,
            autoValue: function () {
                if (this.isInsert || this.isUpsert) {
                    return this.value || this.userId;
                }
            },
            denyUpdate: true,
            uniForm: { //ommiting fields in quickforms
                omit: true
            }
        },
        disabled: {
            type: Boolean,
            defaultValue: false,
            uniForm: { //ommiting fields in quickforms
                omit: true
            }
        }

    };
};