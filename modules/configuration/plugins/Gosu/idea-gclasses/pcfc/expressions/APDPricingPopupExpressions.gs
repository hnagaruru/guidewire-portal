package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDPricingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDPricingPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDPricingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDPricingPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  Boolean, costCodeHelper :  gw.apd.model.CostCodeHelper) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=APDPricingPopup) at APDPricingPopup.pcf: line 10, column 67
    function canEdit_6 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDPricingPopup.pcf: line 39, column 100
    function def_onEnter_4 (def :  pcf.APDRiskPricingPanelSet) : void {
      def.onEnter(riskCoverable, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef at APDPricingPopup.pcf: line 39, column 100
    function def_refreshVariables_5 (def :  pcf.APDRiskPricingPanelSet) : void {
      def.refreshVariables(riskCoverable, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'initialValue' attribute on Variable at APDPricingPopup.pcf: line 29, column 28
    function initialValue_0 () : APDPricing[] {
      return gw.apd.web.APDPricingScreenUIHelper.getCostPricingWithEmptyBasisOptionValue(riskCoverable)
    }
    
    // EditButtons at APDPricingPopup.pcf: line 32, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on AlertBar (id=emptyBasisAlertBar) at APDPricingPopup.pcf: line 37, column 49
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APDPricing.EmptyValueAlert", gw.apd.web.APDPricingScreenUIHelper.getEmptyBasisDisplayString(basisWithNoValue))
    }
    
    // 'visible' attribute on AlertBar (id=emptyBasisAlertBar) at APDPricingPopup.pcf: line 37, column 49
    function visible_2 () : java.lang.Boolean {
      return basisWithNoValue.HasElements
    }
    
    override property get CurrentLocation () : pcf.APDPricingPopup {
      return super.CurrentLocation as pcf.APDPricingPopup
    }
    
    property get basisWithNoValue () : APDPricing[] {
      return getVariableValue("basisWithNoValue", 0) as APDPricing[]
    }
    
    property set basisWithNoValue ($arg :  APDPricing[]) {
      setVariableValue("basisWithNoValue", 0, $arg)
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getVariableValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setVariableValue("costCodeHelper", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getVariableValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    
  }
  
  
}