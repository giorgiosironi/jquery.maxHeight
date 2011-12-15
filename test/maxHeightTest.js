TestCase("maxHeightPluginTest", {
    'test returns the height of a div' : function () {
        /*:DOC divElement = <div style="height: 100px;"></div>*/
        assertEquals(100, $(this.divElement).maxHeight());
    },
    'test returns the height of the current div' : function () {
        /*:DOC divElement = <div style="height: 200px"></div>*/
        assertEquals(200, $(this.divElement).maxHeight());
    },
    'test returns the maximum height of multiple divs' : function () {
        /*:DOC container = <form>
            <div style="height: 100px"></div>
            <div style="height: 200px"></div>
            <div style="height:  50px"></div>
           </form>
         */
        var divs = $(this.container).children('div');
        assertEquals(200, divs.maxHeight());
    }
});
