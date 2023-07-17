package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BALineCoveragePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BALineCoveragePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BALineCoveragePanelSet.pcf: line 26, column 38
    function def_onEnter_3 (def :  pcf.BALineDV) : void {
      def.onEnter(baLine.Branch)
    }
    
    // 'def' attribute on PanelRef at BALineCoveragePanelSet.pcf: line 26, column 38
    function def_refreshVariables_4 (def :  pcf.BALineDV) : void {
      def.refreshVariables(baLine.Branch)
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 16, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPOwnedLiabGrp")
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 20, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPHiredGrp")
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 24, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return baLine.Pattern.getCoverageCategoryByPublicId("BAPNonownedGrp")
    }
    
    // 'title' attribute on TitleBar at BALineCoveragePanelSet.pcf: line 152, column 44
    function title_103 () : java.lang.String {
      return nonOwnedGroup.DisplayName
    }
    
    // 'title' attribute on TitleBar at BALineCoveragePanelSet.pcf: line 55, column 43
    function title_39 () : java.lang.String {
      return baHiredGroup.DisplayName
    }
    
    // 'title' attribute on TitleBar at BALineCoveragePanelSet.pcf: line 29, column 45
    function title_5 () : java.lang.String {
      return baOwnedLiabCat.DisplayName
    }
    
    property get baHiredGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("baHiredGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set baHiredGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("baHiredGroup", 0, $arg)
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
    }
    
    property get baOwnedLiabCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("baOwnedLiabCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set baOwnedLiabCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("baOwnedLiabCat", 0, $arg)
    }
    
    property get nonOwnedGroup () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("nonOwnedGroup", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set nonOwnedGroup ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("nonOwnedGroup", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends BALineCoveragePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      newState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 61, column 62
    function initialValue_40 () : java.util.List<typekey.Jurisdiction> {
      return baLine.UnusedHiredAutoStates
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 66, column 32
    function initialValue_41 () : Jurisdiction {
      return unusedStates[0]
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 71, column 57
    function initialValue_42 () : gw.api.productmodel.CoveragePattern[] {
      return baHiredGroup.coveragePatternsForEntity(BusinessAutoLine).whereSelectedOrAvailable(baLine, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at BALineCoveragePanelSet.pcf: line 81, column 30
    function sortBy_43 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 126, column 55
    function sortValue_81 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function sortValue_82 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.HiredAutoBasis.Basis
    }
    
    // 'value' attribute on BooleanRadioCell (id=IfAny_Cell) at BALineCoveragePanelSet.pcf: line 139, column 71
    function sortValue_83 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.HiredAutoBasis.IfAnyExposure
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=HiredAutoIterator) at BALineCoveragePanelSet.pcf: line 120, column 53
    function toCreateAndAdd_100 () : entity.BAJurisdiction {
      return baLine.createOrAddHiredAutoJurisdiction(newState)
    }
    
    // 'toRemove' attribute on RowIterator (id=HiredAutoIterator) at BALineCoveragePanelSet.pcf: line 120, column 53
    function toRemove_101 (jurisdiction :  entity.BAJurisdiction) : void {
      baLine.removeAsHiredAutoJurisdiction(jurisdiction)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function valueRange_77 () : java.lang.Object {
      return unusedStates
    }
    
    // 'value' attribute on RowIterator (id=HiredAutoIterator) at BALineCoveragePanelSet.pcf: line 120, column 53
    function value_102 () : entity.BAJurisdiction[] {
      return baLine.HiredAutoJurisdictions
    }
    
    // 'value' attribute on InputIterator (id=BAPHiredGrpIterator) at BALineCoveragePanelSet.pcf: line 78, column 63
    function value_74 () : gw.api.productmodel.CoveragePattern[] {
      return baHiredGroupCoveragePatterns
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function value_75 () : typekey.Jurisdiction {
      return newState
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function verifyValueRangeIsAllowedType_78 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function verifyValueRangeIsAllowedType_78 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateHiredAuto_Input) at BALineCoveragePanelSet.pcf: line 103, column 51
    function verifyValueRange_79 () : void {
      var __valueRangeArg = unusedStates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_78(__valueRangeArg)
    }
    
    property get baHiredGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("baHiredGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set baHiredGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("baHiredGroupCoveragePatterns", 1, $arg)
    }
    
    property get newState () : Jurisdiction {
      return getVariableValue("newState", 1) as Jurisdiction
    }
    
    property set newState ($arg :  Jurisdiction) {
      setVariableValue("newState", 1, $arg)
    }
    
    property get unusedStates () : java.util.List<typekey.Jurisdiction> {
      return getVariableValue("unusedStates", 1) as java.util.List<typekey.Jurisdiction>
    }
    
    property set unusedStates ($arg :  java.util.List<typekey.Jurisdiction>) {
      setVariableValue("unusedStates", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel3ExpressionsImpl extends BALineCoveragePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      newState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 158, column 62
    function initialValue_104 () : java.util.List<typekey.Jurisdiction> {
      return baLine.UnusedNonOwnedStates
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 163, column 32
    function initialValue_105 () : Jurisdiction {
      return unusedStates[0]
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 168, column 57
    function initialValue_106 () : gw.api.productmodel.CoveragePattern[] {
      return nonOwnedGroup.coveragePatternsForEntity(BusinessAutoLine).whereSelectedOrAvailable(baLine, openForEdit)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 223, column 55
    function sortValue_144 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at BALineCoveragePanelSet.pcf: line 229, column 52
    function sortValue_145 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumEmployees
    }
    
    // 'value' attribute on TextCell (id=TotalPartners_Cell) at BALineCoveragePanelSet.pcf: line 235, column 52
    function sortValue_146 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumPartners
    }
    
    // 'value' attribute on TextCell (id=TotalVolunteers_Cell) at BALineCoveragePanelSet.pcf: line 241, column 52
    function sortValue_147 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumVolunteers
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=NonownedIterator) at BALineCoveragePanelSet.pcf: line 217, column 53
    function toCreateAndAdd_163 () : entity.BAJurisdiction {
      return baLine.createOrAddNonOwnedJurisdiction(newState)
    }
    
    // 'toRemove' attribute on RowIterator (id=NonownedIterator) at BALineCoveragePanelSet.pcf: line 217, column 53
    function toRemove_164 (jurisdiction :  entity.BAJurisdiction) : void {
      baLine.removeAsNonOwnedJurisdiction(jurisdiction)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function valueRange_140 () : java.lang.Object {
      return unusedStates
    }
    
    // 'value' attribute on InputIterator (id=BAPNonownedGrpIterator) at BALineCoveragePanelSet.pcf: line 175, column 63
    function value_137 () : gw.api.productmodel.CoveragePattern[] {
      return nonOwnedGroupCoveragePatterns
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function value_138 () : typekey.Jurisdiction {
      return newState
    }
    
    // 'value' attribute on RowIterator (id=NonownedIterator) at BALineCoveragePanelSet.pcf: line 217, column 53
    function value_165 () : entity.BAJurisdiction[] {
      return baLine.NonOwnedJurisdictions
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function verifyValueRangeIsAllowedType_141 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function verifyValueRangeIsAllowedType_141 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SelectStateNonowned_Input) at BALineCoveragePanelSet.pcf: line 196, column 51
    function verifyValueRange_142 () : void {
      var __valueRangeArg = unusedStates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_141(__valueRangeArg)
    }
    
    property get newState () : Jurisdiction {
      return getVariableValue("newState", 1) as Jurisdiction
    }
    
    property set newState ($arg :  Jurisdiction) {
      setVariableValue("newState", 1, $arg)
    }
    
    property get nonOwnedGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("nonOwnedGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set nonOwnedGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("nonOwnedGroupCoveragePatterns", 1, $arg)
    }
    
    property get unusedStates () : java.util.List<typekey.Jurisdiction> {
      return getVariableValue("unusedStates", 1) as java.util.List<typekey.Jurisdiction>
    }
    
    property set unusedStates ($arg :  java.util.List<typekey.Jurisdiction>) {
      setVariableValue("unusedStates", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends BALineCoveragePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BALineCoveragePanelSet.pcf: line 35, column 57
    function initialValue_6 () : gw.api.productmodel.CoveragePattern[] {
      return baOwnedLiabCat.coveragePatternsForEntity(BusinessAutoLine).whereSelectedOrAvailable(baLine, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at BALineCoveragePanelSet.pcf: line 45, column 30
    function sortBy_7 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=baLineLiabCatIterator) at BALineCoveragePanelSet.pcf: line 42, column 63
    function value_38 () : gw.api.productmodel.CoveragePattern[] {
      return baOwnedLiabCatCoveragePatterns
    }
    
    property get baOwnedLiabCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("baOwnedLiabCatCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set baOwnedLiabCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("baOwnedLiabCatCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_46 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_48 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_50 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_52 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_54 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_56 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_60 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_62 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_64 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_66 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_68 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_70 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_onEnter_72 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_69 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_71 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BAHiredGroupInputSet) at BALineCoveragePanelSet.pcf: line 84, column 42
    function def_refreshVariables_73 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends DetailViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function available_87 () : java.lang.Boolean {
      return jurisdiction.HiredAutoBasis.IfAnyExposure == false
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.HiredAutoBasis.Basis = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioCell (id=IfAny_Cell) at BALineCoveragePanelSet.pcf: line 139, column 71
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.HiredAutoBasis.IfAnyExposure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on PostOnChange at BALineCoveragePanelSet.pcf: line 141, column 125
    function onChange_95 () : void {
      if (jurisdiction.HiredAutoBasis.IfAnyExposure) {jurisdiction.HiredAutoBasis.Basis = null}
    }
    
    // 'validationExpression' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function validationExpression_88 () : java.lang.Object {
      return baLine.getCostOfHireValidation(jurisdiction.HiredAutoBasis.Basis, jurisdiction.HiredAutoBasis.IfAnyExposure)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 126, column 55
    function valueRoot_85 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function valueRoot_91 () : java.lang.Object {
      return jurisdiction.HiredAutoBasis
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 126, column 55
    function value_84 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at BALineCoveragePanelSet.pcf: line 134, column 52
    function value_89 () : java.lang.Integer {
      return jurisdiction.HiredAutoBasis.Basis
    }
    
    // 'value' attribute on BooleanRadioCell (id=IfAny_Cell) at BALineCoveragePanelSet.pcf: line 139, column 71
    function value_96 () : java.lang.Boolean {
      return jurisdiction.HiredAutoBasis.IfAnyExposure
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(2) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends DetailViewPanel3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_107 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_109 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_111 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_113 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_115 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_117 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_119 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_121 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_123 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_125 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_127 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_129 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_131 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_133 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_onEnter_135 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_108 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_110 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_112 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_114 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_116 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_118 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_120 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_122 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_124 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_126 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_128 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_130 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_132 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_134 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BANonOwnedGroupInputSet) at BALineCoveragePanelSet.pcf: line 178, column 45
    function def_refreshVariables_136 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends DetailViewPanel3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at BALineCoveragePanelSet.pcf: line 229, column 52
    function defaultSetter_152 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.NonOwnedBasis.NumEmployees = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=TotalPartners_Cell) at BALineCoveragePanelSet.pcf: line 235, column 52
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.NonOwnedBasis.NumPartners = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=TotalVolunteers_Cell) at BALineCoveragePanelSet.pcf: line 241, column 52
    function defaultSetter_160 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.NonOwnedBasis.NumVolunteers = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 223, column 55
    function valueRoot_149 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at BALineCoveragePanelSet.pcf: line 229, column 52
    function valueRoot_153 () : java.lang.Object {
      return jurisdiction.NonOwnedBasis
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at BALineCoveragePanelSet.pcf: line 223, column 55
    function value_148 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at BALineCoveragePanelSet.pcf: line 229, column 52
    function value_151 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumEmployees
    }
    
    // 'value' attribute on TextCell (id=TotalPartners_Cell) at BALineCoveragePanelSet.pcf: line 235, column 52
    function value_155 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumPartners
    }
    
    // 'value' attribute on TextCell (id=TotalVolunteers_Cell) at BALineCoveragePanelSet.pcf: line 241, column 52
    function value_159 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumVolunteers
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(2) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineCoveragePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_10 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_12 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_14 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_16 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_18 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_20 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_24 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_26 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_28 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_30 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_32 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_34 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_36 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_35 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_37 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef (id=BALiabGroupInputSet) at BALineCoveragePanelSet.pcf: line 48, column 41
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, baLine, openForEdit, null)
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}