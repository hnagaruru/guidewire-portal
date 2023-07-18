package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverablePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverablePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (coverable :  APDCoverable, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (coverable :  APDCoverable, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDCoverablePopup) at APDCoverablePopup.pcf: line 11, column 80
    function beforeCommit_3 (pickedValue :  java.lang.Object) : void {
      coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDCoverablePopup) at APDCoverablePopup.pcf: line 11, column 80
    function canEdit_4 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'def' attribute on PanelRef at APDCoverablePopup.pcf: line 31, column 79
    function def_onEnter_1 (def :  pcf.APDCoverableCV) : void {
      def.onEnter(coverable, edition, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at APDCoverablePopup.pcf: line 31, column 79
    function def_refreshVariables_2 (def :  pcf.APDCoverableCV) : void {
      def.refreshVariables(coverable, edition, CurrentLocation.InEditMode)
    }
    
    // EditButtons at APDCoverablePopup.pcf: line 28, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=APDCoverablePopup) at APDCoverablePopup.pcf: line 11, column 80
    static function title_6 (coverable :  APDCoverable, edition :  APDProductLineEdition, startInEditMode :  boolean) : java.lang.Object {
      return DisplayKey.get("Web.APDCoverable.Title", coverable.Name)
    }
    
    override property get CurrentLocation () : pcf.APDCoverablePopup {
      return super.CurrentLocation as pcf.APDCoverablePopup
    }
    
    property get coverable () : APDCoverable {
      return getVariableValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}