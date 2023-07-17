package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCovTermValuesPanelSet_PackageCovTermPatternExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCovTermValuesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternCovTermValue) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 23, column 67
    function available_3 () : java.lang.Boolean {
      return formPatternCovTerm.AvailablePackageCovTermValues.Count > 0
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 62, column 64
    function sortValue_4 (formPatternCovTermValue :  entity.FormPatternCovTermValue) : java.lang.Object {
      return formPatternCovTermValue.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 66, column 57
    function sortValue_5 (formPatternCovTermValue :  entity.FormPatternCovTermValue) : java.lang.Object {
      return formPatternCovTermValue.Code
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 55, column 60
    function toRemove_12 (formPatternCovTermValue :  entity.FormPatternCovTermValue) : void {
      formPatternCovTerm.removeFormPatternCovTermValue(formPatternCovTermValue) 
    }
    
    // 'value' attribute on RowIterator at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 55, column 60
    function value_13 () : entity.FormPatternCovTermValue[] {
      return formPatternCovTerm.SelectedCovTermValues
    }
    
    // 'value' attribute on MenuItemIterator (id=formPatternCovTermValues) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 29, column 63
    function value_2 () : gw.api.productmodel.CovTermPack[] {
      return formPatternCovTerm.AvailablePackageCovTermValues
    }
    
    property get formPatternCovTerm () : FormPatternCovTerm {
      return getRequireValue("formPatternCovTerm", 0) as FormPatternCovTerm
    }
    
    property set formPatternCovTerm ($arg :  FormPatternCovTerm) {
      setRequireValue("formPatternCovTerm", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends FormPatternCovTermValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 62, column 64
    function valueRoot_7 () : java.lang.Object {
      return formPatternCovTermValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 62, column 64
    function value_6 () : java.lang.String {
      return formPatternCovTermValue.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 66, column 57
    function value_9 () : java.lang.String {
      return formPatternCovTermValue.Code
    }
    
    property get formPatternCovTermValue () : entity.FormPatternCovTermValue {
      return getIteratedValue(1) as entity.FormPatternCovTermValue
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCovTermValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CovTermPatternValueItem) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 33, column 64
    function action_0 () : void {
      formPatternCovTerm.addPackageCovTermValue(formPatternCovTermValue)
    }
    
    // 'label' attribute on MenuItem (id=CovTermPatternValueItem) at FormPatternCovTermValuesPanelSet.PackageCovTermPattern.pcf: line 33, column 64
    function label_1 () : java.lang.Object {
      return formPatternCovTermValue.DisplayName
    }
    
    property get formPatternCovTermValue () : gw.api.productmodel.CovTermPack {
      return getIteratedValue(1) as gw.api.productmodel.CovTermPack
    }
    
    
  }
  
  
}