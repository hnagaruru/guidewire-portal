package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverageCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewCoverageCategoryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverageCategoryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewCoverageCategoryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverageCategoryPopup.pcf: line 37, column 62
    function def_onEnter_4 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.onEnter(category, true)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverageCategoryPopup.pcf: line 41, column 50
    function def_onEnter_6 (def :  pcf.APDCoverageInputSet) : void {
      def.onEnter(coverage)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverageCategoryPopup.pcf: line 37, column 62
    function def_refreshVariables_5 (def :  pcf.APDClauseCategoryInputSet) : void {
      def.refreshVariables(category, true)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverageCategoryPopup.pcf: line 41, column 50
    function def_refreshVariables_7 (def :  pcf.APDCoverageInputSet) : void {
      def.refreshVariables(coverage)
    }
    
    // 'initialValue' attribute on Variable at APDNewCoverageCategoryPopup.pcf: line 19, column 33
    function initialValue_0 () : APDClauseCategory {
      return riskCoverable.Coverable.addClauseCategory(true)
    }
    
    // 'initialValue' attribute on Variable at APDNewCoverageCategoryPopup.pcf: line 23, column 27
    function initialValue_1 () : APDCoverage {
      return riskCoverable.Coverable.addCoverage(category)
    }
    
    // 'initialValue' attribute on Variable at APDNewCoverageCategoryPopup.pcf: line 27, column 31
    function initialValue_2 () : APDRiskCoverage {
      return coverage.buildRiskCoverage(riskCoverable)
    }
    
    // EditButtons at APDNewCoverageCategoryPopup.pcf: line 30, column 23
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDNewCoverageCategoryPopup {
      return super.CurrentLocation as pcf.APDNewCoverageCategoryPopup
    }
    
    property get category () : APDClauseCategory {
      return getVariableValue("category", 0) as APDClauseCategory
    }
    
    property set category ($arg :  APDClauseCategory) {
      setVariableValue("category", 0, $arg)
    }
    
    property get coverage () : APDCoverage {
      return getVariableValue("coverage", 0) as APDCoverage
    }
    
    property set coverage ($arg :  APDCoverage) {
      setVariableValue("coverage", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get riskCoverage () : APDRiskCoverage {
      return getVariableValue("riskCoverage", 0) as APDRiskCoverage
    }
    
    property set riskCoverage ($arg :  APDRiskCoverage) {
      setVariableValue("riskCoverage", 0, $arg)
    }
    
    
  }
  
  
}