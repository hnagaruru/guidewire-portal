package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/ContingencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContingencyPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContingencyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on PanelSet (id=ContingencyPanelSet) at ContingencyPanelSet.pcf: line 8, column 61
    function editable_105 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function sortValue_0 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Title
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 37, column 44
    function sortValue_1 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 42, column 28
    function sortValue_2 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function sortValue_27 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Title
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 82, column 28
    function sortValue_28 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Status.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyPanelSet.pcf: line 87, column 46
    function sortValue_29 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CloseDate
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 47, column 28
    function sortValue_3 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateUser
    }
    
    // 'value' attribute on TextCell (id=CompletedBy_Cell) at ContingencyPanelSet.pcf: line 93, column 28
    function sortValue_30 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CloseUser
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 98, column 44
    function sortValue_31 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 103, column 28
    function sortValue_32 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 108, column 28
    function sortValue_33 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateUser
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 113, column 47
    function sortValue_34 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateTime
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 52, column 47
    function sortValue_4 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function sortValue_66 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Title
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 143, column 28
    function sortValue_67 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Status.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyPanelSet.pcf: line 148, column 46
    function sortValue_68 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CloseDate
    }
    
    // 'value' attribute on TextCell (id=CompletedBy_Cell) at ContingencyPanelSet.pcf: line 154, column 28
    function sortValue_69 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CloseUser
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 159, column 44
    function sortValue_70 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 164, column 28
    function sortValue_71 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 169, column 28
    function sortValue_72 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateUser
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 174, column 47
    function sortValue_73 (contingency :  entity.Contingency) : java.lang.Object {
      return contingency.CreateTime
    }
    
    // 'value' attribute on RowIterator at ContingencyPanelSet.pcf: line 130, column 37
    function value_103 () : Contingency[] {
      return policyPeriod.Policy.FailedOrActionInitiatedContingencies
    }
    
    // 'value' attribute on RowIterator at ContingencyPanelSet.pcf: line 24, column 37
    function value_25 () : Contingency[] {
      return policyPeriod.Policy.PendingContingencies
    }
    
    // 'value' attribute on RowIterator at ContingencyPanelSet.pcf: line 69, column 37
    function value_64 () : Contingency[] {
      return policyPeriod.Policy.ResolvedOrWaivedContingencies
    }
    
    // 'visible' attribute on PanelRef at ContingencyPanelSet.pcf: line 119, column 86
    function visible_104 () : java.lang.Boolean {
      return policyPeriod.Policy.FailedOrActionInitiatedContingencies.HasElements
    }
    
    // 'visible' attribute on PanelSet (id=ContingencyPanelSet) at ContingencyPanelSet.pcf: line 8, column 61
    function visible_106 () : java.lang.Boolean {
      return not policyPeriod.Policy.Contingencies.IsEmpty
    }
    
    // 'visible' attribute on PanelRef at ContingencyPanelSet.pcf: line 13, column 65
    function visible_26 () : java.lang.Boolean {
      return policyPeriod.Policy.HasOutstandingContingencies
    }
    
    // 'visible' attribute on PanelRef at ContingencyPanelSet.pcf: line 58, column 79
    function visible_65 () : java.lang.Boolean {
      return policyPeriod.Policy.ResolvedOrWaivedContingencies.HasElements
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ContingencyPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function actionAvailable_37 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function action_35 () : void {
      ContingencyPopup.push(contingency)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 108, column 28
    function action_56 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function action_dest_36 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(contingency)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 108, column 28
    function action_dest_57 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function valueRoot_39 () : java.lang.Object {
      return contingency
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 82, column 28
    function valueRoot_42 () : java.lang.Object {
      return contingency.Status
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 103, column 28
    function valueRoot_54 () : java.lang.Object {
      return contingency.Action
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 77, column 28
    function value_38 () : java.lang.String {
      return contingency.Title
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 82, column 28
    function value_41 () : java.lang.String {
      return contingency.Status.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyPanelSet.pcf: line 87, column 46
    function value_44 () : java.util.Date {
      return contingency.CloseDate
    }
    
    // 'value' attribute on TextCell (id=CompletedBy_Cell) at ContingencyPanelSet.pcf: line 93, column 28
    function value_47 () : entity.User {
      return contingency.CloseUser
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 98, column 44
    function value_50 () : java.util.Date {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 103, column 28
    function value_53 () : java.lang.String {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 108, column 28
    function value_58 () : entity.User {
      return contingency.CreateUser
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 113, column 47
    function value_61 () : java.util.Date {
      return contingency.CreateTime
    }
    
    property get contingency () : entity.Contingency {
      return getIteratedValue(1) as entity.Contingency
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ContingencyPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function actionAvailable_76 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function action_74 () : void {
      ContingencyPopup.push(contingency)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 169, column 28
    function action_95 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function action_dest_75 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(contingency)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 169, column 28
    function action_dest_96 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function valueRoot_78 () : java.lang.Object {
      return contingency
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 143, column 28
    function valueRoot_81 () : java.lang.Object {
      return contingency.Status
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 164, column 28
    function valueRoot_93 () : java.lang.Object {
      return contingency.Action
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 174, column 47
    function value_100 () : java.util.Date {
      return contingency.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 138, column 28
    function value_77 () : java.lang.String {
      return contingency.Title
    }
    
    // 'value' attribute on TextCell (id=ContingencyStatus_Cell) at ContingencyPanelSet.pcf: line 143, column 28
    function value_80 () : java.lang.String {
      return contingency.Status.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CompletionDate_Cell) at ContingencyPanelSet.pcf: line 148, column 46
    function value_83 () : java.util.Date {
      return contingency.CloseDate
    }
    
    // 'value' attribute on TextCell (id=CompletedBy_Cell) at ContingencyPanelSet.pcf: line 154, column 28
    function value_86 () : entity.User {
      return contingency.CloseUser
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 159, column 44
    function value_89 () : java.util.Date {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 164, column 28
    function value_92 () : java.lang.String {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 169, column 28
    function value_97 () : entity.User {
      return contingency.CreateUser
    }
    
    property get contingency () : entity.Contingency {
      return getIteratedValue(1) as entity.Contingency
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContingencyPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function actionAvailable_7 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 47, column 28
    function action_17 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function action_5 () : void {
      ContingencyPopup.push(contingency)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ContingencyPanelSet.pcf: line 47, column 28
    function action_dest_18 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function action_dest_6 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(contingency)
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 42, column 28
    function valueRoot_15 () : java.lang.Object {
      return contingency.Action
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function valueRoot_9 () : java.lang.Object {
      return contingency
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ContingencyPanelSet.pcf: line 37, column 44
    function value_11 () : java.util.Date {
      return contingency.DueDate
    }
    
    // 'value' attribute on TextCell (id=PotentialAction_Cell) at ContingencyPanelSet.pcf: line 42, column 28
    function value_14 () : java.lang.String {
      return contingency.Action.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=AddedBy_Cell) at ContingencyPanelSet.pcf: line 47, column 28
    function value_19 () : entity.User {
      return contingency.CreateUser
    }
    
    // 'value' attribute on DateCell (id=On_Cell) at ContingencyPanelSet.pcf: line 52, column 47
    function value_22 () : java.util.Date {
      return contingency.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ContingencyTitle_Cell) at ContingencyPanelSet.pcf: line 32, column 28
    function value_8 () : java.lang.String {
      return contingency.Title
    }
    
    property get contingency () : entity.Contingency {
      return getIteratedValue(1) as entity.Contingency
    }
    
    
  }
  
  
}