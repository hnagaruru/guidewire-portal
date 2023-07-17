package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericCovTermSelectionFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 97, column 114
    function action_38 () : void {
      FormPatternCoverablePropertyPopup.push(formPattern)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 41, column 57
    function action_7 () : void {
      FormClausePatternSelectionPopup.push(formPattern)
    }
    
    // 'action' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 97, column 114
    function action_dest_39 () : pcf.api.Destination {
      return pcf.FormPatternCoverablePropertyPopup.createDestination(formPattern)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 41, column 57
    function action_dest_8 () : pcf.api.Destination {
      return pcf.FormClausePatternSelectionPopup.createDestination(formPattern)
    }
    
    // 'available' attribute on ToolbarButton (id=AddFormPatternCoverableProperty) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 80, column 67
    function available_41 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCoverableProperties.Count > 0
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_onEnter_24 (def :  pcf.FormPatternCovTermValuesPanelSet_OptionCovTermPattern) : void {
      def.onEnter(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_onEnter_26 (def :  pcf.FormPatternCovTermValuesPanelSet_PackageCovTermPattern) : void {
      def.onEnter(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_onEnter_28 (def :  pcf.FormPatternCovTermValuesPanelSet_TypekeyCovTermPattern) : void {
      def.onEnter(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_onEnter_30 (def :  pcf.FormPatternCovTermValuesPanelSet_default) : void {
      def.onEnter(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 72, column 61
    function def_onEnter_42 (def :  pcf.FormPatternCoverablePropertyLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_refreshVariables_25 (def :  pcf.FormPatternCovTermValuesPanelSet_OptionCovTermPattern) : void {
      def.refreshVariables(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_refreshVariables_27 (def :  pcf.FormPatternCovTermValuesPanelSet_PackageCovTermPattern) : void {
      def.refreshVariables(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_refreshVariables_29 (def :  pcf.FormPatternCovTermValuesPanelSet_TypekeyCovTermPattern) : void {
      def.refreshVariables(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function def_refreshVariables_31 (def :  pcf.FormPatternCovTermValuesPanelSet_default) : void {
      def.refreshVariables(getSelectedFormPatternCovTerm())
    }
    
    // 'def' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 72, column 61
    function def_refreshVariables_43 (def :  pcf.FormPatternCoverablePropertyLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 41, column 57
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.ClausePattern = (__VALUE_TO_SET as gw.api.productmodel.ClausePattern)
    }
    
    // 'value' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.SelectedCovTerm = (__VALUE_TO_SET as gw.api.productmodel.CovTermPattern)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 31, column 51
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.PatternExistsOnAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 14, column 19
    function initialValue_0 () : int {
      return 10
    }
    
    // 'mode' attribute on PanelRef at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 65, column 51
    function mode_32 () : java.lang.Object {
      return formPattern.SelectedCovTermType
    }
    
    // 'onChange' attribute on PostOnChange at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 43, column 77
    function onChange_6 () : void {
      formPattern.clearDependentClausePatternSelections()
    }
    
    // 'onPick' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 97, column 114
    function onPick_40 (PickedValue :  gw.lang.reflect.IPropertyInfo) : void {
      formPattern.addFormPatternCoverableProperty(PickedValue)
    }
    
    // 'onPick' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 41, column 57
    function onPick_9 (PickedValue :  gw.api.productmodel.ClausePattern) : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.FormPatternCovTerm)
    }
    
    // 'optionLabel' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function optionLabel_18 (VALUE :  gw.api.productmodel.CovTermPattern) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Java.TextValueWidget.NoneSelected") : VALUE.Name
    }
    
    // 'valueRange' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function valueRange_19 () : java.lang.Object {
      return formPattern.ClausePattern.CovTerms.sortBy(\ c -> c.Priority)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 31, column 51
    function valueRoot_4 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on PickerInput (id=ClausePatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 41, column 57
    function value_10 () : gw.api.productmodel.ClausePattern {
      return formPattern.ClausePattern
    }
    
    // 'value' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function value_15 () : gw.api.productmodel.CovTermPattern {
      return formPattern.SelectedCovTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=PatternExists_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 31, column 51
    function value_2 () : java.lang.Boolean {
      return formPattern.PatternExistsOnAll
    }
    
    // 'value' attribute on MenuItemIterator (id=FormPatternCoverablePropertyIterator) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 85, column 61
    function value_36 () : gw.lang.reflect.IPropertyInfo[] {
      return getLimitedNumberOfCoverableProperties(formPattern.AvailableFormPatternCoverableProperties)
    }
    
    // 'valueRange' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.productmodel.CovTermPattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function verifyValueRange_21 () : void {
      var __valueRangeArg = formPattern.ClausePattern.CovTerms.sortBy(\ c -> c.Priority)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=CovTermPatternSelection_Input) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 55, column 55
    function visible_14 () : java.lang.Boolean {
      return formPattern.ClausePattern != null
    }
    
    // 'visible' attribute on PanelSet at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 62, column 93
    function visible_33 () : java.lang.Boolean {
      return formPattern.ClausePattern != null and formPattern.SelectedCovTerm != null
    }
    
    // 'visible' attribute on PickerMenuItem (id=FormPatternCoverablePropertyMore) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 97, column 114
    function visible_37 () : java.lang.Boolean {
      return formPattern.AvailableFormPatternCoverableProperties.Count > maxCoverableProperties
    }
    
    // 'visible' attribute on PanelSet at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 68, column 85
    function visible_44 () : java.lang.Boolean {
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
    
    function getLimitedNumberOfCovTermPatterns(covTermPatterns : gw.api.productmodel.CovTermPattern[]) : gw.api.productmodel.CovTermPattern[] {
      return covTermPatterns.Count > maxCovTerms ? covTermPatterns.toList().subList(0, maxCovTerms).toTypedArray() : covTermPatterns
    }
    
    function getLimitedNumberOfCoverableProperties(propInfos : gw.lang.reflect.IPropertyInfo[]) : gw.lang.reflect.IPropertyInfo[] {
      return propInfos.Count > maxCoverableProperties ? propInfos.toList().subList(0, maxCoverableProperties).toTypedArray() : propInfos
    }
    
    function getSelectedFormPatternCovTerm() : FormPatternCovTerm {
      return (formPattern.FormPatternCovTerms != null and  formPattern.FormPatternCovTerms.Count == 1) ? formPattern.FormPatternCovTerms[0] : null
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GenericInferenceClassPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=FormPatternCoverablePropertyItem) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 89, column 62
    function action_34 () : void {
      formPattern.addFormPatternCoverableProperty(formPatternCoverableProperty)
    }
    
    // 'label' attribute on MenuItem (id=FormPatternCoverablePropertyItem) at GenericInferenceClassPanelSet.GenericCovTermSelectionForm.pcf: line 89, column 62
    function label_35 () : java.lang.Object {
      return formPatternCoverableProperty.Name
    }
    
    property get formPatternCoverableProperty () : gw.lang.reflect.IPropertyInfo {
      return getIteratedValue(1) as gw.lang.reflect.IPropertyInfo
    }
    
    
  }
  
  
}