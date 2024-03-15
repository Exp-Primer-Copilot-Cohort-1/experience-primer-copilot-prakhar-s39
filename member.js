function skillsMember() {
  var member = require('./member');
  var skills = require('./skills');
  var memberSkills = member.getSkills();
  var skillList = skills.getSkills();
  var memberSkillsList = [];
  skillList.forEach(function(skill) {
    if (memberSkills.indexOf(skill) !== -1) {
      memberSkillsList.push(skill);
    }
  });
  return memberSkillsList;
}