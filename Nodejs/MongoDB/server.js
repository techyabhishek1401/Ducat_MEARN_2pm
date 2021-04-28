const mongoose = require('mongoose');
require('dotenv').config()

//mongoose.connect('mongodb://localhost/AfternoonBatch')
mongoose.connect(process.env.ATLAS)
    .then(client => console.log("connected to mongoDB:"))
    .catch(err => console.log("error occured:", err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});
const Courses = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Courses({
        name: "Electron.js",
        author: "Abhishek",
        tags: ["react", "redux"],
        isPublished: true,
        price: 100,
        date: new Date('2020/02/10')
    });
    const result = await course.save();
    console.log("result:", result);
}
createCourse();
/**Comparision Operator
 eq - Equal,
 ne - Not Equal
 gt - Greater than 
 gte- Greate than or  equal to
 lt -Less Than
 lte -Less Than or equal to
 in  -In
 nin  -Not In
 */
/* Logical Operator
or 
and
*/
async function getCourse() {
    const pageNumber = 3;
    const recordsPerPage = 2;
    const course = await Courses
        //  .find({})
        //  .find({ price: { $in: [100, 500] } })
        //  .find({ price: { $gt: 100, $lt: 400 } })
        // .find({ author: /^abhi/i })
        //  .find({ author: /test$/i })
        .find({ author: /.*shek.*/i })
    // .or([{ name: 'Express.js' }, { price: 100 }])
    //.skip((pageNumber - 1) * recordsPerPage)
    // .limit(recordsPerPage);
    console.log("courses:", course)
}

//getCourse();

async function updateCourse(id) {
    /*approach 1
    findById()
    modify()
    save()
    */
    const course = await Courses.findById(id);
    if (!course) {
        return
    }
    course.author = "Ambani";
    course.price = "1000";
    // course.set({
    //     author:'Ambani',
    //     price:200
    // })
    const result = await course.save();
    console.log("result:", result)

}

async function updateCourse2(id) {
    /*approach 2
      update directly
    **optionally get the updated document
    */
    const result = await Courses.updateMany({ author: "Abhishek" }, {
        $set: {
            author: "Abhishek Kumar"
        }
    });

    console.log("result:", result)

}

//updateCourse2('6083fbedaa98160bbc903e6b');

async function removeCourse(id) {
    const result = await Courses.deleteOne({ _id: id });
    console.log("result:", result)
}
//removeCourse('6083fb76afaa800f949af269')