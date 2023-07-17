package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditInformationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditInformationScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditInformationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditInformationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateAdHocAudit) at AuditInformationScreen.pcf: line 21, column 67
    function action_3 () : void {
      CreateNewAuditInformationPopup.push(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateAdHocAudit) at AuditInformationScreen.pcf: line 21, column 67
    function action_dest_4 () : pcf.api.Destination {
      return pcf.CreateNewAuditInformationPopup.createDestination(policyPeriod)
    }
    
    // 'available' attribute on ToolbarButton (id=CreateAdHocAudit) at AuditInformationScreen.pcf: line 21, column 67
    function available_1 () : java.lang.Boolean {
      return policyPeriod.CanAcceptNewAudit
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at AuditInformationScreen.pcf: line 71, column 83
    function filters_5 () : gw.api.filters.IFilter[] {
      return new gw.job.audit.AuditInformationFilterSet().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at AuditInformationScreen.pcf: line 13, column 55
    function initialValue_0 () : gw.pcf.job.audit.AuditInformationHelper {
      return new gw.pcf.job.audit.AuditInformationHelper(CurrentLocation, policyPeriod)
    }
    
    // 'value' attribute on RowIterator (id=InfoIterator) at AuditInformationScreen.pcf: line 66, column 57
    function value_49 () : gw.job.audit.DisplayableAuditInfo[] {
      return policyPeriod.DisplayableAuditInfoList
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateAdHocAudit) at AuditInformationScreen.pcf: line 21, column 67
    function visible_2 () : java.lang.Boolean {
      return perm.Audit.create and policyPeriod.IsAuditable
    }
    
    property get helper () : gw.pcf.job.audit.AuditInformationHelper {
      return getVariableValue("helper", 0) as gw.pcf.job.audit.AuditInformationHelper
    }
    
    property set helper ($arg :  gw.pcf.job.audit.AuditInformationHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditInformationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AuditInformationScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=AuditType_Cell) at AuditInformationScreen.pcf: line 85, column 32
    function actionAvailable_14 () : java.lang.Boolean {
      return helper.canViewAuditJob(info.ActualInfo)
    }
    
    // 'action' attribute on TextCell (id=AuditType_Cell) at AuditInformationScreen.pcf: line 85, column 32
    function action_12 () : void {
      JobForward.go(info.Audit, info.Audit.PolicyPeriod)
    }
    
    // 'action' attribute on Link (id=Edit) at AuditInformationScreen.pcf: line 113, column 63
    function action_37 () : void {
      EditAuditInformationPopup.push(policyPeriod, info.ActualInfo)
    }
    
    // 'action' attribute on Link (id=Revise) at AuditInformationScreen.pcf: line 119, column 65
    function action_40 () : void {
      helper.reviseAndGoToWiz(info.Audit)
    }
    
    // 'action' attribute on Link (id=Reverse) at AuditInformationScreen.pcf: line 126, column 66
    function action_42 () : void {
      helper.reversePremiumReport(info.ActualInfo)
    }
    
    // 'action' attribute on Link (id=Start) at AuditInformationScreen.pcf: line 132, column 64
    function action_45 () : void {
      helper.startAudit(info.ActualInfo)
    }
    
    // 'action' attribute on Link (id=Waive) at AuditInformationScreen.pcf: line 139, column 64
    function action_47 () : void {
      helper.waiveAndCommit(info.ActualInfo)
    }
    
    // 'action' attribute on TextCell (id=AuditType_Cell) at AuditInformationScreen.pcf: line 85, column 32
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(info.Audit, info.Audit.PolicyPeriod)
    }
    
    // 'action' attribute on Link (id=Edit) at AuditInformationScreen.pcf: line 113, column 63
    function action_dest_38 () : pcf.api.Destination {
      return pcf.EditAuditInformationPopup.createDestination(policyPeriod, info.ActualInfo)
    }
    
    // 'confirmMessage' attribute on Link (id=Reverse) at AuditInformationScreen.pcf: line 126, column 66
    function confirmMessage_43 () : java.lang.String {
      return DisplayKey.get("Web.AuditWizard.Confirmation.Reverse", info.ActualInfo.UIDisplayName)
    }
    
    // 'confirmMessage' attribute on Link (id=Waive) at AuditInformationScreen.pcf: line 139, column 64
    function confirmMessage_48 () : java.lang.String {
      return DisplayKey.get("Web.AuditWizard.Confirmation.Waive", info.ActualInfo.UIDisplayName)
    }
    
    // 'value' attribute on DateCell (id=AuditPeriodStartDate_Cell) at AuditInformationScreen.pcf: line 76, column 37
    function valueRoot_7 () : java.lang.Object {
      return info
    }
    
    // 'value' attribute on TextCell (id=AuditType_Cell) at AuditInformationScreen.pcf: line 85, column 32
    function value_15 () : java.lang.String {
      return info.Type
    }
    
    // 'value' attribute on TextCell (id=AuditMethod_Cell) at AuditInformationScreen.pcf: line 88, column 34
    function value_18 () : java.lang.String {
      return info.Method
    }
    
    // 'value' attribute on DateCell (id=InitDate_Cell) at AuditInformationScreen.pcf: line 91, column 36
    function value_21 () : java.util.Date {
      return info.InitDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at AuditInformationScreen.pcf: line 94, column 35
    function value_24 () : java.util.Date {
      return info.DueDate
    }
    
    // 'value' attribute on TextCell (id=AuditStatus_Cell) at AuditInformationScreen.pcf: line 97, column 34
    function value_27 () : java.lang.String {
      return info.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalTransactions_Cell) at AuditInformationScreen.pcf: line 101, column 45
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return info.TransactionAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalCost_Cell) at AuditInformationScreen.pcf: line 105, column 37
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return info.TotalCost
    }
    
    // 'value' attribute on DateCell (id=AuditPeriodStartDate_Cell) at AuditInformationScreen.pcf: line 76, column 37
    function value_6 () : java.util.Date {
      return info.StartDate
    }
    
    // 'value' attribute on DateCell (id=AuditPeriodEndDate_Cell) at AuditInformationScreen.pcf: line 80, column 35
    function value_9 () : java.util.Date {
      return info.EndDate
    }
    
    // 'visible' attribute on Link (id=Edit) at AuditInformationScreen.pcf: line 113, column 63
    function visible_36 () : java.lang.Boolean {
      return helper.canEditAudit(info.ActualInfo)
    }
    
    // 'visible' attribute on Link (id=Revise) at AuditInformationScreen.pcf: line 119, column 65
    function visible_39 () : java.lang.Boolean {
      return helper.canReviseAudit(info.ActualInfo)
    }
    
    // 'visible' attribute on Link (id=Reverse) at AuditInformationScreen.pcf: line 126, column 66
    function visible_41 () : java.lang.Boolean {
      return helper.canReverseAudit(info.ActualInfo)
    }
    
    // 'visible' attribute on Link (id=Start) at AuditInformationScreen.pcf: line 132, column 64
    function visible_44 () : java.lang.Boolean {
      return helper.canStartAudit(info.ActualInfo)
    }
    
    // 'visible' attribute on Link (id=Waive) at AuditInformationScreen.pcf: line 139, column 64
    function visible_46 () : java.lang.Boolean {
      return helper.canWaiveAudit(info.ActualInfo)
    }
    
    property get info () : gw.job.audit.DisplayableAuditInfo {
      return getIteratedValue(1) as gw.job.audit.DisplayableAuditInfo
    }
    
    
  }
  
  
}