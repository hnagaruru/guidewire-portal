package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityLine.eti;GeneralLiabilityLine.eix;GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GeneralLiabilityLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GeneralLiabilityLineVersionList {
  public GeneralLiabilityLineVersionListImpl(entity.GeneralLiabilityLine base)  {
    super(base);
  }
  
  public GeneralLiabilityLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.GeneralLiabilityLine AsOf(java.util.Date date) {
    return (entity.GeneralLiabilityLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLExposure> ExposuresAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.EXPOSURES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCost> GLCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.GLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityCond> GLLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.GLLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityCov> GLLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.GLLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityExcl> GLLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.GLLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLModifier> GLModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.GLMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GeneralLiabilityLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExposures(entity.GLExposure bean) {
    addToArray(entity.GeneralLiabilityLine.EXPOSURES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLCosts(entity.GLCost bean) {
    addToArray(entity.GeneralLiabilityLine.GLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLLineConditions(entity.GeneralLiabilityCond bean) {
    addToArray(entity.GeneralLiabilityLine.GLLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLLineCoverages(entity.GeneralLiabilityCov bean) {
    addToArray(entity.GeneralLiabilityLine.GLLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLLineExclusions(entity.GeneralLiabilityExcl bean) {
    addToArray(entity.GeneralLiabilityLine.GLLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLModifiers(entity.GLModifier bean) {
    addToArray(entity.GeneralLiabilityLine.GLMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.GeneralLiabilityLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GeneralLiabilityLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLExposureVersionList> getExposures() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.EXPOSURES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLCostVersionList> getGLCosts() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.GLCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GeneralLiabilityCondVersionList> getGLLineConditions() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.GLLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GeneralLiabilityCovVersionList> getGLLineCoverages() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.GLLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GeneralLiabilityExclVersionList> getGLLineExclusions() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.GLLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLModifierVersionList> getGLModifiers() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.GLMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.GeneralLiabilityLine.LINEANSWERS_PROP.get());
  }
  
  
}