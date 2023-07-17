package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/Common_MultiLine_QuoteScreenPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Common_MultiLine_QuoteScreenPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/Common_MultiLine_QuoteScreenPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Common_MultiLine_QuoteScreenPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.default.pcf: line 21, column 76
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.default.pcf: line 23, column 43
    function def_onEnter_2 (def :  pcf.Quote_SummaryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.default.pcf: line 21, column 76
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.default.pcf: line 23, column 43
    function def_refreshVariables_3 (def :  pcf.Quote_SummaryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'visible' attribute on Card (id=JobChangeWizard_Quote_TransactionCard) at Common_MultiLine_QuoteScreenPanelSet.default.pcf: line 38, column 39
    function visible_4 () : java.lang.Boolean {
      return showTransactionCard
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get showTransactionCard () : boolean {
      return getRequireValue("showTransactionCard", 0) as java.lang.Boolean
    }
    
    property set showTransactionCard ($arg :  boolean) {
      setRequireValue("showTransactionCard", 0, $arg)
    }
    
    
  }
  
  
}