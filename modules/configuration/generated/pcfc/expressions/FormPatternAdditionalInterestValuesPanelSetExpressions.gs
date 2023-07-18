package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInterestValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternAdditionalInterestValuesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInterestValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternAdditionalInterestValuesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternAdditionalInterestValue) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 23, column 67
    function available_3 () : java.lang.Boolean {
      return formPattern.AvailableAdditionalInterests.Count > 0
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 60, column 63
    function sortValue_4 (additionalInterestType :  typekey.AdditionalInterestType) : java.lang.Object {
      return additionalInterestType.Description
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternAdditionalInterestValuesPanelSet.pcf: line 53, column 60
    function toRemove_8 (additionalInterestType :  typekey.AdditionalInterestType) : void {
      formPattern.removeAdditionalInterestType(additionalInterestType) 
    }
    
    // 'value' attribute on AddMenuItemIterator (id=formPatternAdditionalInterestValues) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 29, column 62
    function value_2 () : typekey.AdditionalInterestType[] {
      return formPattern.AvailableAdditionalInterests
    }
    
    // 'value' attribute on RowIterator at FormPatternAdditionalInterestValuesPanelSet.pcf: line 53, column 60
    function value_9 () : typekey.AdditionalInterestType[] {
      return formPattern.AdditionalInterestTypes
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInterestValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends FormPatternAdditionalInterestValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 60, column 63
    function valueRoot_6 () : java.lang.Object {
      return additionalInterestType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 60, column 63
    function value_5 () : java.lang.String {
      return additionalInterestType.Description
    }
    
    property get additionalInterestType () : typekey.AdditionalInterestType {
      return getIteratedValue(1) as typekey.AdditionalInterestType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternAdditionalInterestValuesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternAdditionalInterestValuesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AdditionalInterestPatternValueItem) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 34, column 63
    function label_0 () : java.lang.Object {
      return additionalInterestType.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AdditionalInterestPatternValueItem) at FormPatternAdditionalInterestValuesPanelSet.pcf: line 34, column 63
    function toCreateAndAdd_1 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addAdditionalInterestType(additionalInterestType)
    }
    
    property get additionalInterestType () : typekey.AdditionalInterestType {
      return getIteratedValue(1) as typekey.AdditionalInterestType
    }
    
    
  }
  
  
}