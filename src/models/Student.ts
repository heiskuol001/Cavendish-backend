import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    faculty: {
        type: String,
        required: true,
        trim: true,
        enum: [
            'Faculty of Science and Technology',
            'Faculty of Business and Management Sciences',
            'Faculty of Social and Management Sciences',
            'Faculty of Law',
        ]
    },
    courseOfStudy: {
        type: String,
        required: true,
        trim: true
    },
    semester: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 2
    },
    status: {
        type: String,
        required: true,
        trim: true,
        enum: ['active', 'inactive', 'suspended', 'graduated'],
        default: 'active'
    }
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

export default Student