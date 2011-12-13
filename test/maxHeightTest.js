TestCase("maxHeightPluginTest", {
    'test returns the height of a DIV' : function () {
        /*:DOC divElement = <div style="height: 100px;"></div>*/
        assertEquals(100, $(this.divElement).maxHeight());
    }
});
