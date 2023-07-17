package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_JobsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_JobsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_JobsLV.pcf: line 29, column 36
    function sortValue_0 (job :  typekey.Job) : java.lang.Object {
      return job.DisplayName
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternDetail_JobsLV.pcf: line 22, column 33
    function toRemove_4 (job :  typekey.Job) : void {
      formPattern.removeJob(job)
    }
    
    // 'value' attribute on RowIterator at FormPatternDetail_JobsLV.pcf: line 22, column 33
    function value_5 () : typekey.Job[] {
      return formPattern.Jobs
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternDetail_JobsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_JobsLV.pcf: line 29, column 36
    function valueRoot_2 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternDetail_JobsLV.pcf: line 29, column 36
    function value_1 () : java.lang.String {
      return job.DisplayName
    }
    
    property get job () : typekey.Job {
      return getIteratedValue(1) as typekey.Job
    }
    
    
  }
  
  
}