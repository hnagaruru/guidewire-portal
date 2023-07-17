package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ratebook :  RateBook) : int {
      return 0
    }
    
    static function __constructorIndex (ratebook :  RateBook, displayImportMessage :  boolean, warnings :  java.util.List<String>) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=RateBookDetail) at RateBookDetail.pcf: line 12, column 31
    function afterCancel_2 () : void {
      RateBooks.go(ratebook)
    }
    
    // 'afterCancel' attribute on Page (id=RateBookDetail) at RateBookDetail.pcf: line 12, column 31
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination(ratebook)
    }
    
    // 'afterCommit' attribute on Page (id=RateBookDetail) at RateBookDetail.pcf: line 12, column 31
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      RateBooks.go(ratebook)
    }
    
    // 'def' attribute on ScreenRef at RateBookDetail.pcf: line 30, column 78
    function def_onEnter_0 (def :  pcf.RateBookDetailsScreen) : void {
      def.onEnter(ratebook, displayImportMessage, warnings)
    }
    
    // 'def' attribute on ScreenRef at RateBookDetail.pcf: line 30, column 78
    function def_refreshVariables_1 (def :  pcf.RateBookDetailsScreen) : void {
      def.refreshVariables(ratebook, displayImportMessage, warnings)
    }
    
    // 'parent' attribute on Page (id=RateBookDetail) at RateBookDetail.pcf: line 12, column 31
    static function parent_5 (displayImportMessage :  boolean, ratebook :  RateBook, warnings :  java.util.List<String>) : pcf.api.Destination {
      return pcf.RateBooks.createDestination(ratebook)
    }
    
    // 'title' attribute on Page (id=RateBookDetail) at RateBookDetail.pcf: line 12, column 31
    static function title_6 (displayImportMessage :  boolean, ratebook :  RateBook, warnings :  java.util.List<String>) : java.lang.Object {
      return ratebook.BookName
    }
    
    override property get CurrentLocation () : pcf.RateBookDetail {
      return super.CurrentLocation as pcf.RateBookDetail
    }
    
    property get displayImportMessage () : boolean {
      return getVariableValue("displayImportMessage", 0) as java.lang.Boolean
    }
    
    property set displayImportMessage ($arg :  boolean) {
      setVariableValue("displayImportMessage", 0, $arg)
    }
    
    property get ratebook () : RateBook {
      return getVariableValue("ratebook", 0) as RateBook
    }
    
    property set ratebook ($arg :  RateBook) {
      setVariableValue("ratebook", 0, $arg)
    }
    
    property get warnings () : java.util.List<String> {
      return getVariableValue("warnings", 0) as java.util.List<String>
    }
    
    property set warnings ($arg :  java.util.List<String>) {
      setVariableValue("warnings", 0, $arg)
    }
    
    
  }
  
  
}