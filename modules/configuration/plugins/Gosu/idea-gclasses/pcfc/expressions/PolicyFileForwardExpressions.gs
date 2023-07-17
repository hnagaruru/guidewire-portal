package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (retrievedPeriod :  PolicyPeriod) : int {
      return 5
    }
    
    static function __constructorIndex (retrievedPeriod :  PolicyPeriod, retrieveAsOfDate :  java.util.Date) : int {
      return 2
    }
    
    static function __constructorIndex (retrievedPeriod :  PolicyPeriod, retrieveAsOfDate :  java.util.Date, step :  String) : int {
      return 3
    }
    
    static function __constructorIndex (retrievedPeriod :  PolicyPeriod, retrieveAsOfDate :  java.util.Date, step :  String, args :  Object[]) : int {
      return 4
    }
    
    static function __constructorIndex (policyNumber :  String) : int {
      return 0
    }
    
    static function __constructorIndex (policyNumber :  String, retrieveAsOfDate :  java.util.Date) : int {
      return 1
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 57, column 58
    function action_10 () : void {
      PolicyFile_Audits.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 60, column 59
    function action_13 () : void {
      PolicyFile_Summary.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 63, column 70
    function action_16 () : void {
      PolicyFile_Summary.go(retrievedPeriod, asOfDate, args[0] as String)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 66, column 59
    function action_19 () : void {
      PolicyFile_Billing.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 69, column 60
    function action_22 () : void {
      PolicyFile_Contacts.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 72, column 61
    function action_25 () : void {
      PolicyFile_Documents.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 75, column 59
    function action_28 () : void {
      PolicyFile_History.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 78, column 57
    function action_31 () : void {
      PolicyFile_Notes.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 81, column 70
    function action_34 () : void {
      PolicyFile_Notes.goInMain(retrievedPeriod, asOfDate, args[0] as Activity)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 84, column 64
    function action_37 () : void {
      PolicyFile_Participants.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 51, column 34
    function action_4 () : void {
      PolicySearch.go(error)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 87, column 64
    function action_40 () : void {
      PolicyFile_RiskAnalysis.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 90, column 63
    function action_43 () : void {
      PolicyFile_Reinsurance.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 93, column 62
    function action_46 () : void {
      PolicyFile_Jobs.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 96, column 70
    function action_49 () : void {
      PolicyFile_Jobs.go(retrievedPeriod, asOfDate, args[0] as Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 99, column 68
    function action_52 () : void {
      PolicyFile_DraftPeriodError.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 102, column 56
    function action_55 () : void {
      PolicyFile_PolicyInfo.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 105, column 61
    function action_58 () : void {
      PolicyFile_Locations.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 108, column 57
    function action_61 () : void {
      PolicyFile_Pricing.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 111, column 45
    function action_64 () : void {
      PolicyFile.go(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 114, column 49
    function action_67 () : void {
      JobForward.go(retrievedPeriod.Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 54, column 61
    function action_7 () : void {
      ArchivedLocationGroup.go(retrievedPeriod)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 57, column 58
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Audits.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 60, column 59
    function action_dest_14 () : pcf.api.Destination {
      return pcf.PolicyFile_Summary.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 63, column 70
    function action_dest_17 () : pcf.api.Destination {
      return pcf.PolicyFile_Summary.createDestination(retrievedPeriod, asOfDate, args[0] as String)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 66, column 59
    function action_dest_20 () : pcf.api.Destination {
      return pcf.PolicyFile_Billing.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 69, column 60
    function action_dest_23 () : pcf.api.Destination {
      return pcf.PolicyFile_Contacts.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 72, column 61
    function action_dest_26 () : pcf.api.Destination {
      return pcf.PolicyFile_Documents.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 75, column 59
    function action_dest_29 () : pcf.api.Destination {
      return pcf.PolicyFile_History.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 78, column 57
    function action_dest_32 () : pcf.api.Destination {
      return pcf.PolicyFile_Notes.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 81, column 70
    function action_dest_35 () : pcf.api.Destination {
      return pcf.PolicyFile_Notes.createDestination(retrievedPeriod, asOfDate, args[0] as Activity)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 84, column 64
    function action_dest_38 () : pcf.api.Destination {
      return pcf.PolicyFile_Participants.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 87, column 64
    function action_dest_41 () : pcf.api.Destination {
      return pcf.PolicyFile_RiskAnalysis.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 90, column 63
    function action_dest_44 () : pcf.api.Destination {
      return pcf.PolicyFile_Reinsurance.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 93, column 62
    function action_dest_47 () : pcf.api.Destination {
      return pcf.PolicyFile_Jobs.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 51, column 34
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination(error)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 96, column 70
    function action_dest_50 () : pcf.api.Destination {
      return pcf.PolicyFile_Jobs.createDestination(retrievedPeriod, asOfDate, args[0] as Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 99, column 68
    function action_dest_53 () : pcf.api.Destination {
      return pcf.PolicyFile_DraftPeriodError.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 102, column 56
    function action_dest_56 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 105, column 61
    function action_dest_59 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 108, column 57
    function action_dest_62 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 111, column 45
    function action_dest_65 () : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(retrievedPeriod, asOfDate)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 114, column 49
    function action_dest_68 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(retrievedPeriod.Job)
    }
    
    // 'action' attribute on ForwardCondition at PolicyFileForward.pcf: line 54, column 61
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ArchivedLocationGroup.createDestination(retrievedPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 57, column 58
    function condition_12 () : java.lang.Boolean {
      return "PolicyAudits".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 60, column 59
    function condition_15 () : java.lang.Boolean {
      return "PolicySummary".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 63, column 70
    function condition_18 () : java.lang.Boolean {
      return "PolicySummary with Error".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 66, column 59
    function condition_21 () : java.lang.Boolean {
      return "PolicyBilling".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 69, column 60
    function condition_24 () : java.lang.Boolean {
      return "PolicyContacts".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 72, column 61
    function condition_27 () : java.lang.Boolean {
      return "PolicyDocuments".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 75, column 59
    function condition_30 () : java.lang.Boolean {
      return "PolicyHistory".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 78, column 57
    function condition_33 () : java.lang.Boolean {
      return "PolicyNotes".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 81, column 70
    function condition_36 () : java.lang.Boolean {
      return "PolicyNotes for Activity".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 84, column 64
    function condition_39 () : java.lang.Boolean {
      return "PolicyParticipants".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 87, column 64
    function condition_42 () : java.lang.Boolean {
      return "PolicyRiskAnalysis".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 90, column 63
    function condition_45 () : java.lang.Boolean {
      return "PolicyReinsurance".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 93, column 62
    function condition_48 () : java.lang.Boolean {
      return "PolicyWorkOrders".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 96, column 70
    function condition_51 () : java.lang.Boolean {
      return "PolicyWorkOrders for Job".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 99, column 68
    function condition_54 () : java.lang.Boolean {
      return "PolicyDraftPeriodError".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 102, column 56
    function condition_57 () : java.lang.Boolean {
      return "PolicyInfo".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 51, column 34
    function condition_6 () : java.lang.Boolean {
      return error != null
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 105, column 61
    function condition_60 () : java.lang.Boolean {
      return "PolicyLocations".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 108, column 57
    function condition_63 () : java.lang.Boolean {
      return "PolicyQuote".equals(step)
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 111, column 45
    function condition_66 () : java.lang.Boolean {
      return retrievedPeriod.Promoted
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 114, column 49
    function condition_69 () : java.lang.Boolean {
      return not retrievedPeriod.Promoted
    }
    
    // 'condition' attribute on ForwardCondition at PolicyFileForward.pcf: line 54, column 61
    function condition_9 () : java.lang.Boolean {
      return retrievedPeriod.PolicyTerm.CheckArchived
    }
    
    // 'initialValue' attribute on Variable at PolicyFileForward.pcf: line 28, column 30
    function initialValue_0 () : java.util.Date {
      return java.util.Date.CurrentDate
    }
    
    // 'initialValue' attribute on Variable at PolicyFileForward.pcf: line 33, column 28
    function initialValue_1 () : PolicyPeriod {
      return Policy.retrieveBoundOrLegacyRenewalPeriod(policyNumber, retrieveAsOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyFileForward.pcf: line 38, column 20
    function initialValue_2 () : Date {
      return (retrieveAsOfDate != null and retrievedPeriod?.includes(retrieveAsOfDate) ? retrieveAsOfDate : retrievedPeriod.SliceDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyFileForward.pcf: line 48, column 22
    function initialValue_3 () : String {
      return gw.pcf.policyfile.PolicyFileForwardHelper.validate(retrievedPeriod, policyNumber)
    }
    
    // 'onBeforeForward' attribute on Forward (id=PolicyFileForward) at PolicyFileForward.pcf: line 8, column 30
    function onBeforeForward_71 () : void {
      if(retrievedPeriod != null) gw.api.web.util.SessionUtil.addToPoliciesList(retrievedPeriod)
    }
    
    // 'parent' attribute on Forward (id=PolicyFileForward) at PolicyFileForward.pcf: line 8, column 30
    static function parent_70 (args :  Object[], policyNumber :  String, retrieveAsOfDate :  java.util.Date, retrievedPeriod :  PolicyPeriod, step :  String) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PolicyFileForward {
      return super.CurrentLocation as pcf.PolicyFileForward
    }
    
    property get args () : Object[] {
      return getVariableValue("args", 0) as Object[]
    }
    
    property set args ($arg :  Object[]) {
      setVariableValue("args", 0, $arg)
    }
    
    property get asOfDate () : Date {
      return getVariableValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get error () : String {
      return getVariableValue("error", 0) as String
    }
    
    property set error ($arg :  String) {
      setVariableValue("error", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get retrieveAsOfDate () : java.util.Date {
      return getVariableValue("retrieveAsOfDate", 0) as java.util.Date
    }
    
    property set retrieveAsOfDate ($arg :  java.util.Date) {
      setVariableValue("retrieveAsOfDate", 0, $arg)
    }
    
    property get retrievedPeriod () : PolicyPeriod {
      return getVariableValue("retrievedPeriod", 0) as PolicyPeriod
    }
    
    property set retrievedPeriod ($arg :  PolicyPeriod) {
      setVariableValue("retrievedPeriod", 0, $arg)
    }
    
    property get step () : String {
      return getVariableValue("step", 0) as String
    }
    
    property set step ($arg :  String) {
      setVariableValue("step", 0, $arg)
    }
    
    
  }
  
  
}