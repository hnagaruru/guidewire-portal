package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RiskAssessmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskAssessmentPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/RiskAssessmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Link (id=detailLabel) at RiskAssessmentPanelSet.pcf: line 158, column 100
    function label_40 () : java.lang.Object {
      return (detail as gw.api.spotlight.inbound.InboundLocationDetailsData).label
    }
    
    // 'tooltip' attribute on Link (id=detailLabel) at RiskAssessmentPanelSet.pcf: line 158, column 100
    function tooltip_41 () : java.lang.String {
      return (detail as gw.api.spotlight.inbound.InboundLocationDetailsData).label
    }
    
    // 'value' attribute on TextCell (id=detailValue_Cell) at RiskAssessmentPanelSet.pcf: line 164, column 37
    function valueRoot_43 () : java.lang.Object {
      return (detail as gw.api.spotlight.inbound.InboundLocationDetailsData)
    }
    
    // 'value' attribute on TextCell (id=detailValue_Cell) at RiskAssessmentPanelSet.pcf: line 164, column 37
    function value_42 () : String {
      return (detail as gw.api.spotlight.inbound.InboundLocationDetailsData).formattedValue
    }
    
    property get detail () : gw.api.spotlight.inbound.InboundLocationDetailsData {
      return getIteratedValue(2) as gw.api.spotlight.inbound.InboundLocationDetailsData
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RiskAssessmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RiskAssessmentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=severity) at RiskAssessmentPanelSet.pcf: line 141, column 75
    function iconColor_39 () : gw.api.web.color.GWColor {
      return assessmentResult.severity.severityIcon.Second
    }
    
    // 'icon' attribute on Link (id=severity) at RiskAssessmentPanelSet.pcf: line 141, column 75
    function icon_38 () : java.lang.String {
      return assessmentResult.severity.severityIcon.First
    }
    
    // 'tooltip' attribute on Link (id=severity) at RiskAssessmentPanelSet.pcf: line 141, column 75
    function tooltip_37 () : java.lang.String {
      return assessmentResult.severity.severityCode
    }
    
    // 'value' attribute on TextCell (id=assessmentName_Cell) at RiskAssessmentPanelSet.pcf: line 131, column 35
    function valueRoot_34 () : java.lang.Object {
      return assessmentResult.assessment
    }
    
    // 'value' attribute on TextCell (id=assessmentName_Cell) at RiskAssessmentPanelSet.pcf: line 131, column 35
    function value_33 () : String {
      return assessmentResult.assessment.name
    }
    
    // 'value' attribute on RowIterator (id=detail) at RiskAssessmentPanelSet.pcf: line 150, column 99
    function value_45 () : java.util.List<gw.api.spotlight.inbound.InboundLocationDetailsData> {
      return assessmentResult.details
    }
    
    // 'visible' attribute on Link (id=severity) at RiskAssessmentPanelSet.pcf: line 141, column 75
    function visible_36 () : java.lang.Boolean {
      return assessmentResult.severity.severityCode != null
    }
    
    property get assessmentResult () : gw.api.spotlight.inbound.InboundLocationResultData {
      return getIteratedValue(1) as gw.api.spotlight.inbound.InboundLocationResultData
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RiskAssessmentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskAssessmentPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewInSpotlightLink) at RiskAssessmentPanelSet.pcf: line 71, column 175
    function action_16 () : void {
      riskAssessmentBroker.viewInSpotlight(policyLocation)
    }
    
    // 'action' attribute on Link (id=showHideRiskAssessmentDetailsButton) at RiskAssessmentPanelSet.pcf: line 110, column 40
    function action_30 () : void {
      riskAssessmentBroker.toggleShowHideRiskAssessmentDetailButton()
    }
    
    // 'available' attribute on Link (id=ViewInSpotlightLink) at RiskAssessmentPanelSet.pcf: line 71, column 175
    function available_14 () : java.lang.Boolean {
      return  true //todo if Spotlight is available
    }
    
    // 'value' attribute on CheckBoxInput (id=AcceptRejectCheckbox_Input) at RiskAssessmentPanelSet.pcf: line 36, column 65
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskAssessmentBroker.UseNewAssessmentData = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'iconColor' attribute on Link (id=LastRiskAssessmentIsStaleIcon) at RiskAssessmentPanelSet.pcf: line 62, column 152
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_WARNING
    }
    
    // 'initialValue' attribute on Variable at RiskAssessmentPanelSet.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return riskAssessmentBroker.IsRiskAssessmentStale
    }
    
    // 'initialValue' attribute on Variable at RiskAssessmentPanelSet.pcf: line 21, column 22
    function initialValue_1 () : String {
      return riskAssessmentBroker.displayFailedRiskAssessmentErrorMessages()
    }
    
    // 'label' attribute on Link (id=LastRiskAssessmentEvaluation) at RiskAssessmentPanelSet.pcf: line 51, column 179
    function label_11 () : java.lang.Object {
      return riskAssessmentBroker.RiskAssessmentResult.FormattedAssessmentDate ?: DisplayKey.get('Web.Policy.LocationContainer.Location.RiskAssessment.NoEvaluationDate')
    }
    
    // 'label' attribute on Link (id=showHideRiskAssessmentDetailsButton) at RiskAssessmentPanelSet.pcf: line 110, column 40
    function label_31 () : java.lang.Object {
      return riskAssessmentBroker.ShowHideRiskAssessmentDetailButtonLabel
    }
    
    // 'label' attribute on ContentInput at RiskAssessmentPanelSet.pcf: line 103, column 163
    function label_32 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.LocationContainer.Location.RiskAssessmentDetails.RiskProfile",riskAssessmentBroker.RiskProfileData.name)
    }
    
    // 'renderCall' attribute on TemplatePanel at RiskAssessmentPanelSet.pcf: line 26, column 233
    function renderCall_2 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      web.pcf.line.common.LocationMapFrame.render(__writer, __escaper, gw.riskassessment.SpotlightConfigParameters.createSpotlightMapURL(policyLocation, riskAssessmentBroker.Latitude, riskAssessmentBroker.Longitude))
    }
    
    // 'value' attribute on CheckBoxInput (id=AcceptRejectCheckbox_Input) at RiskAssessmentPanelSet.pcf: line 36, column 65
    function valueRoot_7 () : java.lang.Object {
      return riskAssessmentBroker
    }
    
    // 'value' attribute on TextInput (id=Latitude_Input) at RiskAssessmentPanelSet.pcf: line 77, column 45
    function value_17 () : java.math.BigDecimal {
      return riskAssessmentBroker.Latitude
    }
    
    // 'value' attribute on TextInput (id=Longitude_Input) at RiskAssessmentPanelSet.pcf: line 82, column 45
    function value_20 () : java.math.BigDecimal {
      return riskAssessmentBroker.Longitude
    }
    
    // 'value' attribute on TextInput (id=SpotlightFloodRisk_Input) at RiskAssessmentPanelSet.pcf: line 87, column 31
    function value_23 () : String {
      return riskAssessmentBroker.FloodRisk
    }
    
    // 'value' attribute on TextInput (id=SpotlightFloodScore_Input) at RiskAssessmentPanelSet.pcf: line 92, column 31
    function value_26 () : String {
      return riskAssessmentBroker.FloodScore
    }
    
    // 'value' attribute on RowIterator (id=assessmentResult) at RiskAssessmentPanelSet.pcf: line 123, column 96
    function value_46 () : java.util.List<gw.api.spotlight.inbound.InboundLocationResultData> {
      return riskAssessmentBroker.LocationResults
    }
    
    // 'value' attribute on CheckBoxInput (id=AcceptRejectCheckbox_Input) at RiskAssessmentPanelSet.pcf: line 36, column 65
    function value_5 () : java.lang.Boolean {
      return riskAssessmentBroker.UseNewAssessmentData
    }
    
    // 'visible' attribute on Link (id=LastRiskAssessmentIsStaleIcon) at RiskAssessmentPanelSet.pcf: line 62, column 152
    function visible_12 () : java.lang.Boolean {
      return riskAssessmentResultIsStale and not (riskAssessmentBroker.ViewInSpotlightClicked and riskAssessmentBroker.UseNewAssessmentData)
    }
    
    // 'visible' attribute on Link (id=ViewInSpotlightLink) at RiskAssessmentPanelSet.pcf: line 71, column 175
    function visible_15 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value and gw.api.system.PCConfigParameters.SingleLocationRiskAssessmentEnabled.Value
    }
    
    // 'visible' attribute on DetailViewPanel (id=LocationSpotlightDV) at RiskAssessmentPanelSet.pcf: line 45, column 168
    function visible_29 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.SingleLocationRiskAssessmentEnabled.Value and gw.api.system.PCConfigParameters.RiskAssessmentIntegrationEnabled.Value
    }
    
    // 'visible' attribute on PanelSet (id=TemplatePanelSet) at RiskAssessmentPanelSet.pcf: line 24, column 86
    function visible_3 () : java.lang.Boolean {
      return gw.riskassessment.SpotlightConfigParameters.shouldShowThumbnailMap()
    }
    
    // 'visible' attribute on CheckBoxInput (id=AcceptRejectCheckbox_Input) at RiskAssessmentPanelSet.pcf: line 36, column 65
    function visible_4 () : java.lang.Boolean {
      return riskAssessmentBroker.ViewInSpotlightClicked
    }
    
    // 'visible' attribute on ListViewPanel (id=RiskAssessment_LV) at RiskAssessmentPanelSet.pcf: line 117, column 69
    function visible_47 () : java.lang.Boolean {
      return riskAssessmentBroker.RiskAssessmentDetailsVisible
    }
    
    // 'visible' attribute on PanelSet (id=RiskAssessmentDetailsPanelSet) at RiskAssessmentPanelSet.pcf: line 97, column 65
    function visible_48 () : java.lang.Boolean {
      return riskAssessmentBroker.RiskAssessmentResult!=null
    }
    
    property get errorMessages () : String {
      return getVariableValue("errorMessages", 0) as String
    }
    
    property set errorMessages ($arg :  String) {
      setVariableValue("errorMessages", 0, $arg)
    }
    
    property get policyLocation () : PolicyLocation {
      return getRequireValue("policyLocation", 0) as PolicyLocation
    }
    
    property set policyLocation ($arg :  PolicyLocation) {
      setRequireValue("policyLocation", 0, $arg)
    }
    
    property get riskAssessmentBroker () : gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker {
      return getRequireValue("riskAssessmentBroker", 0) as gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker
    }
    
    property set riskAssessmentBroker ($arg :  gw.web.policylocation.riskassessment.LocationRiskAssessmentBroker) {
      setRequireValue("riskAssessmentBroker", 0, $arg)
    }
    
    property get riskAssessmentResultIsStale () : Boolean {
      return getVariableValue("riskAssessmentResultIsStale", 0) as Boolean
    }
    
    property set riskAssessmentResultIsStale ($arg :  Boolean) {
      setVariableValue("riskAssessmentResultIsStale", 0, $arg)
    }
    
    
  }
  
  
}