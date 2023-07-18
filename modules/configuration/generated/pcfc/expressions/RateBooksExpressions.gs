package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBooks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBooksExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBooks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBooksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (initialRateBook :  RateBook) : int {
      return 1
    }
    
    static function __constructorIndex (initialRateBook :  RateBook, displayImportResults :  boolean) : int {
      return 2
    }
    
    // 'afterCancel' attribute on Page (id=RateBooks) at RateBooks.pcf: line 12, column 68
    function afterCancel_3 () : void {
      RateBooks.go()
    }
    
    // 'afterCancel' attribute on Page (id=RateBooks) at RateBooks.pcf: line 12, column 68
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=RateBooks) at RateBooks.pcf: line 12, column 68
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      RateBooks.go()
    }
    
    // 'canVisit' attribute on Page (id=RateBooks) at RateBooks.pcf: line 12, column 68
    static function canVisit_6 (displayImportResults :  boolean, initialRateBook :  RateBook) : java.lang.Boolean {
      return perm.System.ratebookview
    }
    
    // 'def' attribute on ScreenRef at RateBooks.pcf: line 30, column 74
    function def_onEnter_1 (def :  pcf.RateBookSearchScreen) : void {
      def.onEnter(initialRateBook, displayImportResults)
    }
    
    // 'def' attribute on ScreenRef at RateBooks.pcf: line 30, column 74
    function def_refreshVariables_2 (def :  pcf.RateBookSearchScreen) : void {
      def.refreshVariables(initialRateBook, displayImportResults)
    }
    
    // 'initialValue' attribute on Variable at RateBooks.pcf: line 22, column 64
    function initialValue_0 () : gw.api.database.IQueryBeanResult<RateBook> {
      return gw.api.database.Query.make(RateBook).select()
    }
    
    // Page (id=RateBooks) at RateBooks.pcf: line 12, column 68
    static function parent_7 (displayImportResults :  boolean, initialRateBook :  RateBook) : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    override property get CurrentLocation () : pcf.RateBooks {
      return super.CurrentLocation as pcf.RateBooks
    }
    
    property get allRateBooks () : gw.api.database.IQueryBeanResult<RateBook> {
      return getVariableValue("allRateBooks", 0) as gw.api.database.IQueryBeanResult<RateBook>
    }
    
    property set allRateBooks ($arg :  gw.api.database.IQueryBeanResult<RateBook>) {
      setVariableValue("allRateBooks", 0, $arg)
    }
    
    property get displayImportResults () : boolean {
      return getVariableValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setVariableValue("displayImportResults", 0, $arg)
    }
    
    property get initialRateBook () : RateBook {
      return getVariableValue("initialRateBook", 0) as RateBook
    }
    
    property set initialRateBook ($arg :  RateBook) {
      setVariableValue("initialRateBook", 0, $arg)
    }
    
    
  }
  
  
}