let existingMembers = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(existingMembers);
    });
    
    app.post("/api/friends", function(req, res) {
        // convert scores to an int
        let newMember = req.body;
        newMember.scores.map((score, index) =>{
            newMember.scores[index] = parseInt(score);
        });

        let bestMatch = findBestMatch(newMember.scores);
        existingMembers.push(newMember);
        res.json(bestMatch);
    });
}

let findBestMatch = (newMemberScores) =>{
   let bestMatchId;
   let bestMatchTotalDifference = 0;
   existingMembers.map((existingMember, currentMemberId) => {
       let totalDifference = 0;
       totalDifference += existingMember.scores.map((existingMemberScore, index) => {
            return (Math.abs(existingMemberScore - newMemberScores[index]));
       })
       if(bestMatchId === undefined || (bestMatchTotalDifference > totalDifference)){
           bestMatchId = currentMemberId;
           bestMatchTotalDifference = totalDifference;
       }
   })

   return existingMembers[bestMatchId];
}
