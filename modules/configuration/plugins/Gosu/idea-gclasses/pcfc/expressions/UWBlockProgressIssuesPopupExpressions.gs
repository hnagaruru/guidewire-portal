package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UWBlockProgressIssuesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWBlockProgressIssuesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UWBlockProgressIssuesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UWBlockProgressIssuesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextInput (id=ShortDescriptionAndSize_Input) at UWBlockProgressIssuesPopup.pcf: line 53, column 65
    function outputConversion_4 (VALUE :  java.util.List<entity.UWIssue>) : java.lang.String {
      return gw.web.admin.UWBlockProgressIssuesPopupUIHelper.descriptionAndCount(VALUE)
    }
    
    // 'value' attribute on TextInput (id=ShortDescriptionAndSize_Input) at UWBlockProgressIssuesPopup.pcf: line 53, column 65
    function value_5 () : java.util.List<entity.UWIssue> {
      return issue
    }
    
    property get issue () : java.util.List<entity.UWIssue> {
      return getIteratedValue(1) as java.util.List<entity.UWIssue>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UWBlockProgressIssuesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWBlockProgressIssuesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 1
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, jobWizardHelper :  gw.api.web.job.JobWizardHelper, blockingPoint :  UWIssueBlockingPoint, blockingIssues :  entity.UWIssue[]) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=DetailsButton) at UWBlockProgressIssuesPopup.pcf: line 36, column 80
    function action_2 () : void {
      jobWizardHelper.goToRiskAnalysisStep(policyPeriod.Job)
    }
    
    // 'available' attribute on ToolbarButton (id=DetailsButton) at UWBlockProgressIssuesPopup.pcf: line 36, column 80
    function available_1 () : java.lang.Boolean {
      return not policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'label' attribute on Label at UWBlockProgressIssuesPopup.pcf: line 42, column 108
    function label_3 () : java.lang.String {
      return gw.web.admin.UWBlockProgressIssuesPopupUIHelper.headerForBlockingPoint(blockingPoint)
    }
    
    // 'title' attribute on TitleBar (id=PreQuoteIssueTitle) at UWBlockProgressIssuesPopup.pcf: line 30, column 103
    function title_0 () : java.lang.String {
      return gw.web.admin.UWBlockProgressIssuesPopupUIHelper.titleForBlockingPoint(blockingPoint)
    }
    
    // 'value' attribute on InputIterator (id=issues) at UWBlockProgressIssuesPopup.pcf: line 47, column 64
    function value_7 () : java.util.List<entity.UWIssue>[] {
      return blockingIssues.partition(\ u -> u.ShortDescription ).Values.toTypedArray()
    }
    
    override property get CurrentLocation () : pcf.UWBlockProgressIssuesPopup {
      return super.CurrentLocation as pcf.UWBlockProgressIssuesPopup
    }
    
    property get blockingIssues () : entity.UWIssue[] {
      return getVariableValue("blockingIssues", 0) as entity.UWIssue[]
    }
    
    property set blockingIssues ($arg :  entity.UWIssue[]) {
      setVariableValue("blockingIssues", 0, $arg)
    }
    
    property get blockingPoint () : UWIssueBlockingPoint {
      return getVariableValue("blockingPoint", 0) as UWIssueBlockingPoint
    }
    
    property set blockingPoint ($arg :  UWIssueBlockingPoint) {
      setVariableValue("blockingPoint", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}