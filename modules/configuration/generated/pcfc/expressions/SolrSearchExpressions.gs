package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/SolrSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SolrSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/SolrSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SolrToolsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=failurePublicID_Cell) at SolrSearch.pcf: line 105, column 49
    function action_22 () : void {
      PolicyFileForward.go(gw.api.database.Query.make(PolicyPeriod).compare("PublicID", Equals, failure.PeriodPublicID).select().single())
    }
    
    // 'action' attribute on TextCell (id=failurePublicID_Cell) at SolrSearch.pcf: line 105, column 49
    function action_dest_23 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(gw.api.database.Query.make(PolicyPeriod).compare("PublicID", Equals, failure.PeriodPublicID).select().single())
    }
    
    // 'value' attribute on TextCell (id=failureType_Cell) at SolrSearch.pcf: line 100, column 79
    function valueRoot_20 () : java.lang.Object {
      return failure
    }
    
    // 'value' attribute on TextCell (id=failureType_Cell) at SolrSearch.pcf: line 100, column 79
    function value_19 () : gw.solr.utils.SolrConsistencyFailure.FailureType {
      return failure.Type
    }
    
    // 'value' attribute on TextCell (id=failurePublicID_Cell) at SolrSearch.pcf: line 105, column 49
    function value_24 () : java.lang.String {
      return failure.PeriodPublicID
    }
    
    // 'value' attribute on DateCell (id=failureSliceDate_Cell) at SolrSearch.pcf: line 109, column 44
    function value_27 () : java.util.Date {
      return failure.SliceDate
    }
    
    // 'value' attribute on TextCell (id=failureMessage_Cell) at SolrSearch.pcf: line 113, column 42
    function value_30 () : java.lang.String {
      return failure.Message
    }
    
    property get failure () : gw.solr.utils.SolrConsistencyFailure {
      return getIteratedValue(2) as gw.solr.utils.SolrConsistencyFailure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/SolrSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SolrSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=SolrSearch) at SolrSearch.pcf: line 10, column 72
    static function canVisit_38 () : java.lang.Boolean {
      return gw.api.system.PLConfigParameters.FreeTextSearchEnabled.Value
    }
    
    // 'parent' attribute on Page (id=SolrSearch) at SolrSearch.pcf: line 10, column 72
    static function parent_39 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.SolrSearch {
      return super.CurrentLocation as pcf.SolrSearch
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/SolrSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SolrToolsScreenExpressionsImpl extends SolrSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=dismissReport_Input) at SolrSearch.pcf: line 122, column 107
    function action_34 () : void {
      consistencyChecked = false
    }
    
    // 'action' attribute on ButtonInput (id=Reload_Input) at SolrSearch.pcf: line 53, column 88
    function action_6 () : void {
      gw.solr.utils.PCSolrUtils.reloadPolicies(); synced = true; synchDismissed = false
    }
    
    // 'action' attribute on ButtonInput (id=Delete_Input) at SolrSearch.pcf: line 60, column 91
    function action_7 () : void {
      gw.solr.utils.PCSolrUtils.deleteAllPolicies(); deleted = true; deletedDismissed = false
    }
    
    // 'action' attribute on ButtonInput (id=ConsistencyCheck_Input) at SolrSearch.pcf: line 67, column 98
    function action_8 () : void {
      report = gw.solr.utils.PCSolrUtils.runConsistencyCheck(); consistencyChecked = true; consistencyCheckDismissed = false
    }
    
    // 'def' attribute on PanelRef at SolrSearch.pcf: line 127, column 42
    function def_onEnter_36 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at SolrSearch.pcf: line 127, column 42
    function def_refreshVariables_37 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'dismissed' attribute on AlertBar (id=alertReloaded) at SolrSearch.pcf: line 40, column 27
    function dismissed_1 () : java.lang.Boolean {
      return synchDismissed
    }
    
    // 'dismissed' attribute on AlertBar (id=alertDeleted) at SolrSearch.pcf: line 45, column 28
    function dismissed_4 () : java.lang.Boolean {
      return deletedDismissed
    }
    
    // 'dismissed' attribute on AlertBar (id=alertReloaded) at SolrSearch.pcf: line 40, column 27
    function setDismissed_2 (__VALUE :  java.lang.Boolean) : void {
      synchDismissed = __VALUE
    }
    
    // 'dismissed' attribute on AlertBar (id=alertDeleted) at SolrSearch.pcf: line 45, column 28
    function setDismissed_5 (__VALUE :  java.lang.Boolean) : void {
      deletedDismissed = __VALUE
    }
    
    // 'value' attribute on TextCell (id=failureType_Cell) at SolrSearch.pcf: line 100, column 79
    function sortValue_15 (failure :  gw.solr.utils.SolrConsistencyFailure) : java.lang.Object {
      return failure.Type
    }
    
    // 'value' attribute on TextCell (id=failurePublicID_Cell) at SolrSearch.pcf: line 105, column 49
    function sortValue_16 (failure :  gw.solr.utils.SolrConsistencyFailure) : java.lang.Object {
      return failure.PeriodPublicID
    }
    
    // 'value' attribute on DateCell (id=failureSliceDate_Cell) at SolrSearch.pcf: line 109, column 44
    function sortValue_17 (failure :  gw.solr.utils.SolrConsistencyFailure) : java.lang.Object {
      return failure.SliceDate
    }
    
    // 'value' attribute on TextCell (id=failureMessage_Cell) at SolrSearch.pcf: line 113, column 42
    function sortValue_18 (failure :  gw.solr.utils.SolrConsistencyFailure) : java.lang.Object {
      return failure.Message
    }
    
    // 'value' attribute on TextInput (id=consistencyRecordsProcessed_Input) at SolrSearch.pcf: line 80, column 46
    function valueRoot_10 () : java.lang.Object {
      return report
    }
    
    // 'value' attribute on TextInput (id=consistencyFailures_Input) at SolrSearch.pcf: line 85, column 46
    function valueRoot_13 () : java.lang.Object {
      return report.Failures
    }
    
    // 'value' attribute on TextInput (id=consistencyFailures_Input) at SolrSearch.pcf: line 85, column 46
    function value_12 () : java.lang.Integer {
      return report.Failures.Count
    }
    
    // 'value' attribute on RowIterator at SolrSearch.pcf: line 94, column 84
    function value_33 () : java.util.List<gw.solr.utils.SolrConsistencyFailure> {
      return report.Failures
    }
    
    // 'value' attribute on TextInput (id=consistencyRecordsProcessed_Input) at SolrSearch.pcf: line 80, column 46
    function value_9 () : java.lang.Integer {
      return report.DocumentsProcessed
    }
    
    // 'visible' attribute on AlertBar (id=alertReloaded) at SolrSearch.pcf: line 40, column 27
    function visible_0 () : java.lang.Boolean {
      return synced
    }
    
    // 'visible' attribute on AlertBar (id=alertDeleted) at SolrSearch.pcf: line 45, column 28
    function visible_3 () : java.lang.Boolean {
      return deleted
    }
    
    // 'visible' attribute on PanelSet at SolrSearch.pcf: line 71, column 38
    function visible_35 () : java.lang.Boolean {
      return consistencyChecked
    }
    
    property get consistencyCheckDismissed () : boolean {
      return getVariableValue("consistencyCheckDismissed", 1) as java.lang.Boolean
    }
    
    property set consistencyCheckDismissed ($arg :  boolean) {
      setVariableValue("consistencyCheckDismissed", 1, $arg)
    }
    
    property get consistencyChecked () : boolean {
      return getVariableValue("consistencyChecked", 1) as java.lang.Boolean
    }
    
    property set consistencyChecked ($arg :  boolean) {
      setVariableValue("consistencyChecked", 1, $arg)
    }
    
    property get deleted () : boolean {
      return getVariableValue("deleted", 1) as java.lang.Boolean
    }
    
    property set deleted ($arg :  boolean) {
      setVariableValue("deleted", 1, $arg)
    }
    
    property get deletedDismissed () : boolean {
      return getVariableValue("deletedDismissed", 1) as java.lang.Boolean
    }
    
    property set deletedDismissed ($arg :  boolean) {
      setVariableValue("deletedDismissed", 1, $arg)
    }
    
    property get report () : gw.solr.utils.SolrConsistencyReport {
      return getVariableValue("report", 1) as gw.solr.utils.SolrConsistencyReport
    }
    
    property set report ($arg :  gw.solr.utils.SolrConsistencyReport) {
      setVariableValue("report", 1, $arg)
    }
    
    property get synced () : boolean {
      return getVariableValue("synced", 1) as java.lang.Boolean
    }
    
    property set synced ($arg :  boolean) {
      setVariableValue("synced", 1, $arg)
    }
    
    property get synchDismissed () : boolean {
      return getVariableValue("synchDismissed", 1) as java.lang.Boolean
    }
    
    property set synchDismissed ($arg :  boolean) {
      setVariableValue("synchDismissed", 1, $arg)
    }
    
    
  }
  
  
}