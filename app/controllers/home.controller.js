angular.module('Controllers')
    .controller('homeCtrl',[function(){
        var self = this;
        self.mainText = "This website is dedicated to the outstanding Ukrainian neuroscientist, anatomist, histologist, teacher, public figure, Professor of Kyiv University,  member of many scientific societies - Volodymyr Betz (1834-1894). We hope that you will find here a lot of intresting information about this eminent scientist who first discovered and described the giant pyramidal neurons of the brain that are known as Betz cells. However, this is not only one great achievement of Volodymyr Betz in his scientific, educational and social activities.";
        self.quote = '"No anatomist has advanced the knowledge of brain structure as much as Professor Betz!"';
        self.autor='Josef Hyrtl(Austrian anatomist)';
        self.textBiogr='Biography';
        self.textCells='Betz cells';
        self.textBibl='Bibliography';
    }])