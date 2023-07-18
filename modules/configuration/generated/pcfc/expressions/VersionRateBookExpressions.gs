package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/VersionRateBook.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VersionRateBookExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/VersionRateBook.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VersionRateBookExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rateBookToCopy :  RateBook) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    function afterCancel_3 () : void {
      RateBookDetail.go(rateBookToCopy)
    }
    
    // 'afterCancel' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(rateBookToCopy)
    }
    
    // 'afterCommit' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      RateBookDetail.go(ratebook)
    }
    
    // 'canVisit' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    static function canVisit_6 (rateBookToCopy :  RateBook) : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'def' attribute on ScreenRef at VersionRateBook.pcf: line 24, column 126
    function def_onEnter_1 (def :  pcf.RateBookEditScreen) : void {
      def.onEnter(ratebook, false /* isEdit */, gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard)
    }
    
    // 'def' attribute on ScreenRef at VersionRateBook.pcf: line 24, column 126
    function def_refreshVariables_2 (def :  pcf.RateBookEditScreen) : void {
      def.refreshVariables(ratebook, false /* isEdit */, gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard)
    }
    
    // 'initialValue' attribute on Variable at VersionRateBook.pcf: line 22, column 24
    function initialValue_0 () : RateBook {
      return rateBookToCopy.versionRateBook()
    }
    
    // 'parent' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    static function parent_7 (rateBookToCopy :  RateBook) : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(rateBookToCopy)
    }
    
    // 'startInEditMode' attribute on Page (id=VersionRateBook) at VersionRateBook.pcf: line 13, column 79
    function startInEditMode_8 () : java.lang.Boolean {
      return ratebook.isDraft()
    }
    
    override property get CurrentLocation () : pcf.VersionRateBook {
      return super.CurrentLocation as pcf.VersionRateBook
    }
    
    property get rateBookToCopy () : RateBook {
      return getVariableValue("rateBookToCopy", 0) as RateBook
    }
    
    property set rateBookToCopy ($arg :  RateBook) {
      setVariableValue("rateBookToCopy", 0, $arg)
    }
    
    property get ratebook () : RateBook {
      return getVariableValue("ratebook", 0) as RateBook
    }
    
    property set ratebook ($arg :  RateBook) {
      setVariableValue("ratebook", 0, $arg)
    }
    
    
  }
  
  
}