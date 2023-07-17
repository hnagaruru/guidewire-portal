package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInsuredValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternAdditionalInsuredValuesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInsuredValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternAdditionalInsuredValuesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternAdditionalInsuredValue) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 23, column 67
    function available_3 () : java.lang.Boolean {
      return formPattern.AvailableAdditionalInsureds.Count > 0
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 60, column 62
    function sortValue_4 (additionalInsuredType :  typekey.AdditionalInsuredType) : java.lang.Object {
      return additionalInsuredType.Description
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 53, column 59
    function toRemove_8 (additionalInsuredType :  typekey.AdditionalInsuredType) : void {
      formPattern.removeAdditionalInsuredType(additionalInsuredType) 
    }
    
    // 'value' attribute on AddMenuItemIterator (id=formPatternAdditionalInsuredValues) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 29, column 61
    function value_2 () : typekey.AdditionalInsuredType[] {
      return formPattern.AvailableAdditionalInsureds
    }
    
    // 'value' attribute on RowIterator at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 53, column 59
    function value_9 () : typekey.AdditionalInsuredType[] {
      return formPattern.AdditionalInsuredTypes
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInsuredValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends FormPatternAdditionalInsuredValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 60, column 62
    function valueRoot_6 () : java.lang.Object {
      return additionalInsuredType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 60, column 62
    function value_5 () : java.lang.String {
      return additionalInsuredType.Description
    }
    
    property get additionalInsuredType () : typekey.AdditionalInsuredType {
      return getIteratedValue(1) as typekey.AdditionalInsuredType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInsuredValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternAdditionalInsuredValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AdditionalInsuredPatternValueItem) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 34, column 62
    function label_0 () : java.lang.Object {
      return additionalInsuredType.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AdditionalInsuredPatternValueItem) at FormPatternAdditionalInsuredValuesPanelSet.pcf: line 34, column 62
    function toCreateAndAdd_1 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addAdditionalInsuredType(additionalInsuredType)
    }
    
    property get additionalInsuredType () : typekey.AdditionalInsuredType {
      return getIteratedValue(1) as typekey.AdditionalInsuredType
    }
    
    
  }
  
  
}