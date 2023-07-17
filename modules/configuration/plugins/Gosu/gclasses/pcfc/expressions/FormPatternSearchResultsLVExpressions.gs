package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternSearchResultsLV.pcf: line 32, column 33
    function sortValue_0 (formPat :  entity.FormPattern) : java.lang.Object {
      return formPat.Code
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at FormPatternSearchResultsLV.pcf: line 37, column 39
    function sortValue_1 (formPat :  entity.FormPattern) : java.lang.Object {
      return formPat.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at FormPatternSearchResultsLV.pcf: line 42, column 36
    function sortValue_2 (formPat :  entity.FormPattern) : java.lang.Object {
      return formPat.Edition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternSearchResultsLV.pcf: line 48, column 40
    function sortValue_3 (formPat :  entity.FormPattern) : java.lang.Object {
      return formPat.Description
    }
    
    // 'value' attribute on TextCell (id=GroupCode_Cell) at FormPatternSearchResultsLV.pcf: line 53, column 46
    function sortValue_4 (formPat :  entity.FormPattern) : java.lang.Object {
      return formPat.InternalGroupCode
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternSearchResultsLV.pcf: line 23, column 78
    function toRemove_23 (formPat :  entity.FormPattern) : void {
      gw.api.admin.FormPatternUtil.deleteFormPattern(formPat)
    }
    
    // 'value' attribute on RowIterator at FormPatternSearchResultsLV.pcf: line 23, column 78
    function value_24 () : gw.api.database.IQueryBeanResult<entity.FormPattern> {
      return formPatterns
    }
    
    property get formPatterns () : gw.api.database.IQueryBeanResult<FormPattern> {
      return getRequireValue("formPatterns", 0) as gw.api.database.IQueryBeanResult<FormPattern>
    }
    
    property set formPatterns ($arg :  gw.api.database.IQueryBeanResult<FormPattern>) {
      setRequireValue("formPatterns", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at FormPatternSearchResultsLV.pcf: line 32, column 33
    function action_5 () : void {
      FormPatternDetail.go(formPat)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at FormPatternSearchResultsLV.pcf: line 32, column 33
    function action_dest_6 () : pcf.api.Destination {
      return pcf.FormPatternDetail.createDestination(formPat)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at FormPatternSearchResultsLV.pcf: line 23, column 78
    function checkBoxVisible_22 () : java.lang.Boolean {
      return perm.System.formpatedit
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternSearchResultsLV.pcf: line 32, column 33
    function valueRoot_8 () : java.lang.Object {
      return formPat
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at FormPatternSearchResultsLV.pcf: line 37, column 39
    function value_10 () : java.lang.String {
      return formPat.FormNumber
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at FormPatternSearchResultsLV.pcf: line 42, column 36
    function value_13 () : java.lang.String {
      return formPat.Edition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternSearchResultsLV.pcf: line 48, column 40
    function value_16 () : java.lang.String {
      return formPat.Description
    }
    
    // 'value' attribute on TextCell (id=GroupCode_Cell) at FormPatternSearchResultsLV.pcf: line 53, column 46
    function value_19 () : java.lang.String {
      return formPat.InternalGroupCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternSearchResultsLV.pcf: line 32, column 33
    function value_7 () : java.lang.String {
      return formPat.Code
    }
    
    property get formPat () : entity.FormPattern {
      return getIteratedValue(1) as entity.FormPattern
    }
    
    
  }
  
  
}