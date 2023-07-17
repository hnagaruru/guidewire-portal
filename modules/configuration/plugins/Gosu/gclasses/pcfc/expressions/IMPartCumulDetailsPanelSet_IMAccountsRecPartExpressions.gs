package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartCumulDetailsPanelSet_IMAccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 55, column 41
    function def_onEnter_12 (def :  pcf.IMCostLV) : void {
      def.onEnter(accountsRecPart.VersionList.IMAccountsRecPartCovs.flatMap(\ c -> c.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 55, column 41
    function def_refreshVariables_13 (def :  pcf.IMCostLV) : void {
      def.refreshVariables(accountsRecPart.VersionList.IMAccountsRecPartCovs.flatMap(\ c -> c.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 14, column 59
    function initialValue_0 () : java.util.List<entity.IMCoveragePart> {
      return imLine.VersionList.IMCoverageParts.map( \ i -> i.AllVersions.last() )
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 18, column 40
    function initialValue_1 () : entity.IMAccountsRecPart {
      return covPartIterable.firstWhere( \ part -> part typeis IMAccountsRecPart ) as IMAccountsRecPart
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 22, column 23
    function initialValue_2 () : boolean {
      return accountsRecPart.VersionList.IMAccountsReceivables.map(\ i -> i.AllVersions.last() ).Count > 0
    }
    
    // 'initialValue' attribute on Variable at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 26, column 23
    function initialValue_3 () : boolean {
      return accountsRecPart.VersionList.IMAccountsRecPartCovs.flatMap(\ c -> c.Costs).Count > 0
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 43, column 32
    function sortBy_5 (perARItem :  entity.IMAccountsReceivable) : java.lang.Object {
      return perARItem.AccountsRecNumber
    }
    
    // 'value' attribute on PanelIterator at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 40, column 57
    function value_10 () : entity.IMAccountsReceivable[] {
      return accountsRecPart.VersionList.IMAccountsReceivables.map(\ i -> i.AllVersions.last() ).toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 55, column 41
    function visible_11 () : java.lang.Boolean {
      return hasRecPartCoverages
    }
    
    // 'visible' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 28, column 58
    function visible_14 () : java.lang.Boolean {
      return hasScheduledItems or hasRecPartCoverages
    }
    
    // 'visible' attribute on Verbatim at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 35, column 42
    function visible_4 () : java.lang.Boolean {
      return hasScheduledItems
    }
    
    property get accountsRecPart () : entity.IMAccountsRecPart {
      return getVariableValue("accountsRecPart", 0) as entity.IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  entity.IMAccountsRecPart) {
      setVariableValue("accountsRecPart", 0, $arg)
    }
    
    property get covPartIterable () : java.util.List<entity.IMCoveragePart> {
      return getVariableValue("covPartIterable", 0) as java.util.List<entity.IMCoveragePart>
    }
    
    property set covPartIterable ($arg :  java.util.List<entity.IMCoveragePart>) {
      setVariableValue("covPartIterable", 0, $arg)
    }
    
    property get hasRecPartCoverages () : boolean {
      return getVariableValue("hasRecPartCoverages", 0) as java.lang.Boolean
    }
    
    property set hasRecPartCoverages ($arg :  boolean) {
      setVariableValue("hasRecPartCoverages", 0, $arg)
    }
    
    property get hasScheduledItems () : boolean {
      return getVariableValue("hasScheduledItems", 0) as java.lang.Boolean
    }
    
    property set hasScheduledItems ($arg :  boolean) {
      setVariableValue("hasScheduledItems", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 46, column 103
    function def_onEnter_8 (def :  pcf.IMCostLV) : void {
      def.onEnter(perARItem.VersionList.Coverages.flatMap(\ cov -> cov.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'def' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 46, column 103
    function def_refreshVariables_9 (def :  pcf.IMCostLV) : void {
      def.refreshVariables(perARItem.VersionList.Coverages.flatMap(\ cov -> cov.Costs).flatMap(\ c -> c.AllVersions).toList())
    }
    
    // 'label' attribute on Verbatim at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 48, column 50
    function label_6 () : java.lang.String {
      return perARItem.DisplayName
    }
    
    // 'visible' attribute on PanelRef at IMPartCumulDetailsPanelSet.IMAccountsRecPart.pcf: line 46, column 103
    function visible_7 () : java.lang.Boolean {
      return perARItem.VersionList.Coverages.flatMap(\ cov -> cov.Costs).Count > 0
    }
    
    property get perARItem () : entity.IMAccountsReceivable {
      return getIteratedValue(1) as entity.IMAccountsReceivable
    }
    
    
  }
  
  
}