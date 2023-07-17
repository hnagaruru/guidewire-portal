package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/RatingTxDetailsPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_IMLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/RatingTxDetailsPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_onEnter_3 (def :  pcf.IMPartTxDetailsPanelSet_ContractorsEquipPart) : void {
      def.onEnter(thePeriod)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_onEnter_5 (def :  pcf.IMPartTxDetailsPanelSet_IMAccountsRecPart) : void {
      def.onEnter(thePeriod)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_onEnter_7 (def :  pcf.IMPartTxDetailsPanelSet_IMSignPart) : void {
      def.onEnter(thePeriod)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_refreshVariables_4 (def :  pcf.IMPartTxDetailsPanelSet_ContractorsEquipPart) : void {
      def.refreshVariables(thePeriod)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_refreshVariables_6 (def :  pcf.IMPartTxDetailsPanelSet_IMAccountsRecPart) : void {
      def.refreshVariables(thePeriod)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function def_refreshVariables_8 (def :  pcf.IMPartTxDetailsPanelSet_IMSignPart) : void {
      def.refreshVariables(thePeriod)
    }
    
    // 'mode' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 38, column 35
    function mode_9 () : java.lang.Object {
      return imPartSubtype
    }
    
    property get imPartSubtype () : gw.entity.TypeKey {
      return getIteratedValue(1) as gw.entity.TypeKey
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/RatingTxDetailsPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.IMLine.pcf: line 35, column 28
    function sortBy_2 (imPartSubtype :  gw.entity.TypeKey) : java.lang.Object {
      return imPartSubtype.DisplayName
    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.IMLine.pcf: line 27, column 40
    function title_1 () : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID("IMLine").DisplayName
    }
    
    // 'value' attribute on PanelIterator at RatingTxDetailsPanelSet.IMLine.pcf: line 32, column 43
    function value_10 () : gw.entity.TypeKey[] {
      return (IMCoveragePart.Type as gw.entity.IEntityType).AllSubtypes*.SubtypeTypeKey
    }
    
    // 'visible' attribute on TitleBar at RatingTxDetailsPanelSet.IMLine.pcf: line 27, column 40
    function visible_0 () : java.lang.Boolean {
      return thePeriod.MultiLine
    }
    
    // 'visible' attribute on PanelRef at RatingTxDetailsPanelSet.IMLine.pcf: line 24, column 54
    function visible_11 () : java.lang.Boolean {
      return thePeriod.IMTransactions.HasElements
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
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    property get totalCostLabel () : String {
      return getRequireValue("totalCostLabel", 0) as String
    }
    
    property set totalCostLabel ($arg :  String) {
      setRequireValue("totalCostLabel", 0, $arg)
    }
    
    property get totalPremLabel () : String {
      return getRequireValue("totalPremLabel", 0) as String
    }
    
    property set totalPremLabel ($arg :  String) {
      setRequireValue("totalPremLabel", 0, $arg)
    }
    
    
  }
  
  
}