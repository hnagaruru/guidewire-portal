package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLineDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLineDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=SmallBusinessType_Input) at BOPLineDV.pcf: line 24, column 47
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      bopLine.SmallBusinessType = (__VALUE_TO_SET as typekey.SmallBusinessType)
    }
    
    // 'initialValue' attribute on Variable at BOPLineDV.pcf: line 13, column 36
    function initialValue_0 () : productmodel.BOPLine {
      return policyLine as BOPLine
    }
    
    // 'onChange' attribute on PostOnChange at BOPLineDV.pcf: line 26, column 115
    function onChange_1 () : void {
      gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages({bopLine}, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=SmallBusinessType_Input) at BOPLineDV.pcf: line 24, column 47
    function valueRoot_4 () : java.lang.Object {
      return bopLine
    }
    
    // 'value' attribute on TypeKeyInput (id=SmallBusinessType_Input) at BOPLineDV.pcf: line 24, column 47
    function value_2 () : typekey.SmallBusinessType {
      return bopLine.SmallBusinessType
    }
    
    property get bopLine () : productmodel.BOPLine {
      return getVariableValue("bopLine", 0) as productmodel.BOPLine
    }
    
    property set bopLine ($arg :  productmodel.BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  
}