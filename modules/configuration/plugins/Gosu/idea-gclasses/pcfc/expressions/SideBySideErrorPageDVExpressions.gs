package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideErrorPageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideErrorPageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideErrorPageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends SideBySideErrorPageDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Errors_Input) at SideBySideErrorPageDV.pcf: line 57, column 39
    function valueRoot_9 () : java.lang.Object {
      return periodInfo
    }
    
    // 'value' attribute on TextInput (id=Errors_Input) at SideBySideErrorPageDV.pcf: line 57, column 39
    function value_8 () : java.lang.String {
      return periodInfo.ErrorText
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideErrorPageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SideBySideErrorPageDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=branchName_Input) at SideBySideErrorPageDV.pcf: line 43, column 47
    function valueRoot_5 () : java.lang.Object {
      return periodInfo.Period
    }
    
    // 'value' attribute on TextInput (id=branchName_Input) at SideBySideErrorPageDV.pcf: line 43, column 47
    function value_4 () : java.lang.String {
      return periodInfo.Period.BranchName
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideErrorPageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideErrorPageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideErrorPageDV.pcf: line 29, column 33
    function colspan_3 () : java.lang.Integer {
      return columnNumber
    }
    
    // 'columns' attribute on Layout at SideBySideErrorPageDV.pcf: line 25, column 21
    function columns_2 () : java.lang.Double {
      return columnNumber
    }
    
    // 'initialValue' attribute on Variable at SideBySideErrorPageDV.pcf: line 16, column 19
    function initialValue_0 () : int {
      return 1
    }
    
    // 'initialValue' attribute on Variable at SideBySideErrorPageDV.pcf: line 20, column 19
    function initialValue_1 () : int {
      return (maxColsInPeriod * sideHelper.PeriodInfos.Count) + 1
    }
    
    // 'value' attribute on InputIterator (id=periodInfoIter1) at SideBySideErrorPageDV.pcf: line 38, column 59
    function value_7 () : gw.job.sxs.SideBySidePolicyPeriodInfo[] {
      return sideHelper.PeriodInfos
    }
    
    property get columnNumber () : int {
      return getVariableValue("columnNumber", 0) as java.lang.Integer
    }
    
    property set columnNumber ($arg :  int) {
      setVariableValue("columnNumber", 0, $arg)
    }
    
    property get jobWizHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizHelper", 0, $arg)
    }
    
    property get maxColsInPeriod () : int {
      return getVariableValue("maxColsInPeriod", 0) as java.lang.Integer
    }
    
    property set maxColsInPeriod ($arg :  int) {
      setVariableValue("maxColsInPeriod", 0, $arg)
    }
    
    property get sideHelper () : gw.pcf.sidebyside.SideBySideScreenHelper {
      return getRequireValue("sideHelper", 0) as gw.pcf.sidebyside.SideBySideScreenHelper
    }
    
    property set sideHelper ($arg :  gw.pcf.sidebyside.SideBySideScreenHelper) {
      setRequireValue("sideHelper", 0, $arg)
    }
    
    
  }
  
  
}