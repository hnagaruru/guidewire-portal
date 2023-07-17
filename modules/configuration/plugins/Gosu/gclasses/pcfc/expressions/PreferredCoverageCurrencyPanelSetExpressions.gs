package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/PreferredCoverageCurrencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PreferredCoverageCurrencyPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/PreferredCoverageCurrencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreferredCoverageCurrencyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function available_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'available' attribute on TextValue (id=CoverageCurrencyDisplay) at PreferredCoverageCurrencyPanelSet.pcf: line 43, column 35
    function available_13 () : java.lang.Boolean {
      return !openForEdit
    }
    
    // 'available' attribute on PanelSet (id=PreferredCoverageCurrencyPanelSet) at PreferredCoverageCurrencyPanelSet.pcf: line 8, column 62
    function available_22 () : java.lang.Boolean {
      return coverable != null
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'label' attribute on TextValue (id=CoverageCurrencyDisplay) at PreferredCoverageCurrencyPanelSet.pcf: line 43, column 35
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.CoverableCurrency") + ":"
    }
    
    // 'onChange' attribute on PostOnChange at PreferredCoverageCurrencyPanelSet.pcf: line 35, column 127
    function onChange_0 () : void {
      gw.web.policy.CoverableCoverageCurrencySynchronizer.synchronizeCurrencies(coverable, jobWizardHelper)
    }
    
    // 'showConfirmMessage' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function showConfirmMessage_3 () : java.lang.Boolean {
      return coverable.CoveragesFromCoverable.length > 0
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function valueRange_7 () : java.lang.Object {
      return gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(coverable)
    }
    
    // 'value' attribute on TextValue (id=CoverageCurrencyDisplay) at PreferredCoverageCurrencyPanelSet.pcf: line 43, column 35
    function valueRoot_17 () : java.lang.Object {
      return coverable.PreferredCoverageCurrency
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function valueRoot_6 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on TextValue (id=CoverageCurrencyDisplay) at PreferredCoverageCurrencyPanelSet.pcf: line 43, column 35
    function value_16 () : java.lang.String {
      return coverable.PreferredCoverageCurrency.DisplayName
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function value_4 () : typekey.Currency {
      return coverable.PreferredCoverageCurrency
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PreferredCoverageCurrencySelectorDropDown_Input) at PreferredCoverageCurrencyPanelSet.pcf: line 33, column 33
    function verifyValueRange_9 () : void {
      var __valueRangeArg = gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(coverable)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelSet (id=PreferredCoverageCurrencyPanelSet) at PreferredCoverageCurrencyPanelSet.pcf: line 8, column 62
    function visible_23 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}