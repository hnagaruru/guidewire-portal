package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Common_MultiLine_QuoteScreenPanelSet_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Common_MultiLine_QuoteScreenPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 21, column 76
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 23, column 43
    function def_onEnter_2 (def :  pcf.Quote_SummaryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 32, column 50
    function def_onEnter_6 (def :  pcf.RatingPanelSet_CommercialPackage) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 32, column 50
    function def_onEnter_8 (def :  pcf.RatingPanelSet_default) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 21, column 76
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 23, column 43
    function def_refreshVariables_3 (def :  pcf.Quote_SummaryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 32, column 50
    function def_refreshVariables_7 (def :  pcf.RatingPanelSet_CommercialPackage) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 32, column 50
    function def_refreshVariables_9 (def :  pcf.RatingPanelSet_default) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'mode' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 32, column 50
    function mode_10 () : java.lang.Object {
      return policyPeriod.Policy.ProductCode
    }
    
    // 'sortBy' attribute on IteratorSort at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 49, column 28
    function sortBy_11 (linePattern :  gw.api.productmodel.PolicyLinePattern) : java.lang.Object {
      return linePattern.Priority
    }
    
    // 'title' attribute on TitleBar at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 35, column 76
    function title_5 () : java.lang.String {
      return policyPeriod.Policy.Product.DisplayName
    }
    
    // 'value' attribute on PanelIterator (id=tx) at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 46, column 63
    function value_31 () : gw.api.productmodel.PolicyLinePattern[] {
      return policyPeriod.Policy.Product.LinePatterns
    }
    
    // 'visible' attribute on Card (id=JobWizard_Quote_TransactionCard) at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 41, column 39
    function visible_32 () : java.lang.Boolean {
      return showTransactionCard
    }
    
    // 'visible' attribute on TitleBar at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 35, column 76
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.RepresentativePolicyLines.Count > 1
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
  
  @javax.annotation.Generated("config/web/pcf/job/common/Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends Common_MultiLine_QuoteScreenPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_12 (def :  pcf.RatingTxDetailsPanelSet_BOPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_14 (def :  pcf.RatingTxDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_16 (def :  pcf.RatingTxDetailsPanelSet_CPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_18 (def :  pcf.RatingTxDetailsPanelSet_GLLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_20 (def :  pcf.RatingTxDetailsPanelSet_HOPLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_22 (def :  pcf.RatingTxDetailsPanelSet_IMLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_24 (def :  pcf.RatingTxDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_26 (def :  pcf.RatingTxDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_onEnter_28 (def :  pcf.RatingTxDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_13 (def :  pcf.RatingTxDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_15 (def :  pcf.RatingTxDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_17 (def :  pcf.RatingTxDetailsPanelSet_CPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_19 (def :  pcf.RatingTxDetailsPanelSet_GLLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_21 (def :  pcf.RatingTxDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_23 (def :  pcf.RatingTxDetailsPanelSet_IMLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_25 (def :  pcf.RatingTxDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_27 (def :  pcf.RatingTxDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function def_refreshVariables_29 (def :  pcf.RatingTxDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, DisplayKey.get("Web.Quote.TotalPremLabel.Change"), DisplayKey.get("Web.Quote.TotalCostLabel.Change"), isEditable, jobWizardHelper)
    }
    
    // 'mode' attribute on PanelRef at Common_MultiLine_QuoteScreenPanelSet.CommercialPackage.pcf: line 52, column 42
    function mode_30 () : java.lang.Object {
      return linePattern.PublicID
    }
    
    property get linePattern () : gw.api.productmodel.PolicyLinePattern {
      return getIteratedValue(1) as gw.api.productmodel.PolicyLinePattern
    }
    
    
  }
  
  
}