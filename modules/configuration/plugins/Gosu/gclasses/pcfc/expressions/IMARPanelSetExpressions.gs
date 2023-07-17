package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMARPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMARPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at IMARPanelSet.pcf: line 30, column 50
    function def_onEnter_3 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(accountsRecPart, openforEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 32, column 70
    function def_onEnter_5 (def :  pcf.IMARPartLevelInformationDV) : void {
      def.onEnter(accountsRecPart, openforEdit)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 38, column 71
    function def_onEnter_7 (def :  pcf.IMARItemDV) : void {
      def.onEnter(accountsRecPart, openforEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 44, column 66
    function def_onEnter_9 (def :  pcf.IMARExcludedAccountsDV) : void {
      def.onEnter(accountsRecPart, openforEdit)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 44, column 66
    function def_refreshVariables_10 (def :  pcf.IMARExcludedAccountsDV) : void {
      def.refreshVariables(accountsRecPart, openforEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at IMARPanelSet.pcf: line 30, column 50
    function def_refreshVariables_4 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(accountsRecPart, openforEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 32, column 70
    function def_refreshVariables_6 (def :  pcf.IMARPartLevelInformationDV) : void {
      def.refreshVariables(accountsRecPart, openforEdit)
    }
    
    // 'def' attribute on PanelRef at IMARPanelSet.pcf: line 38, column 71
    function def_refreshVariables_8 (def :  pcf.IMARItemDV) : void {
      def.refreshVariables(accountsRecPart, openforEdit, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at IMARPanelSet.pcf: line 19, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return accountsRecPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId("IMARCategory")
    }
    
    // 'initialValue' attribute on Variable at IMARPanelSet.pcf: line 23, column 35
    function initialValue_1 () : entity.PolicyPeriod {
      return accountsRecPart.InlandMarineLine.Branch
    }
    
    // 'initialValue' attribute on Variable at IMARPanelSet.pcf: line 27, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return accountsRecPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId("IMARPartCategory")
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getRequireValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setRequireValue("accountsRecPart", 0, $arg)
    }
    
    property get accountsRecPartCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("accountsRecPartCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set accountsRecPartCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("accountsRecPartCategory", 0, $arg)
    }
    
    property get accountsReceivableCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("accountsReceivableCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set accountsReceivableCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("accountsReceivableCategory", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openforEdit () : boolean {
      return getRequireValue("openforEdit", 0) as java.lang.Boolean
    }
    
    property set openforEdit ($arg :  boolean) {
      setRequireValue("openforEdit", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}