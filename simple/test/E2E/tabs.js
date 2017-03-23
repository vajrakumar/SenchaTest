describe("tabs", function () {
    var Test = {
        //currently unused
        helpBtn: function () {
            //return ST.panel('[role=tabpanel][aria-hidden=false]').gotoPanel('mainlist').gotoButton('[text=help]');
            /*return ST.panel('app-main').gotoPanel('tab').gotoGrid('mainlist').gotoButton('[text=help]').and(function(){
                debugger;
            });*/
            //return ST.button("=>div[aria-hidden=false]^mainlist button[text=help]");
            //.gotoPanel('mainlist').gotoButton('[text=help]');

            return ST.button('button[text=help]');
        }
        /**
         * Need to write some method which can accept a selector as arguemnt for tabPanel 'Ext.tab.Panel' and return active tab of that.
         * Currently not supported because ST.execute has the global scope of browser window where ExtJS is running and not where our ST is running,
         * So it cannot access the local variable tabPanelSelector of this funciton.
         */
        /*,
        getActiveTab: function (tabPanelSelector) {
            ST.execute(function (a, b, c) {
                return Ext.first(tabPanelSelector).getActiveTab();
            });
        }*/
    }
    beforeAll(function () {
        ST.play([
            { type: "tap", target: "tab[iconCls=\"fa-user\"]", x: 44, y: 13 },
            { type: "tap", target: "tab[iconCls=\"fa-users\"]", x: 48, y: 24 },
            { type: "tap", target: "tab[iconCls=\"fa-cog\"]", x: 46, y: 27 },
            { type: "tap", target: "tab[iconCls=\"fa-users\"]", x: 56, y: 23 },
            { type: "tap", target: "tab[iconCls=\"fa-user\"]", x: 44, y: 23 },
            { type: "tap", target: "tab[iconCls=\"fa-home\"]", x: 34, y: 22 }
        ]);
    });
    it("should click on help", function () {
        //'app-main'
        ST.execute(function (a, b, c) {
            return '#' + Ext.first('app-main').getActiveTab().getId();
        })
            .and(function (future) {
                ST.panel(future.data.executeResult).gotoButton('[text = help]').click();
            });
    });
    afterAll(function () {
        ST.wait(3000);
    });
});
