package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericClauseNonExistenceFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function action_0 () : void {
      FormClausePatternSelectionPopup.push(formPattern)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function action_dest_1 () : pcf.api.Destination {
      return pcf.FormClausePatternSelectionPopup.createDestination(formPattern)
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.ClausePattern = (__VALUE_TO_SET as gw.api.productmodel.ClausePattern)
    }
    
    // 'onPick' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function onPick_2 (PickedValue :  gw.api.productmodel.ClausePattern) : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.FormPatternCovTerm)
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function valueRoot_5 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseNonExistenceForm.pcf: line 22, column 57
    function value_3 () : gw.api.productmodel.ClausePattern {
      return formPattern.ClausePattern
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}