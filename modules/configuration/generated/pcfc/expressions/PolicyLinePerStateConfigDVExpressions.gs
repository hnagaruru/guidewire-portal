package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLinePerStateConfigDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLinePerStateConfigDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLinePerStateConfigDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PolicyLinePerStateConfigDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at PolicyLinePerStateConfigDV.pcf: line 75, column 46
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      officialID.OfficialIDValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at PolicyLinePerStateConfigDV.pcf: line 75, column 46
    function label_20 () : java.lang.Object {
      return officialID.OfficialIDInsuredAndType
    }
    
    // 'validationExpression' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at PolicyLinePerStateConfigDV.pcf: line 75, column 46
    function validationExpression_19 () : java.lang.Object {
      return officialID.validateValue()
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at PolicyLinePerStateConfigDV.pcf: line 75, column 46
    function valueRoot_23 () : java.lang.Object {
      return officialID
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at PolicyLinePerStateConfigDV.pcf: line 75, column 46
    function value_21 () : java.lang.String {
      return officialID.OfficialIDValue
    }
    
    property get officialID () : entity.OfficialID {
      return getIteratedValue(1) as entity.OfficialID
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLinePerStateConfigDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends PolicyLinePerStateConfigDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyLinePerStateConfigDV.pcf: line 101, column 49
    function def_onEnter_34 (def :  pcf.WCModifiersInputSet) : void {
      def.onEnter(gw.pcf.policyfile.PolicyLinePerStateConfigUIHelper.getSplitModifiers(allModifierVersions, ratingPeriod.Start, ratingPeriod.End), wcLine.Branch)
    }
    
    // 'def' attribute on InputSetRef at PolicyLinePerStateConfigDV.pcf: line 101, column 49
    function def_refreshVariables_35 (def :  pcf.WCModifiersInputSet) : void {
      def.refreshVariables(gw.pcf.policyfile.PolicyLinePerStateConfigUIHelper.getSplitModifiers(allModifierVersions, ratingPeriod.Start, ratingPeriod.End), wcLine.Branch)
    }
    
    // 'label' attribute on Label at PolicyLinePerStateConfigDV.pcf: line 98, column 49
    function label_32 () : java.lang.String {
      return DisplayKey.get("Web.Policy.WC.Period", ratingPeriod.Number)
    }
    
    // 'visible' attribute on Label at PolicyLinePerStateConfigDV.pcf: line 98, column 49
    function visible_31 () : java.lang.Boolean {
      return ratingPeriods.Count > 1
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(1) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLinePerStateConfigDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLinePerStateConfigDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextInput (id=Period_Input) at PolicyLinePerStateConfigDV.pcf: line 52, column 88
    function label_9 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.WC.Period", period.Number)
    }
    
    // 'value' attribute on TextInput (id=Period_Input) at PolicyLinePerStateConfigDV.pcf: line 52, column 88
    function value_10 () : java.lang.String {
      return "${period.Start.ShortFormat} - ${period.End.ShortFormat}"
    }
    
    property get period () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(1) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/PolicyLinePerStateConfigDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLinePerStateConfigDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyLinePerStateConfigDV.pcf: line 57, column 65
    function def_onEnter_15 (def :  pcf.WCDeductiblesInputSet) : void {
      def.onEnter(jurisdiction)
    }
    
    // 'def' attribute on InputSetRef (id=UnsplitModifiers) at PolicyLinePerStateConfigDV.pcf: line 88, column 32
    function def_onEnter_29 (def :  pcf.WCModifiersInputSet) : void {
      def.onEnter(gw.pcf.policyfile.PolicyLinePerStateConfigUIHelper.getUnsplitModifiers(ratingPeriods, allModifierVersions), wcLine.Branch)
    }
    
    // 'def' attribute on InputSetRef at PolicyLinePerStateConfigDV.pcf: line 57, column 65
    function def_refreshVariables_16 (def :  pcf.WCDeductiblesInputSet) : void {
      def.refreshVariables(jurisdiction)
    }
    
    // 'def' attribute on InputSetRef (id=UnsplitModifiers) at PolicyLinePerStateConfigDV.pcf: line 88, column 32
    function def_refreshVariables_30 (def :  pcf.WCModifiersInputSet) : void {
      def.refreshVariables(gw.pcf.policyfile.PolicyLinePerStateConfigUIHelper.getUnsplitModifiers(ratingPeriods, allModifierVersions), wcLine.Branch)
    }
    
    // 'value' attribute on DateInput (id=AnniversaryDate_Input) at PolicyLinePerStateConfigDV.pcf: line 41, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      jurisdiction.AnniversaryDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at PolicyLinePerStateConfigDV.pcf: line 18, column 28
    function initialValue_0 () : OfficialID[] {
      return jurisdiction != null ? wcLine.Branch.getNamedInsuredOfficialIDsForState(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State)): null
    }
    
    // 'initialValue' attribute on Variable at PolicyLinePerStateConfigDV.pcf: line 22, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return wcLine.Pattern.getCoverageCategoryByPublicId("WorkersCompStateGrp")
    }
    
    // 'initialValue' attribute on Variable at PolicyLinePerStateConfigDV.pcf: line 27, column 55
    function initialValue_2 () : java.util.List<entity.WCModifier> {
      return jurisdiction.AllModifierVersions
    }
    
    // 'initialValue' attribute on Variable at PolicyLinePerStateConfigDV.pcf: line 32, column 69
    function initialValue_3 () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return jurisdiction.RatingPeriods
    }
    
    // 'requestValidationExpression' attribute on DateInput (id=AnniversaryDate_Input) at PolicyLinePerStateConfigDV.pcf: line 41, column 46
    function requestValidationExpression_4 (VALUE :  java.util.Date) : java.lang.Object {
      return gw.pcf.policyfile.PolicyLinePerStateConfigUIHelper.validateAnniversaryDate(jurisdiction, VALUE)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLinePerStateConfigDV.pcf: line 68, column 26
    function sortBy_18 (officialID :  entity.OfficialID) : java.lang.Object {
      return officialID.DisplayName
    }
    
    // 'value' attribute on DateInput (id=AnniversaryDate_Input) at PolicyLinePerStateConfigDV.pcf: line 41, column 46
    function valueRoot_7 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on InputIterator (id=RatingPeriodsIterator) at PolicyLinePerStateConfigDV.pcf: line 48, column 55
    function value_13 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.Count > 1 ? ratingPeriods.toTypedArray() : new gw.lob.wc.rating.WCRatingPeriod[0]
    }
    
    // 'value' attribute on InputIterator (id=officialIDs) at PolicyLinePerStateConfigDV.pcf: line 65, column 41
    function value_27 () : entity.OfficialID[] {
      return namedInsuredOfficialIDs
    }
    
    // 'value' attribute on InputIterator (id=SplitModifiers) at PolicyLinePerStateConfigDV.pcf: line 94, column 55
    function value_36 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.toTypedArray()
    }
    
    // 'value' attribute on DateInput (id=AnniversaryDate_Input) at PolicyLinePerStateConfigDV.pcf: line 41, column 46
    function value_5 () : java.util.Date {
      return jurisdiction.AnniversaryDate
    }
    
    // 'visible' attribute on InputSetRef at PolicyLinePerStateConfigDV.pcf: line 57, column 65
    function visible_14 () : java.lang.Boolean {
      return not jurisdiction.VersionList.Coverages.Empty
    }
    
    // 'visible' attribute on Label at PolicyLinePerStateConfigDV.pcf: line 60, column 57
    function visible_17 () : java.lang.Boolean {
      return namedInsuredOfficialIDs.Count > 0
    }
    
    // 'visible' attribute on Label at PolicyLinePerStateConfigDV.pcf: line 85, column 53
    function visible_28 () : java.lang.Boolean {
      return allModifierVersions.Count > 0
    }
    
    property get allModifierVersions () : java.util.List<entity.WCModifier> {
      return getVariableValue("allModifierVersions", 0) as java.util.List<entity.WCModifier>
    }
    
    property set allModifierVersions ($arg :  java.util.List<entity.WCModifier>) {
      setVariableValue("allModifierVersions", 0, $arg)
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get namedInsuredOfficialIDs () : OfficialID[] {
      return getVariableValue("namedInsuredOfficialIDs", 0) as OfficialID[]
    }
    
    property set namedInsuredOfficialIDs ($arg :  OfficialID[]) {
      setVariableValue("namedInsuredOfficialIDs", 0, $arg)
    }
    
    property get ratingPeriods () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return getVariableValue("ratingPeriods", 0) as java.util.List<gw.lob.wc.rating.WCRatingPeriod>
    }
    
    property set ratingPeriods ($arg :  java.util.List<gw.lob.wc.rating.WCRatingPeriod>) {
      setVariableValue("ratingPeriods", 0, $arg)
    }
    
    property get wCStateGrp () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("wCStateGrp", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set wCStateGrp ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("wCStateGrp", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}