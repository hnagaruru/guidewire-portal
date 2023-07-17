package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsInputSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowsInputSet_PolicyPeriodWorkflowExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsInputSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Product = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobType = (__VALUE_TO_SET as typekey.Job)
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 19, column 41
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 24, column 44
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 14, column 65
    function initialValue_0 () : java.util.List<gw.api.productmodel.Product> {
      return gw.api.productmodel.ProductLookup.getAll()
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function valueRange_12 () : java.lang.Object {
      return products
    }
    
    // 'valueRange' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function valueRange_19 () : java.lang.Object {
      return gw.api.web.admin.workflow.JobTypes.getJobTypes()
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 19, column 41
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 19, column 41
    function value_1 () : java.lang.String {
      return searchCriteria.JobNumber
    }
    
    // 'value' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function value_16 () : typekey.Job {
      return searchCriteria.JobType
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 24, column 44
    function value_5 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    // 'value' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function value_9 () : gw.api.productmodel.Product {
      return searchCriteria.Product
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  typekey.Job[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Product_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function verifyValueRange_14 () : void {
      var __valueRangeArg = products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=JobType_Input) at WorkflowsInputSet.PolicyPeriodWorkflow.pcf: line 38, column 32
    function verifyValueRange_21 () : void {
      var __valueRangeArg = gw.api.web.admin.workflow.JobTypes.getJobTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    property get products () : java.util.List<gw.api.productmodel.Product> {
      return getVariableValue("products", 0) as java.util.List<gw.api.productmodel.Product>
    }
    
    property set products ($arg :  java.util.List<gw.api.productmodel.Product>) {
      setVariableValue("products", 0, $arg)
    }
    
    property get searchCriteria () : WorkflowSearchCriteria {
      return getRequireValue("searchCriteria", 0) as WorkflowSearchCriteria
    }
    
    property set searchCriteria ($arg :  WorkflowSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}