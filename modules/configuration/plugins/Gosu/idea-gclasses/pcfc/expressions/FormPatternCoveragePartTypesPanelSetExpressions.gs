package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCoveragePartTypesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCoveragePartTypesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=FormPatternCoveragePartTypesLV) at FormPatternCoveragePartTypesPanelSet.pcf: line 18, column 29
    function def_onEnter_4 (def :  pcf.FormPatternCoveragePartTypesLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on ListViewInput (id=FormPatternCoveragePartTypesLV) at FormPatternCoveragePartTypesPanelSet.pcf: line 18, column 29
    function def_refreshVariables_5 (def :  pcf.FormPatternCoveragePartTypesLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'sortBy' attribute on IteratorSort at FormPatternCoveragePartTypesPanelSet.pcf: line 32, column 34
    function sortBy_0 (coveragePartType :  typekey.CoveragePartType) : java.lang.Object {
      return coveragePartType.DisplayName
    }
    
    // 'value' attribute on AddMenuItemIterator at FormPatternCoveragePartTypesPanelSet.pcf: line 29, column 56
    function value_3 () : typekey.CoveragePartType[] {
      return formPattern.AvailableCoveragePartTypes
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCoveragePartTypesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=CoveragePartTypeItem) at FormPatternCoveragePartTypesPanelSet.pcf: line 37, column 87
    function label_1 () : java.lang.Object {
      return coveragePartType.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=CoveragePartTypeItem) at FormPatternCoveragePartTypesPanelSet.pcf: line 37, column 87
    function toCreateAndAdd_2 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addCoveragePartType(coveragePartType)
    }
    
    property get coveragePartType () : typekey.CoveragePartType {
      return getIteratedValue(1) as typekey.CoveragePartType
    }
    
    
  }
  
  
}