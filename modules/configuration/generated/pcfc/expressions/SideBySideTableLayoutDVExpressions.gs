package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideTableLayoutDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntry5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=Resolve_Input) at SideBySideTableLayoutDV.pcf: line 199, column 80
    function action_54 () : void {
      gw.lob.common.SideBySideUtil.displayIssuesToResolve(periodInfo.Validation, periodInfo.Period, jobWizHelper)
    }
    
    // 'available' attribute on ButtonInput (id=Resolve_Input) at SideBySideTableLayoutDV.pcf: line 199, column 80
    function available_53 () : java.lang.Boolean {
      return showResolveButton
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 191, column 79
    function colspan_47 () : java.lang.Integer {
      return showResolveButton ? maxColsInPeriod - 1 : maxColsInPeriod
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 182, column 27
    function initialValue_46 () : boolean {
      return gw.lob.common.SideBySideUtil.shouldShowResolveButton(periodInfo)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 191, column 79
    function tdClass_48 () : java.lang.String {
      return "pc-sxs-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    // 'value' attribute on TextInput (id=Errors_Input) at SideBySideTableLayoutDV.pcf: line 188, column 40
    function valueRoot_50 () : java.lang.Object {
      return periodInfo
    }
    
    // 'value' attribute on TextInput (id=Errors_Input) at SideBySideTableLayoutDV.pcf: line 188, column 40
    function value_49 () : java.lang.String {
      return periodInfo.ErrorText
    }
    
    property get showResolveButton () : boolean {
      return getVariableValue("showResolveButton", 2) as java.lang.Boolean
    }
    
    property set showResolveButton ($arg :  boolean) {
      setVariableValue("showResolveButton", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry10ExpressionsImpl extends IteratorEntry9ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 284, column 105
    function colspan_129 () : java.lang.Integer {
      return maxColsInPeriod - 2
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_100 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_102 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_104 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_106 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_108 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_110 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_112 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_114 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_116 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_118 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_120 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_122 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_124 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_onEnter_126 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_101 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_103 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_105 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_107 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_109 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_111 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_113 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_115 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_117 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_119 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_121 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_123 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_125 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function def_refreshVariables_127 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, false)
    }
    
    // 'mode' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 276, column 70
    function mode_128 () : java.lang.Object {
      return lineCovTermInfo?.getPostOnChangeMode(lineCovSet)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 284, column 105
    function tdClass_130 () : java.lang.String {
      return "pc-sxs-col-" + (lineCovTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    property get lineCovTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getIteratedValue(3) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry11ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 306, column 85
    function colspan_134 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 306, column 85
    function tdClass_135 () : java.lang.String {
      return "pc-sxs-section-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry12ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InputIterator (id=vehicleLabelsId) at SideBySideTableLayoutDV.pcf: line 324, column 79
    function value_142 () : gw.util.Pair<java.lang.Integer, java.lang.String>[] {
      return vehicleSet.VehicleIndexAndLabels
    }
    
    // 'value' attribute on InputIterator (id=vehLevelCoverages) at SideBySideTableLayoutDV.pcf: line 340, column 56
    function value_216 () : gw.job.sxs.SideBySideCoverageSet[] {
      return vehicleSet.VehicleCovSets
    }
    
    property get vehicleSet () : gw.job.sxs.SideBySideVehicleSet {
      return getIteratedValue(1) as gw.job.sxs.SideBySideVehicleSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry13ExpressionsImpl extends IteratorEntry12ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 333, column 78
    function colspan_137 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 333, column 78
    function tdClass_138 () : java.lang.String {
      return "pc-sxs-col-" + (vehIndexedLabel.First % 2)
    }
    
    // 'value' attribute on TextInput (id=vehicleLabel_Input) at SideBySideTableLayoutDV.pcf: line 330, column 42
    function valueRoot_140 () : java.lang.Object {
      return vehIndexedLabel
    }
    
    // 'value' attribute on TextInput (id=vehicleLabel_Input) at SideBySideTableLayoutDV.pcf: line 330, column 42
    function value_139 () : java.lang.String {
      return vehIndexedLabel.Second
    }
    
    property get vehIndexedLabel () : gw.util.Pair<java.lang.Integer, java.lang.String> {
      return getIteratedValue(2) as gw.util.Pair<java.lang.Integer, java.lang.String>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry14ExpressionsImpl extends IteratorEntry12ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=vehLevelCoverageLabelId_Input) at SideBySideTableLayoutDV.pcf: line 344, column 54
    function valueRoot_144 () : java.lang.Object {
      return vehCovSet.InitialRow
    }
    
    // 'value' attribute on TextInput (id=vehLevelCoverageLabelId_Input) at SideBySideTableLayoutDV.pcf: line 344, column 54
    function value_143 () : java.lang.String {
      return vehCovSet.InitialRow.CoverageLabel
    }
    
    // 'value' attribute on InputIterator (id=vehCovRow) at SideBySideTableLayoutDV.pcf: line 352, column 58
    function value_179 () : gw.job.sxs.SideBySideCovTermInfo[] {
      return vehCovSet.InitialRow.CovTermInfos
    }
    
    // 'value' attribute on InputIterator (id=vehCovTermRow) at SideBySideTableLayoutDV.pcf: line 371, column 58
    function value_215 () : gw.job.sxs.SideBySideCoverageRow[] {
      return vehCovSet.AdditionalCovTermRows
    }
    
    property get vehCovSet () : gw.job.sxs.SideBySideCoverageSet {
      return getIteratedValue(2) as gw.job.sxs.SideBySideCoverageSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry15ExpressionsImpl extends IteratorEntry14ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 364, column 104
    function colspan_175 () : java.lang.Integer {
      return maxColsInPeriod - 2
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_146 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_148 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_150 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_152 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_154 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_156 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_158 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_160 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_162 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_164 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_166 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_168 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_170 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_onEnter_172 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.onEnter(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_147 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_149 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_151 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_153 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_155 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_157 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_159 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_161 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_163 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_165 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_167 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_169 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_171 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function def_refreshVariables_173 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.refreshVariables(vehCovTermInfo, covTermColWidth, true)
    }
    
    // 'mode' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 356, column 68
    function mode_174 () : java.lang.Object {
      return vehCovTermInfo?.getPostOnChangeMode(vehCovSet)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 364, column 104
    function tdClass_176 () : java.lang.String {
      return "pc-sxs-col-" + (vehCovTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostForCoverage_Input) at SideBySideTableLayoutDV.pcf: line 361, column 115
    function value_177 () : gw.pl.currency.MonetaryAmount {
      return vehCovTermInfo.CovInfo.IsCostVisible ? vehCovTermInfo.CovInfo.Cost.ActualAmountBilling : null
    }
    
    property get vehCovTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getIteratedValue(3) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry16ExpressionsImpl extends IteratorEntry14ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=CovTermLabelId_Input) at SideBySideTableLayoutDV.pcf: line 375, column 46
    function valueRoot_181 () : java.lang.Object {
      return covTermRow
    }
    
    // 'value' attribute on TextInput (id=CovTermLabelId_Input) at SideBySideTableLayoutDV.pcf: line 375, column 46
    function value_180 () : java.lang.String {
      return covTermRow.CoverageLabel
    }
    
    // 'value' attribute on InputIterator (id=lineCovTermRow) at SideBySideTableLayoutDV.pcf: line 383, column 60
    function value_214 () : gw.job.sxs.SideBySideCovTermInfo[] {
      return covTermRow.CovTermInfos
    }
    
    property get covTermRow () : gw.job.sxs.SideBySideCoverageRow {
      return getIteratedValue(3) as gw.job.sxs.SideBySideCoverageRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry17ExpressionsImpl extends IteratorEntry16ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 395, column 107
    function colspan_212 () : java.lang.Integer {
      return maxColsInPeriod - 2
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_183 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_185 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_187 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_189 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_191 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_193 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_195 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_197 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_199 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_201 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_203 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_205 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_207 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_onEnter_209 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_184 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_186 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_188 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_190 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_192 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_194 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_196 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_198 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_200 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_202 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_204 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_206 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_208 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function def_refreshVariables_210 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, !vehCovSet.AdditionalCovTermRows.contains(covTermRow))
    }
    
    // 'mode' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 387, column 71
    function mode_211 () : java.lang.Object {
      return lineCovTermInfo?.getPostOnChangeMode(vehCovSet)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 395, column 107
    function tdClass_213 () : java.lang.String {
      return "pc-sxs-col-" + (lineCovTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    property get lineCovTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getIteratedValue(4) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=ForceSync_Input) at SideBySideTableLayoutDV.pcf: line 93, column 74
    function action_29 () : void {
      periodInfo.Period.editIfRatedOrQuotedAndForceSync(); jobWizHelper.Wizard.refreshCurrentStep();
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 82, column 77
    function colspan_15 () : java.lang.Integer {
      return maxColsInPeriod - 1
    }
    
    // 'value' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      periodInfo.Period.Offering = (__VALUE_TO_SET as gw.api.productmodel.Offering)
    }
    
    // 'editable' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function editable_18 () : java.lang.Boolean {
      return periodInfo.SxSEditable
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideTableLayoutDV.pcf: line 84, column 101
    function onChange_17 () : void {
      gw.lob.common.SideBySideUtil.syncCoveragesAndRefresh(periodInfo,jobWizHelper)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 82, column 77
    function tdClass_16 () : java.lang.String {
      return "pc-sxs-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    // 'valueRange' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function valueRange_22 () : java.lang.Object {
      return periodInfo.Period.Policy.Product.Offerings.where(\ off ->off.isOfferingAvailable(periodInfo.Period))
    }
    
    // 'value' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function valueRoot_21 () : java.lang.Object {
      return periodInfo.Period
    }
    
    // 'value' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function value_19 () : gw.api.productmodel.Offering {
      return periodInfo.Period.Offering
    }
    
    // 'valueRange' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.productmodel.Offering[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PickOffering_Input) at SideBySideTableLayoutDV.pcf: line 79, column 50
    function verifyValueRange_24 () : void {
      var __valueRangeArg = periodInfo.Period.Policy.Product.Offerings.where(\ off ->off.isOfferingAvailable(periodInfo.Period))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 117, column 77
    function colspan_32 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 117, column 77
    function tdClass_33 () : java.lang.String {
      return "pc-sxs-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PremiumValue_Input) at SideBySideTableLayoutDV.pcf: line 114, column 87
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return periodInfo.PremiumsVisible ? periodInfo.Period.TotalPremiumRPT : null
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SelectButtonId) at SideBySideTableLayoutDV.pcf: line 142, column 36
    function action_39 () : void {
      gw.lob.common.SideBySideUtil.returnToSelectedPeriod(periodInfo.Period, jobWizHelper)
    }
    
    // 'action' attribute on Link (id=DetailsButtonId) at SideBySideTableLayoutDV.pcf: line 148, column 87
    function action_40 () : void {
      gw.lob.common.SideBySideUtil.goToPeriod(periodInfo.Period, jobWizHelper)
    }
    
    // 'action' attribute on Link (id=DuplicateButtonId) at SideBySideTableLayoutDV.pcf: line 156, column 81
    function action_42 () : void {
      gw.lob.common.SideBySideUtil.duplicateVersion(periodInfo.Period, wizard, jobWizHelper)
    }
    
    // 'action' attribute on Link (id=RemoveButtonId) at SideBySideTableLayoutDV.pcf: line 163, column 82
    function action_44 () : void {
      gw.lob.common.SideBySideUtil.withdrawSelectedPeriod(periodInfo, jobWizHelper)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 137, column 96
    function colspan_37 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'confirmMessage' attribute on Link (id=DuplicateButtonId) at SideBySideTableLayoutDV.pcf: line 156, column 81
    function confirmMessage_43 () : java.lang.String {
      return DisplayKey.get("Web.Job.SideBySide.DuplicatePeriod.ConfirmationMsg", periodInfo.Period.BranchName)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 137, column 96
    function tdClass_38 () : java.lang.String {
      return "pc-sxs-action-cell pc-sxs-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    // 'visible' attribute on Link (id=DuplicateButtonId) at SideBySideTableLayoutDV.pcf: line 156, column 81
    function visible_41 () : java.lang.Boolean {
      return not periodInfo.Period.Job.hasMaxNumberOfSideBySideQuotes()
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 221, column 85
    function colspan_57 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 221, column 85
    function tdClass_58 () : java.lang.String {
      return "pc-sxs-section-col-" + (periodInfo.ColumnIndex % 2)
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=lineLevelCoverageLabelId_Input) at SideBySideTableLayoutDV.pcf: line 233, column 53
    function valueRoot_61 () : java.lang.Object {
      return lineCovSet.InitialRow
    }
    
    // 'value' attribute on InputIterator (id=lineCovTermRow) at SideBySideTableLayoutDV.pcf: line 260, column 56
    function value_132 () : gw.job.sxs.SideBySideCoverageRow[] {
      return lineCovSet.AdditionalCovTermRows
    }
    
    // 'value' attribute on TextInput (id=lineLevelCoverageLabelId_Input) at SideBySideTableLayoutDV.pcf: line 233, column 53
    function value_60 () : java.lang.String {
      return lineCovSet.InitialRow.CoverageLabel
    }
    
    // 'value' attribute on InputIterator (id=lineCovRow) at SideBySideTableLayoutDV.pcf: line 241, column 56
    function value_96 () : gw.job.sxs.SideBySideCovTermInfo[] {
      return lineCovSet.InitialRow.CovTermInfos
    }
    
    property get lineCovSet () : gw.job.sxs.SideBySideCoverageSet {
      return getIteratedValue(1) as gw.job.sxs.SideBySideCoverageSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry8ExpressionsImpl extends IteratorEntry7ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 253, column 103
    function colspan_92 () : java.lang.Integer {
      return maxColsInPeriod - 2
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_63 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_65 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_67 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_69 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_71 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_73 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_75 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_77 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_79 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_81 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_83 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_85 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_87 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_onEnter_89 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.onEnter(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_64 (def :  pcf.SideBySideCovTermInputSet_Direct) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_66 (def :  pcf.SideBySideCovTermInputSet_Direct_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_68 (def :  pcf.SideBySideCovTermInputSet_bit) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_70 (def :  pcf.SideBySideCovTermInputSet_bit_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_72 (def :  pcf.SideBySideCovTermInputSet_datetime) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_74 (def :  pcf.SideBySideCovTermInputSet_datetime_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_76 (def :  pcf.SideBySideCovTermInputSet_default) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_78 (def :  pcf.SideBySideCovTermInputSet_default_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_80 (def :  pcf.SideBySideCovTermInputSet_range) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_82 (def :  pcf.SideBySideCovTermInputSet_range_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_84 (def :  pcf.SideBySideCovTermInputSet_range_required) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_86 (def :  pcf.SideBySideCovTermInputSet_range_required_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_88 (def :  pcf.SideBySideCovTermInputSet_shorttext) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'def' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function def_refreshVariables_90 (def :  pcf.SideBySideCovTermInputSet_shorttext_notarget) : void {
      def.refreshVariables(lineCovTermInfo, covTermColWidth, true)
    }
    
    // 'mode' attribute on InputSetRef (id=targetedCovTermId) at SideBySideTableLayoutDV.pcf: line 245, column 68
    function mode_91 () : java.lang.Object {
      return lineCovTermInfo?.getPostOnChangeMode(lineCovSet)
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 253, column 103
    function tdClass_93 () : java.lang.String {
      return "pc-sxs-col-" + (lineCovTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostForCoverage_Input) at SideBySideTableLayoutDV.pcf: line 250, column 100
    function value_94 () : gw.pl.currency.MonetaryAmount {
      return lineCovTermInfo.CovInfo.IsCostVisible ? lineCovTermInfo.CovInfo.TotalCost : null
    }
    
    property get lineCovTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getIteratedValue(2) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry9ExpressionsImpl extends IteratorEntry7ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=CovTermLabelId_Input) at SideBySideTableLayoutDV.pcf: line 264, column 44
    function valueRoot_98 () : java.lang.Object {
      return covTermRow
    }
    
    // 'value' attribute on InputIterator (id=lineCovTermRow) at SideBySideTableLayoutDV.pcf: line 272, column 58
    function value_131 () : gw.job.sxs.SideBySideCovTermInfo[] {
      return covTermRow.CovTermInfos
    }
    
    // 'value' attribute on TextInput (id=CovTermLabelId_Input) at SideBySideTableLayoutDV.pcf: line 264, column 44
    function value_97 () : java.lang.String {
      return covTermRow.CoverageLabel
    }
    
    property get covTermRow () : gw.job.sxs.SideBySideCoverageRow {
      return getIteratedValue(2) as gw.job.sxs.SideBySideCoverageRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SideBySideTableLayoutDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 58, column 113
    function colspan_6 () : java.lang.Integer {
      return maxColsInPeriod
    }
    
    // 'value' attribute on TextInput (id=BranchName_Input) at SideBySideTableLayoutDV.pcf: line 55, column 46
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      periodInfo.Period.BranchName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=BranchName_Input) at SideBySideTableLayoutDV.pcf: line 55, column 46
    function editable_8 () : java.lang.Boolean {
      return periodInfo.SxSEditable
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideTableLayoutDV.pcf: line 58, column 113
    function tdClass_7 () : java.lang.String {
      return "pc-sxs-col-" + (periodInfo.ColumnIndex % 2) + " pc-sxs-name-col-cell"
    }
    
    // 'value' attribute on TextInput (id=BranchName_Input) at SideBySideTableLayoutDV.pcf: line 55, column 46
    function valueRoot_11 () : java.lang.Object {
      return periodInfo.Period
    }
    
    // 'value' attribute on TextInput (id=BranchName_Input) at SideBySideTableLayoutDV.pcf: line 55, column 46
    function value_9 () : java.lang.String {
      return periodInfo.Period.BranchName
    }
    
    property get periodInfo () : gw.job.sxs.SideBySidePolicyPeriodInfo {
      return getIteratedValue(1) as gw.job.sxs.SideBySidePolicyPeriodInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/sidebyside/SideBySideTableLayoutDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideTableLayoutDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'columns' attribute on Layout at SideBySideTableLayoutDV.pcf: line 38, column 21
    function columns_5 () : java.lang.Double {
      return columnNumber
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 16, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 20, column 19
    function initialValue_1 () : int {
      return 3
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 24, column 19
    function initialValue_2 () : int {
      return 1
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 29, column 19
    function initialValue_3 () : int {
      return 1 + (maxColsInPeriod * sideHelper.PeriodInfos.Count)
    }
    
    // 'initialValue' attribute on Variable at SideBySideTableLayoutDV.pcf: line 34, column 50
    function initialValue_4 () : gw.job.sxs.SideBySideCoverageSet[] {
      return sideHelper.LineCoverageSets
    }
    
    // 'value' attribute on InputIterator (id=BranchNames) at SideBySideTableLayoutDV.pcf: line 49, column 59
    function value_14 () : gw.job.sxs.SideBySidePolicyPeriodInfo[] {
      return sideHelper.PeriodInfos
    }
    
    // 'value' attribute on InputIterator (id=vehicleSetsId) at SideBySideTableLayoutDV.pcf: line 313, column 53
    function value_217 () : gw.job.sxs.SideBySideVehicleSet[] {
      return sideHelper.PAVehicleSets
    }
    
    property get columnNumber () : int {
      return getVariableValue("columnNumber", 0) as java.lang.Integer
    }
    
    property set columnNumber ($arg :  int) {
      setVariableValue("columnNumber", 0, $arg)
    }
    
    property get covTermColWidth () : int {
      return getVariableValue("covTermColWidth", 0) as java.lang.Integer
    }
    
    property set covTermColWidth ($arg :  int) {
      setVariableValue("covTermColWidth", 0, $arg)
    }
    
    property get jobWizHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizHelper", 0, $arg)
    }
    
    property get lineCoverageSets () : gw.job.sxs.SideBySideCoverageSet[] {
      return getVariableValue("lineCoverageSets", 0) as gw.job.sxs.SideBySideCoverageSet[]
    }
    
    property set lineCoverageSets ($arg :  gw.job.sxs.SideBySideCoverageSet[]) {
      setVariableValue("lineCoverageSets", 0, $arg)
    }
    
    property get maxColsInPeriod () : int {
      return getVariableValue("maxColsInPeriod", 0) as java.lang.Integer
    }
    
    property set maxColsInPeriod ($arg :  int) {
      setVariableValue("maxColsInPeriod", 0, $arg)
    }
    
    property get sideHelper () : gw.pcf.sidebyside.SideBySideScreenHelper {
      return getRequireValue("sideHelper", 0) as gw.pcf.sidebyside.SideBySideScreenHelper
    }
    
    property set sideHelper ($arg :  gw.pcf.sidebyside.SideBySideScreenHelper) {
      setRequireValue("sideHelper", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}