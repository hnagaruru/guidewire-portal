package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/EditRateBook.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditRateBookExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/EditRateBook.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditRateBookExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ratebook :  RateBook) : int {
      return 0
    }
    
    static function __constructorIndex (ratebook :  RateBook, currentCard :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Page (id=EditRateBook) at EditRateBook.pcf: line 13, column 80
    function afterCancel_3 () : void {
      RateBookDetail.go(ratebook)
    }
    
    // 'afterCancel' attribute on Page (id=EditRateBook) at EditRateBook.pcf: line 13, column 80
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(ratebook)
    }
    
    // 'afterCommit' attribute on Page (id=EditRateBook) at EditRateBook.pcf: line 13, column 80
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      RateBookDetail.go(ratebook)
    }
    
    // 'canVisit' attribute on Page (id=EditRateBook) at EditRateBook.pcf: line 13, column 80
    static function canVisit_6 (currentCard :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType, ratebook :  RateBook) : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'def' attribute on ScreenRef at EditRateBook.pcf: line 27, column 75
    function def_onEnter_1 (def :  pcf.RateBookEditScreen) : void {
      def.onEnter(ratebook, true /* isEdit */, currentCard)
    }
    
    // 'def' attribute on ScreenRef at EditRateBook.pcf: line 27, column 75
    function def_refreshVariables_2 (def :  pcf.RateBookEditScreen) : void {
      def.refreshVariables(ratebook, true /* isEdit */, currentCard)
    }
    
    // 'initialValue' attribute on Variable at EditRateBook.pcf: line 25, column 67
    function initialValue_0 () : gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType {
      return gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard
    }
    
    // 'parent' attribute on Page (id=EditRateBook) at EditRateBook.pcf: line 13, column 80
    static function parent_7 (currentCard :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType, ratebook :  RateBook) : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(ratebook)
    }
    
    override property get CurrentLocation () : pcf.EditRateBook {
      return super.CurrentLocation as pcf.EditRateBook
    }
    
    property get currentCard () : gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType {
      return getVariableValue("currentCard", 0) as gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType
    }
    
    property set currentCard ($arg :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType) {
      setVariableValue("currentCard", 0, $arg)
    }
    
    property get ratebook () : RateBook {
      return getVariableValue("ratebook", 0) as RateBook
    }
    
    property set ratebook ($arg :  RateBook) {
      setVariableValue("ratebook", 0, $arg)
    }
    
    
  }
  
  
}