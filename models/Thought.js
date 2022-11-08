const { Schema, model } = require('mongoose');
const reactionSchema = required('./Reaction')
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date, 
            default: Date.now, 
            // use getter method to format the timestamp on query?
        }, 
        username: {
            type: String, //Question here - how to make sure this is the user that crated this thought
            required: true,
        },
        reactions: [reactionSchema]
    }, 
    {
        toJSON: {
            getters: true, 
            virtuals: true,
        },
        id: false, 
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('thought', userSchema);

module.exports = Thought;
