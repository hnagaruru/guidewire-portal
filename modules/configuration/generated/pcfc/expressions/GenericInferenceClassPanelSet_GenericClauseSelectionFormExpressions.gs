package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericClauseSelectionFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCovTermMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 79, column 90
    function action_20 () : void {
      FormPatternCovTermPopup.push(formPattern)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 115, column 112
    function action_30 () : void {
      FormPatternCoverablePropertyPopup.push(formPattern)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 40, column 57
    function action_8 () : void {
      FormClausePatternSelectionPopup.push(formPattern)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCovTermMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 79, column 90
    function action_dest_21 () : pcf.api.Destination {
      return pcf.FormPatternCovTermPopup.createDestination(formPattern)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 115, column 112
    function action_dest_31 () : pcf.api.Destination {
      return pcf.FormPatternCoverablePropertyPopup.createDestination(formPattern)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 40, column 57
    function action_dest_9 () : pcf.api.Destination {
      return pcf.FormClausePatternSelectionPopup.createDestination(formPattern)
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternCovTerm) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 59, column 65
    function available_23 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCovTerms.Count > 0
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternCoverableProperty) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 98, column 65
    function available_33 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCoverableProperties.Count > 0
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 51, column 50
    function def_onEnter_24 (def :  pcf.FormPatternCovTermsLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 90, column 59
    function def_onEnter_34 (def :  pcf.FormPatternCoverablePropertyLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 51, column 50
    function def_refreshVariables_25 (def :  pcf.FormPatternCovTermsLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 90, column 59
    function def_refreshVariables_35 (def :  pcf.FormPatternCoverablePropertyLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 40, column 57
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.ClausePattern = (__VALUE_TO_SET as gw.api.productmodel.ClausePattern)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 30, column 51
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.PatternExistsOnAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 14, column 92
    function initialValue_0 () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return formPattern.PolicyLinePatternRange
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 18, column 19
    function initialValue_1 () : int {
      return 10
    }
    
    // 'onChange' attribute on PostOnChange at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 42, column 77
    function onChange_7 () : void {
      formPattern.clearDependentClausePatternSelections()
    }
    
    // 'onPick' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 40, column 57
    function onPick_10 (PickedValue :  gw.api.productmodel.ClausePattern) : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.FormPatternCovTerm)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=FormPatternCovTermMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 79, column 90
    function onPick_22 (PickedValue :  gw.api.productmodel.CovTermPattern) : void {
      formPattern.addCovTermPattern(PickedValue)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 115, column 112
    function onPick_32 (PickedValue :  gw.lang.reflect.IPropertyInfo) : void {
      formPattern.addFormPatternCoverableProperty(PickedValue)
    }
    
    // 'sortBy' attribute on IteratorSort at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 67, column 32
    function sortBy_15 (formPatternCovTerm :  gw.api.productmodel.CovTermPattern) : java.lang.Object {
      return formPatternCovTerm.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 30, column 51
    function valueRoot_5 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 40, column 57
    function value_11 () : gw.api.productmodel.ClausePattern {
      return formPattern.ClausePattern
    }
    
    // 'value' attribute on MenuItemIterator (id=formPatternCovTerms) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 64, column 64
    function value_18 () : gw.api.productmodel.CovTermPattern[] {
      return getLimitedNumberOfCovTermPatterns(formPattern.AvailableFormPatternCovTerms)
    }
    
    // 'value' attribute on MenuItemIterator (id=FormPatternCoverablePropertyIterator) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 103, column 59
    function value_28 () : gw.lang.reflect.IPropertyInfo[] {
      return getLimitedNumberOfCoverableProperties(formPattern.AvailableFormPatternCoverableProperties)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 30, column 51
    function value_3 () : java.lang.Boolean {
      return formPattern.PatternExistsOnAll
    }
    
    // 'visible' attribute on PickerMenuItem (id=FormPatternCovTermMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 79, column 90
    function visible_19 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCovTerms.Count > maxCovTerms
    }
    
    // 'visible' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 115, column 112
    function visible_29 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCoverableProperties.Count > maxCoverableProperties
    }
    
    // 'visible' attribute on PanelSet at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 47, column 83
    function visible_36 () : java.lang.Boolean {
      return formPattern.ReissueOnChange and formPattern.ClausePattern != null
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get maxCovTerms () : int {
      return getVariableValue("maxCovTerms", 0) as java.lang.Integer
    }
    
    property set maxCovTerms ($arg :  int) {
      setVariableValue("maxCovTerms", 0, $arg)
    }
    
    property get maxCoverableProperties () : int {
      return getVariableValue("maxCoverableProperties", 0) as java.lang.Integer
    }
    
    property set maxCoverableProperties ($arg :  int) {
      setVariableValue("maxCoverableProperties", 0, $arg)
    }
    
    property get policyLineRange () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return getVariableValue("policyLineRange", 0) as List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>
    }
    
    property set policyLineRange ($arg :  List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>) {
      setVariableValue("policyLineRange", 0, $arg)
    }
    
    function getLimitedNumberOfCovTermPatterns(covTermPatterns: gw.api.productmodel.CovTermPattern[]): gw.api.productmodel.CovTermPattern[] {
                        return covTermPatterns.Count > maxCovTerms ? covTermPatterns.toList().subList(0, maxCovTerms).toTypedArray() : covTermPatterns
                    }
    
                    function getLimitedNumberOfCoverableProperties(propInfos: gw.lang.reflect.IPropertyInfo[]): gw.lang.reflect.IPropertyInfo[] {
                        return propInfos.Count > maxCoverableProperties ? propInfos.toList().subList(0, maxCoverableProperties).toTypedArray() : propInfos
                    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends GenericInferenceClassPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=FormPatternCoverablePropertyItem) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 107, column 60
    function action_26 () : void {
      formPattern.addFormPatternCoverableProperty(formPatternCoverableProperty)
    }
    
    // 'label' attribute on MenuItem (id=FormPatternCoverablePropertyItem) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 107, column 60
    function label_27 () : java.lang.Object {
      return formPatternCoverableProperty.Name
    }
    
    property get formPatternCoverableProperty () : gw.lang.reflect.IPropertyInfo {
      return getIteratedValue(1) as gw.lang.reflect.IPropertyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GenericInferenceClassPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CovTermPatternItem) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 71, column 57
    function action_16 () : void {
      formPattern.addCovTermPattern(formPatternCovTerm)
    }
    
    // 'label' attribute on MenuItem (id=CovTermPatternItem) at GenericInferenceClassPanelSet.GenericClauseSelectionForm.pcf: line 71, column 57
    function label_17 () : java.lang.Object {
      return formPatternCovTerm.DisplayName
    }
    
    property get formPatternCovTerm () : gw.api.productmodel.CovTermPattern {
      return getIteratedValue(1) as gw.api.productmodel.CovTermPattern
    }
    
    
  }
  
  
}