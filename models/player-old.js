// import mongoose from "mongoose";

// const playerSchema = mongoose.Schema({
//     playerName: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     netProfit: {
//         type: Number,
//         default: 0
//     },
//     profitHistory: [{
//         session: {
//             sessionName: {
//                 type: String,
//                 trim: true,
//                 required: true
//             },
//             buyInAmount: Number,
//             chipsPerBuyIn: Number,
//             sessionDate: {
//                 type: Date,
//                 required: true,
//                 default: new Date()
//             },
//             players: [{
//                 playerName: String,
//                 playerBuyIns: Number,
//                 playerChips: Number,
//                 playerProfit: Number
//             }]
//         },
//         playerProfit: Number
//     }]
// });

// const Player = mongoose.model("Player", playerSchema);

// export default Player;