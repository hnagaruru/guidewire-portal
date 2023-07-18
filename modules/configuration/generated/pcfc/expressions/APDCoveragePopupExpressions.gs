package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoveragePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoveragePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (coverage :  APDCoverage) : int {
      return 0
    }
    
    static function __constructorIndex (coverage :  APDCoverage, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDCoveragePopup) at APDCoveragePopup.pcf: line 11, column 68
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      coverage.Coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDCoveragePopup) at APDCoveragePopup.pcf: line 11, column 68
    function canEdit_9 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'def' attribute on InputSetRef at APDCoveragePopup.pcf: line 34, column 50
    function def_onEnter_2 (def :  pcf.APDCoverageInputSet) : void {
      def.onEnter(coverage)
    }
    
    // 'def' attribute on PanelRef at APDCoveragePopup.pcf: line 40, column 45
    function def_onEnter_4 (def :  pcf.APDCoveragePerilsLV) : void {
      def.onEnter(coverage)
    }
    
    // 'def' attribute on PanelRef at APDCoveragePopup.pcf: line 53, column 81
    function def_onEnter_6 (def :  pcf.APDCoverageClaimCostCategoriesLV) : void {
      def.onEnter(coverage, coverDefinitionHelper)
    }
    
    // 'def' attribute on InputSetRef at APDCoveragePopup.pcf: line 34, column 50
    function def_refreshVariables_3 (def :  pcf.APDCoverageInputSet) : void {
      def.refreshVariables(coverage)
    }
    
    // 'def' attribute on PanelRef at APDCoveragePopup.pcf: line 40, column 45
    function def_refreshVariables_5 (def :  pcf.APDCoveragePerilsLV) : void {
      def.refreshVariables(coverage)
    }
    
    // 'def' attribute on PanelRef at APDCoveragePopup.pcf: line 53, column 81
    function def_refreshVariables_7 (def :  pcf.APDCoverageClaimCostCategoriesLV) : void {
      def.refreshVariables(coverage, coverDefinitionHelper)
    }
    
    // 'initialValue' attribute on Variable at APDCoveragePopup.pcf: line 26, column 50
    function initialValue_0 () : gw.apd.model.CoverDefinitionHelper {
      return new gw.apd.model.CoverDefinitionHelper()
    }
    
    // EditButtons at APDCoveragePopup.pcf: line 29, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDCoveragePopup {
      return super.CurrentLocation as pcf.APDCoveragePopup
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getVariableValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setVariableValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get coverage () : APDCoverage {
      return getVariableValue("coverage", 0) as APDCoverage
    }
    
    property set coverage ($arg :  APDCoverage) {
      setVariableValue("coverage", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}