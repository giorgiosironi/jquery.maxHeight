TestCase("maxHeightPluginTest", {
    'test returns the height of a div' : function () {
        /*:DOC divElement = <div style="height: 100px;"></div>*/
        assertEquals(100, $(this.divElement).maxHeight());
    },
    'test returns the height of the current div' : function () {
        /*:DOC divElement = <div style="height: 200px"></div>*/
        assertEquals(200, $(this.divElement).maxHeight());
    }
});
