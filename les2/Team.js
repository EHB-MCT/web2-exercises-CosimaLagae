class Team {
    cosntructor(teamname, trainer, roster){
        this.teamname = 'Default team';
        this.trainer = 'Ash';
        this.roster = [];
    }
    describe(){
        console.log('coursename');
        return `this ${this.teamname} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}`;
    }
}



export default Team;