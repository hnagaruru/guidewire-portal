package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDManualPolicyLine.eti;APDManualPolicyLine.eix;APDManualPolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDManualPolicyLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDManualPolicyLineVersionList {
  public APDManualPolicyLineVersionListImpl(entity.APDManualPolicyLine base)  {
    super(base);
  }
  
  public APDManualPolicyLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDCost> APDCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.APDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.APDManualPolicyLine AsOf(java.util.Date date) {
    return (entity.APDManualPolicyLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCoverable> RiskCoverablesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDManualPolicyLine.RISKCOVERABLES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAPDCosts(entity.APDCost bean) {
    addToArray(entity.APDManualPolicyLine.APDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.APDManualPolicyLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.APDManualPolicyLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.APDManualPolicyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.APDManualPolicyLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskCoverables(entity.APDRiskCoverable bean) {
    addToArray(entity.APDManualPolicyLine.RISKCOVERABLES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDCostVersionList> getAPDCosts() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.APDCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDManualPolicyLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskCoverableVersionList> getRiskCoverables() {
    return (java.util.List)getArray(entity.APDManualPolicyLine.RISKCOVERABLES_PROP.get());
  }
  
  
}