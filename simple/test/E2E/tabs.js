describe("tabs", function () {
    var Test = {
        helpBtn: function () {
            //return ST.panel('[role=tabpanel][arai-hidden=false]').gotoPanel('mainlist').gotoButton('[text=help]');
            /*return ST.panel('app-main').gotoPanel('tab').gotoGrid('mainlist').gotoButton('[text=help]').and(function(){
                debugger;
            });*/
            //return ST.button("=>div[aria-hidden=false]^mainlist button[text=help]");
            //.gotoPanel('mainlist').gotoButton('[text=help]');

            return ST.button('button[text=help]');
        }
    }
    beforeAll(function () {
       /* ST.play([
            { type: "tap", target: "tab[iconCls=\"fa-user\"]", x: 44, y: 13 },
            { type: "tap", target: "tab[iconCls=\"fa-users\"]", x: 48, y: 24 },
            { type: "tap", target: "tab[iconCls=\"fa-cog\"]", x: 46, y: 27 },
            { type: "tap", target: "tab[iconCls=\"fa-users\"]", x: 56, y: 23 },
            { type: "tap", target: "tab[iconCls=\"fa-user\"]", x: 44, y: 23 },
            { type: "tap", target: "tab[iconCls=\"fa-home\"]", x: 34, y: 22 }
        ]);*/
    });
    it("should click on help", function () {
        Test.helpBtn().click();
    });
});